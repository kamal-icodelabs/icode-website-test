"use client";

import React, { useState } from "react";
import ContentWidth from "../ContentWidth/ContentWidth";
import css from "./SectionHowItWork.module.css";
import IconCollection from "../IconCollection/IconCollection";
import { howitworkContent } from "../helperData";
import Link from "next/link";

const steps = [
  {
    id: 1,
    number: "1",
    title: "Free Scoping Call",
    desc: "Tell us what you're building. We'll tell you whether Sharetribe, custom, or a hybrid approach fits your stage, budget, and timeline. No pitch — just honest advice.",
  },
  {
    id: 2,
    number: "2",
    title: "Fixed-Price Proposal",
    desc: "Clear scope, fixed price, delivery timeline — before any work starts. No hourly billing surprises. No scope creep.",
  },
  {
    id: 3,
    number: "3",
    title: "Delivered with a Guarantee",
    desc: "Your platform goes live, fully tested. Our 90-day bug-free guarantee kicks in — if anything breaks after launch, we fix it. No questions.",
  },
];

export default function SectionHowItWork() {
  return (
    <ContentWidth>
      <div className={css.SectionHowItWorkWrapper}>
        <div className={css.howItWorkSectionContent}>
          <div className={css.ourProcess}>OUR PROCESS</div>
          <h2 className={css.processHeading}>
            From Idea to Live Product in 3 Steps.
          </h2>
          <div>
            <div className={css.grid}>
              {steps.map((step) => (
                <div key={step.id} className={css.card}>
                  <div className={css.number}>{step.number}</div>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              ))}
            </div>

            <div className={css.buttonWrapper}>
              {/* <Link
                target="_blank"
                href={"https://calendly.com/jaytiwary"}
                className={`${css.button} defaultGradientBtn`}
              >
                Book Your Free Scoping Call
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 11L11 1"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M1 1H11V11"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </ContentWidth>
  );
}
