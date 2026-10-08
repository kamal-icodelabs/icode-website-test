"use client";
import React, { useMemo } from "react";
import css from "./CaseStudyLoopingScreens.module.css";
import Image from "next/image";

export const CaseStudyLoopingScreens = ({
  data = {},
  speed = 20,
  gap = 16,
  imgHeight = 220,
}) => {
  const rows = useMemo(
    () =>
      Object.entries(data)
        .sort(([a], [b]) => {
          const numA = parseInt(a.replace(/\D/g, ""), 10) || 0;
          const numB = parseInt(b.replace(/\D/g, ""), 10) || 0;
          return numA - numB;
        })
        .map(([key, images], index) => ({
          key,
          images,
          scrollLeft: index % 2 === 0,
        })),
    [data],
  );

  if (!rows.length) return null;

  return (
    <div
      className={css.wrapper}
      style={{
        "--lc-gap": `${gap}px`,
        "--lc-img-height": `${imgHeight}px`,
      }}
    >
      {rows.map(({ key, images, scrollLeft }, rowIndex) => {
        const rowDurationMultiplier = images.length / 8;
        const rowSpeed = Math.max(speed * rowDurationMultiplier, speed);

        return (
          <div className={css.loopingCarouselWrapper}>
            <div
              key={key}
              className={`${css.row} ${scrollLeft ? css.rowLeft : css.rowRight}`}
              style={{ "--lc-speed": `${rowSpeed}s` }}
              aria-label={`Carousel row ${rowIndex + 1}`}
            >
              {images.map((src, imgIndex) => (
                <div className={css.slide} key={`${key}-${imgIndex}`}>
                  <Image
                    width={1000}
                    height={1000}
                    src={src}
                    alt={`Row ${rowIndex + 1} slide ${imgIndex + 1}`}
                    loading="lazy"
                    draggable={false}
                  />
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CaseStudyLoopingScreens;
