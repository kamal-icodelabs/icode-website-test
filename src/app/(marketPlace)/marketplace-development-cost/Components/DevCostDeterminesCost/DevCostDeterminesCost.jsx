import ContentWidth from '@/component/ContentWidth/ContentWidth'
import css from './DevCostDeterminesCost.module.css'
import IconCollection from '@/component/IconCollection/IconCollection'


const DevCostDeterminesCost = () => {
    return (
        <>
            <section className={css.DevCostDeterminesCostSection}>
                <ContentWidth>

                    <div className={css.sectionHeading}>
                        <span className={css.sectionLabel}>Cost Factors</span>
                        <h2 className={css.sectionTitle}>What Determines the Cost of Your Marketplace?</h2>
                        <p className={css.sectionInfo}>Five factors drive most of the price difference between a $3k build and a $30k build. Understanding these helps you scope realistically before you talk to any agency.</p>

                    </div>


                    <div className={css.cardWrapper}>
                        {
                            data.map((i, indxe) => {
                                return (
                                    <div key={indxe} className={css.card}>
                                        <div className={css.cardIcon}>
                                            <IconCollection name={i.icon} />
                                        </div>

                                        <div className={css.cardContent}>
                                            <h3 className={css.cardTitle}>{i.title}</h3>
                                            <p className={css.cardInfo}>{i.info}</p>
                                            <div className={css.cardStats}>
                                                <span className={css.sameText}>Impact: {' '}</span>
                                                <p className={css.stats}>{i.stats}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>


                </ContentWidth>
            </section>

        </>
    )
}

export default DevCostDeterminesCost

const data = [
    {
        "icon": "layers",
        "title": "Platform Choice",
        "info": "Sharetribe gives you a managed backend and proven marketplace infrastructure — dramatically reducing build cost. A fully custom stack costs more upfront but gives unlimited control.",
        "stats": "Impact: 3–5x cost difference."
    },
    {
        "icon": "refresh-cw",
        "title": "Transaction Complexity",
        "info": "A simple 'list and pay' flow is cheap. Multi-step booking with deposits, cancellation windows, damage fees, escrow, and auto-payout logic is expensive. The more unique your transaction model, the higher the cost.",
        "stats": "Impact: +$2K–$8K per complex flow."
    },
    {
        "icon": "mobileCode",
        "title": "Web vs Web + Mobile",
        "info": "A web-only marketplace is the baseline. Adding a React Native mobile app (iOS + Android) adds significant scope. Mobile is worth it when your users are on the go — rental, gig, and booking platforms almost always need it.",
        "stats": "Impact: +$3K–$8K for mobile."
    },
    {
        "icon": "puzzle",
        "title": "Third-Party Integrations",
        "info": "Each integration (Algolia search, Cronofy calendar sync, Shippo shipping, Twilio SMS, ID verification, Agora video) adds scope. One or two integrations are fine. Five or six start to significantly affect timeline and cost.",
        "stats": "Impact: 3–5x cost difference."
    },
    {
        "icon": "bot",
        "title": "AI Features",
        "info": "AI listing generators, smart matching, semantic search, automated moderation, and dynamic pricing are available on Enterprise tier and custom builders. These require OpenAI API setup, prompt engineering, and testing.",
        "stats": "Impact: +$2K–$6K depending on scope."
    },
    {
        "icon": "monitor",
        "title": "Custom Design vs Template",
        "info": "Starting from the Sharetribe Web Template with branded styling costs less than a fully bespoke Figma design system. If your brand requires pixel-perfect custom UI, budget for a dedicated design phase.",
        "stats": "Impact: +$1K–$4K for full custom design."
    }
]