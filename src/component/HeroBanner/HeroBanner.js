"use client";

import React from "react";
import css from "./HeroBanner.module.css";
import { PrimaryBtnLink } from "../Animations/CTAbutton";
import IconCollection from "../IconCollection/IconCollection";
import Image from "next/image";
import classNames from "classnames";
import Link from "next/link";

// const cloudinaryLoader = ({ src, width, quality }) => {
//   if (!src || typeof src !== "string" || src.indexOf("res.cloudinary.com") === -1) return src;
//   const q = quality || "auto";
//   const params = `f_auto,q_${q},dpr_auto,c_limit,w_${width}`;
//   return src.replace("/upload/", `/upload/${params}/`);
// };

const HeroBanner = () => {
  return (
    <section className={css.heroBannerWrapper}>
      <div className={css.heroBannerContainer}>
        <div className={css.heroContentBox}>
          <span className={css.labelHeading}>AI-Augmented Development</span>

          <h1 className={css.heroTitle}>
            Build Smarter. Launch Faster. <span>With AI.</span>
          </h1>

          <p className={css.heroInfo}>
            iCodelabs is an <span>AI-augmented</span> development agency
            specialising in marketplaces, custom web platforms, and{" "}
            <span>AI-native applications</span>. Every developer builds with AI, and every build is senior-reviewed at each stage — architecture, code, QA, deployment — so you launch in weeks without inheriting technical debt.
          </p>

          <div className={css.heroBtnContainer}>
            <PrimaryBtnLink href="https://calendly.com/jaytiwary" className={css.btn}>
              Start Your Project
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.707092 11L10.7071 1"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
                <path
                  d="M0.707092 1H10.7071V11"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
              </svg>
            </PrimaryBtnLink>

            <Link href="/casestudy" className={css.secondaryBtn}>
              See Our Work
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.707092 11L10.7071 1"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
                <path
                  d="M0.707092 1H10.7071V11"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>

          <div className={css.statsContainer}>
            <div className={css.stat}>
              <div className={css.label}>50+</div>
              <div className={css.value}>Marketplaces Delivered</div>
            </div>

            <span className={css.verticalBar} />
            <div className={css.stat}>
              <div className={css.label}>AI-Augmented</div>
              <div className={classNames(css.value, css.devTeamText)}>
                3-4x Faster Builds
              </div>
            </div>

            <span className={css.verticalBar} />
            <div className={css.stat}>
              <div className={classNames(css.label, css.greenText)}>
                90 Days
              </div>
              <div className={css.value}>Bug-Free Guarantee</div>
            </div>

            <span className={css.verticalBar} />
            <div className={css.stat}>
              <div className={css.label}>
                <IconCollection name={"tick"} /> Vetted
              </div>
              <div className={css.value}>Sharetribe Expert Partner</div>
            </div>

            <span className={css.verticalBar} />
            <div className={css.stat}>
              <div className={css.label}>6+</div>
              <div className={css.value}>Years Sharetribe Specialists</div>
            </div>
          </div>
        </div>

        <div className={css.heroImageContainer}>
          <Image
            fill
            src="/assests/newImage/landingpage/Hero Image.png"
            alt="banner image"
            priority
            fetchPriority="high"
            sizes="(max-width: 590px) 100vw, (max-width: 1200px) 45vw, 630px"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
