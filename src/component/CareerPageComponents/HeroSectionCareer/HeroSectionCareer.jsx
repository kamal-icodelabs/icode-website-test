import React from "react";
import css from "./HeroSectionCareer.module.css";
import Image from "next/image";
import HeroImg1 from "../../../assets/imgs/images/career.png";
import ContentWidth from "../../ContentWidth/ContentWidth";

const HeroSectionCareer = () => {
  return (
    <section className={css.heroBannerWrapper}>
      <div className={css.glowbgLeft} />
      <div className={css.glowbgRight} />
      <ContentWidth>
        <div className={css.imgNcontentWrapper}>
          <div className={css.tabletHeadingContainer}>
            <span className="subTitle">Careers</span>
            <h1 className={css.tabletHeading}>
              Do Meaningful Work Every Day.{" "}
            </h1>
          </div>

          <div className={css.LeftContent}>
            <span className="subTitle">Careers</span>
            <h1>Do Meaningful</h1>
          </div>

          {/* imgsection */}
          <div className={css.imgContainer}>
            <Image src={HeroImg1} width={855} height={406} alt="career" loading="lazy"/>
          </div>

          <div className={css.RightContent}>
            <h1>Work Every Day.</h1>
          </div>
        </div>
      </ContentWidth>
    </section>
  );
};

export default HeroSectionCareer;
