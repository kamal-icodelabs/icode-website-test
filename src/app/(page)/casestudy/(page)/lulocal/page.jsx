"use client";

import CaseStudyTemplate from "@/component/CasestudyComponents/CaseStudyTemplate";
import * as data from "@/data/casestudy/lulocal";
import {
  CarouselCardContainer,
  FadeUpCardImg,
  ImgFlexWrapper,
  NoMarginCardImg,
} from "@/component/CasestudyComponents/CaseStudyAnimatedCards/CaseStudyAnimatedCards";
import ContentWidth from "@/component/ContentWidth/ContentWidth";

const BG_COLOR = "#BF5C3A";

export default function Page() {
  return (
    <CaseStudyTemplate
      slug="lulocal"
      data={data}
      options={{
        themeColor: BG_COLOR,
        whatWeBuildBulletColor: BG_COLOR,
        whatWeBuildNumberColor: "#fff",
        technicalHighlightBulletColor: "#F2B441",
        showRealStory: false,
      }}
      slots={{
        insideGallery: (
          <ImgFlexWrapper>
            <FadeUpCardImg
              img="/assests/img/casestudy/lulocal/uv2z9dr0hdqf0r1hzpbw.webp"
              bgColor={BG_COLOR}
              topPadding={true}
              sectionPadding={false}
            />
            <FadeUpCardImg
              img="/assests/img/casestudy/lulocal/arrrqm2ui7fcltqgbb56.webp"
              bgColor={BG_COLOR}
              topPadding={true}
              sectionPadding={false}
            />
            <FadeUpCardImg
              img="/assests/img/casestudy/lulocal/nxn16ppemwmeahzal05d.webp"
              bgColor={BG_COLOR}
              topPadding={true}
              sectionPadding={false}
            />
          </ImgFlexWrapper>
        ),
        afterWhatWeBuild: (
          <ContentWidth className="sectionPadding">
            <ImgFlexWrapper>
              <FadeUpCardImg
                img="/assests/img/casestudy/lulocal/qjsl6h1fcm5jvjogb74z.webp"
                bgColor={BG_COLOR}
                topPadding={true}
                sectionPadding={false}
              />
              <CarouselCardContainer
                bgColor={BG_COLOR}
                sectionPadding={false}
                imgs={[
                  "/assests/img/casestudy/lulocal/carousel/lulocal.icodestaging.in_l_draft_00000000-0000-0000-0000-000000000000_new_details 1.webp",
                  "/assests/img/casestudy/lulocal/carousel/lulocal.icodestaging.in_l_draft_00000000-0000-0000-0000-000000000000_new_details (4) 1.webp",
                  "/assests/img/casestudy/lulocal/carousel/lulocal.icodestaging.in_l_draft_00000000-0000-0000-0000-000000000000_new_details (5) 1.png",
                  "/assests/img/casestudy/lulocal/carousel/lulocal.icodestaging.in_l_draft_00000000-0000-0000-0000-000000000000_new_details (6) 1.webp",
                  "/assests/img/casestudy/lulocal/carousel/lulocal.icodestaging.in_l_draft_00000000-0000-0000-0000-000000000000_new_details (7) 1.webp",
                ]}
              />
              <FadeUpCardImg
                img="/assests/img/casestudy/lulocal/sommtlytz8sq8hv6sv5t.webp"
                bgColor={BG_COLOR}
                topPadding={true}
                sectionPadding={false}
              />
            </ImgFlexWrapper>
          </ContentWidth>
        ),
        afterTechnicalHighlight: (
          <ContentWidth className="sectionPadding">
            <ImgFlexWrapper>
              <FadeUpCardImg
                bgColor={BG_COLOR}
                sectionPadding={false}
                topPadding={false}
                img="/assests/img/casestudy/lulocal/Group 1686558896.webp"
              />
              <NoMarginCardImg img="/assests/img/casestudy/lulocal/Frame 1984083274 (1).webp" />
            </ImgFlexWrapper>
          </ContentWidth>
        ),
      }}
    />
  );
}
