import { heroData, caseStudyData } from "@/data/casestudy/nowoffers";
import { buildCaseStudyMetadata, caseStudyJsonLd } from "@/component/CasestudyComponents/buildCaseStudyLayout";

const SLUG = "nowoffers";

export const metadata = buildCaseStudyMetadata({ slug: SLUG, heroData });

export default function Layout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(caseStudyJsonLd({ slug: SLUG, heroData, caseStudyData })),
        }}
      />
      {children}
    </>
  );
}
