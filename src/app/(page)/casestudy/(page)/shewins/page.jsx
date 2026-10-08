"use client";

import CaseStudyTemplate from "@/component/CasestudyComponents/CaseStudyTemplate";
import * as data from "@/data/casestudy/shewins";
import ContentWidth from "@/component/ContentWidth/ContentWidth";
import {
  ImgFlexWrapper,
  NoMarginCardImg,
} from "@/component/CasestudyComponents/CaseStudyAnimatedCards/CaseStudyAnimatedCards";

const THEME_COLOR = "#0997A7";

export default function Page() {
  return (
    <CaseStudyTemplate
      slug="shewins"
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
        beforeChallenge: (
          <ContentWidth>
            <ImgFlexWrapper>
              <NoMarginCardImg img="/assests/img/casestudy/shewin/who-she-one 2 (1).webp" sectionPadding={false} />
              <NoMarginCardImg img="/assests/img/casestudy/shewin/Frame 1984083320.webp" sectionPadding={false} />
            </ImgFlexWrapper>
          </ContentWidth>
        ),
        insideGallery: (
          <ImgFlexWrapper>
            <NoMarginCardImg img="/assests/img/casestudy/shewin/Frame 1984083322.webp" sectionPadding={false} />
            <NoMarginCardImg img="/assests/img/casestudy/shewin/Frame 1984083323.webp" sectionPadding={false} />
            <NoMarginCardImg img="/assests/img/casestudy/shewin/Frame 1984083324.webp" sectionPadding={false} />
          </ImgFlexWrapper>
        ),
        afterWhatWeBuild: (
          <ContentWidth className="sectionPadding">
            <ImgFlexWrapper>
              <NoMarginCardImg img="/assests/img/casestudy/shewin/Frame 1984083325.webp" sectionPadding={false} />
              <NoMarginCardImg img="/assests/img/casestudy/shewin/Frame 1984083326.webp" sectionPadding={false} />
              <NoMarginCardImg img="/assests/img/casestudy/shewin/Frame 1984083327.webp" sectionPadding={false} />
            </ImgFlexWrapper>
          </ContentWidth>
        ),
        afterTechnicalHighlight: (
          <ContentWidth className="sectionPadding">
            <ImgFlexWrapper>
              <NoMarginCardImg img="/assests/img/casestudy/shewin/Frame 1984083817.webp" sectionPadding={false} />
              <NoMarginCardImg img="/assests/img/casestudy/shewin/Frame 1984083330.webp" sectionPadding={false} />
            </ImgFlexWrapper>
          </ContentWidth>
        ),
      }}
    />
  );
}
