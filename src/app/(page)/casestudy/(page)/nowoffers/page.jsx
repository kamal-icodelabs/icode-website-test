"use client";

import CaseStudyTemplate from "@/component/CasestudyComponents/CaseStudyTemplate";
import * as data from "@/data/casestudy/nowoffers";
import {
  FadeDownCardImg,
  FadeUpCardImg,
  ImgFlexWrapper,
  LoopingScreenCard,
  NoEffectHeadingImgCard,
} from "@/component/CasestudyComponents/CaseStudyAnimatedCards/CaseStudyAnimatedCards";
import ContentWidth from "@/component/ContentWidth/ContentWidth";

const THEME_COLOR = "#FFD046";

export default function Page() {
  return (
    <CaseStudyTemplate
      slug="nowoffers"
      data={data}
      options={{
        themeColor: THEME_COLOR,
        whatWeBuildBulletColor: "#000",
        technicalHighlightBulletColor: "#fff",
        technicalHighlightBulletColor: THEME_COLOR,
        heroXyPadding: false,
      }}
      slots={{
        beforeChallenge: (
          <ContentWidth>
            <ImgFlexWrapper>
              <NoEffectHeadingImgCard
                img="/assests/img/casestudy/nowapp/Laptop.webp"
                cardBG={THEME_COLOR}
              />
              <FadeDownCardImg
                bgColor={THEME_COLOR}
                topPadding={true}
                sectionPadding={false}
                img="/assests/img/casestudy/nowapp/Group 1686559088.webp"
              />
            </ImgFlexWrapper>
          </ContentWidth>
        ),
        insideGallery: (
          <ImgFlexWrapper>
            <FadeDownCardImg
              img="/assests/img/casestudy/nowapp/Group 1686559089.webp"
              bgColor={THEME_COLOR}
              topPadding={false}
              sectionPadding={false}
            />
            <FadeUpCardImg
              img="/assests/img/casestudy/nowapp/MacBook Air - 5.webp"
              bgColor={THEME_COLOR}
              topPadding={true}
              sectionPadding={false}
            />
            <LoopingScreenCard
              bg={THEME_COLOR}
              data={data.loopingScreenMobile}
            />
          </ImgFlexWrapper>
        ),
        afterWhatWeBuild: (
          <ContentWidth className="sectionPadding">
            <ImgFlexWrapper>
              <FadeDownCardImg
                img="/assests/img/casestudy/nowapp/Group 1686559090.webp"
                bgColor={THEME_COLOR}
                sectionPadding={false}
                topPadding={true}
              />
              <FadeDownCardImg
                img="/assests/img/casestudy/nowapp/MacBook Air - 1.webp"
                bgColor={THEME_COLOR}
                sectionPadding={false}
                topPadding={true}
              />
              <FadeDownCardImg
                img="/assests/img/casestudy/nowapp/Group 1686559091.webp"
                bgColor={THEME_COLOR}
                sectionPadding={false}
                topPadding={true}
              />
            </ImgFlexWrapper>
          </ContentWidth>
        ),
        afterTechnicalHighlight: (
          <ContentWidth className="sectionPadding">
            <ImgFlexWrapper>
              <FadeDownCardImg
                img="/assests/img/casestudy/nowapp/Group 1686559092.webp"
                bgColor={THEME_COLOR}
                sectionPadding={false}
                topPadding={true}
              />
              <FadeUpCardImg
                img="/assests/img/casestudy/nowapp/MacBook Air - 2.webp"
                bgColor={THEME_COLOR}
                sectionPadding={false}
                topPadding={true}
              />
            </ImgFlexWrapper>
          </ContentWidth>
        ),
      }}
    />
  );
}
