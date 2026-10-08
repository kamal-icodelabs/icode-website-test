import CaseStudyTemplate from "@/component/CasestudyComponents/CaseStudyTemplate";
import { CaseStudyLoopingScreens } from "@/component/CasestudyComponents/CaseStudyLoopingScreens/CaseStudyLoopingScreens";
import * as data from "@/data/casestudy/arabibi";
import GifArabibi from "./components/GifArabibi/GifArabibi";
import {
  ArabibiGallery,
  ArabibiGalleryTwo,
} from "./components/GallaryArabibi/GallaryArabibi";
import ContentWidth from "@/component/ContentWidth/ContentWidth";
import {
  ImgFlexWrapper,
  NoMarginCardImg,
} from "@/component/CasestudyComponents/CaseStudyAnimatedCards/CaseStudyAnimatedCards";
import css from "styled-jsx/css";

export default function Page() {
  return (
    <CaseStudyTemplate
      slug="arabibi"
      data={data}
      options={{
        themeColor: "#00674F",
        whatWeBuildNumberColor: "#fff",
        whatWeBuildBulletColor: "#006E57",
        technicalHighlightBulletColor: "#DE4A00",
        heroXyPadding: false,
        showRealStory: false,
      }}
      slots={{
        insideGallery: <ArabibiGallery />,
        afterTheme: <GifArabibi />,
        afterWhatWeBuild: <ArabibiGalleryTwo />,
        afterTechnicalHighlight: (
          <>
            <ContentWidth className={"sectionPadding"}>
              <ImgFlexWrapper>
                <NoMarginCardImg
                  sectionPadding={false}
                  img={"/assests/img/casestudy/arabibi/Group 1686559143.webp"}
                />

                <CaseStudyLoopingScreens
                  data={data.loopingScreen}
                  speed={22}
                  gap={14}
                  imgHeight={240}
                />
              </ImgFlexWrapper>
            </ContentWidth>
          </>
        ),
      }}
    />
  );
}
