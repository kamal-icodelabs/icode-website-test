import ContentWidth from "@/component/ContentWidth/ContentWidth";
import css from "./CustomMarketplacePricing.module.css";
import IconCollection from "@/component/IconCollection/IconCollection";
import Link from "next/link";

const CustomMarketplacePricing = () => {
  const pricingPlans = [
    {
      id: 1,
      icon: "pricingNoCode",
      badge: null,
      title: "Lean",
      subtitle: "Single-platform core marketplace logic",
      priceRange: "$8k – $10k",
      features: [
        "Custom Next.js frontend",
        "Node/Python backend",
        "Stripe Connect payments",
        "Core marketplace flows (listing, search, transactions, reviews)",
        "Admin dashboard",
        "6-10 week delivery",
        "90-day bug-free guarantee",
      ],
    },
    {
      id: 2,
      icon: "pricingStartup",
      badge: "MOST POPULAR",
      title: "Full",
      subtitle: "Multi + complex, complete flows, AI features, integrations",
      priceRange: "$10k – $20k",
      features: [
        "Everything in Lean tier",
        "React Native iOS + Android",
        "AI features (matching, listing generation, search)",
        "Complex transaction logic & custom workflows",
        "3rd-party integrations (CRM, HCM, shipping, calendar)",
        "Subscription billing or B2B accounts",
        "12-16 week delivery",
        "90-day bug-free guarantee",
      ],
    },
    {
      id: 3,
      icon: "pricingEnterprise",
      badge: null,
      title: "Pro",
      subtitle: "Multi-tenant, white-label, high-scale architecture",
      priceRange: "$20k+",
      features: [
        "Everything in Full tier",
        "Advanced ML / AI pipeline",
        "Custom payment rails or on-ramps processors",
        "Infrastructure scaling, caching, queues",
        "Dedicated senior architect",
        "Timeline: scoped per project",
        "SLA-backed support options",
      ],
    },
  ];

  return (
    <section className={css.pricingSection} id="investment">
      <ContentWidth>
        <div className={css.headingContainer}>
          <span className={css.sectionLabel}>INVESTMENT</span>
          <h2 className={css.sectionTitle}>Custom Marketplace Pricing</h2>
          <p className={css.sectionDescription}>
            Custom builds are scoped per project — no two are identical. These
            are the three tiers most projects fall into. Every project gets a
            fixed-price proposal before work begins.
          </p>
        </div>

        <div className={css.cardsContainer}>
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className={`${css.pricingCard} ${
                plan.badge ? css.pricingCardFeatured : ""
              }`}
            >
              {plan.badge && (
                <div className={css.badgeContainer}>
                  <span className={css.badge}>{plan.badge}</span>
                </div>
              )}

              <IconCollection name={plan.icon} />

              <h3 className={css.cardTitle}>{plan.title}</h3>

              <p className={css.cardSubtitle}>{plan.subtitle}</p>

              <div className={css.priceContainer}>
                <span className={css.priceRange}>{plan.priceRange}</span>
              </div>

              <Link href={'https://calendly.com/jaytiwary'} className={css.ctaButton}>
                Get Started <IconCollection name={"rightArrowTop"} />
              </Link>

              <div className={css.featuresContainer}>
                <ul className={css.featuresList}>
                  {plan.features.map((feature, index) => (
                    <li key={index} className={css.featureItem}>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className={css.fixedPricingContainer}>
          <div className={css.fixedPricingContent}>
            <h5 className={css.fixedPricingTitle}>
              All pricing is fixed-price
            </h5>
            <p className={css.fixedPricingDescription}>
              Agreed before work starts. No hourly billing. No scope creep surprises.
              surprises.
            </p>
          </div>

          <button className={css.estimateButton}>
            Book a free scoping call to get your estimate
            <IconCollection name={"rightArrowTop"} />
          </button>
        </div>
      </ContentWidth>
    </section>
  );
};

export default CustomMarketplacePricing;
