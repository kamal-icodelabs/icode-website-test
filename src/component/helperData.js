import TabImg from "../assets/imgs/images/tabImg.png";
import TabImg2 from "../assets/imgs/images/tabImg2.svg";
import TabImg3 from "../assets/imgs/images/tabImg3.svg";
import TabImg4 from "../assets/imgs/images/tabImg4.svg";
import rentalImg from "../assets/imgs/icons/tabMenu/rental.svg";
import serviceImg from "../assets/imgs/icons/tabMenu/service.svg";
import productImg from "../assets/imgs/icons/tabMenu/product.svg";
import bookingImg from "../assets/imgs/icons/tabMenu/bookingNevents.svg";
// import heroImg2 from "../../public/assests/images/home-hero.png";
// import heroImg2 from "/public/assests/imgs/ai-dev-heroBanner.png";
// import heroImg3 from "/public/assests/imgs/webNdev-herobanner.png";
import img1 from "../assets/imgs/icons/statupIcons/1.svg";
import img2 from "../assets/imgs/icons/statupIcons/2.svg";
import img3 from "../assets/imgs/icons/statupIcons/3.svg";
import img4 from "../assets/imgs/icons/statupIcons/4.svg";
import img5 from "../assets/imgs/icons/statupIcons/5.svg";
import img6 from "../assets/imgs/icons/statupIcons/6.svg";
import img7 from "../assets/imgs/icons/statupIcons/7.svg";
import img8 from "../assets/imgs/icons/statupIcons/8.svg";
import img9 from "../assets/imgs/icons/statupIcons/9.svg";
import img10 from "../assets/imgs/icons/statupIcons/10.svg";
import img11 from "../assets/imgs/icons/statupIcons/11.svg";
import img12 from "../assets/imgs/icons/statupIcons/12.svg";
import img13 from "../assets/imgs/icons/statupIcons/13.svg";
import core1 from "../assets/images/coreImg1.svg";
import core2 from "../assets/images/coreImg2.svg";
import core3 from "../assets/images/coreImg3.svg";
import core4 from "../assets/images/coreImg4.svg";
import core5 from "../assets/images/coreImg5.svg";
import IconCollection from "./IconCollection/IconCollection";
import success1 from "../assets/images/success/success1.png";
import success2 from "../assets/images/success/success2.png";
import success3 from "../assets/images/success/success3.png";
import success4 from "../assets/images/success/success4.png";
import success5 from "../assets/images/success/success5.png";
import Groovbay from "../assets/images/Groovbay.png";
import Reparty from "../assets/images/Reparty.png";
import groovway from "../assets/images/groovway.png";
import repartyBrand from "../assets/images/reparty-brand.png";
import arabibiBrand from "../assets/images/arabibi-brand.png";
import arabibiCover from "../assets/images/arabibi-cover.png";
import sharetribeExt from "../assets/images/sharetribe-ext.png";

export const tabMenu = [
  {
    id: 0,
    prefix: "01.",
    img: rentalImg,
    heading: "Rental",
    subHeading: "Marketplace",
    tabContent: [
      {
        id: 1,
        title: "Rental Marketplaces",
        btnText: "Explore More",
        btnLink: "/rental-marketplace",
        btnRoute: "/rental-marketplace",
        img: "https://res.cloudinary.com/dwpvv68ii/image/upload/v1759130817/tabImg_u8n4ov.png",
        content:
          "Flexible rental platforms with deposits, refunds, calendar sync, and custom booking logic — enhanced with negotiations, ID checks, and smart notifications.",
        points: [
          {
            title: "Car & Mobility",
            info: "Peer-to-peer or fleet rentals with timed pricing, secure ID verification, and location filters.",
          },
          {
            title: "Equipment & Gear",
            info: "Electronics, cameras, or tools with deposits, condition tracking, and availability calendars.",
          },
          {
            title: "Fashion & Accessories",
            info: "Occasion wear, bags, and jewelry rentals with calendar-based checkout, deposits, and return flows.",
          },
          {
            title: "Spaces & Venues",
            info: "Studios, coworking, or event spaces — hourly/daily pricing, calendar sync, and refund logic.",
          },
        ],
      },
    ],
  },
  {
    id: 1,
    prefix: "02.",
    img: serviceImg,
    heading: "Service",
    subHeading: "Marketplace",
    tabContent: [
      {
        id: 2,
        title: "Service Marketplaces",
        btnText: "Explore More",
        btnLink: "/service-marketplace",
        btnRoute: "/service-marketplace",
        img: "https://res.cloudinary.com/dwpvv68ii/image/upload/v1759130969/tabImg2_tmvqm0.svg",
        content:
          "Book services with confidence — from home services to consulting, with milestone-based payments, video calling, contracts, and enterprise memberships.",
        points: [
          {
            title: "Beauty & Wellness",
            info: "Salons, spas, or therapists with appointment slots, deposits, reminders, and reviews.",
          },
          {
            title: "Local Services",
            info: "Taskers, cleaners, mechanics with geo-based search, scheduling, and notifications.",
          },
          {
            title: "Consulting & Coaching",
            info: "One-on-one or group sessions with milestone-based payments, Zoom/Google Meet, and contracts.",
          },
          {
            title: "Freelance Platforms",
            info: "Talent networks with portfolios, negotiations, milestone payouts, and enterprise memberships.",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    prefix: "03.",
    img: productImg,
    heading: "Product",
    subHeading: "Marketplace",
    tabContent: [
      {
        id: 3,
        title: "Product Marketplaces",
        btnText: "Explore More",
        btnLink: "/product-marketplace",
        btnRoute: "/product-marketplace",
        img: "https://res.cloudinary.com/dwpvv68ii/image/upload/v1759131113/tabImg3_ouwf6n.svg",
        content:
          "Multi-vendor commerce with smart carts, subscription payments, custom pricing tiers, shipping APIs, and AI-powered search & recommendations.",
        points: [
          {
            title: "Community Commerce",
            info: "Creator shops, thrift, or resale with moderation, dispute workflows, and tax handling.",
          },
          {
            title: "Digital Goods",
            info: "Courses, downloads, or licenses with subscription billing and access controls.",
          },
          {
            title: "D2C & Aggregators",
            info: "Multi-vendor onboarding with CSV/API bulk uploads, Stripe Connect, and custom payout logic.",
          },
          {
            title: "B2B Wholesale",
            info: "Tiered pricing, MOQs, quotes, and automated invoicing with dynamic commissions.",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    prefix: "04.",
    img: bookingImg,
    heading: "Booking & Events",
    subHeading: "Marketplace",
    tabContent: [
      {
        id: 4,
        title: "Booking & Events Platforms",
        btnText: "Explore More",
        btnLink: "/booking-and-events-marketplace",
        btnRoute: "/booking-and-events-marketplace",
        img: "https://res.cloudinary.com/dwpvv68ii/image/upload/v1759131182/tabImg4_ihbunj.svg",
        content:
          "Ticketing and scheduling platforms with discount codes, dynamic pricing, calendar sync, and AI-generated recaps.",
        points: [
          {
            title: "Ticketed Events",
            info: "Tiered tickets, Voucherify discounts, custom payouts, and refunds.",
          },
          {
            title: "Classes & Workshops",
            info: "Recurring schedules, capacity rules, waitlists, and AI-powered course summaries.",
          },
          {
            title: "Tours & Experiences",
            info: "Geo-based discovery with Algolia/Typesense, group bookings, and dynamic pricing.",
          },
          {
            title: "1:1 & Group Sessions",
            info: "Calendar integration, video calls, notifications, and digital contracts.",
          },
        ],
      },
    ],
  },
];

export const tabData = [
  {
    id: 0,
    category: "Marketplace Platforms",
    contents: [
      {
        title: "Sharetribe",
        description:
          "Marketplace framework for fast launches or fully customized solutions",
      },
      {
        title: "Sharetribe Web Template",
        description: "Customizable React frontend for Sharetribe platforms",
      },
      {
        title: "iCodeLabs Mobile App Template",
        description:
          "React Native based frontend for Sharetribe-powered mobile apps",
      },
      {
        title: "Custom Marketplace Stack",
        description:
          "Node.js, Next.js, React, MongoDB, and tailored marketplace architectures",
      },
    ],
  },
  {
    id: 1,
    category: "Frontend & Mobile",
    contents: [
      {
        title: "Next.js / Remix / Angular / React.js",
        description:
          "Modern frameworks for high-performance, SEO-friendly web applications",
      },
      {
        title: "React Native / Flutter / Expo",
        description:
          "Cross-platform and native-like mobile applications from a single codebase",
      },
      {
        title: "Tailwind CSS / Styled Components",
        description: "Scalable, maintainable UI styling frameworks",
      },
      {
        title: "Framer Motion / GSAP",
        description: "Smooth, professional-grade animations and interactions",
      },
    ],
  },
  {
    id: 2,
    category: "Backend & APIs",
    contents: [
      {
        title: "Node.js / Express.js",
        description: "Custom backend services and scalable APIs",
      },
      {
        title: "Python / FastAPI",
        description: "High-performance backend APIs and microservices",
      },
      {
        title: "GraphQL / Apollo Client",
        description: "Flexible data queries and modern API-driven apps",
      },
      {
        title: "REST APIs & Microservices",
        description: "Lightweight and scalable service-oriented architecture",
      },
      {
        title: "Supabase / Firebase",
        description:
          "Backend-as-a-service for authentication, storage, and real-time features",
      },
    ],
  },
  {
    id: 3,
    category: "Databases & Infrastructure",
    contents: [
      {
        title: "PostgreSQL / MongoDB / MySQL / DynamoDB",
        description:
          "Relational and NoSQL data solutions for every business case",
      },
      {
        title: "AWS Lambda / Serverless Functions",
        description: "Scalable, pay-as-you-go backend execution",
      },
      {
        title: "Docker / GitHub Actions / NGINX",
        description:
          "CI/CD pipelines, containerization, and production deployments",
      },
      {
        title: "Cloud Hosting (AWS, Vercel, Netlify)",
        description: "Global edge hosting and cloud-native infrastructure",
      },
    ],
  },
  {
    id: 4,
    category: "AI & Machine Learning",
    contents: [
      {
        title: "OpenAI (GPT-4)",
        description:
          "Generative AI for chatbots, copilots, and content automation",
      },
      {
        title: "LangChain",
        description: "Framework for orchestrating multi-step AI workflows",
      },
      {
        title: "Weaviate",
        description:
          "Vector search databases for semantic search & personalization",
      },
      {
        title: "Hugging Face",
        description: "Access to pre-trained models and ML pipelines",
      },
    ],
  },
  {
    id: 5,
    category: "Integrations & Automation",
    contents: [
      {
        title: "Stripe / Custom Gateways",
        description:
          "Payments, split payouts, refunds, and multi-currency support",
      },
      {
        title: "Shippo / ShipEngine / EasyPost",
        description:
          "Shipping label generation, tracking, and logistics integrations",
      },
      {
        title: "Cronofy / Google Calendar / Calendly",
        description: "Calendar sync, availability, and booking flows",
      },
      {
        title: "Algolia / Typesense",
        description: "Advanced search and filtering with geo-location support",
      },
      {
        title: "Cloudinary / AWS S3",
        description: "Scalable media storage, optimization, and delivery",
      },
      {
        title: "Box / Dropbox / Notion",
        description: "Document storage and team collaboration tools",
      },
      {
        title: "n8n / Zapier",
        description: "Workflow automation, API triggers, and process chaining",
      },
      {
        title: "Docusign / Voucherify / ID Verification",
        description: "Contracts, coupons, and secure KYC/identity flows",
      },
    ],
  },
];

export const sharetribeExtensionHeroData = {
  title: "Sharetribe Extensions & Feature Modules",
  subtitle: "Add the Features Your Marketplace Needs.",
  description:
    "Already have a Sharetribe marketplace? Browse our feature module catalogue — like a plugin directory, but implemented specifically for your Sharetribe setup. Fixed scope. Predictable pricing. No endless development cycles.",
  smallDescription:
    "Not one-click plugins — every module is implemented and configured for your marketplace specifically.",
  btnText: "Request Custom Feature",
  img: sharetribeExt,
  imgWidth: 1396,
  imgHeight: 628,
};

export const sharetribeFeatureModules = [
  {
    icon: "/assests/sharetribe_extension/FixedScope.gif",
    title: "Fixed Scope",
    description: "Clear deliverables. What’s included is agreed upfront.",
  },
  {
    icon: "/assests/sharetribe_extension/PredictablePricingRanges.gif",
    title: "Predictable Pricing",
    description: "Transparent price ranges before development begins.",
  },
  {
    icon: "/assests/sharetribe_extension/ClearDeliveryTimelines.gif",
    title: "Defined Timelines",
    description: "Each module has a structured delivery schedule.",
  },
];

export const sharetribeThisPageData = {
  sectionTitle:
    "These are not <span>one-click plugins.</span> Every module is implemented and configured specifically for your marketplace, ensuring stability and compatibility with your existing setup.",
  buttonText: "Browse Sharetribe Feature Modules",
  cardSectionTitle: "This page is for you if…",
  notFitCard: {
    title: " Not the Right Fit if...",
    points: [
      "You want unlimited experimentation or R&D",
      "Your business model is still unclear",
      "You need fully custom transaction logic",
      "You expect plugin-style instant installs",
      "You want open-ended hourly development",
      " You have not tested your sharetribe free marketplace",
    ],
  },
  goodFitCard: {
    title: "Perfect Fit If",
    points: [
      "Your marketplace is already live or in testing",
      "You want to add one or more specific features",
      "Your pricing and transaction model is already defined",
      "You prefer fixed-scope, predictable work",
      "You want safe changes without breaking existing flows",
    ],
  },
};

export const strategyData = [
  {
    strategyHeading: "AI Strategy & Product Thinking",
    strategyDescription:
      "We guide your team through the AI landscape — helping identify practical use cases, choose the right tools, and design scalable, human-centered AI systems.",
    strategyDescriptionSecond:
      "Prompt design, use case validation, and rapid prototyping.",
  },
  {
    strategyHeading: "AI-Augmented Development",
    strategyDescription:
      "We embed generative AI and automation directly into your platform — using GPT, vector search, OpenAI APIs, and more.",
    strategyDescriptionSecond:
      "Think smarter platforms, not just smarter chatbots.",
  },
  {
    strategyHeading: "Workflow & Ops Automation",
    strategyDescription:
      "Reimagine your internal operations using AI — auto-responses, content generation, report summarization, internal tools, and more.",
    strategyDescriptionSecond:
      "Save time. Reduce manual work. Increase team efficiency.",
  },
  {
    strategyHeading: "AI Analytics & Insights",
    strategyDescription:
      "We help you extract actionable insights using AI — from auto-generated dashboards to personalized trend reporting and performance summaries.",
    strategyDescriptionSecond: "Let AI turn your data into decisions.",
  },
];

export const features = [
  {
    img: <IconCollection name="shareTribe" />,
    title: "Sharetribe Development",
    content:
      "With 50+ marketplaces delivered, we are Sharetribe-certified experts. From instant bookings and deposits to custom payment flows and rich user profiles, we help founders go live in weeks with web and mobile marketplaces tailored to their business.",
    route: "/services/sharetribe",
  },
  {
    img: <IconCollection name="AIStar" />,
    title: "AI Development",
    content:
      "We empower businesses with production-ready AI. Whether it’s GPT-powered chat assistants, recommendation engines, vector search, or computer vision, our team builds intelligent systems that are secure, scalable, and aligned with your ROI goals.",
    route: "/services/ai-development",
  },
  {
    img: <IconCollection name="react" />,
    title: "React Native App Development",
    content:
      "Launch fast on iOS and Android with a single React Native codebase. We deliver modern UI, offline-ready apps, and seamless integrations—so your product scales without doubling development costs.",
    route: "/services/mobile-app-development",
  },
  {
    img: <IconCollection name="webDev" />,
    title: "Web Development",
    content:
      "From API-first architectures to SEO-friendly Next.js apps, we craft high-performance web platforms. Our solutions combine speed, scalability, and clean UI to ensure your product grows with your business.",
    route: "/services/web-development-company",
  },
  {
    img: <IconCollection name="digitalMarketing" />,
    title: "Digital Marketing",
    content:
      "We don’t just build products—we help them grow. Our digital marketing services drive traffic, increase conversions, and boost retention with a mix of data-driven SEO, targeted ads, and performance analytics.",
    route: "/services/digital-marketing",
  },
];

export const checkPoints = [
  {
    point: `50+ Sharetribe Marketplaces Delivered`,
  },
  {
    point: (
      <>
        Sharetribe <br /> Certified Team
      </>
    ),
  },
  {
    point: (
      <>
        AI-Ready Development <br /> Process
      </>
    ),
  },
  {
    point: `Global Delivery With Startup Speed`,
  },
];

export const caroulseContent = [
  {
    id: 1,
    title: "01.  Product Discovery & Strategy",
    description:
      "We start by understanding your business goals, target users, and platform vision. Together, we map out a clear product plan with the right technology stack and features for your needs.",
    buttonText: "Get Started",
    buttonLink: "https://calendly.com/jaytiwary",
    image: "/assests/img/Product Discovery & Strategy.png",
    subText: "Validated roadmap + platform strategy",
  },
  {
    id: 2,
    title: "02. Rapid Prototyping & MVP Development",
    description:
      "We craft user-centric designs that are intuitive and engaging, ensuring your users have a seamless experience across all devices.",
    buttonText: "Explore Designs",
    buttonLink: "https://calendly.com/jaytiwary",
    image: "/assests/img/Rapid Prototyping & MVP Developmen.png",
    subText: "Functional platform ready to test with real users",
  },
  {
    id: 3,
    title: "03. AI & Integration Layer",
    description:
      "Our engineers build scalable and high-performance solutions tailored to your business needs, using the latest technologies.",
    buttonText: "Build Now",
    buttonLink: "https://calendly.com/jaytiwary",
    image: "/assests/img/AI & Integration Layer.png",
    subText: "Smarter workflows, better user experience, automation",
  },
  {
    id: 4,
    title: "04. Scale, Support & Continuous Improvement",
    description:
      "We ensure your product works flawlessly through rigorous testing processes, identifying and resolving issues before launch.",
    buttonText: "Test It",
    buttonLink: "https://calendly.com/jaytiwary",
    image: "/assests/img/Scale, Support & Continuous Improvement.png",
    subText: "Faster growth, better decisions, long-term success",
  },
];

export const whyChooseUsContent = [
  {
    icon: <IconCollection name="shareTribe" />,
    title: "Expert in Sharetribe, React, & Custom Marketplaces",
    description:
      "At iCodeLabs, We are experts in Sharetribe development — building fully coded, custom marketplaces on Sharetribe's developer platform, delivered in weeks.",
    points: [
      "Launch a new marketplace in weeks — not months. We use Sharetribe's Extended plan to deliver fully customised platforms with custom flows, payments, and branding.",
      "Our React-powered UIs are sharp, responsive, and visually polished — delivering seamless user journeys across web and mobile.",
    ],
  },
  {
    icon: <IconCollection name="end-to-end-dev" />,
    title: "End-to-End Development (Design, Development, Deployment)",
    description:
      "We ensure all platforms are designed with mobile users in mind, optimizing for speed, accessibility, and usability across:",
    points: [
      "Design: User journey mapping, wireframing, UI/UX design, and seamless cross-device experiences.",
      "Development: Front-end, back-end, and database solutions, ensuring smooth performance.",
      "Deployment: Customized hosting, cloud integration, and post-launch maintenance.",
    ],
  },
  {
    icon: <IconCollection name="ai-operated-choose" />,
    title: "AI-Powered & Data-Driven Solutions",
    description:
      "Integrate AI and data analytics to increase user experience and business growth.",
    points: [
      "AI Chatbots and Customer Assistance Automation",
      "Individual product recommendations",
      "Data-Powered Insights and Reporting Dashboard",
    ],
  },
  {
    icon: <IconCollection name="scalable-choose" />,
    title: "Scalable and Secure Architecture",
    description:
      "We design marketplaces, web and mobile apps that can handle thousands of users without experiencing issues. Our approach includes:",
    points: [
      "Modular architecture for easy facility expansion.",
      "Serverless and Cloud Solutions (AWS, Firebase, Digitalocean) for high availability.",
      "Strong safety measures (SSL, encryption, role-based access control).",
    ],
  },
  {
    icon: <IconCollection name="mobile-choose" />,
    title: "Mobile-First & Responsive Design",
    description:
      "We ensure that all platforms are designed keeping in mind mobile users, adaptation for speed, access, and purpose.",
    points: [
      "iOS & Android apps (Native & Cross-platform: Flutter, React Native).",
      "Progressive Web Apps (PWA) for app-like web experiences.",
      "Adaptive UI components for all screen sizes.",
    ],
  },
  {
    icon: <IconCollection name="support-choose" />,
    title: "Ongoing Support & Maintenance",
    description:
      "We offer continuous monitoring, updates, and performance adaptations to run platforms smoothly.",
    points: [
      "Bug fix and safety patch",
      "User reaction based on facility enhancement",
      "Performance and Server Scaling Solutions",
    ],
  },
];

export const howitworkContent = [
  {
    id: 1,
    step: "01",
    title: "Consultation & Ideation",
    description:
      "Understanding Your Vision & Business Goals Every successful marketplace starts with a strong foundation. During this phase",
    points: [
      {
        id: 1,
        title: "Analyze your business model -",
        description: "B2B, B2C, P2P, rental, service-based, etc.",
      },
      {
        id: 2,
        title: "Identify market trends & user needs -",
        description: "Ensuring your platform is competitive.",
      },
      {
        id: 3,
        title: "Define key features & monetization strategies -",
        description: "Subscription, commission-based, etc.",
      },
      {
        id: 4,
        title: "Select the right tech stack -",
        description:
          "Sharetribe, React, and custom solutions based on scalability needs.",
      },
    ],
  },
  {
    id: 2,
    step: "02",
    title: "Wireframing & UX/UI Design",
    description:
      "We transform concepts into intuitive, conversion-driven designs that deliver an effortless user experience.",
    points: [
      {
        id: 1,
        title: "Build interactive wireframes",
        description: "to map user flow and platform logic.",
      },
      {
        id: 2,
        title: "Design a clean, conversion-focused",
        description: "interface tailored to your brand.",
      },
      {
        id: 3,
        title: "Prioritize accessibility, usability,",
        description: "and responsive design.",
      },
      {
        id: 4,
        title: "Use collaborative design tools",
        description: "for real-time feedback and iteration.",
      },
    ],
  },
  {
    id: 3,
    step: "03",
    title: "Development & Testing",
    description:
      "Our team develops, integrates, and tests every feature to ensure your marketplace runs seamlessly.",
    points: [
      {
        id: 1,
        title: "Develop core marketplace modules:",
        description: "listings, payments, messaging, and dashboards.",
      },
      {
        id: 2,
        title: "Integrate APIs and custom plugins",
        description: "for advanced features.",
      },
      {
        id: 3,
        title: "Implement rigorous QA testing for speed,",
        description: "stability, and cross-device performance.",
      },
      {
        id: 4,
        title: "Follow agile sprints to deliver ",
        description: "milestones efficiently.",
      },
    ],
  },
  {
    id: 4,
    step: "04",
    title: "MVP Launch & Scaling",
    description:
      "We launch your MVP with confidence, gather insights, and fine-tune for scalability and success.",
    points: [
      {
        id: 1,
        title: "Deploy your platform securely",
        description: "to live environments.",
      },
      {
        id: 2,
        title: "Track early-stage user behavior ",
        description: "and performance metrics.",
      },
      {
        id: 3,
        title: "Optimize key flows",
        description: "for engagement and conversions.",
      },
      {
        id: 4,
        title: "Prepare for scalability—backend optimization,",
        description: "analytics setup, and automation.",
      },
    ],
  },
  {
    id: 5,
    step: "05",
    title: "Ongoing Support & Optimization",
    description:
      "eyond launch, we continuously improve, update, and optimize your marketplace for long-term growth.",
    points: [
      {
        id: 1,
        title: "Continuous monitoring, maintenance",
        description: "and performance tuning.",
      },
      {
        id: 2,
        title: "Add new features based",
        description: "on feedback and analytics.",
      },
      {
        id: 3,
        title: "Regular updates for security",
        description: "and compatibility.",
      },
      {
        id: 4,
        title: "Strategic consultation to guide ",
        description: "future scaling and innovation.",
      },
    ],
  },
];

export const testimonialsContent = [
  {
    id: 1,
    name: "Sridhar",
    position: "Co-founder, InsightGig",
    testimonial: `<span>We’ve worked with Innovative Code Labs for years, and their full-stack developers have been crucial from concept to launch of our AI powered market research solution.</span> They adapt quickly, deliver high-quality work with strong ownership, and integrate seamlessly with our team—helping us bring our vision to life.`,
    customerRetention: "30%",
    customerRetentionlabel: `Customer retention`,
    conversionRateLabel: "Conversion rate",
    conversionRate: "61%",
    avatar: success1,
    highlighted: true,
  },
  {
    id: 2,
    name: "Sebastian Schulze",
    position: "Promotix",
    testimonialTop:
      "It has been a pleasure working with Jay and the rest of the team on our PromoTix Reseller platform. ",
    testimonial:
      "They have been incredibly supportive from the onset of the relationship, asking all of the right questions to set us up for success. Jay is always there to answer our questions, and we couldn’t be happier with the quality of his team’s work.",
    customerRetention: "+30%",
    conversionRate: "+61%",

    customerRetentionlabel: `Customer retention`,
    conversionRateLabel: "Conversion rate",
    avatar: success2,
    highlighted: false,
  },
  {
    id: 3,
    name: "Iiro",
    position: "Sbonssy",
    testimonialTop:
      "As a non-technical founder, working with Jay and the iCodeLabs team has been absolutely invaluable for building Sbonssy.",
    testimonial:
      "We started on Sharetribe, but iCodeLabs helped us pivot to a fully custom platform. More than developers, they were true partners shaping the product, solving complex problems, and guiding the right decisions. Simply put, Sbonssy exists today because of them.",
    customerRetention: "+11%",
    conversionRate: "+52%",
    customerRetentionlabel: `Customer retention`,
    conversionRateLabel: "Conversion rate",
    avatar: success3,
    highlighted: false,
  },

  {
    id: 4,
    name: "Joan",
    position: "Joova",
    testimonialTop:
      "Working with Jay, Rakesh, and the rest of the team has been one of the best decisions we've made since starting Joova. ",
    testimonial:
      "They treated Joova like their own bringing clean code, smart insights, and user-focused ideas that made it better than we imagined. If you want a tech partner who truly cares and goes beyond the brief, this is your team.",
    customerRetention: "+11%",
    conversionRate: "+52%",
    customerRetentionlabel: `Customer retention`,
    conversionRateLabel: "Conversion rate",
    avatar: success4,
    highlighted: false,
  },
  {
    id: 5,
    name: "Giovanni Labate",
    position: "Popseekl",
    testimonialTop:
      "What I value most about Jay’s team is that they think with us not just deliver code ",
    testimonial:
      "They spot edge cases, suggest better approaches, and make sure what we build can scale. From payments to real-time features, they solve problems fast without overcomplicating things. It feels like having an extended product team that truly cares.",
    customerRetention: "+11%",
    conversionRate: "+52%",
    customerRetentionlabel: `Customer retention`,
    conversionRateLabel: "Conversion rate",
    avatar: success5,
    highlighted: false,
  },
];

export const logoContainer = [
  { logo: img1 },
  { logo: img2 },
  { logo: img3 },
  { logo: img4 },
  { logo: img5 },
  { logo: img6 },
  { logo: img7 },
  { logo: img8 },
  { logo: img9 },
  { logo: img10 },
  { logo: img11 },
  { logo: img12 },
  { logo: img13 },
];

export const topBar = [
  { logo: img1 },
  { logo: img2 },
  { logo: img3 },
  { logo: img4 },
  { logo: img5 },
  { logo: img6 },
];

export const bottomBar = [
  { logo: img7 },
  { logo: img8 },
  { logo: img9 },
  { logo: img10 },
  { logo: img11 },
  { logo: img12 },
  { logo: img13 },
];

export const aiDevContent = [
  {
    title: "AI Strategy & Consulting",
    description:
      "We map your marketplace or product against real AI use cases — identifying where GPT, vector search, or automation can cut costs, speed up delivery, or unlock new revenue. You get a clear roadmap, not generic advice.",
  },
  {
    title: "AI-Software Development",
    description:
      "We build production-ready AI features directly into your platform — GPTpowered listing assistants, smart search, recommendation engines, and dynamic pricing. Fully integrated, fully tested, fully yours.",
  },
  {
    title: "Generative AI",
    description:
      "From AI-generated listing descriptions and image enhancement to conversational onboarding flows — we bring generative AI to the parts of your marketplace that drive conversions and reduce friction for sellers.",
  },
  {
    title: "Machine Learning",
    description:
      "We implement ML models and deployed to scale without ballooning infrastructure costs.",
  },
  {
    title: "AI Agent & Chatbot",
    description:
      "We build context-aware AI agents that handle buyer support, seller onboarding, booking assistance, and FAQ resolution — reducing your support load while improving response time 24/7.",
  },
];

export const marketplace = [
  { Slug: "rental-marketplace", SubTitle: "Rental Marketplace" },
  { Slug: "service-marketplace", SubTitle: "Service Marketplace" },
  { Slug: "product-marketplace", SubTitle: "Product Marketplace" },
  {
    Slug: "booking-and-events-marketplace",
    SubTitle: "Booking & Events Marketplace",
  },
];

export const services = [
  {
    Slug: "services/sharetribe",
    SubTitle: "Sharetribe Development",
  },
  { Slug: "services/ai-development", SubTitle: "AI Development" },
  {
    Slug: "services/mobile-app-development",
    SubTitle: "Mobile App Development",
  },
  { Slug: "services/web-development-company", SubTitle: "Web Development" },
];

export const company = [{ Slug: "career", SubTitle: "Career" }];

export const ourCompany = [
  {
    Slug: "aboutus",
    SubTitle: `About Us`,
  },
  { Slug: "ourapproach", SubTitle: `Our Approach` },
  {
    Slug: "contact",
    SubTitle: "Contact Us",
  },
  {
    Slug: "blog",
    SubTitle: "Blog",
  },
  {
    Slug: "",
    SubTitle: "Core Team",
  },
  {
    Slug: "career",
    SubTitle: "Career",
  },
];

export const achievementsList = [
  {
    title: "100+",
    description: "Apps & Web Platforms Built",
  },
  {
    title: "95%",
    description: "Average Client Retention Rate",
  },
  {
    title: "50+",
    description: "Sharetribe Marketplaces Launched",
  },
  {
    title: "50+",
    description: "Startup Founders Served",
  },
];

export const strengthList = [
  {
    coreIcon: core1,
    title: "Smooth & Effortless Delivery",
    description:
      "We keep things transparent: clear timelines, scope control, and proactive updates at every step to ensure zero surprises.",
  },
  {
    coreIcon: core2,
    title: "Proven Sharetribe & Marketplace Experts",
    description:
      "With 50+ marketplaces launched, our expertise ensures your platform is designed and built the right way, from MVP to scale.",
  },
  {
    coreIcon: core3,
    title: "Innovation at the Core",
    description:
      "From AI-driven features to seamless integrations, we push boundaries to keep your product future-ready.",
  },
  {
    coreIcon: core4,
    title: "Long-Term Partnerships",
    description:
      "We don’t just deliver and disappear — our large, dedicated team ensures continuous support, growth, and scaling.",
  },
  {
    coreIcon: core5,
    title: "Customer-Centric Approach",
    description:
      "Your goals drive every decision we make, ensuring each feature, flow, and design is aligned with your success.",
  },
];

export const journeyList = [
  {
    years: "2019–20",
    title: "Remote Beginnings",
    description:
      "iCodeLabs was founded during the COVID-19 lockdown, starting with just a small network of freelancers. Despite the global uncertainty, we embraced remote-first collaboration and began delivering our first Sharetribe marketplaces and custom solutions.",
  },
  {
    years: "2021",
    title: "First Office, First Team",
    description:
      "With things opening up, we set up our first physical office with 10 in-house team members while continuing to work with a few remote collaborators. This marked the transition from a fully freelance model to building a dedicated in-house culture.",
  },
  {
    years: "2022",
    title: "Steady Growth",
    description:
      "We began expanding at a steady pace, adding nearly 20 skilled professionals to the team. This growth allowed us to take on larger, more complex projects and deliver with consistency.",
  },
  {
    years: "2023",
    title: "Expanding Capabilities",
    description:
      "Continuing our momentum, we grew our team by another 20 experts. With 40+ developers now in-house, Icodelabs became one of the largest Sharetribe-focused teams, capable of handling enterprise-grade projects with speed and reliability.",
  },
  {
    years: "2024",
    title: "Global Impact",
    description:
      "Crossing 50+ developers under one roof, we scaled up our ability to deliver cutting-edge platforms — from marketplaces to AI-powered applications — for clients across multiple continents.",
  },
  {
    years: "2025",
    title: "Full AI Focus",
    description:
      "2025 marks our transformation into an AI-first company. From multilingual marketplaces powered by GPT to intelligent workflows, smart agents, and autonomous platforms — we are fully dedicated to helping businesses harness AI as their core growth engine.",
  },
];

export const professionalsList = [
  {
    listTitle: "Our Approach",
    secondaryTitle: "Collaboration First, Technology Second",
    professionalsDetail: [
      {
        detail:
          "At iCodeLabs, our approach blends collaboration, agility, and technical excellence. We see ourselves not just as developers, but as partners invested in your long-term success.",
        detail2:
          "We prioritize transparent communication, agile methodologies, and scalable architectures. By aligning our expertise in Sharetribe, AI, and full-stack development with your business goals, we deliver future-ready platforms that are both reliable and innovative.",
      },
    ],
  },
  {
    listTitle: "Our Journey",
    secondaryTitle: "From Single Founder To Largest Sharetribe Experts Team",
    professionalsDetail: [
      {
        detail:
          "We started in 2020, remotely during the COVID-19 lockdown, with just two developers and a shared belief: great tech doesn’t need to be bloated or slow. Today, we’re a full-fledged team working together in one city, delivering high-quality platforms for global clients — from MVPs to enterprise-grade builds.",
        detail2:
          "Over the past six years, we've launched over 50 Sharetribe-powered marketplaces and started integrating AI-driven features like GPT-based assistants, smart search, and workflow automation into our client platforms.",
      },
    ],
  },
  {
    listTitle: "Our Mission & Vision",
    secondaryTitle: "Innovation That Drives Real Impact",
    professionalsDetail: [
      {
        detail:
          "We believe that integrating mobile technology and digitizing processes simplifies lives and helps businesses focus on their core functions. Our client-centric solutions maximize productivity with minimal resources while upholding strong service principles.",
        detail2:
          "Guided by our motto, 'Build Apps Driven By Innovation,' we design and deliver solutions that are scalable, impactful, and tailored to evolving business landscapes.",
      },
    ],
  },
];

export const navItems = [
  {
    label: "Services",
    subItems: [
      {
        title: "Sharetribe Development",
        para: "Design, customize, and launch robust online marketplaces using Sharetribe — tailored to your business model and growth goals.",
        logo: "shareTribe",
        slug: "services/sharetribe",
      },
      {
        title: "Sharetribe Extension",
        para: "Enhance your current Sharetribe marketplace with powerful features and custom extensions.",
        logo: "shareTribe",
        slug: "services/sharetribe-extension",
      },
      {
        title: "Custom Marketplace Development",
        para: "We build fully custom marketplace platforms — from scratch, on your architecture and brand guidelines.",
        logo: "customMarketplaceDev",
        slug: "custom-marketplace-development",
      },
      {
        title: "AI Development",
        para: "Leverage AI-driven solutions, from chatbots to predictive analytics, to streamline operations and enhance customer experiences.",
        logo: "AIStar",
        slug: "services/ai-development",
      },
      {
        title: "Web Development",
        para: "Build fast, secure, and scalable websites with modern frameworks — optimized for performance, SEO, and user experience.",
        logo: "webDev",
        slug: "services/web-development-company",
      },
      {
        title: "Mobile App Development",
        para: "Create high-performing native and cross-platform mobile apps with React Native & Flutter for seamless experiences on iOS and Android.",
        logo: "mobileDev",
        slug: "services/mobile-app-development",
      },
    ],
  },
  {
    label: "About Us",
    slug: "aboutus",
  },
  {
    label: "Marketplace",
    subItems: [
      {
        title: "Rental Marketplace",
        para: "Availability calendars, deposits, damage protection,time-based pricing. Built on Sharetribe or fully custom.",
        logo: "rentalMarketplace",
        slug: "rental-marketplace",
      },
      {
        title: "Service Marketplace",
        para: "Provider vetting, calendar sync, milestone payments, portfolio pages. Cronofy and Stripe Connect included.",
        logo: "serviceMarketplace",
        slug: "service-marketplace",
      },
      {
        title: "Product Marketplace",
        para: "Launch a multi-vendor ecommerce platform with advanced search, inventory control, and integrated shipping.",
        logo: "productMarketplace",
        slug: "product-marketplace",
      },
      {
        title: "Booking & Events Marketplace",
        para: "Sell event tickets, book venues, and manage schedules with integrated payment and reminder systems.",
        logo: "eventsMarketplace",
        slug: "booking-and-events-marketplace",
      },
      {
        title: "Marketplace Development Cost",
        para: "Real pricing, real timelines, no fluff. Based on 50+ marketplace builds across rental, service, product, and booking platforms. Whether you're using Sharetribe or building fully custom - here's exactly what to expect.",
        logo: "marketplaceDev",
        slug: "marketplace-development-cost",
      },

      // {
      //   title: "Reverse / Negotiation",
      //   para: "Task/job boards and tendering—customers post; providers bid, negotiate, and finalize with contracts.",
      //   logo: "reverseNegotiation",
      //   slug: "reverse-and-negotiation",
      // },
      // {
      //   title: "Digital Goods & Subscriptions",
      //   para: "Courses, downloads, licenses—secure delivery, access control, recurring billing, and refunds.",
      //   logo: "digitalGoods&Subscriptions",
      //   slug: "digital-goods-and-subscriptions",
      // },
      // {
      //   title: "B2B /Wholesale",
      //   para: "Supplier & distributor platforms with bulk ordering, MOQs, invoicing, and tiered pricing.",
      //   logo: "wholesale",
      //   slug: "wholesale",
      // },
      // {
      //   title: "Education & E-Learning",
      //   para: "Tutoring, live classes, or course marketplaces with integrated payments, video, and learning flows.",
      //   logo: "eduNelearning",
      //   slug: "education-and-e-learning",
      // },
      // {
      //   title: "Community & Memberships",
      //   para: "Subscription-driven platforms with gated content, premium access, and exclusive networks.",
      //   logo: "communityMemberships",
      //   slug: "community-and-memberships",
      // },
    ],
  },
  {
    label: "Case Study",
    slug: "casestudy",
  },
  {
    label: "Blog",
    slug: "blog",
  },
  {
    label: "Contact Us",
    slug: "contact",
  },
];

export const HowOurSharetribeShareTribeExtensionData = [
  {
    step: "01",
    title: "Select Feature Modules",
    description:
      "Choose one or more modules from the catalogue — or request a custom feature.",
  },
  {
    step: "02",
    title: "Compatibility Check",
    description:
      "We confirm the module is compatible with your specific Sharetribe setup before any work starts.",
  },
  {
    step: "03",
    title: "Implementation & Configuration",
    description:
      "We implement with agreed configuration. Visual changes are minimal unless explicitly included in scope.",
  },
  {
    step: "04",
    title: "Out-of-Scope Handling",
    description:
      "Anything beyond defined scope is quoted separately before we touch it. No surprise costs.",
  },
];

export const sharetribeWhyWeDontDoData = {
  sectionTitle: "Built for Safe, Predictable Marketplace Growth",
  sectionInfo:
    "For live Sharetribe marketplaces, uncontrolled custom development often leads to delays, instability, and rising costs.That’s why we use fixed-scope feature modules—so you can extend your platform without risking your core user experience.",
  ptContainerHeading: "This approach protects you from:",
  protectionPoints: [
    "Disruptions to live transactions",
    "Endless revision cycles",
    "Budget uncertainty",
    "Fragile, hard-to-maintain code",
  ],
  buttonText: "Request Extension Quote",
  fixedScopeModules: {
    title: "Fixed Scope Modules",
    points: [
      "Clearly defined output",
      "Known pricing upfront",
      "Clear delivery timelines",
      "Safe for live marketplaces",
      "Easier to maintain and upgrade",
    ],
  },
  openEndedCustom: {
    title: "Open-Ended Custom",
    points: [
      "Scope keeps changing",
      "Budget uncertainty",
      "Delays and revisions",
      "Risk of breaking flows",
      "Hard-to-maintain code",
    ],
  },
};

export const sharetribeFeatureModulesData = {
  "Marketplace Flow": [
    {
      title: "Single-Vendor Shopping Cart",
      description:
        "Allow buyers to purchase multiple items from a single seller in one checkout.",
      investment: "$600 – $900",
      delivery: "4–5 days",
      img: "/assests/sharetribe_extension/sharetribe feature modules/marketflow/Single-Vendor Shopping Cart.png",
      detailsTitle: "Single seller per order. No cross-seller checkout.",
      link: "#",
      details: [],
    },
    {
      title: "Multi-Vendor Shopping Cart",
      description:
        "Enable multi-seller checkout with automatic order splitting.",
      investment: "$1,200 – $1,600",
      delivery: "7–10 days",
      img: "/assests/sharetribe_extension/sharetribe feature modules/marketflow/Multi-Vendor Shopping Cart.png",
      detailsTitle: "Requires business model validation.",
      link: "#",
      details: [],
    },
    {
      title: "Team / Organization Accounts",
      description:
        "Org or team-based accounts with member roles and permissions.",
      investment: "$700 – $1,000",
      delivery: "5–7 days",
      img: "/assests/sharetribe_extension/sharetribe feature modules/marketflow/Team-Organization-Accounts.png",
      detailsTitle: "Role-based access within organization accounts.",
      link: "#",
      details: [],
    },
  ],

  "Revenue & Pricing": [
    {
      title: "Deposits & Partial Payments",
      description: "Allow booking deposits with standard refund logic.",
      investment: "$400 – $600",
      delivery: "3–4 days",
      img: "/assests/sharetribe_extension/sharetribe feature modules/Revenue & Pricing/Deposits & Partial Payments.png",
      detailsTitle: "Standard cancellation and refund rules.",
      link: "#",
      details: [],
    },
    {
      title: "Subscription Payments",
      description: "Enable monthly or yearly Stripe subscriptions.",
      investment: "$500 – $700",
      delivery: "4–5 days",
      img: "/assests/sharetribe_extension/sharetribe feature modules/Revenue & Pricing/Subscription Payments.png",
      detailsTitle: "Stripe subscription setup with access control.",
      link: "#",
      details: [],
    },
    {
      title: "Dynamic Commissions",
      description: "Seller-level or category-based commission structures.",
      investment: "$500 – $800",
      delivery: "4–5 days",
      img: "/assests/sharetribe_extension/sharetribe feature modules/Revenue & Pricing/Dynamic Commissions.png",
      detailsTitle: "Fixed rules per seller or listing category.",
      link: "#",
      details: [],
    },
    {
      title: "Tax Handling",
      description: "Automatic VAT or sales tax calculation using Stripe Tax.",
      investment: "$400 – $700",
      delivery: "4–5 days",
      img: "/assests/sharetribe_extension/sharetribe feature modules/Revenue & Pricing/Tax Handling.png",
      detailsTitle: "Tax advisory not included.",
      link: "#",
      details: [],
    },
  ],

  "Growth & Engagement": [
    {
      title: "Real-Time Chat",
      description: "Buyer–seller messaging with conversation history.",
      investment: "$300 – $500",
      delivery: "2–3 days",
      img: "/assests/sharetribe_extension/sharetribe feature modules/Growth & Engagment/Real Time Chat.png",
      detailsTitle: "Transaction-based messaging flow.",
      link: "#",
      details: [],
    },
    {
      title: "Push Notifications",
      description: "Transactional notifications for web or mobile users.",
      investment: "$400 – $600",
      delivery: "2–3 days",
      img: "/assests/sharetribe_extension/sharetribe feature modules/Growth & Engagment/Push Notifications.png",
      detailsTitle: "Mobile configuration may extend timeline.",
      link: "#",
      details: [],
    },
    {
      title: "Social Login (Apple / LinkedIn)",
      description: "OAuth-based login beyond default Google authentication.",
      investment: "$300 – $500",
      delivery: "2–3 days",
      img: "/assests/sharetribe_extension/sharetribe feature modules/Growth & Engagment/Apple Log in.png",
      detailsTitle: "Google login already supported by Sharetribe.",
      link: "#",
      details: [],
    },
    {
      title: "Meetings & Calendar Integration",
      description: "Availability sync and booking calendar integration.",
      investment: "$500 – $700",
      delivery: "4–5 days",
      img: "/assests/sharetribe_extension/sharetribe feature modules/Growth & Engagment/Meetings & Calendar Integration.png",
      detailsTitle: "Works with Cronofy or similar calendar providers.",
      link: "#",
      details: [],
    },
    {
      title: "Video Calling",
      description: "Video calls integrated into the transaction flow.",
      investment: "$600 – $900",
      delivery: "5–7 days",
      img: "/assests/sharetribe_extension/sharetribe feature modules/Growth & Engagment/Video Calling.png",
      detailsTitle: "Recording and translation features excluded.",
      link: "#",
      details: [],
    },
    {
      title: "AI-Assisted Marketplace Starter",
      description:
        "Add a practical AI feature to improve listings or user interactions.",
      investment: "$600 – $900",
      delivery: "3–5 days",
      img: "/assests/sharetribe_extension/sharetribe feature modules/Growth & Engagment/AI-Assisted Marketplace Starter.png",
      detailsTitle: "Choose one AI starter feature.",
      link: "#",
      details: [
        "AI listing description generator",
        "AI title or tag suggestions",
        "AI message reply suggestions",
        "AI FAQ assistant",
        "AI category recommendations",
      ],
    },
  ],

  "Operations & Integrations": [
    {
      title: "Advanced Search (Algolia / Typesense)",
      description: "Custom search indexing, filters, and ranking logic.",
      investment: "$900 – $1,200",
      delivery: "5–7 days",
      img: "/assests/sharetribe_extension/sharetribe feature modules/Operations & Integrations/Advance Search.png",
      detailsTitle: "Ongoing infra costs not included.",
      link: "#",
      details: [],
    },
    {
      title: "Shipping Integrations (Shippo / ShipEngine)",
      description: "Shipping rates, label generation, and tracking.",
      investment: "$700 – $1,000",
      delivery: "4–5 days",
      img: "/assests/sharetribe_extension/sharetribe feature modules/Operations & Integrations/Shipping Integrations.png",
      detailsTitle: "Carrier accounts not included.",
      link: "#",
      details: [],
    },
    {
      title: "Custom Stripe Payments, Refunds & Payouts",
      description: "Advanced payout logic beyond default Sharetribe flows.",
      investment: "$900 – $1,200",
      delivery: "5–7 days",
      img: "/assests/sharetribe_extension/sharetribe feature modules/Operations & Integrations/Custom Stripe Payments, Refunds & Payouts.png",
      detailsTitle: "Custom payout and refund flows.",
      link: "#",
      details: [],
    },
    {
      title: "Custom Payment Gateways",
      description: "Integration of non-Stripe payment providers.",
      investment: "$1,200 – $1,600",
      delivery: "7–10 days",
      img: "/assests/sharetribe_extension/sharetribe feature modules/Operations & Integrations/Custom Payment Gateways.png",
      detailsTitle: "Gateway certification may affect timeline.",
      link: "#",
      details: [],
    },
    {
      title: "Media Uploads (External Storage)",
      description: "External media storage using S3, Cloudinary, or similar.",
      investment: "$200 – $400",
      delivery: "1–2 days",
      img: "/assests/sharetribe_extension/sharetribe feature modules/Operations & Integrations/media.png",
      detailsTitle: "For large or custom media handling needs.",
      link: "#",
      details: [],
    },
    {
      title: "Bulk Data Uploads (CSV / APIs)",
      description: "Import listings or users via CSV or API-based tools.",
      investment: "$400 – $600",
      delivery: "2–3 days",
      img: "/assests/sharetribe_extension/sharetribe feature modules/Operations & Integrations/Bulk Data Uploads.png",
      detailsTitle: "Includes validation and import logic.",
      link: "#",
      details: [],
    },
    {
      title: "ID Verification (KYC)",
      description: "Identity verification via third-party providers.",
      investment: "$400 – $700",
      delivery: "2–3 days",
      img: "/assests/sharetribe_extension/sharetribe feature modules/Operations & Integrations/ID Verification.png",
      detailsTitle: "Provider subscription not included.",
      link: "#",
      details: [],
    },
  ],
};

export const sharetribeFeatureSectionData = {
  sectionTitle: "Browse & Pick the Features You Need",
  sectionInfo:
    "Each module is a fixed-scope implementation — like choosing a plugin, but built specifically for your Sharetribe setup.",
};

export const sharetribeFeedbackFormData = {
  importantGuidelines: {
    title: "To keep delivery fast and predictable:",
    points: [
      "All modules follow a fixed scope",
      "Configuration is limited to defined options",
      "Visual changes are minimal unless included",
      "Multiple modules may be delivered in phases",
      "Out-of-scope requests are quoted separately",
    ],
  },
  feedbackForm: {
    image: {
      src: "/assests/sharetribe_extension/shareTribeImg.svg",
      width: 136,
      height: 150,
      className: "shareTribeImg",
    },
    title: "Need One or More Features Added to Your Marketplace?",
    info: "Get a quick compatibility check and a fixed-scope quote.",
    formHeading: "Which modules do you need? (select all that apply)",
    modules: [
      {
        id: "shopping-cart",
        label: "Shopping Cart",
      },
      {
        id: "calendar-sync",
        label: "Calendar Sync",
      },
      {
        id: "algolia-search",
        label: "Algolia Search",
      },
      {
        id: "subscription-plans",
        label: "Subscription Plans",
      },
      {
        id: "id-verification",
        label: "ID Verification",
      },
      {
        id: "shippo-shipping",
        label: "Shippo Shipping",
      },
      {
        id: "discount-codes",
        label: "Discount Codes",
      },
      {
        id: "push-notifications",
        label: "Push Notifications",
      },
      {
        id: "ai-listing-generator",
        label: "AI Listing Generator",
      },
      {
        id: "custom-feature",
        label: "Custom Feature",
      },
    ],
    inputFields: [
      {
        label: "Email",
        placeholder: "Enter your email",
      },
      {
        label: "Is your Marketplace Live or in Testing?",
        placeholder: "Live",
      },
      {
        label: "Timeline",
        placeholder: "Target Timeline",
      },
      {
        label: "Budget range",
        placeholder: "$700",
      },
    ],
    buttonText: "Request Extension Quote",
  },
  ctaSection: {
    title: "Build your marketplace the right way from day one.",
    info: "Build your marketplace the right way from day one. iCodeLabs helps you design, customize, and launch scalable Sharetribe marketplaces with expert support.",
    buttonText: "View Sharetribe Launch Packages",
    link: "/services/sharetribe",
  },
};

export const aiServices = [
  {
    icon: <IconCollection name="consulting" />,
    Heading: "AI Strategy & Consulting",
    description:
      "Use case mapping, tool selection, rapid prototyping, and a clear AI roadmap before a single line of code is written. We tell you where AI creates value — and where it doesn't.",
  },
  {
    icon: <IconCollection name="software-dev" />,
    Heading: "AI Software Development",
    description:
      "Production-ready AI features — GPT-powered assistants, recommendation engines, vector search, and intelligent automation. Not demos. Deployed, working software.",
  },
  {
    icon: <IconCollection name="genrate-ai" />,
    Heading: "Generative AI",
    description:
      "AI listing generation, content automation, dynamic pricing, image processing, and document summarisation — integrated directly into your marketplace or platform.",
  },
  {
    icon: <IconCollection name="machine-learn" />,
    Heading: "Machine Learning",
    description:
      "Custom ML models for search ranking, fraud detection, demand forecasting, and personalised recommendations. Built on your data, deployed into your product.",
  },
  {
    icon: <IconCollection name="chat-boat" />,
    Heading: "AI Agent & Chatbot",
    description:
      "Conversational AI for customer support, onboarding guidance, and moderation. LangChain-based multi-step agents that go beyond a simple FAQ bot.",
  },
  {
    chatHead: "Have a custom AI use case? Talk to us.",
    isChatBox: true,
  },
];

export const repartyAIflowUISlides = [
  {
    src: "/assests/img/casestudy/reparty/reparty-homepage.png",
    alt: "Reparty AI Flow UI 1",
  },
  {
    src: "/assests/img/casestudy/reparty/reparty-listing-page.png",
    alt: "Reparty AI Flow UI 2",
  },
  {
    src: "/assests/img/casestudy/reparty/house-party-decoration.png",
    alt: "house-party-decoration",
  },
  {
    src: "/assests/img/casestudy/reparty/pexels-karolina.png",
    alt: "pexels-karolina",
  },
];

export const caseStudyContent = [
  {
    tagLine: "Peer-to-Peer Marketplace",
    logo: "/assests/logo/project-logo/groovebay.svg",
    title: "Groovebay",
    description:
      "A Dutch peer-to-peer vinyl record marketplace with a bidding transaction flow, MyParcel shipping integration, and iDEAL payment support — built natively for the Netherlands and Belgian collector market.",
    keyPt: {
      techIcon: ["shareTribe"],
      platform: "Sharetribe Extended",
      starPt: "Bidding + iDEAL + MyParcel",
    },
    image: "/assests/img/casestudy/groove-hero.webp",
    link: "/casestudy/groovebay",
    bgColor: "#CB4C4E",
    tag: "sharetribe",
  },
  {
    tagLine: "Party Decor Marketplace",
    logo: "/assests/logo/project-logo/reparty.svg",
    title: "ReParty",
    description:
      "A sustainable party decor marketplace supporting dual sale and rental transaction flows, AI-powered listing creation via image upload, Shippo shipping, security deposits, and Algolia tag-based search.",
    keyPt: {
      techIcon: ["shareTribe"],
      platform: "Sharetribe Extended",
      starPt: "AI Listing + Dual Sale & Rental",
    },
    image: "/assests/img/casestudy/reparty-hero.webp",
    link: "/casestudy/reparty",
    bgColor: "#181817",
    tag: "sharetribe",
  },
  {
    tagLine: "Arabic Tutoring Marketplace",
    logo: "/assests/logo/project-logo/arabibi.svg",
    title: "Arabibi",
    description:
      "A live Arabic tutoring marketplace with Zoom-generated lesson links, Google Calendar sync, a custom credit wallet with swap logic, gamified progress tracking, and PayTabs payment integration for the MENA market.",
    keyPt: {
      techIcon: ["shareTribe"],
      platform: "Sharetribe Extended",
      starPt: "Credit Wallet + Zoom + PayTabs",
    },
    image: "/assests/img/casestudy/arabibi-hero.webp",
    link: "/casestudy/arabibi",
    bgColor: "#01674F",
    tag: "sharetribe",
  },
  {
    tagLine: "Reverse Marketplace",
    logo: "/assests/logo/project-logo/densyte.svg",
    title: "DenSyte",
    description:
      "A reverse marketplace and bidding platform for premium wildlife stock footage — connecting buyers who post briefs with verified cinematographers worldwide, with Mux video delivery and AWS/Dropbox large-file infrastructure.",
    keyPt: {
      techIcon: ["shareTribe"],
      platform: "Sharetribe Extended",
      starPt: "Reverse Bidding + Mux + AWS",
    },
    image: "/assests/img/casestudy/densyte-desktop.webp",
    link: "/casestudy/densyte",
    bgColor: "#244C3A",
    tag: "sharetribe",
  },
  {
    tagLine: "Fully Custom Affiliate Platform",
    logo: "/assests/img/marketplace/custom-marketplace/sbonssy.svg",
    title: "Sbonssy",
    description:
      "A fully custom three-sided affiliate platform connecting sports brands, athlete ambassadors, and fans — with injectable tracking scripts, Shopify order attribution, pay-per-click and pay-per-order commission engine, and automated Stripe monthly payouts.",
    keyPt: {
      techIcon: ["nextjs", "postgresql"],
      platform: "Next.js + PostgreSQL",
      starPt: "Shopify Attribution + Commission Engine",
    },
    image: "/assests/img/casestudy/casestudy-main/sbonssy.webp",
    link: "/casestudy/sbonssy",
    bgColor: "#5A1235",
    tag: "custom",
  },

  {
    tagLine: "Belgian Training Marketplace",
    logo: "/assests/logo/project-logo/formabel.svg",
    title: "Formabel",
    description:
      "A Belgian professional training marketplace with custom multi-day course booking, trainer and learner dashboards, GDPR-compliant cookie consent, Belgian VAT number validation, and full mobile optimisation.",
    keyPt: {
      techIcon: ["shareTribe"],
      platform: "Sharetribe Extended",
      starPt: "Multi-Day Booking + GDPR + Belgian VAT",
    },
    image: "/assests/img/casestudy/formabel-hero.jpg",
    link: "/casestudy/formabel",
    bgColor: "#091E52",
    tag: "sharetribe",
  },

  {
    tagLine: "AI-Native Research Platform",
    logo: "/assests/img/casestudy/Group_1410088175_0a98a3811e 3.svg",
    title: "InsightGig",
    description:
      "An AI-native research operating layer for enterprise insight teams — combining multi-agent AI orchestration, automated qualitative analysis pipelines, multimodal emotion and sentiment analysis, and cross-study connected intelligence.",
    keyPt: {
      techIcon: ["aiNative"],
      platform: "AI-Native Platform",
      starPt: "Multi-Agent AI + RAG Pipeline",
    },
    image: "/assests/img/casestudy/casestudy-main/insight.webp",
    link: "/casestudy/insightgig",
    bgColor: "#2563EB",
    tag: ["mobile", "ai"],
  },
  // ── Row 7: Pair ──────────────────────────────────────────
  {
    tagLine: "AI Co-Parenting Assistant",
    logo: "/assests/img/casestudy/parent.svg",
    title: "Parent Co-Pilot",
    description:
      "A full-stack AI co-parenting assistant with a custom RAG pipeline — parents upload legal parenting plans and receive document-grounded AI guidance, NLP conflict analysis, Twilio SMS templates, and OneSignal reminders.",
    keyPt: {
      techIcon: ["reactNative", "nextjs"],
      platform: "React Native + Next.js",
      starPt: "RAG Pipeline + LangChain + Weaviate",
    },
    image: "/assests/img/casestudy/casestudy-main/parent.webp",
    link: "/casestudy/parent-copilot",
    bgColor: "#35556D",
    tag: ["custom", "ai", "mobile"],
  },
  {
    tagLine: "Fashion Commerce & Social Platform",
    logo: "/assests/img/marketplace/custom-marketplace/pps.svg",
    title: "PPS (Popseekl)",
    description:
      "A three-sided fashion commerce, editorial, and social platform — connecting brands via Shopify, tastemaker-curators building personal storefronts, and consumers, with Mux video, Google Gemini AI, and Mixpanel analytics.",
    keyPt: {
      techIcon: ["reactNative"],
      platform: "React Native",
      starPt: "Shopify + Gemini AI + Tastemaker Curation",
    },
    image: "/assests/img/casestudy/casestudy-main/poop.webp",
    link: "/casestudy/pps",
    bgColor: "#111111",
    tag: ["mobile", "ai"],
  },

  // ── Row 6: Wide ──────────────────────────────────────────
  {
    tagLine: "Spiritual Services Marketplace",
    logo: "/assests/img/casestudy/Frame 2092.svg",
    title: "She Who Wins",
    description:
      "A spiritual services marketplace with three independent Sharetribe transaction processes — live readings via 100ms, real-time chat via Socket.io, and recorded sessions via Mux — with mid-session booking extension and fixed-price pay-per-session flow.",
    keyPt: {
      techIcon: ["shareTribe", "reactNative"],
      platform: "Sharetribe + React Native",
      starPt: "100ms + Socket.io + Mid-Session Extension",
    },
    image: "/assests/img/casestudy/casestudy-main/shewho.webp",
    link: "/casestudy/shewins",
    bgColor: "#005D66",
    tag: ["sharetribe", "mobile"],
  },
  // ── Row 8: Pair ──────────────────────────────────────────
  {
    tagLine: "Saudi Arabic-First Deals & Services Marketplace",
    logo: "/assests/img/casestudy/NOW Logo 2.png",
    title: "NowOffers",
    description:
      "A Saudi Arabic-first deals and services marketplace across web, iOS, and Android — with six deal types, Salesforce CRM, Zoho accounting, custom ad management, Mixpanel analytics dashboard, and STC Pay integration.",
    keyPt: {
      techIcon: ["shareTribe", "reactNative"],
      platform: "Sharetribe + React Native",
      starPt: "Salesforce + STC Pay + Custom Ad System",
    },
    image: "/assests/img/casestudy/casestudy-main/now.webp",
    link: "/casestudy/nowoffers",
    bgColor: "#0B0B0B",
    tag: ["sharetribe", "mobile"],
  },
  {
    tagLine: "Private Pool & Garden Rental",
    logo: "/assests/logo/project-logo/cocopool.svg",
    title: "CocoPool",
    description:
      "Spain's leading private pool and garden rental marketplace — with hourly booking, capacity-based search, instant confirmation, a custom refund and cancellation engine, and city-based discovery across Barcelona, Madrid, and Valencia.",
    keyPt: {
      techIcon: ["shareTribe"],
      platform: "Sharetribe Extended",
      starPt: "Hourly Booking + Capacity-Based Search",
    },
    image: "/assests/img/casestudy/casestudy-main/coco.webp",
    link: "/casestudy/cocopool",
    bgColor: "#18AA98",
    tag: ["sharetribe"],
  },
  // ── Row 9: Wide ──────────────────────────────────────────
  {
    tagLine: "Local Business Discovery Marketplace",
    logo: "/assests/logo/project-logo/lulocal.svg",
    title: "Lulocal",
    description:
      "A US local business discovery and promotions marketplace — connecting consumers with nearby businesses offering deals, products, and services online and in-store, with location-based search built on Sharetribe Extended.",
    keyPt: {
      techIcon: ["shareTribe"],
      platform: "Sharetribe Extended",
      starPt: "Local Business Discovery + Promotions",
    },
    image: "/assests/img/casestudy/casestudy-main/lul.webp",
    link: "/casestudy/lulocal",
    bgColor: "#C05D3A",
    tag: ["sharetribe"],
  },
  // ── Row 10: Pair ─────────────────────────────────────────
  {
    tagLine: "Ticket Reseller Marketplace",
    logo: "/assests/logo/project-logo/promotix.svg",
    title: "PromoTix Reseller",
    description:
      "A Sharetribe-powered ticket reseller marketplace for the PromoTix ecosystem — with Single Sign-On bridging both platforms, custom ticket listing flows, operator-governed reseller verification, and Stripe checkout.",
    keyPt: {
      techIcon: ["shareTribe"],
      platform: "Sharetribe Extended",
      starPt: "PromoTix SSO + Ticket Resale Flow",
    },
    image: "/assests/img/casestudy/promotix-hero.jpg",
    link: "/casestudy/promotix",
    bgColor: "#181817",
    tag: ["sharetribe"],
  },
  {
    tagLine: "Wedding Discovery Marketplace",
    logo: "/assests/logo/project-logo/myfindor.svg",
    title: "MyFindor",
    description:
      "A wedding vendor discovery marketplace connecting engaged couples with local venues, cakes, dresses, photographers, and invitations — with category-based browsing, location search, and a streamlined vendor enquiry flow.",
    keyPt: {
      techIcon: ["shareTribe"],
      platform: "Sharetribe Extended",
      starPt: "Wedding Vendor Discovery + Local Search",
    },
    image: "/assests/img/casestudy/myfindor-hero.jpg",
    link: "/casestudy/myfindor",
    bgColor: "#B25F89",
    tag: ["sharetribe"],
  },
  // ── Row 11: Wide ─────────────────────────────────────────
  
  // ── Row 12: Pair ─────────────────────────────────────────
  {
    tagLine: "Peer-to-Peer Roof Pod Rental",
    logo: "/assests/img/casestudy/image 1185.svg",
    title: "LuggagePodHire",
    description:
      "A peer-to-peer roof pod rental marketplace built on Sharetribe Extended — with dual security deposit logic for short and long hires, a MongoDB operations ledger, Stripe webhook reconciliation, and cron-driven provider payout automation.",
    keyPt: {
      techIcon: ["shareTribe"],
      platform: "Sharetribe Extended",
      starPt: "Dual Deposit Logic + MongoDB Ledger",
    },
    image: "/assests/img/casestudy/casestudy-main/lug.webp",
    link: "/casestudy/luggagepodhire",
    bgColor: "#18B9D6",
    tag: ["sharetribe"],
  },
  {
    tagLine: "Home Services Marketplace",
    logo: "/assests/logo/project-logo/handyman.svg",
    title: "Handyman Nomad",
    description:
      "A services marketplace connecting homeowners with local handyman professionals — featuring category-based service discovery, location-aware search, availability booking, and provider onboarding built on Sharetribe Extended.",
    keyPt: {
      techIcon: ["shareTribe"],
      platform: "Sharetribe Extended",
      starPt: "Service Booking + Provider Onboarding",
    },
    image: "/assests/img/casestudy/handyman-hero.jpg",
    link: "/casestudy/handyman",
    bgColor: "#5D3A18",
    tag: ["sharetribe"],
  },
  // ── Row 13: Wide ─────────────────────────────────────────
  {
    tagLine: "Photography Services Marketplace",
    logo: "/assests/logo/project-logo/shimo.svg",
    title: "Shimo",
    description:
      "A photography services marketplace connecting customers with professional photographers — with contract management, session booking, shoot type categorisation, and a provider profile system built on Sharetribe Extended.",
    keyPt: {
      techIcon: ["shareTribe"],
      platform: "Sharetribe Extended",
      starPt: "Photography Booking + Contract Flow",
    },
    image: "/assests/img/casestudy/shimo-hero.jpg",
    link: "/casestudy/shimo",
    bgColor: "#64696B",
    tag: ["sharetribe"],
  },
  // ── Row 14: Pair ─────────────────────────────────────────
  {
    tagLine: "Online Art Marketplace",
    logo: "/assests/logo/project-logo/artragat.svg",
    title: "Artragat",
    description:
      "An online art marketplace connecting collectors and buyers with independent artists and galleries — with curated collections, artwork listing management, and a structured purchase flow built on Sharetribe Extended.",
    keyPt: {
      techIcon: ["shareTribe"],
      platform: "Sharetribe Extended",
      starPt: "Art Listings + Curated Collections",
    },
    image: "/assests/img/casestudy/artragat-hero.jpg",
    link: "/casestudy/artragat",
    bgColor: "#00A8D8",
    tag: ["sharetribe"],
  },
  {
    tagLine: "Travel and Accommodation Marketplace",
    logo: "/assests/logo/project-logo/fiji.svg",
    title: "Fijianhost",
    description:
      "A Fijian travel and accommodation marketplace connecting local hosts with international guests — showcasing authentic cultural stays across highlands and coastlines with localised booking and payment flows.",
    keyPt: {
      techIcon: ["shareTribe"],
      platform: "Sharetribe Extended",
      starPt: "Travel Stays + Local Host Onboarding",
    },
    image: "/assests/img/casestudy/casestudy-main/fiji.webp",
    link: "/casestudy/fiji",
    bgColor: "#3F1113",
    tag: ["sharetribe"],
  },
  // ── Row 15: Wide ─────────────────────────────────────────
  {
    tagLine: "Fantasy Tennis Platform",
    logo: "/assests/img/blank-placeholder.svg",
    title: "UbiTennis",
    description:
      "A React Native rebuild of a FlutterFlow app — powering a fully API-driven Fantasy Tennis platform with a dynamic relative tier pricing algorithm, automated withdrawal management, UbiCoin virtual economy, and season-long ATP leagues.",
    keyPt: {
      techIcon: ["reactNative", "firebase"],
      platform: "React Native + Firebase",
      starPt: "Dynamic Tier Algorithm + ATP API",
    },
    image: "/assests/img/casestudy/casestudy-main/tennis.webp",
    link: "/casestudy/ubitennis",
    bgColor: "#0F172A",
    tag: ["custom"],
  },
  // ── Row 16: Pair ─────────────────────────────────────────
  {
    tagLine: "Creative Marketplace",
    logo: "/assests/img/blank-placeholder.svg",
    title: "Direzione",
    description:
      "A Next.js creative marketplace and editorial platform connecting artists with managers and studios — with JWT role-based dashboards, inquiry-based transaction flow, Stripe subscriptions, Strapi headless CMS, and Cloudinary media delivery in English and Italian.",
    keyPt: {
      techIcon: ["nextjs", "strapi"],
      platform: "Next.js + Strapi",
      starPt: "JWT Roles + Editorial Marketplace Hybrid",
    },
    image: "/assests/img/casestudy/casestudy-main/dire.webp",
    link: "/casestudy/direzione",
    bgColor: "#0E0E0E",
    tag: ["custom"],
  },
];


export const casestudyFilterTab = [
  {
    label: "All",
    tag: 'all',
  },
  {
    label: "Sharetribe",
    tag: 'sharetribe',
  },
  {
    label: "Custom Build",
    tag: 'custom',
  },
  {
    label: "Mobile App",
    tag: 'mobile',
  },
  {
    label: "AI Development",
    tag: 'ai',
  },
]