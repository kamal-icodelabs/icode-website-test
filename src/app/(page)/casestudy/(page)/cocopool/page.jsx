import CaseStudyTemplate from "@/component/CasestudyComponents/CaseStudyTemplate";
import * as data from "@/data/casestudy/cocopool";
import {
  CarouselCardContainer,
  FadeUpCardImg,
  ImgFlexWrapper,
} from "@/component/CasestudyComponents/CaseStudyAnimatedCards/CaseStudyAnimatedCards";
import ContentWidth from "@/component/ContentWidth/ContentWidth";

const THEME_COLOR = "#E9F2F1";

export default function Page() {
  return (
    <CaseStudyTemplate
      slug="cocopool"
      data={data}
      options={{
        themeColor: THEME_COLOR,
        whatWeBuildBulletColor: "#00AC9D",
        technicalHighlightBulletColor: "#00AC9D",
        heroXyPadding: false,
        showRealStory: false,
      }}
      slots={{
        insideGallery: (
          <ImgFlexWrapper>
            <CarouselCardContainer
              imgs={[
                "/assests/img/casestudy/cocopool/carouselimg/cocopool.es_l_draft_00000000-0000-0000-0000-000000000000_new_typeofspace 1.png",
                "/assests/img/casestudy/cocopool/carouselimg/cocopool.es_l_draft_00000000-0000-0000-0000-000000000000_new_typeofspace (1) 1.png",
                "/assests/img/casestudy/cocopool/carouselimg/cocopool.es_l_draft_00000000-0000-0000-0000-000000000000_new_typeofspace (2) 1.png",
                "/assests/img/casestudy/cocopool/carouselimg/cocopool.es_l_draft_00000000-0000-0000-0000-000000000000_new_typeofspace (3) 1.png",
                "/assests/img/casestudy/cocopool/carouselimg/cocopool.es_l_draft_00000000-0000-0000-0000-000000000000_new_typeofspace (4) 1.png",
                "/assests/img/casestudy/cocopool/carouselimg/cocopool.es_l_draft_6a0aca84-2d7e-4978-8b9b-2b50d0fb974f_draft_photos (2) 1.png",
              ]}
              bgColor={THEME_COLOR}
            />
            <FadeUpCardImg
              img="/assests/img/casestudy/cocopool/screen2.webp"
              bgColor={THEME_COLOR}
              sectionPadding={false}
              topPadding={true}
            />
          </ImgFlexWrapper>
        ),
        afterWhatWeBuild: (
          <ContentWidth className="sectionPadding">
            <ImgFlexWrapper>
              <FadeUpCardImg
                img="/assests/img/casestudy/cocopool/bca4nxpcswenrzgfvakf.webp"
                bgColor={THEME_COLOR}
                sectionPadding={false}
                topPadding={true}
              />
              <FadeUpCardImg
                img="/assests/img/casestudy/cocopool/screen3.webp"
                bgColor={THEME_COLOR}
                sectionPadding={false}
                topPadding={true}
              />
            </ImgFlexWrapper>
          </ContentWidth>
        ),
        afterTechnicalHighlight: (
          <ContentWidth className="sectionPadding">
            <ImgFlexWrapper>
              <FadeUpCardImg
                img="/assests/img/casestudy/cocopool/Group 1686558853.webp"
                bgColor={THEME_COLOR}
                sectionPadding={false}
                topPadding={true}
              />
              <FadeUpCardImg
                img="/assests/img/casestudy/cocopool/Group 1686558854.webp"
                bgColor={THEME_COLOR}
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
