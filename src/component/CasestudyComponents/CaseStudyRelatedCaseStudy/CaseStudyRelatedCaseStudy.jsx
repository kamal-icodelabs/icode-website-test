"use client";
import React, { useRef } from "react";
import css from "./CaseStudyRelatedCaseStudy.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import classNames from "classnames";
import ContentWidth from "@/component/ContentWidth/ContentWidth";
import { caseStudyContent } from "@/component/helperData";
import { SmallCard } from "@/app/(page)/casestudy/cards";

const CaseStudyRelatedCaseStudy = ({ id, excludeSlug, truncateText, title }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const relatedItems = excludeSlug
    ? caseStudyContent.filter((i) => i.link !== `/casestudy/${excludeSlug}`)
    : caseStudyContent;

  return (
    <div className={css.RelatedCaseStudies}>
      <ContentWidth>
        <div id={id}>
          {
            title &&
            <h2>Related Case Studies</h2>
          }

          <div className={css.relatedCaseStudiesSlider}>
            <button
              ref={prevRef}
              className={classNames(
                css.relatedCaseStudiesNavBtn,
                css.relatedCaseStudiesPrevBtn,
              )}
              type="button"
            >
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.5 27L13.5 18L22.5 9"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <Swiper
              slidesPerView={2}
              spaceBetween={24}
              modules={[Navigation]}
              onSwiper={(swiper) => {
                if (prevRef.current && nextRef.current) {
                  swiper.params.navigation.prevEl = prevRef.current;
                  swiper.params.navigation.nextEl = nextRef.current;
                  if (!swiper.navigation.initialized) {
                    swiper.navigation.init();
                  }
                  swiper.navigation.update();
                }
              }}
              breakpoints={{
                0: { slidesPerView: 1.1, spaceBetween: 16 },
                992: { slidesPerView: 2, spaceBetween: 24 },
              }}
            >
              {relatedItems.map((i, index) => (
                <SwiperSlide key={index}>
                  <SmallCard key={i.link || i.title} data={i} truncateText={truncateText} />
                </SwiperSlide>
              ))}
            </Swiper>

            <button
              ref={nextRef}
              className={classNames(
                css.relatedCaseStudiesNavBtn,
                css.relatedCaseStudiesNextBtn,
              )}
              type="button"
            >
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.5 27L22.5 18L13.5 9"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </ContentWidth>
    </div>
  );
};

export default CaseStudyRelatedCaseStudy;
