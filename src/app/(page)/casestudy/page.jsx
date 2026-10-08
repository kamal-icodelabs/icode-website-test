"use client";

import ContentWidth from "@/component/ContentWidth/ContentWidth";
import React, { useState } from "react";
import css from "./CaseStudy.module.css";
import { caseStudyContent, casestudyFilterTab } from "@/component/helperData";
import classNames from "classnames";
import SectionResources from "@/component/SectionResources/SectionResources";
import { SmallCard, WideCard } from "./cards";

const Page = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const items = caseStudyContent.filter((item) => {
    const matchesTab =
      activeTab === "all" ||
      [].concat(item.tag).includes(activeTab);

    const search = searchTerm.trim().toLowerCase();

    const matchesSearch =
      !search ||
      item.title?.toLowerCase().includes(search) ||
      item.description?.toLowerCase().includes(search) ||
      item.tagLine?.toLowerCase().includes(search) ||
      item.keyPt?.platform?.toLowerCase().includes(search) ||
      item.keyPt?.starPt?.toLowerCase().includes(search) ||
      [].concat(item.tag).some((tag) =>
        tag.toLowerCase().includes(search)
      );

    return matchesTab && matchesSearch;
  });

  const rows = [];

  for (let i = 0; i < items.length;) {
    if (rows.length % 2 === 0) {
      rows.push(
        <WideCard
          key={`${items[i]?.link}-${i}`}
          data={items[i++]}
        />
      );
    } else {
      const left = items[i++];
      const right = items[i++] ?? null;

      rows.push(
        <div
          key={`${left?.link}-${i}`}
          className={css.twoColRow}
        >
          <SmallCard data={left} />
          {right && <SmallCard data={right} />}
        </div>
      );
    }
  }

  return (
    <>
      <div className={css.heroBannerBG}>
        <ContentWidth>
          <div className={css.heroContent}>
            <div>
              <span className={css.heroTag}>
                Case Studies
              </span>

              <h1 className={css.heroTitle}>
                50+ Marketplaces Built. Here's How We Built
                Them.
              </h1>
            </div>

            <p className={css.heroInfo}>
              Real projects. Real founders. Real outcomes.
              Sharetribe builds, custom platforms, and
              AI-powered marketplace applications across
              six verticals.
            </p>
          </div>

          <div className={css.filterTabs}>
            <div className={css.filterTabs_left}>
              {casestudyFilterTab.map((tab) => (
                <button
                  key={tab.tag}
                  onClick={() => setActiveTab(tab.tag)}
                  className={classNames(
                    activeTab === tab.tag
                      ? css.filterTab_active
                      : css.filterTab
                  )}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className={css.filterSearchWrapper}>
              <span className={css.filterSearch_icon} />

              <input
                type="text"
                className={css.filterSearch}
                placeholder="Search case studies..."
                value={searchTerm}
                onChange={(e) =>
                  setSearchTerm(e.target.value)
                }
              />
            </div>
          </div>
        </ContentWidth>
      </div>

      <div className={css.mainCardWrapper}>
        <ContentWidth>
          {items.length > 0 ? (
            <div className={css.caseStudyList}>
              {rows}
            </div>
          ) : (
            <div className={css.noResults}>
              No case studies found.
            </div>
          )}
        </ContentWidth>
      </div>

      <SectionResources
        filterTypes={[
          "Sharetribe Development",
          "Marketplace Development",
        ]}
      />
    </>
  );
};

export default Page;
