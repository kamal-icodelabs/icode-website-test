import React from "react";
import css from "./MarketplaceUSPcards.module.css";
import IconCollection from "@/component/IconCollection/IconCollection";
import ContentWidth from "@/component/ContentWidth/ContentWidth";
const MarketplaceUSPcards = ({ data }) => {
  const { section, cards } = data;
  return (
    <section className={css.sectionContainer}>
      <ContentWidth>
        <div className={css.sectionHeading}>
          <p className={css.sectionLabel}>{section.label}</p>
          <h2 className={css.sectionTitle}>{section.title}</h2>
        </div>

        <div className={css.cardContainer}>
          {cards.map((i, index) => {
            return (
              <>
                <div key={index} className={css.card}>
                  <IconCollection name={i.icon} />
                  <h3 className={css.cardTitle}>{i.title}</h3>
                  <p className={css.cardInfo}>{i.description}</p>
                </div>
              </>
            );
          })}
        </div>
      </ContentWidth>
    </section>
  );
};

export default MarketplaceUSPcards;
