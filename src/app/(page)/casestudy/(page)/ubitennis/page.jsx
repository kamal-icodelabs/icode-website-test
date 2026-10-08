"use client";

import CaseStudyTemplate from "@/component/CasestudyComponents/CaseStudyTemplate";
import ContentWidth from "@/component/ContentWidth/ContentWidth";
import * as data from "@/data/casestudy/ubitennis";
import {
  ImgFlexWrapper,
  NoMarginCardImg,
} from "@/component/CasestudyComponents/CaseStudyAnimatedCards/CaseStudyAnimatedCards";

const THEME_COLOR = "#1C820A";
const TENNIS_IMAGES = {
  beforeChallenge: [
    "/assests/img/casestudy/ubitennis/Cover Image.webp",
    "/assests/img/casestudy/ubitennis/Group 1686559137.webp",
    "/assests/img/casestudy/ubitennis/Frame 1984083925.webp",
  ],
  insideGallery: [
    "/assests/img/casestudy/ubitennis/Frame 1984083926.webp",
    "/assests/img/casestudy/ubitennis/Frame 1984083930.webp",
    "/assests/img/casestudy/ubitennis/Frame 1984083928.webp",
  ],
  afterWhatWeBuild: [
    "/assests/img/casestudy/ubitennis/Frame 1984083931.webp",
    "/assests/img/casestudy/ubitennis/Group 1686559138.webp",
    "/assests/img/casestudy/ubitennis/Frame 1984083927.webp",
  ],
  afterTechnicalHighlight: [
    "/assests/img/casestudy/ubitennis/Group 1686559139.webp",
    "/assests/img/casestudy/ubitennis/Frame 1984083929.webp",
    "/assests/img/casestudy/ubitennis/Frame 1984083930-1.webp",
    "/assests/img/casestudy/ubitennis/Frame 1984083932.webp",
    "/assests/img/casestudy/ubitennis/Frame 1984083941.webp",
  ],
};

function UbiTennisImageGroup({ images, sectionClassName = "sectionPadding" }) {
  return (
    <ContentWidth className={sectionClassName}>
      <ImgFlexWrapper>
        {images.map((img) => (
          <NoMarginCardImg key={img} img={img} sectionPadding={false} />
        ))}
      </ImgFlexWrapper>
    </ContentWidth>
  );
}

export default function Page() {
  return (
    <CaseStudyTemplate
      slug="ubitennis"
      data={data}
      options={{
        themeColor: THEME_COLOR,
        whatWeBuildBulletColor: THEME_COLOR,
        whatWeBuildNumberColor: "#fff",
        technicalHighlightBulletColor: THEME_COLOR,
        heroXyPadding: false,
      }}
      slots={{
        beforeChallenge: (
          <UbiTennisImageGroup
            images={TENNIS_IMAGES.beforeChallenge}
            sectionClassName="bsectionPadding"
          />
        ),
        insideGallery: (
          <UbiTennisImageGroup images={TENNIS_IMAGES.insideGallery} />
        ),
        afterWhatWeBuild: (
          <UbiTennisImageGroup images={TENNIS_IMAGES.afterWhatWeBuild} />
        ),
        afterTechnicalHighlight: (
          <UbiTennisImageGroup images={TENNIS_IMAGES.afterTechnicalHighlight} />
        ),
      }}
    />
  );
}
