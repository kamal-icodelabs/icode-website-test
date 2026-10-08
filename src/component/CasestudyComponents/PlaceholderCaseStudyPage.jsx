"use client";

import CaseStudyHeroSection from "@/component/CasestudyComponents/CaseStudyDetailHero/CaseStudyDetailHero";
import CaseStudyDetailNavigation from "@/component/CasestudyComponents/CaseStudyDetailNavigation/CaseStudyDetailNavigation";
import CaseStudyChallenge from "@/component/CasestudyComponents/CaseStudyChallenge/CaseStudyChallenge";
import CaseStudyTech from "@/component/CasestudyComponents/CaseStudyTech/CaseStudyTech";
import CaseStudyTheme from "@/component/CasestudyComponents/CaseStudyTheme/CaseStudyTheme";
import CaseStudyWhatWeBuild from "@/component/CasestudyComponents/CaseStudyWhatWeBuild/CaseStudyWhatWeBuild";
import CaseStudyTechnicalHighlight from "@/component/CasestudyComponents/CaseStudyTechnicalHighlight/CaseStudyTechnicalHighlight";
import CaseStudyRelatedCaseStudy from "@/component/CasestudyComponents/CaseStudyRelatedCaseStudy/CaseStudyRelatedCaseStudy";
import CaseStudyRealTimeStory from "@/component/CasestudyComponents/CaseStudyRealTimeStory/CaseStudyRealTimeStory";
import CaseStudyAIPoweredCTACard from "@/component/CasestudyComponents/CaseStudyAIPoweredCTACard/CaseStudyAIPoweredCTACard";

export default function PlaceholderCaseStudyPage({ data, slug }) {
  const {
    navLinks,
    heroData,
    caseStudyData,
    techStackData,
    themeContent,
    whatwebuild,
    highlightPt,
    caseStudyCtaCardData,
    realStory,
  } = data;

  return (
    <>
      <CaseStudyDetailNavigation themeColor={heroData.cardBgColor} data={navLinks} />
      <CaseStudyHeroSection xyPadding={false} transition={true} data={heroData} id="overview" />
      <CaseStudyChallenge data={caseStudyData} id="the-challenge" slug={slug} />
      <CaseStudyTech data={techStackData} id="tech-stack" />
      <CaseStudyTheme data={themeContent} id="brand-color-typo" />
      <CaseStudyWhatWeBuild data={whatwebuild} bulletColor={heroData.cardBgColor} numberColor="#fff" id="what-we-built" />
      <CaseStudyTechnicalHighlight data={highlightPt} bulletColor={heroData.cardBgColor} id="technical-highlights" />
      <CaseStudyAIPoweredCTACard data={caseStudyCtaCardData} />
      <CaseStudyRealTimeStory data={realStory} id="testimonials" />
      <CaseStudyRelatedCaseStudy  />
    </>
  );
}
