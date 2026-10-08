"use client";

import React, { useEffect, useState, useMemo } from "react";
import css from "./SectionTestimonials.module.css";
import ContentWidth from "../ContentWidth/ContentWidth";
import IconCollection from "../IconCollection/IconCollection";
import Image from "next/image";
import logo from "../../assets/imgs/logo/logo-dark.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { testimonialsContent } from "../helperData";

export default function SectionTestimonials() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const breakpoints = useMemo(
    () => ({
      320: { slidesPerView: 1 },
      640: { slidesPerView: 1.4 },
      1024: { slidesPerView: 3 },
    }),
    []
  );

  return (
    <div>
      <ContentWidth>
        <div className={css.cardContainer}>
          <div className={css.carouselContainer}>
            <div className={css.caseStudyHead}>
              <div className={css.caseStudySmall}>Client Testimonials</div>
              <div className={css.caseStudyLarge}>Your journey with iCodelabs</div>
            </div>
            <Swiper
              slidesPerView={1}
              // spaceBetween={20}
              loop
              spaceBetween={20}
              pagination={isMobile}
              breakpoints={breakpoints}
              modules={[Autoplay, Pagination]}
              className="reviewCarousel customPagination"
            >
              {testimonialsContent?.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className={css.carouselCard}>
                    <div className={css.starNtextimonialText}>
                      <div className={css.StarsContainer}>
                        {[...Array(5)]?.map((_, i) => (
                          <IconCollection name="ratingStars" key={i} />
                        ))}
                      </div>
                      <p className={css.testimonialText} dangerouslySetInnerHTML={{ __html: item.testimonial }} />
                    </div>

                    <div className={css.AnalyticsNauthorContainer}>
                      <div className={css.carouselTestimonialAuthor}>
                        <Image
                          src={item.avatar}
                          width={44}
                          height={44}
                          quality={100}
                          alt={`${item.name} avatar`}
                          loading="lazy"
                        />
                        <div>
                          <p className={css.authorName}>{item.name}</p>
                          <p className={css.authorPosition}>{item.position}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </ContentWidth>
    </div>
  );
}
