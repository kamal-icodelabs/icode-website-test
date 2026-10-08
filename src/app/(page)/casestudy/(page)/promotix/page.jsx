"use client";

import CaseStudyTemplate from "@/component/CasestudyComponents/CaseStudyTemplate";
import * as data from "@/data/casestudy/promotix";
import {
  CarouselCardContainer,
  FadeUpCardImg,
  ImgFlexWrapper,
  NoMarginCardImg,
} from "@/component/CasestudyComponents/CaseStudyAnimatedCards/CaseStudyAnimatedCards";
import ContentWidth from "@/component/ContentWidth/ContentWidth";

const BG_COLOR = "#E5E5E5";

export default function Page() {
  return (
    <CaseStudyTemplate
      slug="promotix"
      data={data}
      options={{
        themeColor: data.caseStudyData.color,
        whatWeBuildBulletColor: "#FF6900",
        whatWeBuildNumberColor: "#ffffff",
        technicalHighlightBulletColor: "#FF6900",
        showRealStory: false,
      }}
      slots={{
        insideGallery: (
          <ImgFlexWrapper>
            <FadeUpCardImg
              bgColor={BG_COLOR}
              img="/assests/img/casestudy/promotix/Group 1686558871.webp"
              sectionPadding={false}
              topPadding={true}
            />
            <FadeUpCardImg
              bgColor={BG_COLOR}
              img="/assests/img/casestudy/promotix/Group 1686558872.webp"
              sectionPadding={false}
              topPadding={true}
            />
            <FadeUpCardImg
              bgColor={BG_COLOR}
              img="/assests/img/casestudy/promotix/Group 1686558873.webp"
              sectionPadding={false}
              topPadding={true}
            />
          </ImgFlexWrapper>
        ),
        afterWhatWeBuild: (
          <ContentWidth>
            <CarouselCardContainer
              bgColor={BG_COLOR}
              sectionPadding={true}
              imgs={[
                "/assests/img/casestudy/promotix/carousel/reseller.promotix.com_l_draft_00000000-0000-0000-0000-000000000000_new_details (2) 1.webp",
                "/assests/img/casestudy/promotix/carousel/reseller.promotix.com_l_draft_00000000-0000-0000-0000-000000000000_new_details (3) 1.webp",
                "/assests/img/casestudy/promotix/carousel/reseller.promotix.com_l_draft_00000000-0000-0000-0000-000000000000_new_details (4) 1.webp",
                "/assests/img/casestudy/promotix/carousel/reseller.promotix.com_l_draft_00000000-0000-0000-0000-000000000000_new_details (5) 1.webp",
              ]}
            />
          </ContentWidth>
        ),
        afterTechnicalHighlight: (
          <ContentWidth className="sectionPadding">
            <ImgFlexWrapper>
              <FadeUpCardImg
                img="/assests/img/casestudy/promotix/Group 1686558874.webp"
                bgColor={BG_COLOR}
                sectionPadding={false}
                topPadding={true}
              />
              <NoMarginCardImg
                img="/assests/img/casestudy/promotix/Frame 1984083260.webp"
                bgColor={BG_COLOR}
                sectionPadding={false}
                topPadding={true}
              />
            </ImgFlexWrapper>
          </ContentWidth>
        ),
      }}
    />
  );
}
