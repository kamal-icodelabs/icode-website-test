'use client'

import React, { useState, useEffect } from "react";
import css from "./HeroSectionShareTribe.module.css";
import ContentWidth from "@/component/ContentWidth/ContentWidth";
import IconCollection from "@/component/IconCollection/IconCollection";
import Link from "next/link";
import Image from "next/image";
import classNames from "classnames";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import sharetribeExpert from '../../../../../assets/images/We-are-a-Verified-Sharetribe-Expert_white.png';

export default function HeroSectionShareTribe() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={css.outterWrapper}>
      <section className={css.heroBannerWrapper}>
        <ContentWidth>
          <div className={css.heroBannerContainer}>
            <div className={css.contentContainer}>
              <div>
                <span className={css.badge}>
                  Sharetribe Development
                </span>
                <h1 className={css.mainHeading}>
                  Launch Your Marketplace<br /> Faster. Smarter.<br /> Guaranteed.
                </h1>
                <h2 className={css.subTitle}>
                  Fixed packages. Clear scope. Predictable delivery. Built for founders who want to go live in weeks — not over-engineer for months.
                </h2>
                <p className={css.description}>
                  icodelabs is a Sharetribe Vetted Expert Partner with 50+ live marketplaces delivered. We build web and mobile Sharetribe platforms with AI features built in.
                </p>
                <div className={css.coverButtons}>
                  <Link href="https://calendly.com/jaytiwary" className={classNames(css.bookFreeButton, "primaryGradientBtn")}>
                    Book a Free Sharetribe Consultation
                    <IconCollection name="rightArrowTop" />
                  </Link>
                  <Link href="#packagesection" className={classNames(css.viewPackages, "primaryBtn")}>
                    View Packages
                    <IconCollection name={"rightArrowTop"} />
                  </Link>
                </div>
              </div>
              <div className={css.heroCoverRight}>
                <div className={css.greenText}>What you get with icodelabs</div>
                <div className={css.pointContainer}>
                  {points.map((i, index) => {
                    return (
                      <React.Fragment key={index}>
                        <p>
                          <IconCollection
                            name="check"
                            className={css.checkIcon}
                          />
                          <span dangerouslySetInnerHTML={{ __html: i.text }} />
                        </p>
                      </React.Fragment>
                    );
                  })}
                </div>
                <Image
                  src={sharetribeExpert}
                  alt="iCodelabs — Sharetribe Vetted Expert Partner"
                  priority
                />
              </div>
            </div>
          </div>
        </ContentWidth>

        <div className={css.carouselWrapper}>
          {isLoaded ? (
            <Swiper
              className={css.customizeCarousel}
              spaceBetween={20}
              slidesPerView={2.8}
              loop={true}
              modules={[Autoplay]}
              autoplay={{
                delay: 1,
                disableOnInteraction: false,
              }}
              freeMode={true}
              speed={8000}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 10
                },
                // when window width is >= 480px
                640: {
                  slidesPerView: 1.8,
                  spaceBetween: 20
                },
                // when window width is >= 640px
                1300: {
                  slidesPerView: 2.8,
                  spaceBetween: 20
                }
              }}
            >
              {
                imgs.map((i, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <Image src={i} quality={100} alt="image" width={640} height={500} loading="lazy" className={css.carouselImage} />
                    </SwiperSlide>
                  )
                })
              }
            </Swiper>
          ):null}
        </div>

        <div className={css.glowContainer}>
          <div className={css.glowbgLeft} />
          <div className={css.glowbgRight} />
        </div>
      </section >

      {/* lower section */}
      {/* <div className={css.homerLocationSectionWrapper}>
        <h6 className="">Explore new Home locations in Finland</h6>
        <div className={css.imgGridContainer}>
          <Image
            src="/assests/img/shareTribeExplore.png"
            alt="home"
            width={1024.91}
            height={292.28}
            className={css.homeImg}
            loading="lazy"
          />
        </div>
      </div> */}
    </div >
  );
}

const points = [
  {
    text: "Fixed price — no billing surprises",
  },
  {
    text: "90-day bug-free guarantee",
  },
  {
    text: "Sharetribe vetted expert team",
  },
  {
    text: "Web + mobile delivery",
  },
  {
    text: "AI features available in all tiers",
  },
  {
    text: "Post-launch support included",
  },
];

const imgs = [
  '/assests/img/sharetribe/Groovbay.png',
  '/assests/img/sharetribe/Arabibi-Done.png',
  '/assests/img/sharetribe/Justwashes.png',
  '/assests/img/sharetribe/Easy care.png',
  '/assests/img/sharetribe/Densyte.png',
  '/assests/img/sharetribe/Handyman.png',
]