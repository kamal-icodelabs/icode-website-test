"use client";
import React from "react";
import { useState } from "react";
import css from "./SharetribeFeatureShareTribeExtension.module.css";
import ContentWidth from "@/component/ContentWidth/ContentWidth";
import IconCollection from "@/component/IconCollection/IconCollection";
import classNames from "classnames";
import * as helperData from "@/component/helperData";
import Link from "next/link";

const { sharetribeFeatureModulesData, sharetribeFeatureSectionData } =
  helperData;

const ALL_MODULES_TAB = "All Modules";

const SharetribeFeatureShareTribeExtension = () => {
  const tabs = Object.keys(sharetribeFeatureModulesData);

  const [activeTab, setActiveTab] = useState(ALL_MODULES_TAB);

  const [openIndex, setOpenIndex] = useState(null);

  const activeModules =
    activeTab === ALL_MODULES_TAB
      ? tabs.flatMap((tab) =>
          sharetribeFeatureModulesData[tab].map((item) => ({
            ...item,
            category: tab,
          })),
        )
      : sharetribeFeatureModulesData[activeTab].map((item) => ({
          ...item,
          category: activeTab,
        }));

  return (
    <section
      className={css.sharetribeFeatureShareTribeExtension}
      id="features-section"
    >
      <ContentWidth>
        <div>
          <div className={css.moduleText}>Feature Module Catalogue</div>

          <h2 className={css.sectionTitle}>
            {sharetribeFeatureSectionData.sectionTitle}
          </h2>

          <p className={css.sectionInfo}>
            {sharetribeFeatureSectionData.sectionInfo}
          </p>
        </div>

        <div className={css.tabContainer}>
          {/* Tabs */}

          <div className={css.tabs}>
            <button
              className={classNames(
                css.tab,
                activeTab === ALL_MODULES_TAB && css.activeTab,
              )}
              onClick={() => {
                setActiveTab(ALL_MODULES_TAB);
                setOpenIndex(null);
              }}
            >
              <span>All Modules</span>
            </button>

            {tabs.map((tab) => (
              <button
                key={tab}
                className={classNames(
                  css.tab,
                  activeTab === tab && css.activeTab,
                )}
                onClick={() => {
                  setActiveTab(tab);

                  setOpenIndex(null);
                }}
              >
                <div className={css.icon}>
                  <IconCollection name={tab} />
                </div>

                <span>{tab}</span>
              </button>
            ))}
          </div>

          {/* Accordion */}

          <div className={css.accordion}>
            {activeModules.map((item, idx) => {
              return (
                <div
                  key={idx}
                  className={`${css.accordionCard} ${
                    openIndex === idx ? css.open : ""
                  }`}
                >
                  <div
                    onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                    className={css.indicator}
                  >
                    {chevronDown}
                  </div>

                  <button
                    className={css.accordionHeader}
                    onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  >
                    <div className={css.headerTitle}>
                      <div className={css.tabName}>{item.category}</div>

                      <h3>{item.title}</h3>

                      <p>{item.description}</p>
                    </div>

                    <div className={css.accordionRightBar}>
                      <div className={css.headerInfo}>
                        <div className={css.investment}>
                          <p>
                            <IconCollection name="investment-icon" />{" "}
                            Investment:
                          </p>

                          <span>{item.investment}</span>
                        </div>

                        <div className={css.delivery}>
                          <p>
                            <IconCollection name="delivery-icon" /> Delivery:
                          </p>

                          <span>{item.delivery}</span>
                        </div>
                      </div>

                      <div className={css.availabilityRow}>
                        <div className={css.availabilitySetup}>
                          Requires existing Sharetribe availability setup.
                        </div>

                        <a href="#feedback-form">Get Quote</a>
                      </div>
                    </div>
                  </button>

                  <div
                    className={classNames(
                      css.accordionContent,

                      openIndex === idx ? css.showContent : css.hideContent,
                    )}
                  >
                    <div className={css.content}>
                      <div>
                        <p className={css.detailTitle}>{item.detailsTitle}</p>

                        {item.details && (
                          <ul>
                            {item.details.map((point, i) => (
                              <li key={i}>{point}</li>
                            ))}
                          </ul>
                        )}
                      </div>

                      {/* {item.link && (

                        <Link

                          href={item.link}

                          className={classNames(css.watchVideoBtn, "btn")}

                        >

                          {watchVideo} Watch A Video

                        </Link>

                      )} */}
                    </div>

                    <div className={css.accordionImg}>
                      <img
                        // fill

                        src={item.img}
                        //   width={531}

                        //   height={350}

                        quality={100}
                        alt={item.title}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className={css.banner}>
            <div className={css.content}>
              <h2>Starting from scratch instead?</h2>

              <p>Build your marketplace the right way from day one.</p>
            </div>

            <Link
              href={"/services/sharetribe-extension"}
              className={classNames(css.cardButton, "primaryGradientBtn")}
            >
              Request Extension Quote
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.707031 11L10.707 1"
                  stroke="white"
                  stroke-width="2"
                  stroke-linejoin="round"
                />

                <path
                  d="M0.707031 1H10.707V11"
                  stroke="white"
                  stroke-width="2"
                  stroke-linejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>
      </ContentWidth>
    </section>
  );
};

export default SharetribeFeatureShareTribeExtension;

const chevronDown = [
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.4003 12.0002L9.60029 7.2002L4.80029 12.0002"
      stroke="#003B79"
      stroke-width="1.2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>,
];

const watchVideo = [
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 0C5.37257 0 0 5.37257 0 12C0 18.6274 5.37257 23.9999 12 23.9999C18.6274 23.9999 23.9999 18.6274 23.9999 12C23.9929 5.37554 18.6245 0.00708147 12 0ZM17.0536 12.3823C16.9706 12.549 16.8355 12.6841 16.6688 12.7671V12.7714L9.8117 16.2C9.38822 16.4116 8.87343 16.2399 8.66179 15.8164C8.60162 15.696 8.57063 15.5631 8.57139 15.4286V8.57144C8.57119 8.09804 8.95474 7.71413 9.42815 7.71388C9.56129 7.71383 9.69262 7.74477 9.8117 7.80428L16.6688 11.2329C17.0925 11.444 17.2648 11.9586 17.0536 12.3823Z"
      fill="white"
    />
  </svg>,
];
