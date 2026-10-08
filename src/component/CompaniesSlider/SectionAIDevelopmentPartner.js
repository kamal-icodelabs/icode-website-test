"use client";

import React from "react";
import css from "./SectionAIDevelopmentPartner.module.css";
import ContentWidth from "../ContentWidth/ContentWidth";
import IconCollection from "../IconCollection/IconCollection";
import bottomGradient from "../../assets/imgs/images/aiDevBottomGradient.svg";
import Image from "next/image";
import { aiDevContent } from "../helperData";
import { PrimaryBtnLink } from "../Animations/CTAbutton";

// Reusable CTA Block
const CTABlock = ({ isMobile = false }) => (
  <div className={isMobile ? css.aiDevCardWrappermobile : css.aiDevCardWrapper}>
    <IconCollection name="logoFavicon" />
    <h4>Focus on Growth While We Drive Your Tech Innovation.</h4>
    <p>Let us handle the technical complexity</p>
    <PrimaryBtnLink
      href="https://calendly.com/jaytiwary"
      aria-label="Schedule a call"
    >
      Innovate With Us
      <IconCollection name="rightArrowTop" />
    </PrimaryBtnLink>
  </div>
);

const SectionAIDevelopmentPartner = () => {
  return (
    <div className={css.SectionAIDevelopmentPartnerWrapper}>
      <Image
        src={bottomGradient}
        alt="AI Development Section Bottom Gradient"
        className={css.gradientBottom}
        loading="lazy"
      />

      <ContentWidth>
        <div className={css.leftNrightContainer}>
          {/* Left Content */}
          <div className={css.leftContentContainer}>
            <h2>Your AI Development Partner</h2>
            <p>
              At iCodeLabs, we are passionate about creating custom mobile and web applications that solve real-world problems.
            </p>
            <CTABlock />
          </div>

          {/* Right Content */}
          <div className={css.rightContentWrapper}>
            <div className={css.cardWrapper}>
              {aiDevContent?.map((item, index) => (
                <div key={index} className={css.cardContainer}>
                  <IconCollection name="aidevCheck" />
                  <div>
                    <h6>{item.title}</h6>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile CTA */}
          <div className={css.leftContentContainerMobile}>
            <CTABlock isMobile />
          </div>
        </div>
      </ContentWidth>
    </div>
  );
};

export default React.memo(SectionAIDevelopmentPartner);
