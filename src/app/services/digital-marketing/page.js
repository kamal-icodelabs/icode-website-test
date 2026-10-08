import React from "react";
import dynamic from "next/dynamic";
import Loading from "@/app/loading";

const ImgNcontentSection = dynamic(() => import("./Components/ImgNcontentSection/ImgNcontentSection").then(mod => ({ default: mod.default })), {
  ssr: false,
  loading: () => <Loading />,
});
const AllInOneSolnSection = dynamic(() => import("./Components/ImgNcontentSection/ImgNcontentSection").then(mod => ({ default: mod.AllInOneSolnSection })), {
  ssr: false,
  loading: () => <Loading />,
});
const BlankSection = dynamic(() => import("./Components/ImgNcontentSection/ImgNcontentSection").then(mod => ({ default: mod.BlankSection })), {
  ssr: false,
  loading: () => <Loading />,
});
const EmpowerYourBusiness = dynamic(() => import("./Components/ImgNcontentSection/ImgNcontentSection").then(mod => ({ default: mod.EmpowerYourBusiness })), {
  ssr: false,
  loading: () => <Loading />,
});
const LetsMaximizeYour = dynamic(() => import("./Components/ImgNcontentSection/ImgNcontentSection").then(mod => ({ default: mod.LetsMaximizeYour })), {
  ssr: false,
  loading: () => <Loading />,
});
const SmartChoice = dynamic(() => import("./Components/ImgNcontentSection/ImgNcontentSection").then(mod => ({ default: mod.SmartChoice })), {
  ssr: false,
  loading: () => <Loading />,
});
const WeBuildForToday = dynamic(() => import("./Components/ImgNcontentSection/ImgNcontentSection").then(mod => ({ default: mod.WeBuildForToday })), { ssr: false });
const FAQSection = dynamic(() => import("../react-native/Components/FAQSection/FAQSection"), {
  ssr: false,
  loading: () => <Loading />,
});
const MobileHeroSection = dynamic(() => import("../mobile-app-development/Components/MobileHeroSection/MobileHeroSection"), {
  ssr: false,
  loading: () => <Loading />,
});

export default function page() {
  return (
    <>
      <MobileHeroSection
        title="Enhance Your Online Ranking & Web Presence"
        content="Our data-driven digital marketing services are designed to grow your client base and fuel business growth."
        btnLink="#"
        btnText="Let’s Discuss your project"
        secBtnText="Explore Plans"
        secBtnTextLink="#"
      />
      <ImgNcontentSection />
      <EmpowerYourBusiness />
      <AllInOneSolnSection />
      {/* <BlankSection /> */}
      <SmartChoice />
      <WeBuildForToday />
      <LetsMaximizeYour />
      <div className="sectionTopPadding" />
      <FAQSection data={faqData} />
      <div className="paddingExtra" />
    </>
  );
}

const faqData = [
  {
    question: "What does a digital marketing agency do?",
    answer: "",
  },
  {
    question: "What are digital marketing services?",
    answer: "",
  },
  {
    question: "How much does digital marketing charge?",
    answer: "",
  },
  {
    question: "What are SEO services?",
    answer: "",
  },
  {
    question: "Why SEO is important for business?",
    answer: "",
  },
  {
    question: "How much does SEO cost per month?",
    answer: "",
  },
  {
    question: "What are technical SEO services?",
    answer: "",
  },
  {
    question: "What are social media marketing services?",
    answer: "",
  },

  {
    question: "What is a PPC service?",
    answer: "",
  },

  {
    question: "What are eCommerce SEO, PPC, and shopping ads?",
    answer: "",
  },
];
