import IconCollection from '@/component/IconCollection/IconCollection'
import css from './OngoingCosts.module.css'
import ContentWidth from '@/component/ContentWidth/ContentWidth'

const runningCostCards = [
    {
        id: 'sharetribe',
        cardClass: 'sharetribeCard',
        iconText: 'S',
        title: 'Sharetribe Marketplace - Monthly Running Costs',
        items: [
            {
                heading: 'You want to launch in 3-6 weeks',
                text: 'Starts from ~$299/month. Scales with transaction volume and features.'
            },
            {
                heading: 'Stripe fees',
                text: '2.9% + $0.30 per transaction. Standard for all Stripe-based platforms.'
            },
            {
                heading: 'Frontend hosting',
                text: 'Render or similar. ~$20-$50/month for most marketplace volumes.'
            },
            {
                heading: 'Integration subscriptions',
                text: 'Algolia, Cronofy, SendGrid etc. Typically $0-$150/month combined at early stage.'
            }
        ],
        total: 'Typical total: $300-$400/month',
        note: 'at early-stage volume'
    },
    {
        id: 'custom',
        cardClass: 'customCard',
        iconText: 'M',
        title: 'Custom Marketplace - Monthly Running Costs',
        items: [
            {
                heading: 'Cloud hosting (AWS/Azure)',
                text: '$50-$100/month depending on traffic and infrastructure complexity.'
            },
            {
                heading: 'Stripe fees',
                text: 'Same 2.9% + $0.30 per transaction. No platform fee on top.'
            },
            {
                heading: 'Database hosting',
                text: 'Supabase, MongoDB Atlas, or AWS RDS. $0-$100/month at early stage.'
            },
            {
                heading: 'AI / ML / AI costs',
                text: 'Pay-per-use. Minimal at low volume - scales with usage.'
            }
        ],
        total: 'Typical total: $100-$200/month',
        note: 'No Sharetribe subscription - lower long-term overhead at scale'
    }
]

const OngoingCosts = () => {

    return (
        <section className={css.ongoingCostsSection}>
            <ContentWidth>
                <div className={css.sectionHeader}>
                    <span className={css.sectionLabel}>Beyond the Build</span>
                    <h2 className={css.sectionTitle}>What Are the Ongoing Costs After Launch?</h2>
                    <p className={css.sectionInfo}>
                        The build cost is a one-time investment. Here&apos;s what you&apos;ll pay monthly to keep your marketplace running.
                    </p>
                </div>

                <div className={css.cardsContainer}>
                    {runningCostCards.map((card) => (
                        <article key={card.id} className={`${css.costCard} ${css[card.cardClass]}`}>

                            {card.cardClass === 'sharetribeCard' ? (
                                <IconCollection name='shareTribe' />
                            ) : (
                                <IconCollection name='marketplaceStoreIcon' />
                            )}

                            <h3 className={css.cardTitle}>{card.title}</h3>

                            <ul className={css.costList}>
                                {card.items.map((item) => (
                                    <li key={item.heading} className={css.costItem}>
                                        <IconCollection name='priCardTick' />
                                        <div>
                                            <h4 className={css.itemHeading}>{item.heading}</h4>
                                            <p className={css.itemText}>{item.text}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>

                            <div className={css.totalWrap}>
                                <p className={css.totalText}>{card.total}</p>
                                <p className={css.totalNote}>{card.note}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </ContentWidth>
        </section>
    )
}

export default OngoingCosts