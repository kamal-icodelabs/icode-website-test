import {
  CarouselCardContainer,
  FadeDownCardImg,
  ImgFlexWrapper,
  NoMarginCardImg,
} from "@/component/CasestudyComponents/CaseStudyAnimatedCards/CaseStudyAnimatedCards";
import CaseStudyTemplate from "@/component/CasestudyComponents/CaseStudyTemplate";
import ContentWidth from "@/component/ContentWidth/ContentWidth";
import * as data from "@/data/casestudy/handyman";
const CARD_BG = "#8B2B24";
const THEME_COLOR = "#F16319";

function HandymanProductGallery() {
  return (
    <>
      <ImgFlexWrapper>
        {data?.productGallery?.map((i) => (
          <NoMarginCardImg img={i} sectionPadding={false} />
        ))}
      </ImgFlexWrapper>
    </>
  );
}

function GalleryOne() {
  return (
    <>
      <ContentWidth className="sectionPadding">
        <ImgFlexWrapper>
          <CarouselCardContainer
            imgs={[
              "/assests/img/casestudy/handyman/Listing Details (1).webp",
              "/assests/img/casestudy/handyman/Listing Details.webp",
              "/assests/img/casestudy/handyman/Listing Details (2).webp",
              // repeat
              "/assests/img/casestudy/handyman/Listing Details (1).webp",
              "/assests/img/casestudy/handyman/Listing Details.webp",
              "/assests/img/casestudy/handyman/Listing Details (2).webp",
            ]}
            bgColor={CARD_BG}
            sectionPadding={false}
          />

          {data?.galleryOne?.map((i) => (
            <FadeDownCardImg
              img={i}
              bgColor={CARD_BG}
              sectionPadding={false}
              topPadding={true}
            />
          ))}

          <NoMarginCardImg
            sectionPadding={false}
            img={"/assests/img/casestudy/handyman/Frame 1984083922.webp"}
          />
        </ImgFlexWrapper>
      </ContentWidth>
    </>
  );
}

function GalleryTwo() {
  return (
    <>
      <ContentWidth className="sectionPadding">
        <ImgFlexWrapper>
          {data?.galleryTwo?.map((i) => (
            <FadeDownCardImg
              img={i}
              bgColor={CARD_BG}
              sectionPadding={false}
              topPadding={true}
            />
          ))}

          <NoMarginCardImg
            img={"/assests/img/casestudy/handyman/Frame 1984083924.webp"}
            sectionPadding={false}
          />
        </ImgFlexWrapper>
      </ContentWidth>
    </>
  );
}

export default function Page() {
  return (
    <CaseStudyTemplate
      slug="handyman"
      data={data}
      options={{
        themeColor: CARD_BG,
        whatWeBuildBulletColor: THEME_COLOR,
        whatWeBuildNumberColor: "#fff",
        technicalHighlightBulletColor: THEME_COLOR,
        heroXyPadding: true,
      }}
      slots={{
        insideGallery: <HandymanProductGallery />,
        afterWhatWeBuild: <GalleryOne />,
        afterTechnicalHighlight: <GalleryTwo />,
      }}
    />
  );
}
