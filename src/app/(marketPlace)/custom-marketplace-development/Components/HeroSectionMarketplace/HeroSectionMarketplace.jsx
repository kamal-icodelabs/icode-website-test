import ContentWidth from "@/component/ContentWidth/ContentWidth";
import IconCollection from "@/component/IconCollection/IconCollection";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import css from "./HeroSectionMarketplace.module.css";

const HeroSectionMarketplace = () => {
  return (
    <section className={css.customMarketplaceHeroSection}>
      <ContentWidth>
        <div className={css.heroWrapper}>
          <div className={css.heroContent}>
            <span className={css.heroLabel}>
              Custom Marketplace Development
            </span>
            <h1 className={css.heroTitle}>
              When Your Marketplace Needs More Than a Platform Can Give.
            </h1>
            <p className={css.heroInfo}>
              We build fully custom marketplace platforms — from scratch, on
              your architecture — when the business model, transaction logic, or
              scale requirements go beyond what Sharetribe or any off-the-shelf
              platform can support.
            </p>

            <div className={css.btnContainer}>
              <Link
                href="https://calendly.com/jaytiwary"
                className={css.primaryBtn}
              >
                Book a Free Scoping Call <IconCollection name="rightArrowTop" />
              </Link>

              <Link href="#investment" className={css.secondaryBtn}>
                See Pricing Instead
                <IconCollection name="rightArrowTop" />
              </Link>
            </div>

            <div className={css.heroKeys}>
              <div className={css.key}>
                <p className={css.keyValue}>AI-Augmented</p>
                <span className={css.keyLabel}>Delivery at every stage</span>
              </div>

              <div className={css.key}>
                <p className={css.keyValue}>6+ Years</p>
                <span className={css.keyLabel}>Marketplace expertise</span>
              </div>
              <div className={css.key}>
                <p className={css.keyValue}>Fixed-Price</p>
                <span className={css.keyLabel}>Proposals always</span>
              </div>
              <div className={css.key}>
                <p className={classNames(css.keyValue, css.greenColor)}>
                  90 Days
                </p>
                <span className={css.keyLabel}>Bug-Free Guarantee</span>
              </div>
            </div>
          </div>

          <div className={css.heroimgWrapper}>
            <div className={css.heroImgWrapper}>
              <Image
                src="/assests/img/marketplace/custom-marketplace/AI-augmented.png"
                alt="hero image"
                fill
                priority
                fetchPriority="high"
              />
            </div>

            <p className={css.imgText}>AI-augmented delivery at every stage</p>
          </div>
        </div>
      </ContentWidth>
    </section>
  );
};

export default HeroSectionMarketplace;
