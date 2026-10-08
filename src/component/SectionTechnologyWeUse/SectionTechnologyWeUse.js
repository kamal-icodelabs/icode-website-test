// app/page.tsx or pages/index.tsx
"use client";

import React, { useState } from "react";
import css from "./SectionTechnologyWeUse.module.css";
import ContentWidth from "../ContentWidth/ContentWidth";
import IconCollection from "../IconCollection/IconCollection";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { tabData } from "../helperData";

const SectionTechnologyWeUse = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleClick = (idCheck) => {
    setActiveTab(idCheck);
  };

  return (
    <div className={css.tecnocontainer}>
      <ContentWidth>
        <h2>Built With Battle-Tested Tools</h2>
        <p>
          Having launched 50+ Sharetribe marketplaces and 100+ total apps and web platforms,
          we know which technologies work best. From Sharetribe customizations to AI-driven
          personalization, secure payments, and AWS cloud, we engineer with
          tools designed for performance, growth, and trust.
        </p>

        {/* --------------- */}
        <div className={css.technoWrapper}>
          <div className={css.accordionMenu}>
            {tabData?.map((i, index) => {
              return (
                <React.Fragment key={index}>
                  <div
                    className={`${css.tabContent} ${
                      activeTab === i.id ? css.activeTab : ""
                    }`}
                    onClick={() => handleClick(i.id)}
                  >
                    <h5>{i?.category}</h5>

                    <IconCollection name="rightArrowTop" />
                  </div>
                </React.Fragment>
              );
            })}
          </div>

          <div className={css.accordionContent}>
            {tabData[activeTab]?.contents?.length > 0
              ? tabData[activeTab]?.contents?.map((i, index) => {
                  return (
                    <React.Fragment key={index}>
                      <div className={css.AccordionContentPointWrapper}>
                        <IconCollection name="technoList" />
                        <div>
                          <h6>{i.title}</h6>
                          <p>{i.description}</p>
                        </div>
                      </div>
                    </React.Fragment>
                  );
                })
              : "No Content Present"}
          </div>
        </div>
      </ContentWidth>
      <div className={css.tabCarouselWrapper}>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          className="technoCarousel"
          autoHeight={true}
          centeredSlides={true}
        >
          {tabData?.map((tab) => (
            <SwiperSlide key={tab.id} className={css.tabSlide}>
              <div className={css.tabCard}>
                <div className={css.tabHeader}>{tab.category}</div>
                <div className={css.tabContent}>
                  {tab?.contents?.map((item, idx) => (
                    <div key={idx} className={css.tabItem}>
                      <div className={css.checkIcon}>
                        <IconCollection name="technoList" />
                      </div>
                      <div className={css.itemInfo}>
                        <strong>{item?.title}</strong>
                        <p>{item?.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SectionTechnologyWeUse;
