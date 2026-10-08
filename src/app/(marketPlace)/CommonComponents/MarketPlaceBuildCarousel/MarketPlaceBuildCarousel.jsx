"use client";

import React, { useRef } from "react";
import css from "./MarketPlaceBuildCarousel.module.css";
import IconCollection from "@/component/IconCollection/IconCollection";
import ContentWidth from "@/component/ContentWidth/ContentWidth";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Link from "next/link";
// ---- carousel imports------
import "swiper/css";
import "swiper/css/navigation";
import ProjectInfoCard from "@/component/ProjectInfoCard/ProjectInfoCard";
import { caseStudyContent } from "@/component/helperData";

const MarketPlaceBuildCarousel = ({ data }) => {
  const { section } = data;

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className={css.section}>
      <ContentWidth>
        {/* Heading + Buttons */}
        <div className={css.headingNBtn}>
          <div className={css.sectionHeading}>
            <span className={css.sectionLabel}>{section.label}</span>
            <h2 className={css.sectionTitle}>{section.title}</h2>
          </div>

          <div className={css.carouselBtns}>
            <button ref={prevRef}>
              <IconCollection name={"carouselLeft"} />
            </button>
            <button ref={nextRef}>
              <IconCollection name={"carouselRight"} />
            </button>
          </div>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Navigation]}
          spaceBetween={24}
          slidesPerView={3}
          onBeforeInit={(swiper) => {
            // connect refs to swiper navigation
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {caseStudyContent.map((i) => (
            <SwiperSlide>
              <ProjectInfoCard data={i} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* CTA */}
        <Link href={"/casestudy"} className={css.seeAllBtn}>
          See All Case Studies <IconCollection name={"rightArrowTop"} />
        </Link>
      </ContentWidth>
    </section>
  );
};

export default MarketPlaceBuildCarousel;
