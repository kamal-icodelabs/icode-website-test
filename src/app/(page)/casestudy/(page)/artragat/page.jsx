"use client";

import CaseStudyTemplate from "@/component/CasestudyComponents/CaseStudyTemplate";
import * as data from "@/data/casestudy/artragat";
import ContentWidth from "@/component/ContentWidth/ContentWidth";
import {
  CarouselCardContainer,
  FadeDownCardImg,
  FadeUpCardImg,
  FullLengthCardContainer,
  ImgFlexWrapper,
  NoMarginCardImg,
} from "@/component/CasestudyComponents/CaseStudyAnimatedCards/CaseStudyAnimatedCards";

const THEME_COLOR = "#00A8D8";
const BG_COLOR = "#00A8D8";

function ArtragatHeroGallery() {
  return (
    <ContentWidth className="bsectionPadding">
      <ImgFlexWrapper>
        <FadeUpCardImg
          bgColor={BG_COLOR}
          topPadding={true}
          img="/assests/img/casestudy/artragat/ROTATE ME to 0° (mackbook).webp"
          sectionPadding={false}
        />

        <FadeUpCardImg
          bgColor={BG_COLOR}
          topPadding={false}
          img="/assests/img/casestudy/artragat/Group 1686559136.webp"
          sectionPadding={false}
        />
      </ImgFlexWrapper>
    </ContentWidth>
  );
}

function ArtragatInsideGallery() {
  return (
    <ContentWidth className="bsectionPadding">
      <ImgFlexWrapper>
        {data?.galleryImgs?.map((i) => (
          <FadeUpCardImg
            bgColor={BG_COLOR}
            img={i}
            topPadding={true}
            sectionPadding={false}
          />
        ))}
      </ImgFlexWrapper>
    </ContentWidth>
  );
}

function ArtragatGalleryOne() {
  return (
    <ContentWidth className="sectionPadding">
      <ImgFlexWrapper>
        <CarouselCardContainer
          bgColor={BG_COLOR}
          imgs={[
            "/assests/img/casestudy/artragat/carousel-cards/1.webp",
            "/assests/img/casestudy/artragat/carousel-cards/2.webp",
            "/assests/img/casestudy/artragat/carousel-cards/3.webp",
            "/assests/img/casestudy/artragat/carousel-cards/4.webp",
            "/assests/img/casestudy/artragat/carousel-cards/5.webp",
            "/assests/img/casestudy/artragat/carousel-cards/6.webp",
            "/assests/img/casestudy/artragat/carousel-cards/7.webp",
            "/assests/img/casestudy/artragat/carousel-cards/8.webp",
          ]}
          sectionPadding={false}
        />
        <FullLengthCardContainer
          cardBG={BG_COLOR}
          img={"/assests/img/casestudy/artragat/Listing Details Page.webp"}
        />
      </ImgFlexWrapper>
    </ContentWidth>
  );
}

function ArtragatGalleryTwo() {
  return (
    <ContentWidth className="sectionPadding">
      <ImgFlexWrapper>
        {[
          "/assests/img/casestudy/artragat/Profile Page.webp",
          "/assests/img/casestudy/artragat/Group 1686559106.webp",
        ]?.map((i) => (
          <FadeUpCardImg
            bgColor={BG_COLOR}
            img={i}
            topPadding={true}
            sectionPadding={false}
          />
        ))}

        <NoMarginCardImg
          img={"/assests/img/casestudy/artragat/Frame 1984083925 (1).webp"}
          sectionPadding={false}
        />
        {[
          "/assests/img/casestudy/artragat/Frame 1984083904.webp",
          "/assests/img/casestudy/artragat/Frame 1984083905.webp",
        ]?.map((i) => (
          <FadeUpCardImg
            bgColor={BG_COLOR}
            img={i}
            topPadding={true}
            sectionPadding={false}
          />
        ))}
        <NoMarginCardImg
          img={"/assests/img/casestudy/artragat/Frame 1984083929.webp"}
          sectionPadding={false}
        />
      </ImgFlexWrapper>
    </ContentWidth>
  );
}

export default function Page() {
  return (
    <CaseStudyTemplate
      slug="artragat"
      data={data}
      options={{
        themeColor: THEME_COLOR,
        whatWeBuildBulletColor: THEME_COLOR,
        whatWeBuildNumberColor: "#fff",
        technicalHighlightBulletColor: THEME_COLOR,
        heroXyPadding: false,
        showRealStory: false,
      }}
      slots={{
        beforeChallenge: <ArtragatHeroGallery />,
        insideGallery: <ArtragatInsideGallery />,
        afterWhatWeBuild: <ArtragatGalleryOne />,
        afterTechnicalHighlight: <ArtragatGalleryTwo />,
      }}
    />
  );
}
