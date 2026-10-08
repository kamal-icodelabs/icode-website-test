import React from "react";
import dynamic from "next/dynamic";
import { faqDataMobile } from "@/app/helpData";
import Loading from "@/app/loading";
import Link from "next/link";
import IconCollection from "@/component/IconCollection/IconCollection";
import css from './mobileWhtChooseSection.module.css'

const MobileHeroSection = dynamic(() => import("./Components/MobileHeroSection/MobileHeroSection"), { loading: () => <Loading /> });
const MobileContentSection = dynamic(() => import("./Components/MobileContentSection/MobileContentSection").then(mod => ({ default: mod.default })), { loading: () => <Loading /> });
const TextnImageSection = dynamic(() => import("./Components/MobileContentSection/MobileContentSection").then(mod => ({ default: mod.TextnImageSection })), { loading: () => <Loading /> });
const MobileDevSection = dynamic(() => import("./Components/MobileDevSection/MobileDevSection"), { loading: () => <Loading /> });
const MobileToolsSection = dynamic(() => import("./Components/MobileToolsSection/MobileToolsSection"), { loading: () => <Loading /> });
const MobileWhyChooseSection = dynamic(() => import("./Components/MobileWhyChooseSection/MobileWhyChooseSection"), { loading: () => <Loading /> });
const OthervsIcodeSection = dynamic(() => import("../sharetribe/Components/OthervsIcodeSection/OthervsIcodeSection"), { loading: () => <Loading /> });
const MobileFAQSection = dynamic(() => import("./Components/MobileFAQSection/MobileFAQSection"), { loading: () => <Loading /> });
const SectionResources = dynamic(() => import("@/component/SectionResources/SectionResources"), { loading: () => <Loading /> });

export const revalidate = 3600;

export default function page() {
  return (
    <>
      <MobileHeroSection
        title="Mobile App Development Services for iOS & Android"
        content="From MVPs to enterprise apps—we design, build, and scale mobile apps with React Native and Flutter, backed by secure APIs and cloud-native infra."
        btnLink="https://calendly.com/jaytiwary"
        btnText="Book a Free Strategy Call"
        bgIcon={true}
      />
      <MobileContentSection />
      <MobileDevSection />
      <MobileToolsSection />
      <MobileWhyChooseSection />
      <TextnImageSection />
      <OthervsIcodeSection />
      <MobileFAQSection data={faqDataMobile} />
      <div className={css.container}>
        <SectionResources usedInBlog="true" showOnHomepage="false" heading={'Related Blogs'} readmoreBtn="true" filterTypes={["App Development", "Flutter App Development"]} />
        <div className={css.ctaSection}>
          <h2 className={css.sectionHeading}>Ready to build your mobile app?</h2>
          <p className={css.sectionInfo}>Talk to our team. Free scoping call. No commitment.</p>
          <Link href={'/contact'} className={css.letsDisucsssBtn}>Let’s Discuss with us! <IconCollection name={'rightArrowTop'} /></Link>
        </div>
      </div>
    </>
  );
}
