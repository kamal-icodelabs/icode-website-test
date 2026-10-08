"use client";
import React from "react";
import css from "./MobileToolsSection.module.css";
import ContentWidth from "@/component/ContentWidth/ContentWidth";
import IconCollection from "@/component/IconCollection/IconCollection";

export default function DevToolSection() {
  return (
    <ContentWidth className={css.mainWrapper}>
      <div className={css.contentContainer}>
        <h2>What You Get with Our Mobile App Development Services</h2>
        <p>
          Instead of getting lost in frameworks and tools, we highlight what
          really matters: outcomes, speed, and scalability. Our process ensures
          that your app isn’t just built with the latest technology—it’s
          designed to engage, perform, and grow with your business.
        </p>
      </div>

      <div className={css.gridContainer}>
        {tools.map((tool, index) => (
          <div key={index} className={css.gridItem}>
            <div className={css.icon}>
              <IconCollection name={tool.icon} />
            </div>

            <div>
              <h3 className={css.cardTitle}>{tool.name}</h3>
              <p className={css.cardInfo}>{tool.description}</p>
            </div>
          </div>
        ))}
      </div>
    </ContentWidth>
  );
}

const tools = [
  {
    name: "Cross-Platform & Native",
    description:
      "Build apps for iOS, Android, or both using React Native, Flutter, Swift, and Kotlin—ensuring the right balance of speed and performance.",
    icon: "crossPlatform",
  },
  {
    name: "Scalable Architectures",
    description:
      "Backends powered by AWS, Firebase, or custom APIs (Node.js, Python, GraphQL) that grow seamlessly as your user base expands.",
    icon: "scalable",
  },
  {
    name: "Modern UI/UX",
    description:
      "Pixel-perfect design systems and intuitive user flows built with Figma, Tailwind, and accessibility-first design principles.",
    icon: "uiux",
  },
  {
    name: "3rd Party Integrations",
    description:
      "Payments, chat, analytics, social logins, video calls, and more—all integrated smoothly to extend your app’s capabilities.",
    icon: "integrations",
  },
  {
    name: "AI & Personalization",
    description:
      "From chatbots to recommendation engines, we embed AI features to personalize experiences and improve engagement.",
    icon: "ai-personalization",
  },
  {
    name: "End-to-End Lifecycle",
    description:
      "We cover strategy, development, testing, deployment, and ongoing support—so your app evolves as your business grows.",
    icon: "lifecycle",
  },
];
