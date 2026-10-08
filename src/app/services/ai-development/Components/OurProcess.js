import React from "react";
import css from "../aiDevStyle.module.css";
import ContentWidth from "@/component/ContentWidth/ContentWidth";
import IconCollection from "@/component/IconCollection/IconCollection";

export default function OurProcess() {
  return (
    <div className={css.ourProcessWrapper}>
      <ContentWidth>
        <div className={css.headingContainer}>
          <h2>Our AI Development Process</h2>
          <p>From discovery to deployment — how we ship production-ready AI.</p>
        </div>

        <div className={css.ptContainer}>
          {processPt.map((i, index) => {
            return (
              <div className={css.ptBox} key={index}>
                <div>
                  <span className={css.number}>{i.number}</span>
                  <h3 className={css.title}>{i.title}</h3>
                  <p className={css.para}>{i.para}</p>
                </div>
                <IconCollection name={i.icon} />
              </div>
            );
          })}
        </div>
      </ContentWidth>
    </div>
  );
}

const processPt = [
  {
    number: "01",
    title: "AI Discovery & Use Case Mapping",
    para: "Understand goals, define feasibility, assess business alignment.",
    icon: "magnifyGlass",
  },
  {
    number: "02",
    title: "Prototype, Validation (2–4 Weeks)",
    para: "Ship a working AI MVP using reusable frameworks.",
    icon: "glowBulb",
  },
  {
    number: "03",
    title: "End-to-End Development & Integration",
    para: "Deploy full-stack AI with APIs, UI, data, and cloud infra.",
    icon: "connectBoxScreen",
  },
  {
    number: "04",
    title: "Launch & Scale",
    para: "Real-time monitoring, model updates, retraining, and scaling workflows.",
    icon: "lineRocket",
  },
];
