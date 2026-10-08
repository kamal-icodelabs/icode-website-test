const SITE = "https://icodelabs.co";
const DEFAULT_OG_IMAGE =
  "https://res.cloudinary.com/dwpvv68ii/image/upload/f_auto,q_auto,c_fill,w_1200,h_630/v1759140505/Group_1410089110_2_paglw7.png";

function projectNameFrom(heroData, slug) {
  const label = heroData?.label || "";
  const stripped = label.replace(/^Case Study\s*-\s*/i, "").trim();
  return stripped || slug;
}

function descriptionFrom(heroData) {
  const candidate = heroData?.subtitle || heroData?.description || "";
  const cleaned = String(candidate).replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
  if (cleaned.length <= 160) return cleaned;
  return cleaned.slice(0, 157).replace(/\s+\S*$/, "") + "…";
}

function ogImageFrom(heroData) {
  const img = heroData?.heroImage;
  // Skip SVGs (social platforms reject) and filenames with spaces (commonly 403 on CDN).
  if (
    typeof img === "string" &&
    img.startsWith("/") &&
    !img.endsWith(".svg") &&
    !img.includes(" ")
  ) {
    return `${SITE}${img}`;
  }
  return DEFAULT_OG_IMAGE;
}

export function buildCaseStudyMetadata({ slug, heroData }) {
  const project = projectNameFrom(heroData, slug);
  const title = `${project} Case Study | iCodelabs`;
  const description = descriptionFrom(heroData);
  const canonical = `${SITE}/casestudy/${slug}`;
  const image = ogImageFrom(heroData);

  return {
    title,
    description,
    alternates: { canonical },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        maxSnippet: -1,
        maxImagePreview: "large",
        maxVideoPreview: -1,
      },
    },
    openGraph: {
      type: "article",
      title,
      description,
      url: canonical,
      siteName: "iCodelabs",
      images: [{ url: image, width: 1200, height: 630, alt: `${project} — case study by iCodelabs` }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export function caseStudyJsonLd({ slug, heroData, caseStudyData }) {
  const project = projectNameFrom(heroData, slug);
  const canonical = `${SITE}/casestudy/${slug}`;
  const description = descriptionFrom(heroData);
  const image = ogImageFrom(heroData);
  const externalUrl = caseStudyData?.link;

  return [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
        { "@type": "ListItem", position: 2, name: "Case Studies", item: `${SITE}/casestudy` },
        { "@type": "ListItem", position: 3, name: project, item: canonical },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      name: `${project} Case Study`,
      headline: heroData?.title || project,
      description,
      url: canonical,
      image,
      author: { "@type": "Organization", name: "iCodelabs", url: SITE },
      ...(externalUrl ? { mainEntityOfPage: { "@type": "WebPage", "@id": externalUrl } } : {}),
    },
  ];
}
