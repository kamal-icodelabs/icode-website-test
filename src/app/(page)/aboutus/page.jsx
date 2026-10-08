"use client";
import React from "react";
import dynamic from "next/dynamic";
import css from "./aboutUs.module.css";
import SectionCaseStudy from "@/component/SectionCaseStudy/SectionCaseStudy";
import StartupsToEnterprises from "@/component/SectionStartup/StartupsToEnterprises";
import SectionContactUs from "@/component/SectionContactUs/SectionContactUs";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Loading from "@/app/loading";

const HeroBannerAboutus = dynamic(() => import("./Components/HeroBannerAboutus"), {
  loading: () => <Loading />,
});
const ProfessionalAboutus = dynamic(() => import("./Components/ProfessionalAboutus"), {
  loading: () => <Loading />,
});
const WhatBestAboutus = dynamic(() => import("./Components/WhatBestAboutus"), {
  loading: () => <Loading />,
});
const IcodeCultureAboutus = dynamic(() => import("./Components/IcodeCultureAboutus"), {
  loading: () => <Loading />,
});
const CoreValueAboutus = dynamic(() => import("./Components/CoreValueAboutus"), {
  loading: () => <Loading />,
});
const JourneyPointAboutus = dynamic(() => import("./Components/JourneyPointAboutus"), {
  loading: () => <Loading />,
});

// Custom arrow components for slider
const SampleNextArrow = ({ className, style, onClick }) => (
  <div
    className={className}
    style={{ ...style, display: "block" }}
    onClick={onClick}
  >
    <IconCollection name="slider_next" />
  </div>
);

const SamplePrevArrow = ({ className, style, onClick }) => (
  <div
    className={className}
    style={{ ...style, display: "block" }}
    onClick={onClick}
  >
    <IconCollection name="slider_prev" />
  </div>
);

export default function AboutUsPage() {

  const caseSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <>
      <HeroBannerAboutus />

      <ProfessionalAboutus />

      <WhatBestAboutus />
      <IcodeCultureAboutus />

      <CoreValueAboutus />

      <JourneyPointAboutus />

      <section className={css.caseStudyContainer}>
        <SectionCaseStudy settings={caseSettings} />
      </section>

      <section className={css.clientContainer}>
        <StartupsToEnterprises hide="true" showTitle="true" />
      </section>

      <SectionContactUs />
    </>
  );
}
