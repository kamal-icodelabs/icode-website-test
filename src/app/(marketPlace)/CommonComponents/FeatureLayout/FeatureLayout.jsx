import React from "react";
import css from "./FeatureLayout.module.css";
import Image from "next/image";
import ContentWidth from "@/component/ContentWidth/ContentWidth";

const FeatureLayout = ({ data }) => {
  const { heading, cards } = data || {};

  // get all cards with default values
  const {
    cardOne = {},
    cardTwo = {},
    cardThree = {},
    cardFour = {},
  } = cards || {};

  return (
    <section className={css.section}>
      <ContentWidth>
        <div className={css.sectionHeading}>
          <span className={css.sectionLabel}>{heading?.label}</span>
          <h2 className={css.sectionTitle}>{heading?.title}</h2>
        </div>

        <div className={css.layoutContianer}>
          <div className={css.gridOne}>
            <div className={css.cardOne}>
              <div className={css.cardContent}>
                <h3>{cardOne.title}</h3>
                <p>{cardOne.info}</p>
              </div>

              {cardOne.img && (
                <div className={css.imgWrapper}>
                  <Image
                    src={cardOne.img}
                    width={800}
                    height={800}
                    alt={cardOne.title}
                  />
                </div>
              )}
            </div>
          </div>

          <div className={css.gridTwo}>
            <div className={css.cardTwo}>
              <div className={css.cardContent}>
                <h3>{cardTwo.title}</h3>
                <p>{cardTwo.info}</p>
              </div>

              {cardTwo.img && (
                <div className={css.imgWrapper}>
                  <Image
                    src={cardTwo.img}
                    width={800}
                    height={800}
                    alt={cardTwo.title}
                  />
                </div>
              )}
            </div>
            <div className={css.cardThree}>
              <div className={css.cardContent}>
                <h3>{cardThree.title}</h3>
                <p>{cardThree.info}</p>
              </div>

              {cardThree.img && (
                <div className={css.imgWrapper}>
                  <Image
                    src={cardThree.img}
                    width={800}
                    height={800}
                    alt={cardThree.title}
                  />
                </div>
              )}
            </div>
          </div>

          <div className={css.gridThree}>
            <div className={css.cardFour}>
              {cardFour.img && (
                <div className={css.imgWrapper}>
                  <Image
                    src={cardFour.img}
                    width={800}
                    height={800}
                    alt={cardFour.title}
                    quality={100}
                  />
                </div>
              )}

              <div className={css.cardContent}>
                <h3>{cardFour.title}</h3>
                <p>{cardFour.info}</p>
              </div>
            </div>
          </div>
        </div>
      </ContentWidth>
    </section>
  );
};

export default FeatureLayout;
