"use client";
import React, { useState } from "react";
import css from "./SectionExploreAnalyze.module.css";
import ContentWidth from "../ContentWidth/ContentWidth";
import IconCollection from "../IconCollection/IconCollection";
import Image from "next/image";

const SectionExploreAnalyze = () => {
  const [activeTab, setActiveTab] = useState(0);

  const buttons = [
    { text: "Explore & Analyze Design" },
    { text: "Design" },
    { text: "Engineer" },
    { text: "Validate & Release" },
    { text: "Iterate & Scale" },
    { text: "Go Live Maintain" },
  ];

  // listing data
  const exploreAnalyzeData = [
    {
      heading: "Explore & Analyze",
      description:
        "We start by understanding your vision, aligning with stakeholders, and diving deep into requirements. Our project manager works with you and the team to refine priorities, validate assumptions, and set a clear product roadmap.",
      labels: [
        "Clear scope definition",
        "High-level user stories",
        "Scrum team & sprint plan",
        "Priorities set using MoSCoW",
        "Validated business & technical assumptions",
      ],
      img: "/assests/img/ourApproach/Explore & Analyze.svg",
    },
    {
      heading: "Design",
      description:
        "We craft intuitive user interfaces guided by your brand identity, translating ideas into clickable prototypes that focus on user experience. Every screen is reviewed and approved by stakeholders for a seamless design-to-build transition.",
      labels: [
        "Clickable prototype",
        "Pixel-perfect UI/UX design",
        "Design validated by team & stakeholders",
        "Branding & interface design documentation",
      ],
      img: "/assests/img/ourApproach/Design.svg",
    },
    {
      heading: "Engineer",
      description:
        "Our developers set up the architecture, write clean, maintainable code, and deliver sprint goals on time. Daily standups, sprint reviews, and collaborative feedback loops ensure your product evolves efficiently.",
      labels: [
        "System design & architecture document",
        "Incremental product deliverables",
        "Refined product backlog",
        "Sprint delivery reports",
        "Source code repository access",
        "Detailed API documentation",
      ],
      img: "/assests/img/ourApproach/Engineer.svg",
    },
    {
      heading: "Validate & Release",
      description:
        "We focus on rigorous testing and user acceptance validation with stakeholders to ensure each release meets expectations before it goes live.",
      labels: [
        "Product backlog updates",
        "Refined product backlog",
        "Validated release ready for deployment",
      ],
      img: "/assests/img/ourApproach/Validate & Release.svg",
    },
    {
      heading: "Iterate & Scale",
      description:
        "After initial releases, we optimize, scale features, and implement feedback. Our support system ensures your platform grows smoothly and remains high-performing.",
      labels: [
        "Post-release optimizations",
        "New feature iterations",
        "Performance scaling",
        "Refined release cycles",
      ],
      img: "/assests/img/ourApproach/Iterate & Scale.svg",
    },
    {
      heading: "Go Live & Maintain",
      description:
        "We handle a smooth launch, monitor performance, and provide ongoing maintenance to keep your system secure, stable, and up to date.",
      labels: [
        "Successful deployment",
        "Real-time monitoring & logging",
        "SLA-driven maintenance & support",
      ],
      img: "/assests/img/ourApproach/Go Live Maintain.svg",
    },
  ];

  const activeData = exploreAnalyzeData[activeTab];

  return (
    <ContentWidth>
      <div className={css.exploreAnalyzeWrapper}>
        <h2 className={css.exploreHeading}>
          Transparency, Collaboration & Continuous Improvement
        </h2>

        <p className={css.exploreDescription}>
          We believe the best products come from open communication, shared
          ownership, and iterative improvement. That’s why we embed transparency
          into every step of our process — keeping you informed, involved, and
          confident. Through regular reviews, feedback loops, and measurable
          progress updates, we ensure your vision evolves into a product that
          meets (and often exceeds) expectations.
        </p>

        <div className={css.exploreButtonWrapper}>
          {buttons.map((value, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`${css.explorAnalyzeButton} ${
                activeTab === index ? css.activeButton : ""
              }`}
            >
              {value.text}
            </button>
          ))}
        </div>

        <div className={css.exploreAnalyzeWrapperBox}>
          <div className={css.exploreAnalyzeContainer}>
            <div className={css.leftExploreAnalyzeContainer}>
              <h1 className={css.exploreSubHeading}>{activeData.heading}</h1>
              <p className={css.exploreSubDescription}>
                {activeData.description}
              </p>
              {/* listing data */}
              <ul>
                {activeData.labels.map((list, index) => (
                  <li className={css.radioListWrapper} key={index}>
                    <IconCollection name="blueCircle" />
                    <div className={css.listTitle}>{list}</div>
                  </li>
                ))}
              </ul>
            </div>
            <div className={css.rightExploreAnalyzeContainer}>
              <div className={css.imgContainer}>
                <Image
                  alt={activeData.heading}
                  fill
                 
                  quality={100}
                  // width={569}
                  // height={429}
                  src={activeData.img}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </ContentWidth>
  );
};

export default SectionExploreAnalyze;
