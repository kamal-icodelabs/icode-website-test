import React from "react";
import css from "./OurApproach.module.css";
import ContentWidth from "@/component/ContentWidth/ContentWidth";
import IconCollection from "@/component/IconCollection/IconCollection";
import SectionExploreAnalyze from "@/component/SectionExploreAnalyze/SectionExploreAnalyze";
import ScetionClientCollaboration from "@/component/SectionClientCollaboration/SectionClientCollaboration";
import SectionUseStrategically from "@/component/SectionUseStrategically/SectionUseStrategically";
import SectionSuccessStories from "@/component/SectionSuccessStories/SectionSuccessStories";
import Image from "next/image";

const OG_IMAGE =
  "https://res.cloudinary.com/dwpvv68ii/image/upload/f_auto,q_auto,c_fill,w_1200,h_630/v1759140505/Group_1410089110_2_paglw7.png";

export const metadata = {
  title: "Our Approach | iCodelabs",
  description:
    "Discover iCodelabs’ agile, transparent, customer‑centric approach to delivering high‑quality web, mobile, and marketplace products.",
  alternates: { canonical: "/ourapproach" },
  openGraph: {
    type: "website",
    title: "Our Approach | iCodelabs",
    description:
      "How iCodelabs delivers AI-augmented marketplace development — fixed pricing, clear scope, 90-day guarantee.",
    url: "https://icodelabs.co/ourapproach",
    siteName: "iCodelabs",
    images: [
      { url: OG_IMAGE, width: 1200, height: 630, alt: "Our Approach | iCodelabs" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Approach | iCodelabs",
    description:
      "Agile, transparent, customer-centric delivery — fixed pricing, 90-day guarantee.",
    images: [OG_IMAGE],
  },
};

const page = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Our Approach | iCodelabs",
            description:
              "How iCodelabs delivers AI-augmented marketplace development — fixed pricing, clear scope, 90-day guarantee.",
            url: "https://icodelabs.co/ourapproach",
          }),
        }}
      />
      <div className={css.ourApproachWrapper}>
        <div className={css.glowbgLeft} />
        <div className={css.glowbgRight} />

        <ContentWidth>
          <div className={css.ourApproachContainer}>
            <div className={css.ourApproachLeftContainer}>
              <h1 className={css.ourApproachHeading}>
                How We Deliver: Agile. Transparent. Customer-Centric.
              </h1>

              <p>
                Your product is our priority. We build in a culture of open
                communication, close collaboration, and complete transparency —
                ensuring every decision moves you closer to success
              </p>

              <div className={css.approachButtonWrapper}>
                <button className={`${css.approachButtons} primaryBtn`}>
                  Book a Free Consultation
                  <IconCollection
                    name="rightArrowTop"
                    className={css.arrowIcon}
                  />
                </button>

                <button className={css.hireButton}>
                  &nbsp;Hire developer
                  <IconCollection
                    name="rightArrowTop"
                    className={css.arrowIcon}
                  />
                </button>
              </div>
            </div>

            <div className={css.ourApproachRightContainer}>
              <div className={css.imgContainer}>
                <Image
                  src={"/assests/img/ourApproach-hero.png"}
                  fill
                  alt="our-approach"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </ContentWidth>
      </div>

      <SectionExploreAnalyze />
      <ScetionClientCollaboration />
      <SectionUseStrategically />
      <SectionSuccessStories />

      {/* next section */}
      <ContentWidth>
        <div className={css.powerMainContainer}>
          <div className={css.powerWrapper}>
            <div className={css.leftPowerContainer}>
              <div className={css.powerBox}>
                <IconCollection name="icodeLogo" />

                <div>
                  <h1 className={css.powerHeading}>Want results like these?</h1>
                  <p className={css.powerDescription}>
                    Power your team with iCodelabs
                  </p>
                </div>
              </div>
            </div>

            <div className={css.rightPowerContainer}>
              <p className={css.rightPowerDescription}>
                We believe that designing products and services in close
                partnership with our clients is the only way to have a real
                impact on their business.
              </p>
            </div>
          </div>

          <div className={css.exploreButtonwrapper}>
            <button className="primaryBtn">Explore More Case Studies 👋</button>
          </div>
        </div>
      </ContentWidth>
    </>
  );
};

export default page;
