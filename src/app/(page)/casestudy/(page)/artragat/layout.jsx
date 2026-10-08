import { heroData, caseStudyData } from "@/data/casestudy/artragat";
import { buildCaseStudyMetadata, caseStudyJsonLd } from "@/component/CasestudyComponents/buildCaseStudyLayout";

const SLUG = "artragat";

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
