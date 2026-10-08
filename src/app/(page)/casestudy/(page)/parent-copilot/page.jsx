"use client";

import CaseStudyTemplate from "@/component/CasestudyComponents/CaseStudyTemplate";
import * as data from "@/data/casestudy/parent-copilot";
import {
  ImgFlexWrapper,
  NoMarginCardImg,
} from "@/component/CasestudyComponents/CaseStudyAnimatedCards/CaseStudyAnimatedCards";
import ContentWidth from "@/component/ContentWidth/ContentWidth";

const THEME_COLOR = "#F5F5F5";

export default function Page() {
  return (
    <CaseStudyTemplate
      slug="parent-copilot"
      data={data}
      options={{
        themeColor: THEME_COLOR,
        whatWeBuildBulletColor: "#FF5A5F",
        whatWeBuildNumberColor: "#fff",
        technicalHighlightBulletColor: "#FF5A5F",
        heroXyPadding: false,
        showRealStory: false,
      }}
      slots={{
        beforeChallenge: (
          <ContentWidth>
            <NoMarginCardImg img="/assests/img/casestudy/parent/Cover Image.webp" sectionPadding={false} />
          </ContentWidth>
        ),
        insideGallery: (
          <ImgFlexWrapper>
            <NoMarginCardImg img="/assests/img/casestudy/parent/Frame 1984083839.webp" sectionPadding={false} />
            <NoMarginCardImg img="/assests/img/casestudy/parent/Frame 1984083845.webp" sectionPadding={false} />
            <NoMarginCardImg img="/assests/img/casestudy/parent/Frame 1984083844.webp" sectionPadding={false} />
          </ImgFlexWrapper>
        ),
        afterWhatWeBuild: (
          <ContentWidth className="sectionPadding">
            <ImgFlexWrapper>
              <NoMarginCardImg img="/assests/img/casestudy/parent/Frame 1984083849.webp" sectionPadding={false} />
              <NoMarginCardImg img="/assests/img/casestudy/parent/Frame 1984083852.webp" sectionPadding={false} />
              <NoMarginCardImg img="/assests/img/casestudy/parent/Frame 1984083860.webp" sectionPadding={false} />
            </ImgFlexWrapper>
          </ContentWidth>
        ),
        afterTechnicalHighlight: (
          <ContentWidth className="sectionPadding">
            <ImgFlexWrapper>
              <NoMarginCardImg img="/assests/img/casestudy/parent/Frame 1984083840.webp" sectionPadding={false} />
              <NoMarginCardImg img="/assests/img/casestudy/parent/Frame 1984083859.webp" sectionPadding={false} />
              <NoMarginCardImg img="/assests/img/casestudy/parent/Frame 1984083846.webp" sectionPadding={false} />
            </ImgFlexWrapper>
          </ContentWidth>
        ),
      }}
    />
  );
}
