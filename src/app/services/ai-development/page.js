import React from "react";
import css from "./aiDevStyle.module.css";
import dynamic from "next/dynamic";
import Loading from "@/app/loading";
import ContentWidth from "@/component/ContentWidth/ContentWidth";
import SectionResources from "@/component/SectionResources/SectionResources";

const aiFeatures = [
  {
    title: "Smart Search & Discovery",
    description:
      "AI-powered search that understands intent, not just keywords. Filters, ranking, and recommendations tailored to your marketplace vertical.",
    icons: "searchIcon",
  },
  {
    title: "AI Listing Generation",
    description:
      "Sellers describe their product or service in plain text — AI generates a polished, SEO-optimized listing automatically.",
    icons: "listingIcon",
  },
  {
    title: "Automated Moderation",
    description:
      "Content, image, and fraud moderation that runs before listings go live. Fewer manual reviews, faster time-to-publish.",
    icons: "moderationIcon",
  },
  {
    title: "Recommendation Engine",
    description:
      "'You might also like' and 'similar providers' powered by behaviour data. Increases session depth and repeat bookings.",
    icons: "recommendationIcon",
  },
  {
    title: "Dynamic Pricing",
    description:
      "AI-suggested pricing based on demand, seasonality, and comparable listings. Most relevant for rental and booking marketplaces.",
    icons: "pricingIcon",
  },
  {
    title: "AI Onboarding Flows",
    description:
      "Guided provider onboarding that adapts based on what the seller has and hasn't completed. Higher completion rates, less drop-off.",
    icons: "onboardingIcon",
  },
];

const HeroSectionAiDev = dynamic(
  () => import("./Components/HeroSectionAiDev"),
  {
    loading: () => <Loading />,
  },
);
const PreBuildAccelerators = dynamic(
  () => import("./Components/PreBuildAccelerators"),
  {
    loading: () => <Loading />,
  },
);
import OurAiDevServices from "./Components/OurAiDevServices";
import IconCollection from "@/component/IconCollection/IconCollection";
const OurProcess = dynamic(() => import("./Components/OurProcess"), {
  loading: () => <Loading />,
});
const WhyIcodelabsAIDeb = dynamic(
  () => import("./Components/WhyIcodelabsAIDeb"),
  {
    loading: () => <Loading />,
  },
);
const OurTechStack = dynamic(() => import("./Components/OurTechStack"), {
  loading: () => <Loading />,
});
const ReadyToBuild = dynamic(() => import("./Components/ReadyToBuild"), {
  loading: () => <Loading />,
});
const FAQSection = dynamic(
  () => import("../react-native/Components/FAQSection/FAQSection"),
  {
    ssr: false,
    loading: () => <Loading />,
  },
);
const GridCardWrapper = dynamic(
  () =>
    import("@/app/(marketPlace)/CommonComponents/ImageNContentSection/ImageNContentSection").then(
      (mod) => ({ default: mod.GridCardWrapper }),
    ),
  {
    ssr: false,
    loading: () => <Loading />,
  },
);

export const revalidate = 3600;

export default function page() {
  return (
    <div className={css.aiDevelopmentWrapper}>
      {/* heroSection */}
      <HeroSectionAiDev />

      <section className={css.aiFeatureSection}>
        <ContentWidth>
          <div className={css.sectionContent}>
            <span className={css.sectionLabel}>AI features</span>
            <h2 className={css.sectionTitle}>
              AI Features We Build Into Marketplaces
            </h2>
          </div>

          <div className={css.featuresGrid}>
            {aiFeatures.map((item) => (
              <div className={css.featureCard} key={item.title}>
                <IconCollection name={item.icons} />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </ContentWidth>
      </section>

      <OurAiDevServices data={keyFeatureData} />
      <OurProcess />
      <PreBuildAccelerators />
      <WhyIcodelabsAIDeb />
      <OurTechStack />
      <ReadyToBuild />

      {/* <GridCardWrapper
        heading={"Our AI Development Services"}
        data={keyFeatureData}
        ctaRequired={false}
        fullWIdthCTA={true}
      /> */}

      <div className="sectionContainer">
        <FAQSection data={faqData} />
      </div>

      <SectionResources filterTypes={["App Development"]} />
    </div>
  );
}

const keyFeatureData = [
  {
    title: "Agentic AI Development",
    description:
      "Deploy intelligent assistants that automate workflows, onboard users, qualify leads, or search data.",
    img: "/assests/img/ai-dev/ai-agent.png",
  },
  {
    title: "AI Chatbot Solutions",
    description:
      "Conversational AI trained on your business data—multilingual, sentiment-aware, and RAG-enabled.",
    img: "/assests/img/ai-dev/ai-chat.png",
  },
  {
    title: "Gen AI & Creative Automation",
    description:
      "Generate text, images, videos, and product listings using GPT-4, DALL·E, DreamBooth, and Whisper.",
    img: "/assests/img/ai-dev/genAi.png",
  },
  {
    title: "AI SQL Copilot",
    description:
      "Let users query structured databases in natural language. Optimized SQL output with auto schema discovery.",
    img: "/assests/img/ai-dev/ai-sql.png",
  },
  {
    title: "Document AI & Summarization",
    description:
      "Parse contracts, SOPs, or knowledge bases and build search or summary experiences on top.",
    img: "/assests/img/ai-dev/document-ai.png",
  },
  {
    title: "AI Consulting & Architecture Design",
    description:
      "Align feasibility with ROI and build your AI roadmap the right way—with our AI and infra experts.",
    img: "/assests/img/ai-dev/ai-consulting.png",
  },

  {
    title: " RPA & Adaptive AI",
    description:
      "Automate repetitive workflows — document processing, data extraction, form handling, and approval chains — using rule-based and adaptive AI that learns from your operations.",
    img: "/assests/img/ai-dev/rpa.png",
  },
];

const faqData = [
  {
    question: "What is AI development?",
    answer:
      "AI development is the process of designing, training, and deploying artificial intelligence systems that can analyze data, automate processes, and make intelligent decisions. It often involves machine learning models, natural language processing (NLP), computer vision, and recommendation systems. At Icodelabs, we build AI solutions tailored to your business goals — whether that's powering chatbots, automating workflows, or enabling predictive analytics.",
  },
  {
    question: "How much does AI app development cost?",
    answer: (
      <>
        <div>
          <p>
            The cost depends on the project's complexity, data requirements, and
            integrations.
          </p>
          <ul style={{ margin: "8px 0", paddingLeft: "26px" }}>
            <li>MVPs or proof-of-concepts: $3,000 – $5,000</li>
            <li>
              Mid-size applications with AI chat, analytics, or workflow
              automation: $5,000 – $10,000
            </li>
            <li>
              Enterprise-grade solutions requiring custom models and
              integrations: $20,000+
            </li>
          </ul>
          <p>
            We provide milestone-based pricing so you can scale features as your
            needs grow.
          </p>
        </div>
      </>
    ),
  },
  {
    question: "How long does it take to build an AI-based app?",
    answer: (
      <>
        <div>
          <p>Timelines vary by scope:</p>
          <ul style={{ margin: "8px 0", paddingLeft: "26px" }}>
            <li>Prototypes: 2–4 weeks</li>
            <li>Full-featured apps: 3–4 months</li>
            <li> Enterprise AI platforms: 4–6 months</li>
          </ul>
          <p>
            We follow agile sprints, so you start seeing working features early
            in the process.
          </p>
        </div>
      </>
    ),
  },
  {
    question: "What industries can benefit from AI solutions?",
    answer: (
      <>
        <div>
          <p>
            AI is transforming nearly every industry. Some examples include:
          </p>

          <ul style={{ margin: "8px 0", paddingLeft: "26px" }}>
            <li>
              Healthcare – patient monitoring, diagnostics, virtual assistants.
            </li>
            <li>
              E-commerce – personalized recommendations, inventory forecasting.
            </li>
            <li>
              Finance – fraud detection, credit scoring, process automation.
            </li>
            <li>
              Legal & Real Estate – document analysis, contract review,
              AI-powered marketplaces.
            </li>
            <li>
              Travel & Hospitality – dynamic pricing, smart booking assistants.
            </li>
          </ul>
          <p>
            If your industry deals with large volumes of data or repetitive
            tasks, AI can add value.
          </p>
        </div>
      </>
    ),
  },
  {
    question:
      "What Artificial Intelligence software development services does iCodeLabs offer?",
    answer: (
      <>
        <div>
          <p>We cover the full AI lifecycle:</p>
          <ul style={{ margin: "8px 0", paddingLeft: "26px" }}>
            <li>
              AI consulting & ideation – identifying where AI creates real ROI.
            </li>
            <li>
              Custom AI model development – NLP, computer vision, predictive
              analytics.
            </li>
            <li>
              AI-powered marketplace features – smart search, dynamic pricing,
              content automation.
            </li>
            <li>
              Chatbots & virtual assistants – powered by GPT and other LLMs.
            </li>
            <li>
              Integration with existing platforms – embedding AI into
              Sharetribe, web apps, or mobile apps.
            </li>
          </ul>
        </div>
      </>
    ),
  },
  {
    question: "How to choose the best AI development company?",
    answer: (
      <>
        <div>
          <p>When selecting an AI partner, consider:</p>
          <ul style={{ margin: "8px 0", paddingLeft: "26px" }}>
            <li>
              Proven expertise in building real-world AI solutions, not just
              experiments.
            </li>
            <li>
              Industry-specific experience (e.g., marketplaces, healthcare,
              finance).
            </li>
            <li>
              Scalable approach — starting with MVPs and growing to
              enterprise-level.
            </li>
            <li>
              Transparency — milestone-based delivery, clear communication, and
              cost visibility.
            </li>
          </ul>
          <p>
            At iCodeLabs, we stand out as a trusted AI development partner by
            combining Sharetribe marketplace expertise with modern AI
            engineering, ensuring you get both domain knowledge and cutting-edge
            technology.
          </p>
        </div>
      </>
    ),
  },
];

const data = [
  {
    title: "AI Development",
    description:
      "Deploy intelligent assistants that automate workflows, onboard users, qualify leads, or search data.",
    img: "/assests/img/ai-dev/ai-agent.png",
  },
  {
    title: "AI Chatbot Solutions",
    description:
      "Conversational AI trained on your business data—multilingual, sentiment-aware, and RAG-enabled.",
    img: "/assests/img/ai-dev/ai-chat.png",
  },
  {
    title: "Gen AI & Creative Automation",
    description:
      "Generate text, images, videos, and product listings using GPT-4, DALL·E, DreamBooth, and Whisper.",
    img: "/assests/img/ai-dev/genAi.png",
  },
  {
    title: "AI SQL Copilot",
    description:
      "Let users query structured databases in natural language. Optimized SQL output with auto schema discovery.",
    img: "/assests/img/ai-dev/ai-sql.png",
  },
  {
    title: "Document AI & Summarization",
    description:
      "Parse contracts, SOPs, or knowledge bases and build search or summary experiences on top.",
    img: "/assests/img/ai-dev/document-ai.png",
  },
  {
    title: "AI Consulting & Architecture Design",
    description:
      "Align feasibility with ROI and build your AI roadmap the right way—with our AI and infra experts.",
    img: "/assests/img/ai-dev/ai-consulting.png",
  },

  {
    title: " RPA & Adaptive AI",
    description:
      "Automate repetitive workflows — document processing, data extraction, form handling, and approval chains — using rule-based and adaptive AI that learns from your operations.",
    img: "/assests/img/ai-dev/rpa.png",
  },
];
