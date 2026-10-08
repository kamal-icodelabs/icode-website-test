"use client";

import React, { useRef } from "react";
import css from "./CustomMarketplacesReviews.module.css";
import classNames from "classnames";
import Image from "next/image";
import IconCollection from "@/component/IconCollection/IconCollection";
import ContentWidth from "@/component/ContentWidth/ContentWidth";
// swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const reviews = [
  {
    rating: 5,
    text: `<strong>We’ve worked with Innovative Code Labs for years, and their full-stack developers have been crucial from concept to launch of our AI powered market research solution.</strong> They adapt quickly, deliver high-quality work with strong ownership, and integrate seamlessly with our team—helping us bring our vision to life.`,
    name: "Sridhar",
    role: "Co-founder, InsightGig",
    avatar: "/assests/img/marketplace/custom-marketplace/insight.svg",
  },
  {
    rating: 5,
    text: `<strong>It has been a pleasure working with Jay and the rest of the team on our PromoTix Reseller platform.</strong> Their expertise and collaborative approach made the development process smooth and efficient.`,
    name: "Sebastian Schulze",
    role: "Promotix",
    avatar: "/assests/img/marketplace/custom-marketplace/promotix.svg",
  },
  {
    rating: 5,
    text: `<strong>As a non-technical founder, working with Jay and the iCodeLabs team has been absolutely invaluable for building Sbonssy.</strong> We started on Sharetribe, but iCodeLabs helped us pivot to a fully custom platform. More than developers, they were true partners shaping the product, solving complex problems, and guiding the right decisions.`,
    name: "Liro",
    role: "Sbonssy",
    avatar: "/assests/img/marketplace/custom-marketplace/sbonssy-full.svg",
  },
  {
    rating: 5,
    text: `<strong>As a non-technical founder, working with Jay and the iCodeLabs team has been absolutely invaluable for building Sbonssy.</strong> We started on Sharetribe, but iCodeLabs helped us pivot to a fully custom platform. More than developers, they were true partners shaping the product, solving complex problems, and guiding the right decisions.`,
    name: "Liro",
    role: "Sbonssy",
    avatar: "/assests/img/marketplace/custom-marketplace/sbonssy-full.svg",
  },
];

const CustomMarketplacesReviews = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className={css.section}>
      <ContentWidth>
        <div className={css.wrapper}>
          {/* Header */}
          <div className={css.header}>
            <div>
              <span className={css.label}>Client Testimonials</span>
              <h2 className={css.title}>Your journey with iCodeLabs</h2>
            </div>

            {/* Navigation */}
            <div className={css.nav}>
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
            className={css.swiper}
            breakpoints={{
              320: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {reviews.map((item, index) => (
              <SwiperSlide key={index}>
                <div className={classNames(css.card)}>
                  {/* Stars */}
                  <div className={css.stars}>
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <span key={i} className={css.star}>
                        <svg
                          width="20"
                          height="19"
                          viewBox="0 0 20 19"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.51074 0L12.5672 5.79311L19.0213 6.90983L14.4562 11.6069L15.3886 18.0902L9.51074 15.2L3.63289 18.0902L4.56525 11.6069L0.000177383 6.90983L6.45426 5.79311L9.51074 0Z"
                            fill="#0075F2"
                          />
                        </svg>
                      </span>
                    ))}
                  </div>

                  {/* Content */}
                  <p
                    className={css.text}
                    dangerouslySetInnerHTML={{ __html: item.text }}
                  />

                  {/* Footer */}
                  <div className={css.footer}>
                    <div className={css.avatar}>
                      <Image src={item.avatar} alt={item.name} fill />
                    </div>

                    <div className={css.userInfo}>
                      <span className={css.name}>{item.name}</span>
                      <span className={css.role}>{item.role}</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </ContentWidth>
    </div>
  );
};

export default CustomMarketplacesReviews;
