import React from "react";
import css from "../aiDevStyle.module.css";
import IconCollection from "@/component/IconCollection/IconCollection";
import ContentWidth from "@/component/ContentWidth/ContentWidth";

export default function WhyIcodelabsAIDeb() {
  return (
    <div className={css.WhyIcodelabsAIDebWrapper}>
      <ContentWidth>
        <div className={css.contentNfeature}>
          <div className={css.headingContainer}>
            <h2>Why Icodelabs?</h2>
            <p>
              Here’s how icodelabs turns insights into strategies that drive
              conversions!
            </p>
          </div>

          <div className={css.featuresContainer}>
            {feature.map((item, index) => (
              <div className={css.feature} key={index}>
                <div className={css.featureIcon}>
                  <IconCollection name={item.icon} />
                </div>
                <div className={css.contentContainer}>
                  <h3 dangerouslySetInnerHTML={{ __html: item.title }} />
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ContentWidth>
    </div>
  );
}

const feature = [
  {
    icon: "aiNativeTeam",
    title: "AI-Native <br /> Team",
    desc: "We've built production-grade LLM, vision, and generative systems in real-world deployments.",
  },
  {
    icon: "modularDevelopment",
    title: "Modular, Rapid <br /> Development",
    desc: "Pre-built frameworks reduce time-to-market by 40–60%.",
  },
  {
    icon: "roiDriven",
    title: "ROI- <br />Driven AI",
    desc: "We don't build just to experiment—our focus is on business impact and operational efficiency.",
  },
  {
    icon: "securityCompliance",
    title: "Built-In Security & <br /> Compliance",
    desc: "We implement governance, transparency, and privacy controls across every project.",
  },
];
