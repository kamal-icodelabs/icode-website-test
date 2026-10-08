"use client";

import CaseStudyTemplate from "@/component/CasestudyComponents/CaseStudyTemplate";
import ContentWidth from "@/component/ContentWidth/ContentWidth";
import * as data from "@/data/casestudy/direzione";
import {
  ImgFlexWrapper,
  NoMarginCardImg,
} from "@/component/CasestudyComponents/CaseStudyAnimatedCards/CaseStudyAnimatedCards";

const THEME_COLOR = "#0E0E0E";

const DIREZIONE_IMAGES = {
  beforeChallenge: "/assests/img/casestudy/direzione/Frame 198408390229.webp",
  insideGallery: "/assests/img/casestudy/direzione/Frame 1984083907.webp",
  afterWhatWeBuild: "/assests/img/casestudy/direzione/Frame 1984083909.webp",
};

function DirezioneImageGroup({ image, sectionClassName = "sectionPadding" }) {
  return (
    <ContentWidth className={sectionClassName}>
      <NoMarginCardImg img={image} sectionPadding={false} />
    </ContentWidth>
  );
}

export default function Page() {
  return (
    <CaseStudyTemplate
      slug="direzione"
      data={data}
      options={{
        themeColor: THEME_COLOR,
        whatWeBuildBulletColor: "#C9A24A",
        whatWeBuildNumberColor: "#fff",
        technicalHighlightBulletColor: "#C9A24A",
        heroXyPadding: false,
      }}
      slots={{
        beforeChallenge: (
          <DirezioneImageGroup
            image={DIREZIONE_IMAGES.beforeChallenge}
            sectionClassName="bsectionPadding"
          />
        ),
        insideGallery: (
          <DirezioneImageGroup image={DIREZIONE_IMAGES.insideGallery} />
        ),
        afterWhatWeBuild: (
          <DirezioneImageGroup image={DIREZIONE_IMAGES.afterWhatWeBuild} />
        ),
      }}
    />
  );
}
