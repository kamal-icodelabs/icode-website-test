"use client";

import React, { useRef, useState, useCallback } from "react";
import css from "./SectionmCaseStudy.module.css";
import ContentWidth from "../ContentWidth/ContentWidth";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import Image from "next/image";
import IconCollection from "../IconCollection/IconCollection";
import { caseStudyContent } from "../helperData";
import { PrimaryBtnLink } from "../Animations/CTAbutton";
import ProjectInfoCard from "../ProjectInfoCard/ProjectInfoCard";
import Link from "next/link";
import classNames from "classnames";

// Cloudinary loader for automatic f_auto, q_auto, dpr_auto and width-based transforms
const cloudinaryLoader = ({ src, width, quality }) => {
  if (
    !src ||
    typeof src !== "string" ||
    src.indexOf("res.cloudinary.com") === -1
  )
    return src;
  const q = quality || "auto";
  const params = `f_auto,q_${q},dpr_auto,c_limit,w_${width}`;
  return src.replace("/upload/", `/upload/${params}/`);
};

export default function CaseStudy() {
  const [progress, setProgress] = useState(0);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const handleSlideChange = useCallback((swiper) => {
    const totalSlides = swiper.slides.length || 1;
    const currentIndex = swiper.activeIndex + 1;
    const progressPercentage = (currentIndex / totalSlides) * 100;
    setProgress(progressPercentage);
  }, []);

  return (
    <div className={css.caseStudyContainer}>
      <ContentWidth>
        <div className={css.caseStudyCarouselContainer}>
          <div className={css.caseStudyHead}>
            <div className={css.caseStudySmall}>Case Studies</div>
            <div className={css.caseStudyLarge}>
              50+ Marketplaces Built. Here Are Four.
            </div>
          </div>
          <Swiper
            onSlideChange={handleSlideChange}
            onInit={handleSlideChange}
            slidesPerView={1}
            breakpoints={{
              320: { slidesPerView: 1 },
              520: { slidesPerView: 1.3 },
              700: { slidesPerView: 1.8 },
              800: { slidesPerView: 2.2 },
              1280: { slidesPerView: 3 },
            }}
            spaceBetween={30}
            modules={[Navigation]}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper) => {
              if (swiper.params.navigation) {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
              }
            }}
            className="caseStudyCarouselWrapper"
          >
            {caseStudyContent.map((item, index) => (
              <SwiperSlide key={item.id || index}>
                <ProjectInfoCard data={item} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className={css.allCases}>
            <Link href={"/casestudy"} className={classNames('defaultGradientBtn',css.redirectBtn)}>
              See All Case Studies
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

          {/* Navigation Buttons */}
          <div className={css.navigationBtn}>
            <button ref={prevRef} className={css.previewBtn} />
            <button ref={nextRef} className={css.nextBtn} />
          </div>

          {/* Progress Bar */}
          {/* <div className={css.progressBar}>
            <div
              className={css.progressingBar}
              style={{ width: `${progress}%` }}
            />
          </div> */}
        </div>
      </ContentWidth>
    </div>
  );
}
