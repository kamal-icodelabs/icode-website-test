"use client";

import CaseStudyTemplate from "@/component/CasestudyComponents/CaseStudyTemplate";
import * as data from "@/data/casestudy/pps";
import {
  ImgFlexWrapper,
  NoMarginCardImg,
} from "@/component/CasestudyComponents/CaseStudyAnimatedCards/CaseStudyAnimatedCards";
import ContentWidth from "@/component/ContentWidth/ContentWidth";

const THEME_COLOR = "#E6E6E6";

export default function Page() {
  return (
    <CaseStudyTemplate
      slug="pps"
      data={data}
      options={{
        themeColor: THEME_COLOR,
        whatWeBuildBulletColor: "#000",
        whatWeBuildNumberColor: "#fff",
        technicalHighlightBulletColor: "#000",
        heroXyPadding: false,
        showRealStory: false,
        checkColor: "#000",
      }}
      slots={{
        insideGallery: (
          <ImgFlexWrapper>
            <NoMarginCardImg
              img="/assests/img/casestudy/ppl/Frame 1984083821.webp"
              sectionPadding={false}
            />
            <NoMarginCardImg
              img="/assests/img/casestudy/ppl/Frame 1984083823.webp"
              sectionPadding={false}
            />
            <NoMarginCardImg
              img="/assests/img/casestudy/ppl/Frame 1984083824.webp"
              sectionPadding={false}
            />
            <NoMarginCardImg
              img="/assests/img/casestudy/ppl/Frame 1984083825.webp"
              sectionPadding={false}
            />
          </ImgFlexWrapper>
        ),
        afterWhatWeBuild: (
          <ContentWidth className="sectionPadding">
            <ImgFlexWrapper>
              <NoMarginCardImg
                img="/assests/img/casestudy/ppl/Frame 1984083826.webp"
                sectionPadding={false}
              />
              <NoMarginCardImg
                img="/assests/img/casestudy/ppl/Frame 1984083827.webp"
                sectionPadding={false}
              />
              <NoMarginCardImg
                img="/assests/img/casestudy/ppl/Group 1686559100.webp"
                sectionPadding={false}
              />
              <NoMarginCardImg
                img="/assests/img/casestudy/ppl/Frame 1984083822.webp"
                sectionPadding={false}
              />
              <NoMarginCardImg
                img="/assests/img/casestudy/ppl/Frame 1984083829.webp"
                sectionPadding={false}
              />
              <NoMarginCardImg
                img="/assests/img/casestudy/ppl/Frame 1984083830.webp"
                sectionPadding={false}
              />
              <NoMarginCardImg
                img="/assests/img/casestudy/ppl/Frame 1984083831.webp"
                sectionPadding={false}
              />
            </ImgFlexWrapper>
          </ContentWidth>
        ),
        afterTechnicalHighlight: (
          <ContentWidth className="sectionPadding">
            <ImgFlexWrapper>
              <NoMarginCardImg
                img="/assests/img/casestudy/ppl/Group 1686559101.webp"
                sectionPadding={false}
              />
              <NoMarginCardImg
                img="/assests/img/casestudy/ppl/Frame 1984083834.webp"
                sectionPadding={false}
              />
              <NoMarginCardImg
                img="/assests/img/casestudy/ppl/Frame 1984083835.webp"
                sectionPadding={false}
              />
              <NoMarginCardImg
                img="/assests/img/casestudy/ppl/Frame 1984083837.webp"
                sectionPadding={false}
              />
              <NoMarginCardImg
                img="/assests/img/casestudy/ppl/Frame 1984083836.webp"
                sectionPadding={false}
              />
            </ImgFlexWrapper>
          </ContentWidth>
        ),
      }}
    />
  );
}
