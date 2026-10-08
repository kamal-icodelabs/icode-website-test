"use client";
import { useState } from "react";
import ContentWidth from "@/component/ContentWidth/ContentWidth";
import css from "./CustomMarketPlaceTechStack.module.css";

const CustomMarketPlaceTechStack = () => {
  const [activeTab, setActiveTab] = useState("frontend");

  const tabs = [
    { id: "frontend", label: "FRONTEND" },
    { id: "backend", label: "BACKEND" },
    { id: "payments", label: "PAYMENTS & INFRA" },
    { id: "ai", label: "AI & INTEGRATIONS" },
  ];

  const techStack = {
    frontend: [
      {
        icon: "/assests/img/marketplace/custom-marketplace/custom-marketplace-teckstack/next.svg",
        title: "Next.js",
        description: "SSR, SEO-friendly, API routes, fast page loads",
      },
      {
        icon: "/assests/img/marketplace/custom-marketplace/custom-marketplace-teckstack/react.svg",
        title: "React",
        description: "iOS + Android from one codebase",
      },
      {
        icon: "/assests/img/marketplace/custom-marketplace/custom-marketplace-teckstack/framer.svg",
        title: "Tailwind + Framer",
        description: "Fast UI development, smooth interactions",
      },
    ],
    backend: [
      {
        icon: "/assests/img/marketplace/custom-marketplace/custom-marketplace-teckstack/node.svg",
        title: "Node.js",
        description:
          "Fast, scalable server-side runtime for building high-performance APIs and real-time applications.",
      },
      {
        icon: "/assests/img/marketplace/custom-marketplace/custom-marketplace-teckstack/supabase.svg",
        title: "Supabase / PostgreSQL",
        description: "Real-time, relational, row-level security",
      },
      {
        icon: "/assests/img/marketplace/custom-marketplace/custom-marketplace-teckstack/mongodb.svg",
        title: "MongoDB",
        description: "Flexible document store for listing-heavy platforms",
      },
    ],
    payments: [
      {
        icon: "/assests/img/marketplace/custom-marketplace/custom-marketplace-teckstack/stripe.svg",
        title: "Stripe Connect",
        description: "Split payouts, escrow, SCA, multi-currency",
      },
      {
        icon: "/assests/img/marketplace/custom-marketplace/custom-marketplace-teckstack/aws.svg",
        title: "AWS / Vercel",
        description: "Scalable cloud hosting, CDN, edge functions",
      },
      {
        icon: "/assests/img/marketplace/custom-marketplace/custom-marketplace-teckstack/docker.svg",
        title: "Docker + CI/CD",
        description: "Containerised, automated deployments",
      },
    ],
    ai: [
      {
        icon: "/assests/img/marketplace/custom-marketplace/custom-marketplace-teckstack/openai.svg",
        title: "OpenAI / GPT-4",
        description: "Listing generation, chatbots, moderation",
      },
      {
        icon: "/assests/img/marketplace/custom-marketplace/custom-marketplace-teckstack/langchain.svg",
        title: "LangChain + Weaviate",
        description: "Vector search, semantic matching, RAG",
      },
      {
        icon: "/assests/img/marketplace/custom-marketplace/custom-marketplace-teckstack/algolia.svg",
        title: "Algolia / Typesense",
        description: "Advanced marketplace search & filtering",
      },
    ],
  };

  return (
    <section className={css.techStackSection}>
      <ContentWidth>
        <div className={css.headingContainer}>
          <span className={css.sectionLabel}>TECHNOLOGY</span>
          <h2 className={css.sectionTitle}>
            Our Custom Marketplace Tech Stack
          </h2>
          <p className={css.sectionInfo}>
            Battle-tested for marketplace architecture — not generic web app
            tooling. Every choice is made for performance, scalability, and
            long-term maintainability.
          </p>
        </div>

        <div className={css.tabsWrapper}>
          <div className={css.tabsContainer}>
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`${css.tabButton} ${
                  activeTab === tab.id ? css.tabActive : ""
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className={css.contentContainer}>
          <div className={css.techItemsGrid}>
            {techStack[activeTab].map((tech, index) => (
              <>
                <div key={index} className={css.techItemContainer}>
                  <div className={css.techItem}>
                    <div className={css.techIcon}>
                      <img src={tech.icon} alt={tech.title} />
                    </div>
                    <div>
                      <h3 className={css.techTitle}>{tech.title}</h3>
                      <p className={css.techDescription}>{tech.description}</p>
                    </div>
                  </div>
                  {/* {techStack[activeTab].length - 1 !== index && (
                  <div className={css.borderLeft} />
                )} */}
                </div>
              </>
            ))}
          </div>
        </div>
      </ContentWidth>
    </section>
  );
};

export default CustomMarketPlaceTechStack;
