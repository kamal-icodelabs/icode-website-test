import {
  CarouselCardContainer,
  FadeDownCardImg,
  FadeUpCardImg,
  ImgFlexWrapper,
  NoMarginCardImg,
} from "@/component/CasestudyComponents/CaseStudyAnimatedCards/CaseStudyAnimatedCards";
import CaseStudyTemplate from "@/component/CasestudyComponents/CaseStudyTemplate";
import ContentWidth from "@/component/ContentWidth/ContentWidth";
import * as data from "@/data/casestudy/shimo";

const THEME_COLOR = "#FF6713";
const BG_COLOR = "#64696B";

function ShimoHeroGallery() {
  return (
    <>
      <ContentWidth className="bsectionPadding">
        <ImgFlexWrapper>
          <NoMarginCardImg
            img={"/assests/img/casestudy/shimo-hero.jpg"}
            sectionPadding={false}
          />
          <FadeUpCardImg
            bgColor={BG_COLOR}
            topPadding={true}
            img={"/assests/img/casestudy/shimo/Group 1686559132 (1).webp"}
            sectionPadding={false}
          />
        </ImgFlexWrapper>
      </ContentWidth>
    </>
  );
}

function ShimoProductGallery() {
  return (
    <>
      <ContentWidth className="bsectionPadding">
        <ImgFlexWrapper>
          <FadeDownCardImg
            bgColor={BG_COLOR}
            img={"/assests/img/casestudy/shimo/Frame 1984083908.webp"}
            topPadding={false}
            sectionPadding={false}
          />
          <FadeDownCardImg
            bgColor={BG_COLOR}
            img={"/assests/img/casestudy/shimo/Frame 1984083909.webp"}
            topPadding={true}
            sectionPadding={false}
          />
          <FadeDownCardImg
            bgColor={BG_COLOR}
            img={"/assests/img/casestudy/shimo/Frame 1984083910.webp"}
            topPadding={false}
            sectionPadding={false}
          />
          <FadeDownCardImg
            bgColor={BG_COLOR}
            img={"/assests/img/casestudy/shimo/Frame 1984083911.webp"}
            topPadding={true}
            sectionPadding={false}
          />
        </ImgFlexWrapper>
      </ContentWidth>
    </>
  );
}
function ShimoGalleryOne() {
  return (
    <>
      <ContentWidth className="sectionPadding">
        <ImgFlexWrapper>
          <CarouselCardContainer
            bgColor={BG_COLOR}
            imgs={[
              "/assests/img/casestudy/shimo/carousel-gallary/1.webp",
              "/assests/img/casestudy/shimo/carousel-gallary/2.webp",
              "/assests/img/casestudy/shimo/carousel-gallary/3.webp",
              "/assests/img/casestudy/shimo/carousel-gallary/4.webp",
              "/assests/img/casestudy/shimo/carousel-gallary/5.webp",
              "/assests/img/casestudy/shimo/carousel-gallary/6.webp",
              "/assests/img/casestudy/shimo/carousel-gallary/7.webp",
            ]}
            sectionPadding={false}
          />
          <NoMarginCardImg
            img={"/assests/img/casestudy/shimo/Frame 1984083914.webp"}
            sectionPadding={false}
          />
        </ImgFlexWrapper>
      </ContentWidth>
    </>
  );
}
function ShimoGalleryTwo() {
  return (
    <div>
      <ContentWidth className="sectionPadding">
        <ImgFlexWrapper>
          <FadeUpCardImg
            bgColor={BG_COLOR}
            sectionPadding={false}
            img={"/assests/img/casestudy/shimo/Contact Us.webp"}
            topPadding={true}
          />

          <FadeUpCardImg
            bgColor={BG_COLOR}
            sectionPadding={false}
            img={"/assests/img/casestudy/shimo/Frame 1984083924 2.webp"}
            topPadding={false}
          />
        </ImgFlexWrapper>
      </ContentWidth>
    </div>
  );
}

export default function Page() {
  return (
    <CaseStudyTemplate
      slug="shimo"
      data={data}
      options={{
        themeColor: THEME_COLOR,
        whatWeBuildBulletColor: THEME_COLOR,
        technicalHighlightBulletColor: THEME_COLOR,
        heroXyPadding: false,
      }}
      slots={{
        beforeChallenge: <ShimoHeroGallery />,
        insideGallery: <ShimoProductGallery />,
        afterWhatWeBuild: <ShimoGalleryOne />,
        afterTechnicalHighlight: <ShimoGalleryTwo />,
      }}
    />
  );
}
