"use client";

import React, { useRef, useEffect, useMemo } from "react";
import css from "./ExploreCarousel.module.css";
import ContentWidth from "@/component/ContentWidth/ContentWidth";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import IconCollection from "@/component/IconCollection/IconCollection";
import { carouselData } from "@/app/helpData";
import CaseStudyRelatedCaseStudy from "@/component/CasestudyComponents/CaseStudyRelatedCaseStudy/CaseStudyRelatedCaseStudy";

export default function ExploreCarousel() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  // memoize carousel content
  const slides = useMemo(() => {
    return carouselData.map((item, index) => (
      <SwiperSlide key={index}>
        <div className={css.carouselCard}>
          <div className={css.imgContainer}>
            <Image
              width={608}
              height={353}
              src={item.img}
              alt={item.title}
              loading="lazy"
              quality={100}
            />
          </div>
          <div className={css.contentContainer}>
            <h4>{item?.title}</h4>
            <p>{item?.description}</p>
            <Link href={item.btnLink} className="btn">
              View Case Study
              <IconCollection name="rightArrowTopGray" />
            </Link>
          </div>
        </div>
      </SwiperSlide>
    ));
  }, []);

  return (
    <>
      <div className={css.mainWrapper}>
        <ContentWidth >
          <div className={css.contentContainer}>
            <span>
              <svg
                width="11"
                height="10"
                viewBox="0 0 11 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="5.5" cy="5" r="5" fill="#0075F2" />
              </svg>
              Latest design work
            </span>
            <h2>Explore Portfolio</h2>
          </div>
        </ContentWidth>
      </div>

      <CaseStudyRelatedCaseStudy
        title={false}
        truncateText={true}
      />
    </>
  );
}
