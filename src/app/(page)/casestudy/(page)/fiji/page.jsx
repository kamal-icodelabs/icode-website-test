import CaseStudyTemplate from "@/component/CasestudyComponents/CaseStudyTemplate";
import * as data from "@/data/casestudy/fiji";
import {
  ImgFlexWrapper,
  NoMarginCardImg,
} from "@/component/CasestudyComponents/CaseStudyAnimatedCards/CaseStudyAnimatedCards";
import ContentWidth from "@/component/ContentWidth/ContentWidth";

const THEME_COLOR = "#3F1113";
const BG_COLOR = "#2A6E6A";

function FijiGalleryLayout() {
  return (
    <div>
      <ContentWidth className="">
        <ImgFlexWrapper>
          {data?.fijiGallaryOne.map((i) => (
            <NoMarginCardImg img={i} sectionPadding={false} />
          ))}
        </ImgFlexWrapper>
      </ContentWidth>
    </div>
  );
}

function FijiGalleryOne() {
  return (
    <>
      <ContentWidth className="sectionPadding">
        <ImgFlexWrapper>
          {data?.galleryOne.map((i) => (
            <NoMarginCardImg img={i} sectionPadding={false} />
          ))}
        </ImgFlexWrapper>
      </ContentWidth>
    </>
  );
}

function FijiGalleryTwo() {
  return (
    <>
      <ContentWidth className="sectionPadding">
        <ImgFlexWrapper>
          {data?.galleryTwo.map((i) => (
            <NoMarginCardImg img={i} sectionPadding={false} />
          ))}
        </ImgFlexWrapper>
      </ContentWidth>
    </>
  );
}

export default function Page() {
  return (
    <CaseStudyTemplate
      slug="fiji"
      data={data}
      options={{
        themeColor: THEME_COLOR,
        bgColor: BG_COLOR,
        whatWeBuildBulletColor: THEME_COLOR,
        technicalHighlightBulletColor: THEME_COLOR,
        heroXyPadding: true,
      }}
      slots={{
        insideGallery: <FijiGalleryLayout />,
        afterWhatWeBuild: <FijiGalleryOne />,
        afterTechnicalHighlight: <FijiGalleryTwo />,
      }}
    />
  );
}
