"use client";
import React, { useState } from "react";
import css from "./MarketPlaceSection.module.css";
import Link from "next/link";
import ContentWidth from "@/component/ContentWidth/ContentWidth";
import classNames from "classnames";
import { ServiceMarketplaceCard } from "@/component/CommonComponents/ServiceMarketplaceCard/ServiceMarketplaceCard";

const arrowIcon = (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 11L11 1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M1 1H11V11" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
);

export default function MarketPlaceSection() {
  const [hoverIndex, setHoverIndex] = useState(null);

  const handleScrollToPackages = (e) => {
    e.preventDefault();
    const element = document.getElementById("packagesection");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* tag  */}
      <ContentWidth>
        <div className={css.lookingSection}>
          <div className={css.lookingSectionContent}>
            <h2>What are you looking to do?</h2>
            <div className={css.launchPackagesGrid}>
              {launchPackagesList.map((i, idx) => {
                return (
                  <div key={idx} className={css.packageCard} style={{ backgroundColor: i.backgroundColor }}>
                    <div className={css.packageLeft}>
                      <div>
                        <h3 style={{ color: i.headingColor }}>{i.heading}</h3>
                        <p style={{ color: i.subheadingColor }}>{i.description}</p>
                      </div>
                      {idx === 0 ? (
                        <button className={classNames(css.packageDesktopLink, css.viewLaunchBtn)} onClick={handleScrollToPackages} style={{ color: i.buttonColor }}>{i.buttonName} {arrowIcon}</button>
                      ) : (
                        <Link className={classNames(css.packageDesktopLink, css.exploreFeatureBtn)} href="/services/sharetribe-extension" style={{ color: i.buttonColor }}>{i.buttonName} {arrowIcon}</Link>
                      )}
                    </div>
                    <div className={css.packageRight}>
                      <img src={i.packageImage} alt="arrow" loading="lazy" />
                    </div>
                    {idx === 0 ? (
                      <button className={classNames(css.packageMobileLink, css.viewLaunchBtn)} onClick={handleScrollToPackages} style={{ color: i.buttonColor }}>{i.buttonName} {arrowIcon}</button>
                    ) : (
                      <Link href="/services/sharetribe-extension" className={classNames(css.packageMobileLink, css.exploreFeatureBtn)} style={{ color: i.buttonColor }}>{i.buttonName} {arrowIcon}</Link>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className={css.marketPlaceSectionWrapper}>
          <div className={css.contentContainer}>
            <p className={css.subTitle}>MARKETPLACE VERTICALS</p>
            <h2 className={css.heading}>
              Marketplace Models We've Built with Sharetribe
            </h2>
            <div className={css.descriptionText}>50+ founders worldwide — custom flows, payments, and integrations for every niche.</div>
          </div>

          <ServiceMarketplaceCard />

        </div>
      </ContentWidth>
    </>
  );
}

const breakpoints = {
  0: {
    slidesPerView: 1,
    spaceBetween: 10,
  },
  640: {
    slidesPerView: 2.3,
    spaceBetween: 20,
  },
  768: {
    slidesPerView: 2.6,
    spaceBetween: 20,
  },
  1024: {
    slidesPerView: 3.3,
    spaceBetween: 20,
  },

  1240: {
    slidesPerView: 4.3,
    spaceBetween: 20,
  },

  1560: {
    slidesPerView: 5.3,
    spaceBetween: 20,
  },
};

const launchPackagesList = [
  {
    heading: "Launch a New Sharetribe Marketplace",
    description: "Start your marketplace journey with ready-to-launch Sharetribe solutions built for speed and scale.",
    buttonName: "View Launch Packages",
    packageImage: "/assests/img/launch-packg.gif",
    backgroundColor: "#F97261",
    headingColor: "#FFFFFF",
    subheadingColor: "#FFFFFF",
  },
  {
    heading: "Extend an Existing Sharetribe Marketplace",
    description: "Enhance your current Sharetribe marketplace with powerful features and custom extensions.",
    buttonName: "Explore Feature Extensions",
    packageImage: "/assests/img/feature-ext.gif",
    backgroundColor: "#FFF6E5",
    headingColor: "#1B1B1B",
    subheadingColor: "#323E4F",
  },
]