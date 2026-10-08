"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import css from "./ImageNContentSection.module.css";
import ContentWidth from "@/component/ContentWidth/ContentWidth";
import Link from "next/link";
import IconCollection from "@/component/IconCollection/IconCollection";
import { Swiper, SwiperSlide } from "swiper/react";
import { Controller, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { PrimaryBtnLink } from "@/component/Animations/CTAbutton";

export function ImgNcontentVertical({ data }) {
  return (
    <div className={css.ImgNcontentVertical}>
      <ContentWidth className={css.mainWrapper}>
        <div className={css.contentContianer}>
          <h2>{data.title}</h2>
          <p>{data.para}</p>
        </div>

        <div className={css.imgContainer}>
          <Image
            fill
            src={data.img}
            alt={data.title}
            loading="lazy"
          />
        </div>
      </ContentWidth>
    </div>
  );
}

export function CTASection({ data }) {
  return (
    <section className={css.weWillBuildSection}>
      <Image
        src="/assests/img/curveLine.svg"
        width={1924}
        height={366}
        quality={100}
        className={css.curveImg}
        alt=""
        loading="lazy"
      />
      <div className={css.glowEffectOne} />
      <div className={css.glowEffectTwo} />
      <div className={css.glowEffectThree} />

      <div className={css.contentContainer}>
        <h2>{data.title}</h2>
        <p>{data.content}</p>
        <Link href={data.btnLink || '#'} aria-label="Explore our services">
          Explore Our Services <span>👋</span>
        </Link>
      </div>
    </section>
  );
}

export function ImgNcontentHorizontal({
  data,
  title = "Who We Build Product Marketplaces For",
  content = "From ambitious e-commerce entrepreneurs to established brands, our product marketplace solutions are designed to deliver seamless shopping experiences, streamlined vendor management, and scalable technology for every business model.",
}) {
  return (
    <section className={css.ImgNcontentHorizontalSection}>
      <ContentWidth>
        <div className={css.contentContainer}>
          <h2>{title}</h2>
          <p className={css.infoContent}>{content}</p>
        </div>

        <div className={css.flexCardWrapper}>
          {data.map((i, idx) => {
            return (
              <>
                <div className={css.itemDiv} key={idx}>
                  <div className={css.imgContainer}>
                    <Image
                      src={i.img}
                      fill
                      alt={i.title}
                      loading="lazy"
                    />
                  </div>

                  <div className={css.contentContainer}>
                    <h2>{i.title}</h2>
                    <p>{i.content}</p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </ContentWidth>
    </section>
  );
}
export function GridCardWrapper({ heading, data, ctaRequired, fullWIdthCTA }) {
  return (
    <section className={css.gridCardContainerSection}>
      <ContentWidth className={css.mainWrapper}>
        <div className={css.contentContainer}>
          <h2>{heading}</h2>
        </div>

        <div className={css.gridContainer}>
          {data.map((i, index) => (
            <div key={index} className={css.cardItem}>
              <div className={css.imgContainer}>
                <Image quality={100} fill src={i.img} alt={i.title} loading="lazy" />
              </div>
              <div className={css.cardContent}>
                <h6>{i.title}</h6>
                <p>{i.description}</p>
              </div>
            </div>
          ))}

          {ctaRequired ? (
            <div className={css.ctaCardWrapper}>
              <h3>Let’s Build Something Extraordinary Together</h3>
              <Link href="/contact" className="primaryBtn" aria-label="Say Hello to Icodelabs – start your AI project conversation">
                Say Hello <span>👋</span>
              </Link>
            </div>
          ) : null}

          {fullWIdthCTA && (
            <>
              <div className={css.fullWidthCTAWrapper}>
                <div className={css.contentContainer}>
                  <h2 className={css.title}>
                    🚀 Build AI That Works for Your Business
                  </h2>

                  <p className={css.info}>
                    Turn your goals into secure, scalable, and production-ready
                    AI solutions — from smart chatbots to computer vision and
                    data copilots. Partner with iCodeLabs to bring your ideas to
                    life.
                  </p>

                  <PrimaryBtnLink
                    href="/contact"
                    className={`${css.submitBtn}`}
                    aria-label="Start building with AI today at iCodeLabs"
                  >
                    👉 Start Building with AI Today
                  </PrimaryBtnLink>
                </div>

                <div className={css.handImgContainer}>
                  <Image
                    src={"/assests/img/handClicking-ai.png"}
                    alt="hand image"
                    fill
                    loading="lazy"
                  />
                </div>
              </div>
            </>
          )}
        </div>
      </ContentWidth>
    </section>
  );
}

export function IconTable({ data }) {
  return (
    <>
      <ContentWidth className={css.iconTableWrapper}>
        <h2>Powerful integrations for smarter engagement</h2>
        <p>
          A rental marketplace allows users to lend or lease items for a fixed
          duration
        </p>

        <div className={css.tableContainer}>
          {data.map((i, index) => {
            return (
              <div key={index} className={css.itemBox}>
                <div
                  style={{ width: `${i.width}px`, height: `${i.height}px` }}
                  className={css.imgContainer}
                >
                  <Image
                    src={i.img}
                    fill
                    alt={i.title}
                    quality={100}
                    loading="lazy"
                  />
                </div>
                <p>{i.title}</p>
              </div>
            );
          })}
        </div>
      </ContentWidth>
    </>
  );
}

export function FeatureSectionGrid({
  data,
  title = "AI Features of a Rental Marketplace Often Include",
}) {
  return (
    <>
      <div className={css.featureSectionGridWrapper}>
        <ContentWidth>
          <h2>{title}</h2>

          <div className={css.columnGrid}>
            <div className={css.borderWrapper}>
              <div className={`${css.commonCard} ${css.cardOne}`}>
                <IconCollection name={"trajectoryDotted"} />

                <div className={css.contentContainer}>
                  <span>AI</span>
                  <h1>Enhancements</h1>
                  <h5>Streamline your marketing with powerful automation.</h5>
                </div>

                <IconCollection name={"trajectoryDotted"} />
              </div>
            </div>

            <div className={css.borderWrapper}>
              <div className={`${css.cardTwo} ${css.commonCard}`}>
                <h4>{data[0].cardTwo.title}</h4>
                <h6>{data[0].cardTwo.subHeading}</h6>
              </div>
            </div>

            <div className={css.borderWrapper}>
              <div className={`${css.commonCard} ${css.cardFour}`}>
                <Image width={91} height={136} src={data[0].cardFour.img} alt={data[0].cardFour.title} loading="lazy" />

                <div>
                  <h4>{data[0].cardFour.title}</h4>
                  <h6>
                    <span>Provides instant, intelligent</span> responses to user
                    queries, streamlining <span>support.</span>
                  </h6>
                </div>
              </div>
            </div>

            <div className={css.borderWrapper}>
              <div className={`${css.commonCard} ${css.cardThree}`}>
                <div>
                  <h4>{data[0].cardThree.title}</h4>
                  <h6>{data[0].cardThree.subHeading}</h6>
                </div>
              </div>
            </div>

            <div className={css.borderWrapper}>
              <div className={`${css.commonCard} ${css.cardFive}`}>
                <Image
                  width={205}
                  height={data[0]?.cardFive?.imgWidth || 126}
                  src={data[0].cardFive.img}
                  alt={data[0].cardFive.title}
                  loading="lazy"
                />

                <div>
                  <h4>{data[0].cardFive.title}</h4>
                  <h6>{data[0].cardTwo.subHeading}</h6>
                </div>
              </div>
            </div>
          </div>
        </ContentWidth>
      </div>
    </>
  );
}

export function ImageNcarousel({ data, imgs }) {
  const [swiperText, setSwiperText] = useState(null);
  const [swiperImages, setSwiperImages] = useState(null);

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  // Update nav state whenever swiper mounts or changes
  const updateNavState = (swiperInstance) => {
    const totalSlides = swiperInstance.slides.length;

    if (prevRef.current && nextRef.current) {
      prevRef.current.disabled = swiperInstance.isBeginning;
      nextRef.current.disabled = swiperInstance.isEnd;
    }
  };
  const [activeIndex, setActiveIndex] = useState(0);

  // Force update swiper navigation once DOM refs are ready
  useEffect(() => {
    if (swiperText && swiperText.params && prevRef.current && nextRef.current) {
      swiperText.params.navigation.prevEl = prevRef.current;
      swiperText.params.navigation.nextEl = nextRef.current;
      swiperText.navigation.init();
      swiperText.navigation.update();

      // Initial disable state
      updateNavState(swiperText);
    }
  }, [swiperText]);

  const handleTextSlideChange = (swiperInstance) => {
    const idx = swiperInstance.activeIndex;
    setActiveIndex(typeof idx === "number" ? idx : 0);
    if (swiperImages) {
      swiperImages.slideTo(idx);
    }
    updateNavState(swiperInstance);
  };

  // Ensure initial sync when both swipers are ready
  useEffect(() => {
    if (swiperText && swiperImages) {
      const index = typeof swiperText.activeIndex === "number" ? swiperText.activeIndex : 0;
      swiperImages.slideTo(index, 0);
      setActiveIndex(index);
    }
  }, [swiperText, swiperImages]);

  return (
    <div>
      <div className={`${css.glowBg}`}>
        {/* LEFT: TEXT CAROUSEL */}
        <div className={`${css.leftCarouselDiv}`}>
          <Swiper
            loop={false}
            modules={[Navigation]}
            slidesPerView={1}
            onSwiper={setSwiperText}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onSlideChange={handleTextSlideChange}
            className="featureCarouselMarketplace"
          >
            {data.map((i, index) => (
              <SwiperSlide key={`text-${index}`}>
                <div className={css.reviewWrapper}>
                  <div className={css.topContent}>
                    <h3>{i.Companyname}</h3>
                    <div>
                      <IconCollection name="grayQuote" />
                      <h4>{i.review}</h4>
                    </div>
                  </div>
                  <div className={css.bottomContent}>
                    <span className="subTitle">{i.name}</span>
                    <p>{i.position}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className={css.btnNnavigation}>
            <Link href={data[activeIndex]?.slug || "/casestudy"} className="outlineBtn" aria-label="Visit detailed case study">
              Visit Case Study <IconCollection name="rightArrowTop" />
            </Link>

            <div className={css.navButtons}>
              <button ref={prevRef} className={css.navBtn}>
                <IconCollection name={"whiteArrowRight"} />
              </button>
              <button ref={nextRef} className={css.navBtn}>
                <IconCollection name={"whiteArrowRight"} />
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT: IMAGE CAROUSEL */}
        <div className={css.rightCarouselDiv}>
          <Swiper
            loop={false}
            centeredSlides={false}
            slidesPerView={1.4}
            spaceBetween={20}
            draggable={false}
            allowTouchMove={false}
            onSwiper={setSwiperImages}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 1.4,
                spaceBetween: 20,
              },
              1200: {
                slidesPerView: 1.4,
                spaceBetween: 20,
              },
            }}
            className="featureCarouselMarketplace"
          >
            {imgs.map((i, index) => (
              <SwiperSlide key={`img-${index}`}>
                <Image
                  src={i.img}
                  alt={`Slide ${index}`}
                  width={648}
                  height={593}
                  className={css.CarouselImg}
                  loading="lazy"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default function ImgNFullImage({ data }) {
  return (
    <div className={css.ImgNFullImageWrapper}>
      <div className={css.leftContainer}>
        <div>
          {/* <IconCollection name="shareTribeWhite" /> */}
          <h2>{data.title}</h2>
          <p>{data.content}</p>

          <Link href={data.btnLink || '#'} className="primaryBtnWhite" aria-label="Book a strategy call with Icodelabs">
            Book a Strategy Call <IconCollection name="arrowUpBlack" />
          </Link>
        </div>
      </div>
      <div
        className={css.rightContainer}
        style={{
          backgroundImage: "url(/assests/img/femaleWorkingOnLaptop.png",
        }}
      ></div>
    </div>
  );
}
