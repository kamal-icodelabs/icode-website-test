import React from 'react'
import DevCostHeroSection from './Components/DevCostHeroSection/DevCostHeroSection'
import DevCostDeterminesCost from './Components/DevCostDeterminesCost/DevCostDeterminesCost'
import WhatItCost from './Components/WhatItCost/WhatItCost'
import FullCustomMarketplace from './Components/FullCustomMarketplace/FullCustomMarketplace'
import FullComparison from './Components/FullComparison/FullComparison'
import OngoingCosts from './Components/OngoingCosts/OngoingCosts'
import RealisticDeliveryTimelines from './Components/RealisticDeliveryTimelines/RealisticDeliveryTimelines'
import MarketPlaceFaq from './Components/MarketPlaceFaq/MarketPlaceFaq'
import GetFixedPrice from './Components/GetFixedPrice/GetFixedPrice.jsx'
import SectionResources from '@/component/SectionResources/SectionResources'


export const revalidate = 3600;

export default function Page() {
    return (
        <>
            <DevCostHeroSection />
            <DevCostDeterminesCost />
            <WhatItCost />
            <FullCustomMarketplace />
            <FullComparison />
            <OngoingCosts />
            <RealisticDeliveryTimelines />
            <MarketPlaceFaq />
            <GetFixedPrice />
            <SectionResources
                filterTypes={["Marketplace Development", "App Development"]}
            />
        </>
    )
}