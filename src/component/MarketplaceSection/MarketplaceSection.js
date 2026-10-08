"use client";

import React, { useState, useCallback, memo } from "react";
import css from "./MarketplaceSection.module.css";
import Image from "next/image";
import IconCollection from "../IconCollection/IconCollection";
import ContentWidth from "../ContentWidth/ContentWidth";
import Link from "next/link";
import { tabMenu } from "../helperData";
import { PrimaryBtnLink } from "../Animations/CTAbutton";

// Cloudinary loader to auto-apply f_auto, q_auto, dpr_auto and responsive width
const cloudinaryLoader = ({ src, width, quality }) => {
  if (!src || typeof src !== "string" || src.indexOf("res.cloudinary.com") === -1) return src;
  const q = quality || "auto";
  const params = `f_auto,q_${q},dpr_auto,c_limit,w_${width}`;
  return src.replace("/upload/", `/upload/${params}/`);
};

// Memoized Components
const TabItem = memo(({ tab, isActive, onClick }) => (
  <div className={css.testing}>
    <div
      className={`${css.tabsContainer} ${isActive ? css.activeTab : ""}`}
      onClick={onClick}
    >
      <div className={css.tabItem}>
        <div className={css.tabImgContainer}>
          <Image src={tab.img} width={40} height={40} alt={tab.heading} loading="lazy" />
        </div>
        <div>
          <h5>{tab.heading}</h5>
          <p>{tab.subHeading}</p>
        </div>
      </div>
    </div>
  </div>
));

const TabContent = memo(({ content }) => (
  <div className={css.tabContentContainer}>
    <div className={css.titleNarrowContainer}>
      <div>
        <h3>{content.title}</h3>
        <p>{content.content}</p>
      </div>
      <PrimaryBtnLink href={content.btnLink} className="primaryBtn">
        Explore More <IconCollection name="rightArrowTop" />
      </PrimaryBtnLink>
    </div>
    <div className={css.pointsNimgContainer}>
      <ul className={css.pointContainer}>
        {content.points?.map((point, i) => (
          <li key={i}>
            <IconCollection name="colorCheck" />
            <div>
              <h6>{point.title}</h6>
              <p>{point.info}</p>
            </div>
          </li>
        ))}
      </ul>
      <div className={css.imgContainer}>
        <Image
          src={content.img}
          width={500}
          height={500}
          alt={content.title}
          className={css.tabImg}
          loading="lazy"
          loader={cloudinaryLoader}
          sizes="(max-width: 768px) 90vw, 500px"
        />
      </div>
    </div>
  </div>
));

const AccordionItem = memo(({ tab, isActive, toggle }) => (
  <div className={css.accordionItem}>
    <button onClick={toggle} className={css.accordionHeader}>
      <div className={css.headerContent}>
        <h3 className={css.heading}>
          {tab?.prefix} {tab?.heading} <span>{tab?.subHeading}</span>
        </h3>
      </div>
      <span className={css.toggleIcon}>
        <IconCollection name={isActive ? "dropdownUP" : "dropdown"} />
      </span>
    </button>

    {isActive && (
      <div className={css.accordionBody}>
        {tab.tabContent?.map((content) => (
          <div key={content.id}>
            <Image
              src={content?.img}
              alt={content.title}
              width={600}
              height={300}
              className={css.contentImage}
              loading="lazy"
              loader={cloudinaryLoader}
              sizes="(max-width: 768px) 95vw, 600px"
            />
            <p className={css.contentText}>{content.content}</p>
            <Link href={content.btnLink} className="primaryBtn">
              {content?.btnText}
              <IconCollection name="rightArrowTop" />
            </Link>
            <ul className={css.pointList}>
              {content?.points?.map((point, i) => (
                <li key={i} className={css.pointItem}>
                  <IconCollection name="colorCheck" />
                  <div>
                    <h5>{point?.title}</h5>
                    <p>{point?.info}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    )}
  </div>
));

const MarketplaceSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [activeAccordionIndex, setActiveAccordionIndex] = useState(null);

  const handleTabClick = useCallback((id) => {
    setActiveTab(id);
  }, []);

  const toggleAccordion = useCallback(
    (index) => {
      setActiveAccordionIndex((prev) => (prev === index ? null : index));
    },
    []
  );

  const currentTab = tabMenu.find((t) => t.id === activeTab);

  return (
    <section>
      <ContentWidth>
        <div className={css.contentContainer}>
          <h2>Smarter Marketplaces, Built Your Way</h2>
          <p>
            <span>Our platforms are built to evolve.</span> Choose your model—rental, service, product, or events—and add AI-powered features to grow faster.
          </p>
        </div>

        {/* Tab Menu */}
        <div className={css.tabMenuContainerWrapper}>
          <div className={css.tabMenuContainer}>
            <div className={css.TabsContainerWrapper}>
              {tabMenu?.map((tab) => (
                <TabItem
                  key={tab.id}
                  tab={tab}
                  isActive={activeTab === tab.id}
                  onClick={() => handleTabClick(tab?.id)}
                />
              ))}
            </div>

            <div className={css.tabContentContainerWrapper}>
              {currentTab?.tabContent?.map((content, index) => (
                <TabContent key={index} content={content} />
              ))}
            </div>
          </div>
        </div>

        {/* Accordion */}
        <div className={css.accordionWrapper}>
          <div className={css.accordionContainer}>
            {tabMenu?.map((tab, idx) => (
              <AccordionItem
                key={tab.id}
                tab={tab}
                isActive={activeAccordionIndex === idx}
                toggle={() => toggleAccordion(idx)}
              />
            ))}
          </div>
        </div>
      </ContentWidth>
    </section>
  );
};

export default MarketplaceSection;
