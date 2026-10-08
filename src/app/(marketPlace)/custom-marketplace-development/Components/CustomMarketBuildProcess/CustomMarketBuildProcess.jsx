import React from "react";
import ContentWidth from "@/component/ContentWidth/ContentWidth";
import css from "./CustomMarketBuildProcess.module.css";
import IconCollection from "@/component/IconCollection/IconCollection";

const CustomMarketBuildProcess = () => {
  const buildSteps = [
    {
      id: 1,
      title: "Discovery & Scoping",
      description:
        "Business model, transaction logic, tech requirements. Output: fixed-scope proposal + timeline.",
      timeline: "1-2 weeks",
    },
    {
      id: 2,
      title: "Architecture & Design",
      description:
        "Data models, database schema, Figma UI/UX. Reviewed and signed off before build starts.",
      timeline: "2-3 weeks",
    },
    {
      id: 3,
      title: "Agile Development",
      description:
        "2-week sprints with demo at end of each. You see progress weekly — no black box development.",
      timeline: "6-16 weeks",
    },
    {
      id: 4,
      title: "QA & Launch",
      description:
        "Comprehensive QA, payment testing, performance, security review, and production deployment.",
      timeline: "2-3 weeks",
    },
    {
      id: 5,
      title: "Support & Scale",
      description:
        "90-day bug-free guarantee, retainer options, and long-term partnerships for new features.",
      timeline: "Ongoing",
    },
  ];

  return (
    <section className={css.buildProcessSection}>
      <ContentWidth>
        <div className={css.headingContainer}>
          <span className={css.sectionLabel}>HOW WE WORK</span>
          <h2 className={css.sectionTitle}>
            Our Custom Marketplace Build Process
          </h2>
          <p className={css.sectionDescription}>
            Every custom build follows the same structured process — agile
            delivery, fixed milestones, AI-augmented at every stage.
          </p>
        </div>

        <div className={css.stepsContainer}>
          {buildSteps.map((step) => (
            <div key={step.id} className={css.stepCard}>
              <div className={css.stepNumber}>{step.id}</div>
              <h3 className={css.stepTitle}>{step.title}</h3>
              <p className={css.stepDescription}>{step.description}</p>
              <div className={css.stepTimeline}>
                <IconCollection name={"clockSmall"} />
                <span className={css.timelineText}>{step.timeline}</span>
              </div>
            </div>
          ))}
        </div>
      </ContentWidth>
    </section>
  );
};

export default CustomMarketBuildProcess;
