import { notFound } from "next/navigation";
import BlogDetailClient from "@/component/BlogDetailClient/BlogDetailClient";

// Reduce revalidation time for better performance
export const revalidate = 900; // 15 minutes instead of 30 minutes

const BASE_URL = "https://icodelabs.co";

// Article Type values considered off-topic for our core marketplace/Sharetribe focus.
// Posts with these Types get noindex (except for high-traffic exceptions below).
const offTopicTypes = [];

// Specific slugs that get traffic/clicks today and must remain indexed
// even if their Type is in offTopicTypes.
const keepIndexedSlugs = ["top-15-local-databases-for-react-native-app-development",
    "web-development-companies-in--mohali",
    "cost-to-build-auction-app-and-website",];

const noIndexSlugs = [
    "mobile-app-development-company-in-denmark",
    "hire-the-best-mobile-app-developers-in-denmark",
    "software-development-company-in-denmark",
    "mobile-app-development-company-in-sweden",
    "web-development-company-in-las-vegas",
    "react-native-app-development-company-las-vegas",
];

// Article Type → commercial service page (for internal-link CTA injection).
const relatedPageMap = {
    "Sharetribe Development": "/services/sharetribe",
    "Marketplace Development": "/services/sharetribe",
    "App Development": "/services/mobile-app-development",
    "Web Development": "/services/web-development-company",
};

const DEFAULT_RELATED_PAGE = "/services/sharetribe";

// Pre-render every article at build time so next-sitemap discovers each /blog/<slug>
// URL and the pages ship as static HTML. ISR (revalidate above) keeps them fresh.
export async function generateStaticParams() {
    try {
        const res = await fetch(
            "https://api.icodestaging.in/api/articles?fields[0]=Slug&pagination[pageSize]=200",
            { next: { revalidate: 900 } }
        );
        if (!res.ok) return [];
        const json = await res.json();
        return (json?.data || [])
            .map((a) => a?.attributes?.Slug)
            .filter(Boolean)
            .map((slug) => ({ slug }));
    } catch (err) {
        console.error("[blog/[slug]] generateStaticParams failed:", err.message);
        return [];
    }
}

// Optimize API fetch with shared logic
const fetchWithConfig = async (url, options = {}) => {
    const response = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            // Authorization: `Bearer ${process.env.API_TOKEN}`, // Uncomment if needed
        },
        next: { revalidate: 900 }, // Cache for 15 minutes
        ...options,
    });
    if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Failed to fetch data: ${response.status} ${errorText}`);
    }
    return response.json();
};

// Generate dynamic metadata
export async function generateMetadata({ params }) {
    try {
        if (!params?.slug) {
            throw new Error("Missing blog slug");
        }

        // Fetch by slug using Strapi filters
        const response = await fetchWithConfig(
            `https://api.icodestaging.in/api/articles?filters[Slug][$eq]=${params.slug}&populate=*`
        );

        const blog = response?.data?.[0];

        if (!blog?.attributes) {
            return {
                title: "Blog Not Found | iCodelabs",
                description: "The requested blog post could not be found.",
                alternates: { canonical: `${BASE_URL}/blog` },
            };
        }

        const a = blog.attributes;
        const imageAttr = a?.Image?.data?.[0]?.attributes;
        const imageUrl = imageAttr?.url || `${BASE_URL}/assests/img/about-us-cover.jpg`;
        const imageWidth = imageAttr?.width || 1200;
        const imageHeight = imageAttr?.height || 630;

        const slug = a?.Slug || params?.slug;
        const canonicalPath = `/blog/${slug}`;
        const canonicalAbs = `${BASE_URL}${canonicalPath}`;

        // Prefer MetaTitle/Metadescription/Keywords if present
        const rawTitle = a?.MetaTitle || a?.Title || "Blog Post";
        const rawDesc =
            a?.Metadescription || a?.metaDescription || a?.Content?.slice(0, 160) || "";

        // Ensure title ends with brand (case-insensitive to catch "ICodeLabs" variants)
        const title = rawTitle.toLowerCase().includes("icodelabs")
            ? rawTitle
            : `${rawTitle} | iCodelabs`;

        // If description is too short, append a conversion hook so SERP snippets aren't bare
        const description =
            rawDesc.length >= 120
                ? rawDesc
                : `${rawDesc} — Published by iCodelabs, Sharetribe Vetted Expert Partner with 50+ marketplace builds.`;

        const rawKeywords = a?.Keywords || a?.metaKeywords;
        const keywords = Array.isArray(rawKeywords)
            ? rawKeywords
            : (rawKeywords || "")
                .split(/[\n,]+/)
                .map((s) => s.trim())
                .filter(Boolean);

        // Noindex off-topic posts unless the slug is on the keep-indexed allowlist.
        // We still set follow: true to pass link equity from off-topic posts.
        const articleType = a?.Type;
        const shouldNoIndex =
           (offTopicTypes.includes(articleType) && !keepIndexedSlugs.includes(params.slug))
    || noIndexSlugs.includes(params.slug);

        const robots = shouldNoIndex
            ? { index: false, follow: true }
            : {
                index: true,
                follow: true,
                googleBot: {
                    index: true,
                    follow: true,
                    maxSnippet: -1,
                    maxImagePreview: "large",
                    maxVideoPreview: -1,
                },
            };

        return {
            title,
            description,
            keywords: keywords.length ? keywords : undefined,
            alternates: { canonical: canonicalAbs },
            openGraph: {
                title,
                description,
                type: "article",
                url: canonicalAbs,
                siteName: "iCodelabs",
                images: [
                    {
                        url: imageUrl,
                        width: imageWidth,
                        height: imageHeight,
                        alt: title,
                    },
                ],
            },
            twitter: {
                card: "summary_large_image",
                title,
                description,
                images: [imageUrl],
                site: "@icodelabs",
                creator: "@icodelabs",
            },
            robots,
        };
    } catch (error) {
        console.error("Error generating metadata:", error.message);
        return {
            title: "Blog Not Found | iCodelabs",
            description: "The requested blog post could not be found.",
            alternates: { canonical: `${BASE_URL}/blog` },
        };
    }
}

export default async function BlogDetails({ params }) {
    try {
        if (!params?.slug) {
            throw new Error("Missing blog slug");
        }
        // Fetch single blog post by slug and a pool of recent blogs concurrently.
        // We over-fetch the pool so we can client-filter to same-Type "related" articles
        // and still have a fallback to most-recent if the pool is thin.
        const [singleBlogResponse, recentBlogsResponse] = await Promise.all([
            fetchWithConfig(`https://api.icodestaging.in/api/articles?filters[Slug][$eq]=${params.slug}&populate=*`),
            fetchWithConfig(`https://api.icodestaging.in/api/articles?populate=*&pagination[pageSize]=20&sort[0]=publishedAt:desc`),
        ]);

        const singleBlog = singleBlogResponse?.data?.[0];
        if (!singleBlog?.attributes) {
            notFound();
        }
        const currentType = singleBlog?.attributes?.Type;
        const currentId = singleBlog?.id;

        const recentPool = (recentBlogsResponse?.data || []).filter((a) => a.id !== currentId);
        const sameType = currentType
            ? recentPool.filter((a) => a.attributes?.Type === currentType)
            : [];
        const relatedBlogs = (sameType.length >= 3 ? sameType : recentPool).slice(0, 6);

        const blogAttr = singleBlog?.attributes || {};
        const imageAttr = blogAttr?.Image?.data?.[0]?.attributes;
        const imageUrl = imageAttr?.url || `${BASE_URL}/assests/img/about-us-cover.jpg`;
        const title = blogAttr?.MetaTitle || blogAttr?.Title || "Blog Post | iCodelabs";
        const description =
            blogAttr?.Metadescription || blogAttr?.metaDescription ||
            blogAttr?.Content?.slice(0, 160) || undefined;

        const slug = blogAttr?.Slug || params?.slug;
        const canonicalPath = `/blog/${slug}`;
        const canonicalAbs = `${BASE_URL}${canonicalPath}`;

        const wordCount = blogAttr?.Content
            ? String(blogAttr.Content).trim().split(/\s+/).length
            : undefined;
        const rawKeywords = blogAttr?.Keywords || blogAttr?.metaKeywords;
        const keywords = Array.isArray(rawKeywords)
            ? rawKeywords.join(", ")
            : (typeof rawKeywords === "string" && rawKeywords.trim()) || undefined;
        const logoUrl =
            "https://res.cloudinary.com/dwpvv68ii/image/upload/v1759140505/Group_1410089110_2_paglw7.png";

        return (
            <>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify([
                            {
                                "@context": "https://schema.org",
                                "@type": "Article",
                                headline: title,
                                description: description,
                                image: [imageUrl],
                                datePublished: blogAttr?.publishedAt || blogAttr?.createdAt || undefined,
                                dateModified: blogAttr?.updatedAt || undefined,
                                inLanguage: "en-US",
                                ...(wordCount ? { wordCount } : {}),
                                ...(keywords ? { keywords } : {}),
                                author: blogAttr?.Author
                                    ? [{ "@type": "Person", name: blogAttr.Author }]
                                    : { "@type": "Organization", name: "iCodelabs" },
                                publisher: {
                                    "@type": "Organization",
                                    name: "iCodelabs",
                                    logo: {
                                        "@type": "ImageObject",
                                        url: logoUrl,
                                    },
                                },
                                mainEntityOfPage: {
                                    "@type": "WebPage",
                                    "@id": canonicalAbs,
                                },
                            },
                            {
                                "@context": "https://schema.org",
                                "@type": "BreadcrumbList",
                                itemListElement: [
                                    { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
                                    { "@type": "ListItem", position: 2, name: "Blog", item: `${BASE_URL}/blog` },
                                    { "@type": "ListItem", position: 3, name: blogAttr?.Title || title, item: canonicalAbs },
                                ],
                            },
                        ]),
                    }}
                />
                <BlogDetailClient
                    blogData={singleBlog || null}
                    recentBlogs={relatedBlogs}
                    relatedPage={relatedPageMap[currentType] || DEFAULT_RELATED_PAGE}
                    params={params}
                />
            </>
        );
    } catch (error) {
        if (error?.digest?.startsWith("NEXT_")) {
            throw error;
        }
        console.error("Error fetching blog data:", error.message);
        return (
            <BlogDetailClient
                blogData={null}
                recentBlogs={[]}
                relatedPage={DEFAULT_RELATED_PAGE}
                params={params}
            />
        );
    }
}
