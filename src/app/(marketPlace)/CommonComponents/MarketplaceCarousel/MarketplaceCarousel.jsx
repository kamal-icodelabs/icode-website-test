"use client";

import IconCollection from "@/component/IconCollection/IconCollection";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import css from "./MarketplaceCarousel.module.css";

import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import ContentWidth from "@/component/ContentWidth/ContentWidth";

const MarketplaceCarousel = ({ data }) => {
  const { heading, cards } = data;

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className={css.sectionContainer}>
      <ContentWidth>
        <div className={css.contentNarrow}>
          <div className={css.sectionHeading}>
            <p className={css.sectionLabel}>{heading?.label}</p>
            <h2 className={css.sectionTitle}>{heading?.title}</h2>
          </div>

          {/* Navigation */}
          <div className={css.carouselNavigation}>
            <button ref={prevRef} type="button">
              <IconCollection name="carouselLeft" />
            </button>

            <button ref={nextRef} type="button">
              <IconCollection name="carouselRight" />
            </button>
          </div>
        </div>
      </ContentWidth>

      <Swiper
        modules={[Navigation]}
        className={css.carouselContainer}
        spaceBetween={20}
        slidesPerView={4.2}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        onAfterInit={(swiper) => {
          swiper.wrapperEl.style.transform =
            "translate3d(var(--carouselPosition), 0px, 0px)";
        }}
        breakpoints={{
          320: { slidesPerView: 1.2 },
          768: { slidesPerView: 3.2 },
          1024: { slidesPerView: 4.2 },
        }}
      >
        {cards?.map((item, index) => (
          <SwiperSlide key={index}>
            <div className={css.card}>
              {/* TEXT */}
              <div className={css.cardContent}>
                <h3 className={css.cardTitle}>{item?.title}</h3>
                <p className={css.cardDesc}>{item?.description}</p>
              </div>

              {/* IMAGE */}
              <div className={css.cardImg}>
                <img
                  src={item.image}
                  // width={374}
                  // height={256}
                  alt={item.title}
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default MarketplaceCarousel;
