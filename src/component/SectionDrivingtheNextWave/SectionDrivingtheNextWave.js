import React from "react";
import css from "./SectionDrivingtheNextWave.module.css";
import ContentWidth from "../ContentWidth/ContentWidth";
import IconCollection from "../IconCollection/IconCollection";
import { strategyData } from "../helperData";

const whyIcodeList = [
  {
    icon: "faster-icon",
    name: "3-4x Faster",
    description:
      "Compared to traditional agency timelines for the same scope of work.",
    background: "#0075F2",
  },
  {
    icon: "ai-stage",
    name: "AI at Every Stage",
    description:
      "Architecture, code generation, QA, and deployment — AI runs through the entire process, not just code writing.",
    background: "#0075F2",
  },
  {
    icon: "built",
    name: "Built & Proven Internally",
    description:
      "We use AI-built tools to manage 18 active projects and 43 developers every day — not a demo, production-grade.",
    background: "#0075F2",
  },
];

const DrivingtheNextWave = React.memo(() => {
  return (
    <section className={css.container}>
      {/* <div className={css.glowContainer}>
        <div className={css.glowbgLeft} />
        <div className={css.glowbgRight} />
      </div> */}

      <div className={css.floatContainer}>
        <ContentWidth>
          <div className={css.digitalWrapper}>
            <div className={css.digitalInnerWrapper}>
              {/* Left Section */}
              <div className={css.digitalLeftWrapper}>
                <h5 className={css.whyCode}>Why icodelabs</h5>
                <h2>
                  We Don't Just Use AI.
                  <br /> We're Built Around It.
                </h2>
              </div>

              {/* Right Section */}
              <div className={css.digitalRightWrapper}>
                {/* {strategyData?.map(renderCard)} */}
                <p>
                  Most agencies added AI to their pitch. We restructured how we
                  build around it. Every developer at icodelabs uses AI at every
                  stage — architecture planning, code generation, code review,
                  QA, and deployment. Not as a shortcut. As a core part of how
                  work happens.
                </p>
                <br />
                <p>
                  We recently used this process to deliver Parent Co-Pilot — a
                  RAG-powered co-parenting app that reads your custody agreement
                  and personalises reminders, scheduling, and conflict guidance
                  to your actual parenting plan, live on the Apple App Store —
                  and Formabel, a sharetribe-based Belgian training marketplace,
                  live at formabel.be. Different products, different markets.
                  Same process.
                </p>
                <br />
                <h3>Faster delivery. Same quality. No compromise.</h3>
              </div>
            </div>
            <div className={css.icodeFeatureCards}>
              {whyIcodeList.map((item, i) => {
                return (
                  <div
                    className={css.codeCard}
                    key={i}
                    style={{
                      background: item.background,
                    }}
                  >
                    <IconCollection name={item.icon} />
                    <div className={css.codeName}>{item.name}</div>
                    <div className={css.codeDescription}>
                      {item.description}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </ContentWidth>
      </div>
    </section>
  );
});

function renderCard(item, i) {
  return (
    <div
      key={`${item?.strategyHeading}-${i}`}
      className={css.digitalCardContainer}
    >
      <div className={css.digitalCircle}>
        <IconCollection name={item?.strategyHeading} />
      </div>

      <div className={css.strategyWrapper}>
        <h5>{item.strategyHeading}</h5>
        <p className={`contentText ${css.strategyDescriptionBox}`}>
          {item?.strategyDescription}
        </p>
        <p className={`contentText ${css.strategyDescription}`}>
          {item?.strategyDescriptionSecond}
        </p>
      </div>
    </div>
  );
}

export default DrivingtheNextWave;
