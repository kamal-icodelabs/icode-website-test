"use client";

import CaseStudyTemplate from "@/component/CasestudyComponents/CaseStudyTemplate";
import * as data from "@/data/casestudy/myfindor";
import {
  FadeUpCardImg,
  ImgFlexWrapper,
} from "@/component/CasestudyComponents/CaseStudyAnimatedCards/CaseStudyAnimatedCards";
import ContentWidth from "@/component/ContentWidth/ContentWidth";

const BG_COLOR = "#B25F87";

export default function Page() {
  return (
    <CaseStudyTemplate
      slug="myfindor"
      data={data}
      options={{
        themeColor: BG_COLOR,
        whatWeBuildBulletColor: BG_COLOR,
        whatWeBuildNumberColor: "#fff",
        technicalHighlightBulletColor: "#B25F87",
        showRealStory: false,
      }}
      slots={{
        insideGallery: (
          <ImgFlexWrapper>
            <FadeUpCardImg
              bgColor={BG_COLOR}
              img="/assests/img/casestudy/findor/Group 1686559087.webp"
              sectionPadding={false}
              topPadding={false}
            />
            <FadeUpCardImg
              bgColor={BG_COLOR}
              img="/assests/img/casestudy/findor/Group 1686559082.webp"
              sectionPadding={false}
              topPadding={true}
            />
          </ImgFlexWrapper>
        ),
        afterWhatWeBuild: (
          <ContentWidth className="sectionPadding">
            <ImgFlexWrapper>
              <FadeUpCardImg
                bgColor={BG_COLOR}
                img="/assests/img/casestudy/findor/Group 1686559083.webp"
                sectionPadding={false}
                topPadding={true}
              />
              <FadeUpCardImg
                bgColor={BG_COLOR}
                img="/assests/img/casestudy/findor/Group 1686559084.webp"
                sectionPadding={false}
                topPadding={true}
              />
            </ImgFlexWrapper>
          </ContentWidth>
        ),
        afterTechnicalHighlight: (
          <ContentWidth>
            <FadeUpCardImg
              bgColor={BG_COLOR}
              img="/assests/img/casestudy/findor/Group 1686559085.webp"
              sectionPadding={true}
              topPadding={true}
            />
          </ContentWidth>
        ),
      }}
    />
  );
}
