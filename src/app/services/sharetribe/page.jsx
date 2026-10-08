import React from "react";
import dynamic from "next/dynamic";
import Loading from "@/app/loading";

// dynamic rendering of components
import HeroSectionShareTribe from './Components/HeroSectionShareTribe/HeroSectionShareTribe'
import MarketPlaceSection from './Components/MarketPlaceSection/MarketPlaceSection'
import PakckageSection from './Components/PakckageSection/PakckageSection'
import HowIcodeWorkSection from './Components/HowIcodeWorkSection/HowIcodeWorkSection'
import ShareTribeReviewCrousel from './Components/ShareTribeReviewCrousel/ShareTribeReviewCrousel'
import OthervsIcodeSection from './Components/OthervsIcodeSection/OthervsIcodeSection'
// const ShareTribeAccordionSection = dynamic(() => import('./Components/ShareTribeAccordionSection/ShareTribeAccordionSection'), { ssr: false })
import ImgNcontentFullWIdthSection from './Components/ImgNcontentFullWIdthSection/ImgNcontentFullWIdthSection'
import IcodeWorksSection from "./Components/IcodeWorksSection/IcodeWorksSection";
import SectionResources from "@/component/SectionResources/SectionResources";


const sharetribeSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Sharetribe Marketplace Development",
  "description": "Expert Sharetribe marketplace development from a Vetted Sharetribe Partner. Fixed packages from $3,000. 50+ live marketplaces delivered.",
  "url": "https://icodelabs.co/services/sharetribe",
  "provider": {
    "@type": "Organization",
    "name": "iCodelabs",
    "url": "https://icodelabs.co"
  },
  "areaServed": "Worldwide",
  "serviceType": "Sharetribe Marketplace Development",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Sharetribe Development Packages",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Sharetribe Startup Package — $3,000" }},
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Sharetribe Growth Package — $4,000" }},
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Sharetribe Enterprise Package — from $6,000" }}
    ]
  }
};

export const revalidate = 3600;

export default function page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(sharetribeSchema) }} />
      <HeroSectionShareTribe />
      <MarketPlaceSection />
      <PakckageSection />
      <HowIcodeWorkSection />
      {/* <ShareTribeReviewCrousel /> */}
      <OthervsIcodeSection />
      {/* <ShareTribeAccordionSection /> */}
      {/* <ImgNcontentFullWIdthSection /> */}
      <IcodeWorksSection />
      <SectionResources
        filterTypes={["Sharetribe Development", "Marketplace Development"]}
      />
    </>
  );
}
