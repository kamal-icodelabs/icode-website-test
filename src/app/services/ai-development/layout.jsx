const SERVICE_OFFERS = [
  { name: "Agentic AI Development", description: "Deploy intelligent assistants that automate workflows, onboard users, qualify leads, or search data." },
  { name: "AI Chatbot Solutions", description: "Conversational AI trained on your business data — multilingual, sentiment-aware, and RAG-enabled." },
  { name: "Gen AI & Creative Automation", description: "Generate text, images, videos, and product listings using GPT-4, DALL·E, DreamBooth, and Whisper." },
  { name: "AI SQL Copilot", description: "Let users query structured databases in natural language. Optimized SQL output with auto schema discovery." },
  { name: "Document AI & Summarization", description: "Parse contracts, SOPs, or knowledge bases and build search or summary experiences on top." },
  { name: "AI Consulting & Architecture Design", description: "Align feasibility with ROI and build your AI roadmap with our AI and infra experts." },
  { name: "RPA & Adaptive AI", description: "Automate repetitive workflows using rule-based and adaptive AI that learns from your operations." },
];

export const metadata = {
  // PRIMARY SEO
  title: "AI Development Services | GPT, Agents & Custom Apps – iCodelabs",
  description: "iCodelabs builds production-ready AI features for marketplaces and custom platforms — smart search, listing generation, automated moderation, recommendation engines, and AI agents. Built by a team that ships, not demos.",
  metadataBase: new URL("https://icodelabs.co"),
  alternates: {
    canonical: "https://icodelabs.co/services/ai-development",
    languages: {
      en: "https://icodelabs.co/services/ai-development",
      "x-default": "https://icodelabs.co/services/ai-development",
    },
  },
  keywords:"ai development company, ai development services, custom ai apps, gpt integrations, ai agents, ai chatbots, rag search, machine learning solutions, ai consulting, enterprise ai development",

  icons: {
    icon: [
      { url: "/favicon_light.ico", media: "(prefers-color-scheme: light)" },
      { url: "/favicon_dark.ico", media: "(prefers-color-scheme: dark)" },
    ],
  },

  // ROBOTS
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      maxSnippet: -1,
      maxImagePreview: "large",
      maxVideoPreview: -1,
    },
  },

  // OPEN GRAPH
  openGraph: {
    type: "website",
    title: "AI Development Company | Custom AI Apps, GPT Integrations & Agents",
    description:
      "Production-ready AI for marketplaces — smart search, listing generation, AI agents, RAG, and recommendation engines. Deployed into real platforms by an AI-augmented team.",
    url: "https://icodelabs.co/services/ai-development",
    siteName: "Icodelabs",
    locale: "en_US",
    images: [
      {
        url: "https://res.cloudinary.com/dwpvv68ii/image/upload/f_auto,q_auto,c_fill,w_1200,h_630/v1759140505/Group_1410089110_2_paglw7.png",
        width: 1200,
        height: 630,
        alt: "Icodelabs — AI development services (assistants, agents, RAG)",
      },
    ],
  },

  // TWITTER
  twitter: {
    card: "summary_large_image",
    title: "AI Development Company | Custom AI Apps, GPT Integrations & Agents",
    description:
      "AI features built into marketplaces — smart search, listing generation, moderation, recommendations. Not demos. Deployed software.",
    images: [
      "https://res.cloudinary.com/dwpvv68ii/image/upload/f_auto,q_auto,c_fill,w_1200,h_630/v1759140505/Group_1410089110_2_paglw7.png",
    ],
    site: "@icodelabs",
    creator: "@icodelabs",
  },
};

export default function RootLayout({ children }) {
  return (
    <>
      {/* JSON-LD: Breadcrumbs + Service (consolidated in a single script) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "@id": "https://icodelabs.co/services/ai-development#breadcrumb",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://icodelabs.co/" },
                { "@type": "ListItem", "position": 2, "name": "AI Development", "item": "https://icodelabs.co/services/ai-development" }
              ]
            },
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "@id": "https://icodelabs.co/services/ai-development#service",
              name: "AI Development",
              serviceType: "AI Strategy, Custom AI Apps, GPT Integrations, AI Agents",
              provider: { "@type": "Organization", name: "Icodelabs", url: "https://icodelabs.co" },
              areaServed: "Global",
              url: "https://icodelabs.co/services/ai-development",
              description: "End-to-end AI development: discovery, data pipelines, model selection, RAG search, GPT assistants, agents, deployment, and MLOps. Security and compliance baked in.",
              image: "https://res.cloudinary.com/dwpvv68ii/image/upload/f_auto,q_auto,c_fill,w_1200,h_630/v1759140505/Group_1410089110_2_paglw7.png",
              offers: {
                "@type": "AggregateOffer",
                priceCurrency: "USD",
                lowPrice: 3000,
                highPrice: 20000,
                offerCount: SERVICE_OFFERS.length
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "AI Development Services",
                itemListElement: SERVICE_OFFERS.map((s) => ({
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: s.name,
                    description: s.description,
                  },
                })),
              },
            },
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "breadcrumb": { "@id": "https://icodelabs.co/services/ai-development#breadcrumb" },
              "@id": "https://icodelabs.co/services/ai-development#webpage",
              "mainEntity": { "@id": "https://icodelabs.co/services/ai-development#service" },
              url: "https://icodelabs.co/services/ai-development",
              name: "AI Development Company | Custom AI Apps, GPT Integrations & Agents",
              description: "Icodelabs builds AI-powered software: GPT assistants, AI agents, chatbots, RAG search, ML models, and automation. From strategy to production, we ship secure, scalable AI solutions.",
              inLanguage: "en-US",
              isPartOf: {
                "@type": "WebSite",
                "@id": "https://icodelabs.co/#website",
                name: "Icodelabs",
                url: "https://icodelabs.co"
              },
              primaryImageOfPage: {
                "@type": "ImageObject",
                url: "https://res.cloudinary.com/dwpvv68ii/image/upload/f_auto,q_auto,c_fill,w_1200,h_630/v1759140505/Group_1410089110_2_paglw7.png",
                width: 1200,
                height: 630
              }
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What is AI development?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "AI development is the process of designing, training, and deploying artificial intelligence systems that can analyze data, automate processes, and make intelligent decisions. It often involves machine learning models, natural language processing (NLP), computer vision, and recommendation systems. At Icodelabs, we build AI solutions tailored to your business goals — whether that's powering chatbots, automating workflows, or enabling predictive analytics."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How much does AI app development cost?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The cost depends on the project's complexity, data requirements, and integrations. MVPs or proof-of-concepts: $3,000 – $5,000. Mid-size applications with AI chat, analytics, or workflow automation: $5,000 – $10,000. Enterprise-grade solutions requiring custom models and integrations: $20,000+. We provide milestone-based pricing so you can scale features as your needs grow."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How long does it take to build an AI-based app?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Timelines vary by scope. Prototypes: 2–4 weeks. Full-featured apps: 3–4 months. Enterprise AI platforms: 4–6 months. We follow agile sprints so you start seeing working features early in the process."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What industries can benefit from AI solutions?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "AI is transforming nearly every industry. Examples include Healthcare (patient monitoring, diagnostics, virtual assistants), E-commerce (personalized recommendations, inventory forecasting), Finance (fraud detection, credit scoring, process automation), Legal & Real Estate (document analysis, contract review, AI-powered marketplaces), Travel & Hospitality (dynamic pricing, smart booking assistants). If your industry deals with large volumes of data or repetitive tasks, AI can add value."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What Artificial Intelligence software development services does iCodeLabs offer?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We cover the full AI lifecycle: AI consulting & ideation; Custom AI model development (NLP, computer vision, predictive analytics); AI-powered marketplace features (smart search, dynamic pricing, content automation); Chatbots & virtual assistants (powered by GPT and other LLMs); Integration with existing platforms (embedding AI into Sharetribe, web apps, or mobile apps)."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How to choose the best AI development company?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Consider: proven expertise in shipping real-world AI solutions; industry-specific experience; a scalable approach from MVPs to enterprise; transparency with milestone-based delivery and clear communication; and cost visibility. Icodelabs combines Sharetribe marketplace expertise with modern AI engineering to deliver both domain knowledge and cutting-edge technology."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What are AI agents and why use them?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "AI agents are autonomous systems that plan, reason, use tools, and execute multi-step tasks (e.g., research + booking + follow-up). In 2026, they're key for complex automation. We build custom agents that integrate with your APIs, data, and workflows to handle operations intelligently and reduce manual effort."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How do you ensure AI security and data privacy?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Security is core: We implement encrypted data pipelines, anonymization, access controls, SOC2/GDPR compliance, regular audits, and secure LLM deployments (private instances, no data leakage). Every project includes risk assessments and ethical AI guidelines to protect your business and users."
                  }
                }
              ]
            }
          ]),
        }}
      />
      {children}
    </>
  );
}