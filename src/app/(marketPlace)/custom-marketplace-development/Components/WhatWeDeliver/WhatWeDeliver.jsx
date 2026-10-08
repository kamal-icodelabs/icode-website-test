import ContentWidth from "@/component/ContentWidth/ContentWidth";
import css from "./WhatWeDeliver.module.css";
import IconCollection from "@/component/IconCollection/IconCollection";

const WhatWeDeliver = () => {
  const cards = [
    {
      id: 1,
      icon: "twoSidedMarketplace",
      title: "Two-Sided Marketplaces",
      description:
        "Fully custom buyer-seller platforms where Sharetribe's default transaction model doesn't fit. Complete approval flows, custom commission logic, escrow patterns, and multi-role permissions.",
      tags: ["Custom transaction engine", "Multi-role auth"],
    },
    {
      id: 2,
      icon: "b2bMarketplace",
      title: "B2B Marketplaces",
      description:
        "Company accounts, bulk pricing tiers, RFQ workflows, invoice-based payments, approval chains, and procurement integrations. Built for business buyers and sellers—not consumers.",
      tags: ["Invoice payments", "Company accounts"],
    },
    {
      id: 3,
      icon: "mobileFirst",
      title: "Mobile-First Marketplaces",
      description:
        "React Native iOS Android apps with a custom backend — for marketplaces where the mobile experience is primary, not secondary. Real-time features, push notifications, offline-ready.",
      tags: ["React Native", "Real-time"],
    },
    {
      id: 4,
      icon: "aiNative",
      title: "AI-Native Marketplaces",
      description:
        "Marketplaces where AI is core to the product — smart matching, AI listing generation, automated moderation, dynamic pricing, and intelligent onboarding flows.",
      tags: ["OpenAI", "LangChain", "Vector search"],
    },
  ];

  return (
    <>
      <section className={css.WhatWeDeliverSection}>
        <ContentWidth>
          <div className={css.headingSection}>
            <span className={css.sectionLabel}>What We Build</span>
            <h2 className={css.sectionTitle}>
              Types of Custom Marketplaces We Deliver
            </h2>
            <p className={css.sectionInfo}>
              Every build is different. These are the most common custom
              marketplace architectures we work on.
            </p>
          </div>

          <div className={css.cardContainer}>
            {cards.map((card) => (
              <div key={card.id} className={css.card}>
                <div className={css.iconWrapper}>
                  <IconCollection name={card.icon} />
                </div>
                <h3 className={css.cardTitle}>{card.title}</h3>
                <p className={css.cardDescription}>{card.description}</p>
                <div className={css.tagsContainer}>
                  {card.tags.map((tag, index) => (
                    <span key={index} className={css.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </ContentWidth>
      </section>
    </>
  );
};

export default WhatWeDeliver;
