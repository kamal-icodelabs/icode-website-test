"use client";

import css from "../aiDevStyle.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import IconCollection from "@/component/IconCollection/IconCollection";
import ContentWidth from "@/component/ContentWidth/ContentWidth";
import Image from "next/image";

export default function OurAiDevServices({ data }) {
  return (
    <section className={css.ourAiDevServices}>
      <ContentWidth>
        <div className={css.contentNhandle}>
          <div className={css.sectionHeader}>
            <h2 className={css.sectionTitle}>Our AI Development Services</h2>
            <p className={css.sectionSubtitle}>
              Transform your business with cutting-edge AI solutions tailored to
              your unique needs and challenges
            </p>
          </div>

          <div className={css.customNavigation}>
            <button className={`${css.navButton} prevButton`}>
              <IconCollection name={"carouselLeft"} />
            </button>
            <button className={`${css.navButton} nextButton`}>
              <IconCollection name={"carouselRight"} />
            </button>
          </div>
        </div>
      </ContentWidth>

      <div className={css.swiperContainer}>
        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={3.6}
          navigation={{
            prevEl: ".prevButton",
            nextEl: ".nextButton",
          }}
          onAfterInit={(swiper) => {
            swiper.wrapperEl.style.transform =
              "translate3d(var(--carouselPosition), 0px, 0px)";
          }}
          breakpoints={{
            320: {
              slidesPerView: 1.1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2.3,
              spaceBetween: 25,
            },
            1024: {
              slidesPerView: 3.2,
              spaceBetween: 30,
            },
            1380: {
              slidesPerView: 3.6,
              spaceBetween: 30,
            },
          }}
          className={css.servicesSwiper}
        >
          {data.map((service, index) => (
            <SwiperSlide key={index}>
              <div className={css.serviceCard}>
                <div className={css.cardContent}>
                  <h3 className={css.cardTitle}>{service.title}</h3>
                  <p className={css.cardDescription}>{service.description}</p>
                </div>

                <div className={css.cardImage}>
                  <Image fill src={service.img} alt={service.title} />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
