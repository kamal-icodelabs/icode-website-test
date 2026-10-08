import css from './FullCustomMarketplace.module.css'
import ContentWidth from '@/component/ContentWidth/ContentWidth'
import IconCollection from '@/component/IconCollection/IconCollection'

const FullCustomMarketplace = () => {
    const pricingCards = [
  {
    id: 'lean',
    label: 'Lean',
    title: 'Single-platform web marketplace, core flows',
    price: '$8k – $10k',
    duration: '4–6 weeks',
    tone: 'blue',
    features: [
      'Custom Next.js frontend + Node.js or Python backend',
      'Core marketplace flows — listing, search, transactions, reviews',
      'Stripe Connect payments configured for your commission model',
      'Admin dashboard — manage users, listings, transactions, disputes',
      '90-day bug-free guarantee',
    ],
  },
  {
    id: 'full',
    label: 'Full',
    title: 'Web + mobile, AI features, complex integrations',
    price: '$10k – $20k',
    duration: '8–12 weeks',
    tone: 'green',
    features: [
      'Everything in Lean, plus:',
      'React Native iOS + Android mobile app',
      'AI features — smart matching, listing generation, search recommendations',
      'Complex transaction logic & custom workflows',
      '3rd-party integrations — CRM, KYC, shipping, calendar sync',
      'Subscription billing or B2B account management',
      '90-day bug-free guarantee',
    ],
  },
  {
    id: 'pro',
    label: 'Pro',
    title: 'Multi-tenant, high-scale, advanced AI pipelines',
    price: '$20k+',
    duration: 'Scoped per project',
    tone: 'red',
    features: [
      'Everything in Full, plus:',
      'Multi-tenant or white-label architecture',
      'Advanced ML / AI pipeline — custom models, data pipelines, retraining',
      'Custom payment rails or alternative payment processors',
      'Infrastructure scaling — caching, queues, load balancing',
      'Dedicated senior architect throughout delivery',
      'SLA-backed support options',
    ],
  },
];

    return (
        <section className={css.fullCustomMarketplaceSection}>
            <ContentWidth>
                <div className={css.sectionHeader}>
                    <span className={css.sectionLabel}>Custom Marketplace Pricing</span>
                    <h2 className={css.sectionTitle}>Fully Custom Marketplace - What It Costs</h2>
                    <p className={css.sectionInfo}>
                        For when your business model, transaction logic, or scale requirements go beyond what Sharetribe can support. Fixed-price proposals on every project.
                    </p>
                </div>

                <div className={css.cardContainer}>
                    {pricingCards.map((card) => (
                        <article
                            key={card.id}
                            className={`${css.pricingCard} ${css[card.tone]}`}
                        >
                            <span className={css.cardLabel}>{card.label}</span>
                            <h3 className={css.cardTitle}>{card.title}</h3>

                            <div className={css.priceRow}>
                                <p className={css.cardPrice}>{card.price}</p>
                                <p className={css.timeline}>
                                    <IconCollection name='clockSmall' />
                                    <span>{card.duration}</span>
                                </p>
                            </div>

                            <ul className={css.featureList}>
                                {card.features.map((feature) => (
                                    <li key={feature}>
                                        <IconCollection name='priCardTick' />
                                        {feature}</li>
                                ))}
                            </ul>
                        </article>
                    ))}
                </div>
            </ContentWidth>
        </section>
    )
}

export default FullCustomMarketplace