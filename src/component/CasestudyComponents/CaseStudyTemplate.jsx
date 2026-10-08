import CaseStudyHeroSection from "@/component/CasestudyComponents/CaseStudyDetailHero/CaseStudyDetailHero";
import CaseStudyDetailNavigation from "@/component/CasestudyComponents/CaseStudyDetailNavigation/CaseStudyDetailNavigation";
import CaseStudyChallenge from "@/component/CasestudyComponents/CaseStudyChallenge/CaseStudyChallenge";
import CaseStudyGallaryLayout from "@/component/CasestudyComponents/CaseStudyGallaryLayout/CaseStudyGallaryLayout";
import CaseStudyTech from "@/component/CasestudyComponents/CaseStudyTech/CaseStudyTech";
import CaseStudyTheme from "@/component/CasestudyComponents/CaseStudyTheme/CaseStudyTheme";
import CaseStudyWhatWeBuild from "@/component/CasestudyComponents/CaseStudyWhatWeBuild/CaseStudyWhatWeBuild";
import CaseStudyProductGallry from "@/component/CasestudyComponents/CaseStudyProductGallry/CaseStudyProductGallry";
import CaseStudyTechnicalHighlight from "@/component/CasestudyComponents/CaseStudyTechnicalHighlight/CaseStudyTechnicalHighlight";
import CaseStudyRelatedCaseStudy from "@/component/CasestudyComponents/CaseStudyRelatedCaseStudy/CaseStudyRelatedCaseStudy";
import CaseStudyRealTimeStory from "@/component/CasestudyComponents/CaseStudyRealTimeStory/CaseStudyRealTimeStory";
import CaseStudyAIPoweredCTACard from "@/component/CasestudyComponents/CaseStudyAIPoweredCTACard/CaseStudyAIPoweredCTACard";

/**
 * Unified case study template.
 *
 * @param {string} slug - the case study slug (used by RelatedCaseStudy to exclude self)
 * @param {object} data - the case study data module (heroData, caseStudyData, navLinks, etc.)
 * @param {object} options - rendering options
 * @param {string} options.themeColor - brand color for nav highlight
 * @param {string} [options.whatWeBuildNumberColor] - color of the step number
 * @param {string} [options.whatWeBuildBulletColor] - color of WhatWeBuild bullets
 * @param {string} [options.technicalHighlightBulletColor] - color of TechnicalHighlight bullets
 * @param {boolean} [options.heroXyPadding=true]
 * @param {boolean} [options.heroTransition=true]
 * @param {boolean} [options.showRealStory=true] - whether to render the testimonial section
 * @param {boolean} [options.showProductGallery=false] - whether to render CaseStudyProductGallry
 * @param {object} [slots] - JSX slots for case-study-specific content
 * @param {ReactNode} [slots.beforeChallenge] - rendered just after the hero, before Challenge
 * @param {ReactNode} [slots.afterChallenge] - rendered between Challenge and Gallery
 * @param {ReactNode} [slots.insideGallery] - rendered inside CaseStudyGallaryLayout
 * @param {ReactNode} [slots.afterTheme] - rendered between Theme and WhatWeBuild
 * @param {ReactNode} [slots.afterWhatWeBuild] - rendered between WhatWeBuild and TechnicalHighlight
 * @param {ReactNode} [slots.afterTechnicalHighlight] - rendered between TechnicalHighlight and AICTACard
 */
export default function CaseStudyTemplate({
  slug,
  data,
  options = {},
  slots = {},
}) {
  const {
    heroData,
    caseStudyData,
    navLinks,
    techStackData,
    themeContent,
    whatwebuild,
    productGallary,
    highlightPt,
    caseStudyCtaCardData,
    realStory,
    imgGallery,
  } = data;

  const {
    themeColor,
    whatWeBuildNumberColor,
    whatWeBuildBulletColor,
    technicalHighlightBulletColor,
    heroXyPadding = true,
    heroTransition = true,
    showRealStory = true,
    showProductGallery = false,
  } = options;

  const hasGallerySlot = Boolean(slots.insideGallery);
  const hasGalleryData = Array.isArray(imgGallery) && imgGallery.length > 0;

  return (
    <>
      <CaseStudyDetailNavigation themeColor={themeColor} data={navLinks} />

      <CaseStudyHeroSection
        xyPadding={heroXyPadding}
        transition={heroTransition}
        data={heroData}
        id="overview"
      />

      {slots.beforeChallenge}

      <CaseStudyChallenge data={caseStudyData} id="the-challenge" slug={slug} />

      {slots.afterChallenge}

      {(hasGallerySlot || hasGalleryData) && (
        <CaseStudyGallaryLayout data={imgGallery} id="gallery">
          {slots.insideGallery}
        </CaseStudyGallaryLayout>
      )}

      <CaseStudyTech data={techStackData} id="tech-stack" />

      <CaseStudyTheme data={themeContent} id="brand-color-typo" />

      {slots.afterTheme}

      <CaseStudyWhatWeBuild
        data={whatwebuild}
        numberColor={whatWeBuildNumberColor}
        bulletColor={whatWeBuildBulletColor}
        id="what-we-built"
      />

      {showProductGallery && productGallary && (
        <CaseStudyProductGallry data={productGallary} id="product-gallery" />
      )}

      {slots.afterWhatWeBuild}

      <CaseStudyTechnicalHighlight
        data={highlightPt}
        bulletColor={technicalHighlightBulletColor}
        id="technical-highlights"
      />

      {slots.afterTechnicalHighlight}

      <CaseStudyAIPoweredCTACard data={caseStudyCtaCardData} id="cta" />

      {showRealStory && realStory && (
        <CaseStudyRealTimeStory data={realStory} id="testimonials" />
      )}

      <CaseStudyRelatedCaseStudy
        truncateText={true}
        title={true}
        excludeSlug={slug}
        id="related-case-studies"
      />
    </>
  );
}
