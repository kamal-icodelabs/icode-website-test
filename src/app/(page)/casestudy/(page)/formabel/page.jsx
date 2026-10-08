import CaseStudyTemplate from "@/component/CasestudyComponents/CaseStudyTemplate";
import * as data from "@/data/casestudy/formabel";
import {
  FadeUpCardImg,
  ImgFlexWrapper,
  VerticalCarousel,
} from "@/component/CasestudyComponents/CaseStudyAnimatedCards/CaseStudyAnimatedCards";
import ContentWidth from "@/component/ContentWidth/ContentWidth";

const THEME_COLOR = "#091E52";

export default function Page() {
  return (
    <CaseStudyTemplate
      slug="formabel"
      data={data}
      options={{
        themeColor: data.heroData.cardBgColor,
        whatWeBuildBulletColor: data.heroData.cardBgColor,
        whatWeBuildNumberColor: "#fff",
        technicalHighlightBulletColor: data.heroData.cardBgColor,
        showRealStory: false,
      }}
      slots={{
        insideGallery: (
          <ImgFlexWrapper>
            <FadeUpCardImg
              img="/assests/img/casestudy/formabel/Final - Formabel Listing Details Page.png"
              sectionPadding={false}
              topPadding={true}
              bgColor={THEME_COLOR}
            />
            <FadeUpCardImg
              img="/assests/img/casestudy/formabel/Group 1686558841.png"
              sectionPadding={false}
              topPadding={true}
              bgColor={THEME_COLOR}
            />
            <FadeUpCardImg
              img="/assests/img/casestudy/formabel/Group 1686558842.png"
              sectionPadding={false}
              topPadding={true}
              bgColor={THEME_COLOR}
            />
          </ImgFlexWrapper>
        ),
        afterWhatWeBuild: (
          <ContentWidth className="sectionPadding">
            <FadeUpCardImg
              img="/assests/img/casestudy/formabel/Group 1686559140.webp"
              topPadding={true}
              sectionPadding={false}
              bgColor={THEME_COLOR}
            />
          </ContentWidth>
        ),
        afterTechnicalHighlight: (
          <ContentWidth className="sectionPadding">
            <ImgFlexWrapper>
              <FadeUpCardImg
                img="/assests/img/casestudy/formabel/Group 1686559142 2.webp"
                topPadding={true}
                sectionPadding={false}
                bgColor={THEME_COLOR}
              />
              <VerticalCarousel
                bgColor={THEME_COLOR}
                images={data?.verticalCarousel}
              />
            </ImgFlexWrapper>
          </ContentWidth>
        ),
      }}
    />
  );
}
