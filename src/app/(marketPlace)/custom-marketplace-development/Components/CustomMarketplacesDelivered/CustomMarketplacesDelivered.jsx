"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import css from "./CustomMarketplacesDelivered.module.css";
import { useRef } from "react";
import ContentWidth from "@/component/ContentWidth/ContentWidth";
import IconCollection from "@/component/IconCollection/IconCollection";
import Link from "next/link";
import ProjectInfoCard from "@/component/ProjectInfoCard/ProjectInfoCard";
import { caseStudyContent } from "@/component/helperData";

const CustomMarketplacesDelivered = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className={css.CustomMarketplacesDeliveredSection}>
      <ContentWidth>
        {/* Header */}
        <div className={css.headerContainer}>
          <div>
            <span className={css.sectionLabel}>Real Builds</span>
            <h2 className={css.sectionTitle}>
              Custom Marketplaces We've Delivered
            </h2>
          </div>

          {/* External Navigation */}
          <div className={css.navContainer}>
            <button ref={prevRef} className={css.navBtn}>
              <IconCollection name="carouselLeft" />
            </button>
            <button ref={nextRef} className={css.navBtn}>
              <IconCollection name="carouselRight" />
            </button>
          </div>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Navigation]}
          spaceBetween={24}
          slidesPerView={3}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          className={css.deliveredProjectsSwiper}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {caseStudyContent?.map((i, index) => (
            <SwiperSlide key={index}>
              <ProjectInfoCard data={i} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* CTA */}
        <div className={css.ctaContainer}>
          <Link href={"/casestudy"} className={css.ctaBtn}>
            See All Case Studies <IconCollection name={"rightArrowTop"} />
          </Link>
        </div>
      </ContentWidth>
    </div>
  );
};

export default CustomMarketplacesDelivered;
