import SectionResources from '@/component/SectionResources/SectionResources';
import HeroSectionShareTribeExtension from './components/HeroSectionShareTribeExtension/HeroSectionShareTribeExtension';
// import WeProvideShareTribeExtension from './components/WeProvideShareTribeExtension/WeProvideShareTribeExtension';
import ThisPageForShareTribeExtension from './components/ThisPageForShareTribeExtension/ThisPageForShareTribeExtension';
import HowOurSharetribeShareTribeExtension from './components/HowOurSharetribeShareTribeExtension/HowOurSharetribeShareTribeExtension';
// import WhyWeDontDo from './components/WhyWeDontDo/WhyWeDontDo';
import SharetribeFeatureShareTribeExtension from './components/SharetribeFeatureShareTribeExtension/SharetribeFeatureShareTribeExtension';
import FeedBackFormShareTribeExtension from './components/FeedBackFormShareTribeExtension/FeedBackFormShareTribeExtension';


export default function SharetribeExtension() {
    return (
        <>
            <HeroSectionShareTribeExtension />
            {/* <WeProvideShareTribeExtension /> */}
            <ThisPageForShareTribeExtension />
            {/* <WhyWeDontDo /> */}
            <SharetribeFeatureShareTribeExtension />
            <HowOurSharetribeShareTribeExtension />
            <FeedBackFormShareTribeExtension />
            <SectionResources filterTypes={["Sharetribe Development"]} />
        </>
    );
}