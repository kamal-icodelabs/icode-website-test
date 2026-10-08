"use client";

import CaseStudyTemplate from "@/component/CasestudyComponents/CaseStudyTemplate";
import * as data from "@/data/casestudy/insightgig";
import {
  FadeUpCardImg,
  ImgFlexWrapper,
} from "@/component/CasestudyComponents/CaseStudyAnimatedCards/CaseStudyAnimatedCards";
import ContentWidth from "@/component/ContentWidth/ContentWidth";

const BG_COLOR = "#EBE8F2";

export default function Page() {
  return (
    <CaseStudyTemplate
      slug="insightgig"
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
              bgColor={BG_COLOR}
              topPadding={true}
              sectionPadding={false}
              img="/assests/img/casestudy/insightGig/Group 1686558835 (1).png"
            />
            <FadeUpCardImg
              bgColor={BG_COLOR}
              topPadding={true}
              sectionPadding={false}
              img="/assests/img/casestudy/insightGig/Group 1686558838.png"
            />
            <FadeUpCardImg
              bgColor={BG_COLOR}
              topPadding={true}
              sectionPadding={false}
              img="/assests/img/casestudy/insightGig/Group 1686558837.png"
            />
          </ImgFlexWrapper>
        ),
        afterWhatWeBuild: (
          <ContentWidth>
            <FadeUpCardImg
              bgColor={BG_COLOR}
              topPadding={true}
              sectionPadding={true}
              img="/assests/img/casestudy/insightGig/Group 1686558839.png"
            />
          </ContentWidth>
        ),
        afterTechnicalHighlight: (
          <ContentWidth>
            <FadeUpCardImg
              bgColor={BG_COLOR}
              topPadding={true}
              sectionPadding={true}
              img="/assests/img/casestudy/insightGig/Group 1686558840.png"
            />
          </ContentWidth>
        ),
      }}
    />
  );
}
