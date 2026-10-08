"use client";

import React, { useMemo, useCallback, useEffect } from "react";
import Image from "next/image";
import { useCompanyLogos } from "@/hooks/useCompanyLogos";
import { logoContainer, topBar, bottomBar } from "../helperData";
import ContentWidth from "../ContentWidth/ContentWidth";
import css from "./StartupToEnterprises.module.css";

/**
 * StartupsToEnterprises component
 *
 * @param {Object} props
 * @param {string} props.hide - Hide title flag
 */
export default function StartupsToEnterprises({ hide = "false" }) {
  const { data: companyLogo = [], loading, error } = useCompanyLogos();
  const showTitle = hide === "false";

  // Log the current state for debugging
  useEffect(() => {}, [companyLogo, loading, error]);

  // Memoize logo list for render with null check
  const logosToRender = useMemo(() => {
    const logos =
      companyLogo && companyLogo.length > 0 ? companyLogo : logoContainer;

    return logos;
  }, [companyLogo]);

  // Memoize logo rendering to prevent redefinition
  const renderLogo = useCallback((src, key, alt = "Company logo") => {
    if (!src) {
      console.log(`Skipping logo ${key} - no source provided`);
      return null;
    }

    return (
      <div key={key} className={css.logoContainer}>
        <Image
          src={src}
          width={120}
          height={60}
          alt={alt}
          loading="lazy"
          className={css.logoImage}
          onError={(e) => {
            console.error(`Failed to load logo: ${src}`, e);
            e.target.style.display = "none";
          }}
        />
      </div>
    );
  }, []);

  // Show loading state
  if (loading) {
    return (
      <div className={css.loadingContainer}>
        <div className={css.loadingSpinner}></div>
        <p>Loading company logos...</p>
      </div>
    );
  }

  // Show error state
  if (error) {
    console.log("Rendering error state:", error);
    return (
      <div className={css.errorContainer}>
        <p>Unable to load company logos. Please try again later.</p>
        <p>Error: {error}</p>
      </div>
    );
  }

  return (
    <div className={`sectionContainer ${css.SectionFromStartupsToWrapper}`}>
      <ContentWidth>
        {/* {showTitle && ( */}
        <div className={css.headingContent}>
          <span className="subTitle">Clients & Partners</span>
          <h2>From Startups To Enterprises, We Transform Digital Visions</h2>
        </div>
        {/* )} */}

        <div className={css.logoWrapper}>
          {Array.isArray(logosToRender) && logosToRender.length > 0 ? (
            logosToRender.map((item, index) => {
              const src =
                item?.attributes?.logo?.data?.attributes?.url || item?.logo;
              return renderLogo(src, `main-${index}`);
            })
          ) : (
            <p>No company logos available</p>
          )}
        </div>
      </ContentWidth>

      {/* === for mobile ===  */}
      <div className={css.logoStripContainer}>
        <div className={css.topBar}>
          {Array.isArray(topBar) && topBar.length > 0 ? (
            topBar.map((item, index) => renderLogo(item?.logo, `top-${index}`))
          ) : (
            <p>No top bar logos available</p>
          )}
        </div>

        <div className={css.bottomBar}>
          {Array.isArray(bottomBar) && bottomBar.length > 0 ? (
            bottomBar.map((item, index) =>
              renderLogo(item?.logo, `bottom-${index}`),
            )
          ) : (
            <p>No bottom bar logos available</p>
          )}
        </div>
      </div>
    </div>
  );
}
