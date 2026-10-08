import React from "react";
import HeroSectionMarketplace from "./Components/HeroSectionMarketplace/HeroSectionMarketplace";
import HonestGuide from "./Components/HonestGuide/HonestGuide";
import WhatWeDeliver from "./Components/WhatWeDeliver/WhatWeDeliver";
import CustomMarketPlaceTechStack from "./Components/CustomMarketPlaceTechStack/CustomMarketPlaceTechStack";
import CustomMarketBuildProcess from "./Components/CustomMarketBuildProcess/CustomMarketBuildProcess";
import CustomMarketplacePricing from "./Components/CustomMarketplacePricing/CustomMarketplacePricing";
import CustomMarketplacesDelivered from "./Components/CustomMarketplacesDelivered/CustomMarketplacesDelivered";
import CustomMarketplacesReviews from "./Components/CustomMarketplacesReviews/CustomMarketplacesReviews";
import CustomMarketplaceForm from "./Components/CustomMarketplaceForm/CustomMarketplaceForm";
import SectionResources from "@/component/SectionResources/SectionResources";

const Page = () => {
  return (
    <>
      <HeroSectionMarketplace />
      <HonestGuide />
      <WhatWeDeliver />
      <CustomMarketPlaceTechStack />
      <CustomMarketBuildProcess />
      <CustomMarketplacePricing />
      <CustomMarketplacesDelivered />
      <CustomMarketplacesReviews />
      <CustomMarketplaceForm />
      <SectionResources
        filterTypes={["App Development", "Marketplace Development"]}
      />
    </>
  );
};

export const revalidate = 3600;

export default Page;
