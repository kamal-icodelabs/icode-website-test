import BlogContent from "./BlogContent";

export const revalidate = 900;

async function fetchArticles() {
  try {
    const res = await fetch(
      "https://api.icodestaging.in/api/articles?pagination[pageSize]=200&populate=*",
      { next: { revalidate: 900 } }
    );
    if (!res.ok) return [];
    const json = await res.json();
    return json?.data || [];
  } catch (err) {
    console.error("[blog/page] fetchArticles failed:", err.message);
    return [];
  }
}

export default async function Page() {
  const initialData = await fetchArticles();

  const articleItems = initialData
    .filter((a) => a?.attributes?.Slug && a?.attributes?.Title)
    .map((a, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `https://icodelabs.co/blog/${a.attributes.Slug}`,
      name: a.attributes.Title,
    }));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://icodelabs.co" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://icodelabs.co/blog" },
            ],
          }),
        }}
      />
      {articleItems.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              name: "iCodelabs Blog Articles",
              url: "https://icodelabs.co/blog",
              numberOfItems: articleItems.length,
              itemListElement: articleItems,
            }),
          }}
        />
      )}
      <BlogContent initialData={initialData} />
    </>
  );
}
