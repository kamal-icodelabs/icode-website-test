import React from "react";
import css from "./WhatItCost.module.css";
import ContentWidth from "@/component/ContentWidth/ContentWidth";
import IconCollection from "@/component/IconCollection/IconCollection";
import priceCardsData from "./whatItCostData.json";
import Link from "next/link";

const WhatItCost = () => {
  return (
    <div id="pricing-tiers" className={css.WhatItCostSection}>
      <ContentWidth>
        <div className={css.sectionHeader}>
          <span className={css.sectionLabel}>
            Sharetribe Marketplace Pricing
          </span>
          <h2 className={css.sectionTitle}>
            Sharetribe Marketplace Build — What It Costs
          </h2>
          <p className={css.sectionInfo}>
            All four tiers use Sharetribe's platform with our AI-augmented
            delivery process. Fixed price, fixed scope, 90-day bug guarantee
            included.
          </p>
        </div>

        <div className={css.pricardContainer}>
          {priceCardsData.map((card) => (
            <div
              className={`${css.priceCard} ${card.isMostPopular ? css.mostPopularCard : ""}`}
              key={card.id}
            >
              {card.isMostPopular ? (
                <div className={css.popularBadge}>
                  {/* <IconCollection name='check' /> */}
                  <span>{card.badgeText || "MOST POPULAR"}</span>
                </div>
              ) : null}
              <div className={css.iconContainer}>
                <IconCollection name={card.icon} />
              </div>

              <h3 className={css.cardTitle}>{card.title}</h3>
              <p className={css.cardInfo}>{card.info}</p>

              <h4 className={css.cardPrice} style={{ color: card.priceColor }}>
                {card.price}
              </h4>
              <p className={css.days}>
                <IconCollection name="clockSmall" />
                <span>{card.timeline}</span>
              </p>

              <Link
                href={"https://calendly.com/jaytiwary"}
                className={css.cardButton}
                type="button"
              >
                <span>{card.buttonText}</span>
                <IconCollection name="rightArrowTop" />
              </Link>

              <ul>
                {card.features.map((feature) => (
                  <li
                    key={feature.text}
                    className={
                      feature.included ? css.included : css.notIncluded
                    }
                  >
                    {feature.text}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={css.whatItCostCta}>
          <div>
            <p className={css.guaranteeHeading}>
              All tiers include icodelabs' 90-day bug-free guarantee.
            </p>
            <p>
              If anything breaks after launch within 90 days, we fix it. No
              questions, no charge.
            </p>
          </div>

          <Link href="/custom-marketplace-development">
            Request a Custom Feature <IconCollection name={"rightArrowTop"} />
          </Link>
        </div>
      </ContentWidth>
    </div>
  );
};

export default WhatItCost;
