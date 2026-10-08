import React from "react";
import dynamic from "next/dynamic";
import { faqDataWeb } from "@/app/helpData";
import Loading from "@/app/loading";

const ImgNTextSection = dynamic(() => import("./Components/ImgNTextSection/ImgNTextSection").then(mod => ({ default: mod.default })), { loading: () => <Loading /> });
const DeliveryWebSolnSection = dynamic(() => import("./Components/ImgNTextSection/ImgNTextSection").then(mod => ({ default: mod.DeliveryWebSolnSection })), { loading: () => <Loading /> });
const GradientImgNText = dynamic(() => import("./Components/ImgNTextSection/ImgNTextSection").then(mod => ({ default: mod.GradientImgNText })), { loading: () => <Loading /> });
const OurProficiency = dynamic(() => import("./Components/ImgNTextSection/ImgNTextSection").then(mod => ({ default: mod.OurProficiency })), { loading: () => <Loading /> });
const YourSrcForWebDevSection = dynamic(() => import("./Components/ImgNTextSection/ImgNTextSection").then(mod => ({ default: mod.YourSrcForWebDevSection })), { loading: () => <Loading /> });
const ExploreCarousel = dynamic(() => import("./Components/ExploreCarousel/ExploreCarousel"), { loading: () => <Loading /> });
const ShareTribeReviewCrousel = dynamic(() => import("../sharetribe/Components/ShareTribeReviewCrousel/ShareTribeReviewCrousel"));
const FAQSection = dynamic(() => import("../react-native/Components/FAQSection/FAQSection"));
const SectionResources = dynamic(() => import("@/component/SectionResources/SectionResources"));
const StartupsToEnterprises = dynamic(() => import("@/component/SectionStartup/StartupsToEnterprises"));
const MobileHeroSection = dynamic(() => import("../mobile-app-development/Components/MobileHeroSection/MobileHeroSection"));

export const revalidate = 3600;

export default function Page() {
  return (
    <>
      <MobileHeroSection
        title="Custom Web Development Services for Startups & Enterprises"
        content="With 50+ marketplaces and platforms delivered, iCodelabs
         combines AI-augmented development with battle-tested
         processes. From MVPs to enterprise platforms — on time,
         on budget, on target."
        btnLink="https://calendly.com/jaytiwary"
        btnText="Schedule a free strategy call and kickstart your build"
      />
      <ImgNTextSection />
      <DeliveryWebSolnSection />
      <ExploreCarousel />
      <OurProficiency />
      <GradientImgNText />
      <ShareTribeReviewCrousel />
      <YourSrcForWebDevSection />
      <StartupsToEnterprises />
      <FAQSection data={faqDataWeb} />
      <SectionResources filterTypes={["Web Development", "Web Application"]} />
    </>
  );
}
