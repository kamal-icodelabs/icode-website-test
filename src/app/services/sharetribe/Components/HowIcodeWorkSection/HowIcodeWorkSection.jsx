"use client"
import React, { useRef, useState, useCallback } from "react";
import Image from "next/image";
import css from "./HowIcodeWorkSection.module.css";
import ContentWidth from "@/component/ContentWidth/ContentWidth";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { caseStudyContent } from "@/component/helperData";
import classNames from "classnames";
import IconCollection from "@/component/IconCollection/IconCollection";
import ProjectInfoCard from "@/component/ProjectInfoCard/ProjectInfoCard";

const cloudinaryLoader = ({ src, width, quality }) => {
  if (!src || typeof src !== "string" || src.indexOf("res.cloudinary.com") === -1) return src;
  const q = quality || "auto";
  const params = `f_auto,q_${q},dpr_auto,c_limit,w_${width}`;
  return src.replace("/upload/", `/upload/${params}/`);
};

export default function HowIcodeWorkSection() {
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
    <section className={css.howIcodeWorkSection}>
      <ContentWidth className={css.Sectionwrapper}>
        <div className={css.caseStudyCarouselContainer}>
          <div className={css.caseStudyHead}>
            <div className={css.caseStudySmall}>Real Sharetribe Builds</div>
            <div className={css.caseStudyLarge}>Three of Our 50+ Sharetribe Marketplaces</div>
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

          <div className={css.navigationBtn}>
            <button ref={prevRef} className={css.previewBtn} />
            <button ref={nextRef} className={css.nextBtn} />
          </div>
        </div>
        <div className={css.statsContainer}>
          <div className={css.stat}>
            <div className={css.label}>50+</div>
            <div className={css.value}>Marketplaces
              Delivered</div>
          </div>
          <span className={css.verticalBar} />
          <div className={css.stat}>
            <div className={css.label}>6+</div>
            <div className={css.value}>Years Sharetribe Specialization</div>
          </div>
          <span className={css.verticalBar} />
          <div className={css.stat}>
            <div className={css.label}>50+</div>
            <div className={css.value}>Sharetribe built-in Extensions</div>
          </div>
          <span className={css.verticalBar} />
          <div className={css.stat}>
            <div className={classNames(css.label, css.greenText)}>90 Days</div>
            <div className={css.value}>Bug-Free Guarantee</div>
          </div>
        </div>
      </ContentWidth>
    </section>
  );
}
