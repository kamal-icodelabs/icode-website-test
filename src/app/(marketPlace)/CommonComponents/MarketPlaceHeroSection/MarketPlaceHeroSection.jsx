import React from "react";
import css from "./MarketPlaceHeroSection.module.css";
import ContentWidth from "@/component/ContentWidth/ContentWidth";
import Image from "next/image";
import { PrimaryBtnLink } from "@/component/Animations/CTAbutton";
import Link from "next/link";
import IconCollection from "@/component/IconCollection/IconCollection";
import classNames from "classnames";

export default function MarketPlaceHeroSection({ data }) {
  if (!data) return null;

  const { title, label, content, badgeImg, primaryBtn, secondaryBtn, keyPoints, usp } =
    data;

  return (
    <section className={css.heroSectionContainer}>
      <ContentWidth>
        <div className={css.heroWrapper}>
          <div className={css.heroContent}>
            <span className={css.heroLabel}>{label}</span>
            <h1 className={css.heroTitle}>{title}</h1>
            <p className={css.heroInfo}>{content}</p>

            <div className={css.heroBtnWrapper}>
              {/* Primary Button */}
              {primaryBtn && (
                <PrimaryBtnLink href={primaryBtn.btnLink}>
                  {primaryBtn.btnLabel} <IconCollection name="rightArrowTop" />
                </PrimaryBtnLink>
              )}

              {/* Secondary Button */}
              {secondaryBtn && (
                <Link
                  href={secondaryBtn.btnLink}
                  className={css[secondaryBtn.btnClass]}
                >
                  {secondaryBtn.btnLabel}
                  <IconCollection name={"rightArrowTop"} />
                </Link>
              )}
            </div>

            {keyPoints && keyPoints.length > 0 && (
              <div className={css.keyPoints}>
                {keyPoints.map((point, index) => (
                  <div key={index} className={css.key}>
                    <div className={css.key}>
                      <p
                        className={classNames(
                          css.keyLabel,
                          index === 1 && css.greenColor,
                        )}
                      >
                        {point.tick && <IconCollection name="check" />}
                        {point.label}
                      </p>
                      <p className={css.keyText}>{point.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {usp && (
            <div className={css.uspContainer}>
              <h3 className={css.uspHeading}>{usp.heading}</h3>
              <ul className={css.uspPoints}>
                {usp.point?.map((point, idx) => (
                  <li key={idx} className={css.uspItem}>
                    {point}
                  </li>
                ))}
              </ul>

              {badgeImg && (
                <div className={css.badgeContainer}>
                  <Image
                    src={badgeImg}
                    alt="badge"
                    width={200}
                    height={100}
                    quality={100}
                    fetchPriority="true"
                  />
                </div>
              )}
            </div>
          )}
        </div>
      </ContentWidth>
    </section>
  );
}
