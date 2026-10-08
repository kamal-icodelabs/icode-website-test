"use client";
import Image from "next/image";
import css from "./CaseStudyDetailHero.module.css";
import ContentWidth from "@/component/ContentWidth/ContentWidth";
import * as motion from "motion/react-client";
import classNames from "classnames";

export default function CaseStudyHeroSection({
  data,
  id,
  transition,
  xyPadding,
}) {
  const { title, label, subtitle, description, heroImage, cardBgColor } = data;

  const imageVariants = {
    initial: { opacity: 0, y: 100 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
  };

  return (
    <>
      <ContentWidth>
        <section id={id} className={css.hero_wrapper}>
          <div className={css.hero_content_wrapper}>
            <span className={css.hero_label}>{label}</span>
            <h1 className={css.hero_title}>{title}</h1>
            <p className={css.hero_subinfo}>{subtitle}</p>
            <p
              className={css.hero_info}
              dangerouslySetInnerHTML={{ __html: description }}
            />
          </div>
          {transition ? (
            <div
              className={classNames(
                css.imgCardContainer,
                xyPadding ? css.xyPadding : css.yPadding,
              )}
              style={{ background: cardBgColor }}
            >
              <motion.div
                viewport={{ once: true }}
                {...imageVariants}
                style={{ position: "relative" }}
              >
                <div className={css.animated_hero_image}>
                  <Image
                    src={heroImage}
                    width={1440}
                    height={1080}
                    alt="hero image"
                  />
                </div>
              </motion.div>
            </div>
          ) : (
            <div className={css.hero_image}>
              <Image src={heroImage} fill alt="hero image" />
            </div>
          )}
        </section>
      </ContentWidth>
    </>
  );
}
