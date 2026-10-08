import React from "react";
import dynamic from "next/dynamic";
import { faqData } from "@/app/helpData";
import Loading from "@/app/loading";

const ImageNcontentSection = dynamic(() => import("./Components/ImageNcontentSection/ImageNcontentSection").then(mod => ({ default: mod.default })), { ssr: false, loading: () => <Loading /> });
const TextnImageSection = dynamic(() => import("./Components/ImageNcontentSection/ImageNcontentSection").then(mod => ({ default: mod.TextnImageSection })), { ssr: false, loading: () => <Loading /> });
const ReactnativeDevSection = dynamic(() => import("./Components/ReactnativeDevSection/ReactnativeDevSection"), { ssr: false, loading: () => <Loading /> });
const DevToolSection = dynamic(() => import("./Components/DevToolSection/DevToolSection"), { ssr: false, loading: () => <Loading /> });
const CarouselNwhyChooseSection = dynamic(() => import("./Components/CarouselNwhyChooseSection/CarouselNwhyChooseSection"), { ssr: false, loading: () => <Loading /> });
const OthervsIcodeSection = dynamic(() => import("../sharetribe/Components/OthervsIcodeSection/OthervsIcodeSection"), { ssr: false, loading: () => <Loading /> });
const FAQSection = dynamic(() => import("./Components/FAQSection/FAQSection"), { ssr: false, loading: () => <Loading /> });
const SectionResources = dynamic(() => import("@/component/SectionResources/SectionResources"), { ssr: false, loading: () => <Loading /> });
const MobileHeroSection = dynamic(() => import("../mobile-app-development/Components/MobileHeroSection/MobileHeroSection"), { ssr: false, loading: () => <Loading /> });

export default function page() {
  return (
    <>
      <MobileHeroSection
        title="React Native App Development Compnay"
        content="Best React Native development company proficient in building
              mobile applications by leveraging the skills of the best React
              Native app developers
"
        btnLink="#"
        bgIcon="true"
        btnText="Talk to Our Experts"
      />
      <ImageNcontentSection />
      <ReactnativeDevSection />
      <DevToolSection />
      <CarouselNwhyChooseSection />
      <TextnImageSection />
      <OthervsIcodeSection />
      <FAQSection data={faqData} />
      <SectionResources usedInBlog="true" filterTypes={["App Development", "Flutter App Development"]} />
    </>
  );
}


