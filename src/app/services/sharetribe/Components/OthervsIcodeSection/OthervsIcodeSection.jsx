import ContentWidth from "@/component/ContentWidth/ContentWidth";
import React from "react";
import css from "./OthervsIcodeSection.module.css";

const data = [
  {
    title: "Availability",
    bad: "Often tied up, causes delays",
    good: "Dedicated team, no wait times",
  },
  {
    title: "Sharetribe knowledge",
    bad: "Not vetted, leads to costly mistakes",
    good: "Official Sharetribe vetted partner",
  },
  {
    title: "Delivery guarantee",
    bad: "No guarantee, variable quality",
    good: "90-day bug-free guarantee",
  },
  {
    title: "Scale & complexity",
    bad: "One person — limited capacity",
    good: "Dedicated multi-discipline team, parallel delivery",
  },
  {
    title: "Post-launch support",
    bad: "Project ends, support ends",
    good: "3–6 months included, retainer available",
  },
  {
    title: "Mobile app delivery",
    bad: "Rarely offered",
    good: "React Native included in Growth+",
  },
  {
    title: "AI features",
    bad: "Not typically available",
    good: "Available in all tiers",
  },
  {
    title: "Long-term partnership",
    bad: "One-off engagement",
    good: "True product partner from MVP to scale",
  },
];

export default function OthervsIcodeSection() {
  return (
    <div className={css.icodeSectionWrapper}>
      <ContentWidth>
        <div className={css.sectionContainer}> 
          <div className={css.sectionHeading}>Why icodelabs</div>
          <div className={css.sectionSubHeading}>
            icodelabs <span className={css.lightText}>vs</span> Freelancers <span className={css.lightText}>&</span> Non-Experts
          </div>
          <div className={css.nonExpertTable}>
            <div className={css.table}>
              <div className={css.header}>
                <div className={css.blackText}>What Matters to You</div>
                <div className={css.blackText}>Freelancers & Non-Experts</div>
                <div className={css.green}>iCodelabs</div>
              </div>
              {data.map((item, index) => (
                <div key={index} className={css.row}>
                  <div className={css.title}>{item.title}</div>
                  <div className={css.bad}>
                    <span className={css.cross}>
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15 5L5 15" stroke="#FA303F" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M5 5L15 15" stroke="#FA303F" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </span>
                    {item.bad}
                  </div>
                  <div className={css.good}>
                    <span className={css.tick}>
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16.6693 5L7.5026 14.1667L3.33594 10" stroke="#0CA471" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </span>
                    {item.good}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={css.mobileCards}>
            {data.map((item, index) => (
              <div key={index} className={css.mobileCard}>
                <div className={css.mobileCardTitle}>{item.title}</div>
                <div className={css.comparisonRow}>
                  <div className={css.mobileBad}>
                    <div className={css.mobileLabel}>Freelancers & Non-Experts</div>
                    <div className={css.mobileContent}>
                      <span className={css.cross}>
                        <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 5L5 15" stroke="#FA303F" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M5 5L15 15" stroke="#FA303F" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                      {item.bad}
                    </div>
                  </div>
                  <div className={css.mobileGood}>
                    <div className={css.mobileLabel}>iCodelabs</div>
                    <div className={css.mobileContent}>
                      <span className={css.tick}>
                        <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.6693 5L7.5026 14.1667L3.33594 10" stroke="#0CA471" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                      {item.good}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ContentWidth>
    </div>
  );
}