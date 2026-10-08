"use client";

import React, { useRef, useState } from "react";
import ContentWidth from "@/component/ContentWidth/ContentWidth";
import IconCollection from "@/component/IconCollection/IconCollection";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import css from "./ShareTribeReviewCrousel.module.css";
import { reviewData } from "@/app/helpData";
import "swiper/css";

const breakPoints = {
  0: { slidesPerView: 1, spaceBetween: 20 },
  768: { slidesPerView: 2.4, spaceBetween: 20 },
  1200: { slidesPerView: 2.9, spaceBetween: 20 },
  1400: { slidesPerView: 3.8, spaceBetween: 20 },
  1800: { slidesPerView: 4.8, spaceBetween: 20 },
};

export default function ShareTribeReviewCrousel() {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const prevRefDesktop = useRef(null);
  const nextRefDesktop = useRef(null);
  const prevRefMobile = useRef(null);
  const nextRefMobile = useRef(null);

  return (
    <div>
      <ContentWidth className={css.mainWrapper}>
        <div className={css.contentNnavigationBtn}>
          <h2>Why our customers think we’re the best</h2>
          <div className={`${css.navigationBtnDesktop} ${css.navigationBtn}`}>
            <button
              ref={prevRefDesktop}
              className={css.previewBtn}
              aria-label="Previous"
              onClick={() => swiperInstance?.slidePrev()}
            />
            <button
              ref={nextRefDesktop}
              className={css.nextBtn}
              aria-label="Next"
              onClick={() => swiperInstance?.slideNext()}
            />
          </div>
        </div>
      </ContentWidth>

      <div className={css.reviewCarouselWrapper}>
        <Swiper
          modules={[Navigation]}
          loop
          onSwiper={(swiper) => setSwiperInstance(swiper)}
          className="shareTribeReview"
          breakpoints={breakPoints}
        >
          {reviewData.map((item, index) => (
            <SwiperSlide key={index}>
              <div className={css.reviewCard}>
                <div>
                  <div className={css.imgContainer}>
                    {/* <Image
                    src={item.logo}
                    alt={`${item.name} logo`}
                    width={100}
                    height={30}
                    loading="lazy"
                  /> */}
                    {/* {item.logo} */}
                    {[...Array(5)]?.map((_, i) => (
                      <IconCollection name="ratingStars" key={i} />
                    ))}
                  </div>

                  {/* <IconCollection name="qutoquoteGray" /> */}
                  <p className={css.reviewContent}>{item.content}</p>
                </div>

                <div className={css.authorContainer}>
                  <Image
                    src={item.img}
                    alt={item.name}
                    width={50}
                    height={50}
                    loading="lazy"
                  />
                  <div>
                    <h6>{item.name}</h6>
                    <p>{item.position}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className={`${css.navigationBtnMobile} ${css.navigationBtn}`}>
        <button
          ref={prevRefMobile}
          className={css.previewBtn}
          aria-label="Previous"
          onClick={() => swiperInstance?.slidePrev()}
        />
        <button
          ref={nextRefMobile}
          className={css.nextBtn}
          aria-label="Next"
          onClick={() => swiperInstance?.slideNext()}
        />
      </div>
    </div>
  );
}
