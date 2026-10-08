"use client";

import Link from "next/link";
import Image from "next/image";
import css from "./CaseStudy.module.css";
import IconCollection from "@/component/IconCollection/IconCollection";
import classNames from "classnames";

export function CardKeyPt({ platform, starPt, techIcon }) {
  return (
    <div className={css.card_keyPt}>
      <div className={css.card_keyPt_item}>
        <div className={css.techIconContainer}>
          {techIcon?.map((icon) => (
            <IconCollection key={icon} name={icon} />
          ))}
        </div>
        <span className={css.card_keyPt_text}>{platform}</span>
      </div>
      <div className={css.card_keyPt_divider} />
      <div className={classNames(css.card_keyPt_item, css.startPt)}>
        <IconCollection name={"rocket"} />
        <span className={css.card_keyPt_text}>{starPt}</span>
      </div>
    </div>
  );
}

export function SmallCard({ data, truncateText }) {
  return (
    <div className={css.smallCard}>
      <div className={css.smallCard_image}>
        <Image
          src={data.image}
          alt={data.title}
          width={1000}
          height={1000}
          quality={100}
          loading="lazy"
          className={css.card_img}
        />
      </div>
      <div className={css.smallCard_content}>
        <p className={css.card_label}>{data.tagLine}</p>
        <h2 className={css.card_title}>{data.title}</h2>
        <p
          className={classNames(
            css.card_description,
            truncateText && css.truncateText,
          )}
        >
          {data.description}
        </p>
        <CardKeyPt
          platform={data.keyPt?.platform}
          starPt={data.keyPt?.starPt}
          techIcon={data.keyPt?.techIcon}
        />
        <Link href={data.link} className={css.card_cta}>
          Read Case Study
          <span className={css.card_cta_arrow} />
        </Link>
      </div>
    </div>
  );
}

export function WideCard({ data }) {
  return (
    <div className={css.wideCard}>
      <div className={css.wideCard_content}>
        <p className={css.card_label}>{data.tagLine}</p>
        <h2 className={css.card_title}>{data.title}</h2>
        <p className={css.card_description}>{data.description}</p>
        <CardKeyPt
          platform={data.keyPt?.platform}
          starPt={data.keyPt?.starPt}
          techIcon={data.keyPt?.techIcon}
        />
        <Link href={data.link} className={css.card_cta}>
          Read Case Study
          <span className={css.card_cta_arrow} />
        </Link>
      </div>
      <div
        className={css.wideCard_image}
        style={{ backgroundColor: data.bgColor }}
      >
        <Image
          src={data.image}
          alt={data.title}
          width={1000}
          height={1000}
          quality={100}
          loading="lazy"
          className={css.card_img}
        />
      </div>
    </div>
  );
}
