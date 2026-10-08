"use client";

import CaseStudyTemplate from "@/component/CasestudyComponents/CaseStudyTemplate";
import * as data from "@/data/casestudy/luggagepodhire";
import {
  ImgFlexWrapper,
  NoMarginCardImg,
} from "@/component/CasestudyComponents/CaseStudyAnimatedCards/CaseStudyAnimatedCards";
import ContentWidth from "@/component/ContentWidth/ContentWidth";

const THEME_COLOR = "#0AA9C5";

export default function Page() {
  return (
    <CaseStudyTemplate
      slug="luggagepodhire"
      data={data}
      options={{
        themeColor: THEME_COLOR,
        whatWeBuildBulletColor: THEME_COLOR,
        technicalHighlightBulletColor: THEME_COLOR,
        heroXyPadding: false,
      }}
      slots={{
        beforeChallenge: (
          <ContentWidth>
            <NoMarginCardImg img="/assests/img/casestudy/luggage/Frame 1984083861.webp" sectionPadding={false} />
          </ContentWidth>
        ),
        insideGallery: (
          <ImgFlexWrapper>
            <NoMarginCardImg img="/assests/img/casestudy/luggage/Frame 1984083862.webp" sectionPadding={false} />
            <NoMarginCardImg img="/assests/img/casestudy/luggage/Frame 1984083864.webp" sectionPadding={false} />
          </ImgFlexWrapper>
        ),
        afterWhatWeBuild: (
          <ContentWidth className="sectionPadding">
            <NoMarginCardImg img="/assests/img/casestudy/luggage/Frame 1984083865.webp" sectionPadding={false} />
          </ContentWidth>
        ),
        afterTechnicalHighlight: (
          <ContentWidth className="sectionPadding">
            <NoMarginCardImg img="/assests/img/casestudy/luggage/Frame 1984083866.webp" sectionPadding={false} />
          </ContentWidth>
        ),
      }}
    />
  );
}
