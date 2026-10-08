"use client";
import React, { useEffect, useRef, useState } from "react";
import css from "./CaseStudyAnimatedCards.module.css";
import Image from "next/image";
import { motion } from "motion/react";
import classNames from "classnames";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Grid } from "swiper/modules";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/free-mode";

// --- animation things is here ---
export const fadeDown = {
  initial: { opacity: 0, y: -50 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" },
};

export const fadeUp = {
  initial: { opacity: 0, y: 100 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" },
};

export const fadeAppear = {
  initial: { opacity: 0, scale: 0.8 },
  whileInView: { opacity: 1, scale: 1 },
  transition: { duration: 0.8, ease: "easeOut" },
};

export const ImgFlexWrapper = ({ children }) => {
  return <div className={css.imgFlexWrapper}>{children}</div>;
};

export const FadeUpCardImg = ({ bgColor, img, topPadding, sectionPadding }) => {
  return (
    <div
      className={classNames(
        css.fadeUpCardImgContainer,
        sectionPadding ? css.sectionPadding : "",
      )}
    >
      <div
        style={{ background: bgColor }}
        className={classNames(css.fadeUpImg, topPadding ? css.topPadding : "")}
      >
        <motion.div {...fadeUp} viewport={{ once: true }}>
          <Image src={img} alt="img" width={1440} height={4096} />
        </motion.div>
      </div>
    </div>
  );
};

export const FadeDownCardImg = ({
  bgColor,
  img,
  topPadding,
  sectionPadding,
}) => {
  return (
    <div
      className={classNames(
        css.fadeUpCardImgContainer,
        sectionPadding ? css.sectionPadding : "",
      )}
    >
      <div
        style={{ background: bgColor }}
        className={classNames(css.fadeUpImg, topPadding ? css.topPadding : "")}
      >
        <motion.div {...fadeDown} viewport={{ once: true }}>
          <Image src={img} alt="img" width={1440} height={4096} />
        </motion.div>
      </div>
    </div>
  );
};

export const NoMarginCardImg = ({ img, sectionPadding }) => {
  return (
    <div
      className={classNames(
        css.noMarginCardImgContainer,
        sectionPadding ? css.sectionPadding : "",
      )}
    >
      <div style={{ padding: "0 !important" }} className={css.fadeUpImg}>
        <motion.div {...fadeDown} viewport={{ once: true }}>
          <Image src={img} alt="img" width={1440} height={4096} />
        </motion.div>
      </div>
    </div>
  );
};

// looping flowing screens card UI

export const CarouselCardContainer = ({
  bgColor,
  imgs,
  sectionPadding,
  title,
}) => {
  const containerRef = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const [shouldScroll, setShouldScroll] = useState(false);
  const loopingImgs = [...imgs, ...imgs, ...imgs];

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;
    let timerId;

    if (
      typeof window === "undefined" ||
      typeof IntersectionObserver === "undefined"
    ) {
      setIsInView(true);
      setShouldScroll(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;

        setIsInView(entry.isIntersecting);

        if (entry.isIntersecting) {
          if (timerId) clearTimeout(timerId);
          timerId = setTimeout(() => {
            setShouldScroll(true);
          }, 800);
        } else {
          if (timerId) clearTimeout(timerId);
          timerId = undefined;
          setShouldScroll(false);
        }
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -10% 0px",
      },
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
      if (timerId) clearTimeout(timerId);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={classNames(
        css.fadeUpCardImgContainer,
        sectionPadding ? css.sectionPadding : "",
      )}
    >
      <div style={{ background: bgColor }} className={css.carouselWrapper}>
        {title ? (
          <div className={css.flowCardTitle}>
            <h2>{title}</h2>
          </div>
        ) : null}

        <div className={css.marqueeOuter}>
          <div
            className={classNames(
              css.marqueeInner,
              isInView && shouldScroll ? css.marqueeRunning : css.marqueePaused,
            )}
          >
            {loopingImgs.map((i, index) => (
              <div key={`${i}-${index}`} className={css.carouselImg}>
                <img src={i} alt="img" draggable={false} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// looping screen come here

const CarouselRow = ({ images, reverse, id }) => {
  const loopImages = images?.length
    ? images.length < 12
      ? [...images, ...images, ...images]
      : images
    : [];

  return (
    <div
      className={css.rowOneCarousel}
      id={id}
      style={reverse ? { transform: "scaleX(-1)" } : {}}
    >
      <Swiper
        dir="ltr"
        spaceBetween={20}
        slidesPerView={3.8}
        loop={true}
        modules={[Autoplay, FreeMode]}
        loopAdditionalSlides={loopImages.length}
        autoplay={{
          delay: 0,
          reverseDirection: false,
          disableOnInteraction: false,
          waitForTransition: true,
          pauseOnMouseEnter: false,
          stopOnLastSlide: false,
        }}
        allowTouchMove={false}
        freeMode={{
          enabled: true,
          momentum: false,
          momentumBounce: false,
        }}
        watchSlidesProgress={true}
        speed={8000}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1300: {
            slidesPerView: 3.8,
            spaceBetween: 20,
          },
        }}
      >
        {loopImages.map((item, index) => (
          <SwiperSlide key={`${item}-${index}`} className={css.rowImage}>
            <Image
              src={item}
              alt="img not found"
              width={333}
              height={692}
              draggable={false}
              style={reverse ? { transform: "scaleX(-1)" } : {}} // flip image back to normal
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export const LoopingScreenCard = ({ data, bg }) => {
  const rows = Object?.keys(data)
    .filter((key) => key?.startsWith("row"))
    .sort(
      (a, b) => parseInt(a.replace("row", "")) - parseInt(b.replace("row", "")),
    )
    .map((key, index) => ({
      images: data[key],
      reverse: index % 2 !== 0,
    }));

  return (
    <>
      <div style={{ background: bg }} className={css.loopingScreenCard}>
        {rows.map((row, index) => (
          <CarouselRow key={index} images={row.images} reverse={row.reverse} />
        ))}
      </div>
    </>
  );
};

// No Effect Card UI

export const NoEffectHeadingImgCard = ({ title, img, cardBG }) => {
  return (
    <section
      className={css.noEffectHeadingImgCard}
      style={{ background: cardBG }}
    >
      {title ? (
        <div className={css.headingWrapper}>
          <h2 className={css.heading}>{title}</h2>
        </div>
      ) : null}
      <div className={css.imageWrapper}>
        <Image src={img} alt={`${title}-dashboard`} width={1200} height={700} />
      </div>
    </section>
  );
};

export const FullLengthCardContainer = ({ img, sectionPadding, cardBG }) => {
  return (
    <>
      <section
        className={sectionPadding && "sectionPadding"}
        style={{ background: cardBG }}
      >
        <div className={css.fullLengthCardContainer}>
          <div className={css.imageWrapper}>
            <Image src={img} alt={"img"} width={1200} height={700} />
          </div>
        </div>
      </section>
    </>
  );
};

export const VerticalCarousel = ({
  images = [],
  speed = 40,
  height = 600,
  bgColor,
}) => {
  const containerRef = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const [shouldScroll, setShouldScroll] = useState(false);

  const loopImages =
    images.length > 0
      ? images.length < 6
        ? [...images, ...images, ...images]
        : [...images, ...images]
      : [];

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;
    let timerId;

    if (
      typeof window === "undefined" ||
      typeof IntersectionObserver === "undefined"
    ) {
      setIsInView(true);
      setShouldScroll(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;

        setIsInView(entry.isIntersecting);

        if (entry.isIntersecting) {
          if (timerId) clearTimeout(timerId);
          timerId = setTimeout(() => {
            setShouldScroll(true);
          }, 800);
        } else {
          if (timerId) clearTimeout(timerId);
          timerId = undefined;
          setShouldScroll(false);
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
      if (timerId) clearTimeout(timerId);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={css.verticalCarousel}
      style={{ height, backgroundColor: bgColor }}
    >
      <div className={css.verticalCarouselInner}>
        <div
          className={classNames(
            css.verticalCarouselTrack,
            isInView && shouldScroll
              ? css.verticalCarouselRunning
              : css.verticalCarouselPaused,
          )}
          style={{ animationDuration: `${speed}s` }}
        >
          {loopImages.map((item, index) => (
            <div key={`${item}-${index}`} className={css.verticalCarouselSlide}>
              <Image
                src={item}
                alt="img"
                width={1200}
                height={1200}
                className={css.verticalCarouselImg}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
