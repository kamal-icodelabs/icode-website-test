import React from "react";
import css from "./SectionGrowYour.module.css";
import ContentWidth from "../ContentWidth/ContentWidth";
import GrowthImg from "../../assets/imgs/images/growth.png";
import Image from "next/image";
import { PrimaryBtnLink } from "../Animations/CTAbutton";
import Link from "next/link";

export default function SectionGrowYour() {
  return (
    <div className={css.growYourSectionWrapper}>
      <div className={css.eclipseLeft} />
      <div className={css.eclipseRight} />
      <ContentWidth>
        <div className={css.contentNimgWrapper}>
          <div className={css.contentWrapper}>
            <h2>Marketplace projects from $3,000.</h2>
            <p>
              Enterprise builds with AI and mobile from $6,000. Most projects
              delivered in 3–12 weeks. Not sure which fits? Book a free scoping
              call — we'll tell you honestly.
            </p>

            <div className={css.bottomButton}>
              <PrimaryBtnLink href="https://calendly.com/jaytiwary">
                Book a free call
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 11L11 1"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M1 1H11V11"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </PrimaryBtnLink>
              <Link
                href="/services/sharetribe"
                className={`${css.priceButton} defaultGradientBtn`}
              >
                See Full Pricing & Packages
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 11L11 1"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M1 1H11V11"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </div>

          <div className={css.imgContainer}>
            <Image
              alt="Illustration showing growth and scaling with iCodeLabs"
              src={GrowthImg}
              quality={100}
              width={631.26}
              height={370.32}
              loading="lazy"
            />
          </div>
        </div>
      </ContentWidth>
    </div>
  );
}
