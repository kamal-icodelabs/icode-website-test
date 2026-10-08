import css from './RealisticDeliveryTimelines.module.css'
import ContentWidth from '@/component/ContentWidth/ContentWidth'


const RealisticDeliveryTimelines = () => {
    const timelineColumns = [
        {
            id: 'sharetribe',
            title: 'Sharetribe Build - Starter Tier (~3 weeks)',
            items: [
                {
                    heading: 'Week 1 - Setup & Config',
                    description: 'Sharetribe environment, listing types, commission rules, Stripe Connect, basic branding applied.',
                    dotClass: 'dotBlue',
                },
                {
                    heading: 'Week 2 - UI & Integration',
                    description: 'Frontend styling, search filters, email templates, payment flow testing.',
                    dotClass: 'dotBlue',
                },
                {
                    heading: 'Week 3 - QA & Launch',
                    description: 'Cross-device testing, production deployment, SEO setup, handover and documentation.',
                    dotClass: 'dotGreen',
                },
            ],
        },
        {
            id: 'custom',
            title: 'Custom Build - Full Platform (~14 weeks)',
            items: [
                {
                    heading: 'Weeks 1-2 - Discovery & Architecture',
                    description: 'Scoping, tech architecture, database schema, fixed-price proposal sign-off.',
                    dotClass: 'dotBlue',
                },
                {
                    heading: 'Weeks 3-4 - Design',
                    description: 'Figma UI/UX design, component system, design review and sign-off.',
                    dotClass: 'dotBlue',
                },
                {
                    heading: 'Weeks 5-12 - Development Sprints',
                    description: '2-week agile sprints with demo at end of each. You see progress weekly.',
                    dotClass: 'dotBlue',
                },
                {
                    heading: 'Weeks 13-14 - QA & Launch',
                    description: 'Comprehensive testing, payment flow validation, production deployment.',
                    dotClass: 'dotGreen',
                },
            ],
        },
    ]

    return (
        <section className={css.realisticDeliveryTimelinesSection}>
            <ContentWidth>
                <div className={css.sectionHeader}>
                    <span className={css.sectionLabel}>Timeline</span>
                    <h2 className={css.sectionTitle}>Realistic Delivery Timelines</h2>
                    <p className={css.sectionInfo}>
                        What each phase involves and how long it takes. Most delays come from scope changes, late design feedback, or integrations requiring 3rd-party account setup.
                    </p>
                </div>

                <div className={css.timelineColumns}>
                    {timelineColumns.map((column) => (
                        <article key={column.id} className={css.timelineColumn}>
                            <h3 className={css.columnTitle}>{column.title}</h3>

                            <ul className={css.timelineList}>
                                {column.items.map((item) => (
                                    <li key={item.heading} className={css.timelineItem}>
                                        <span className={`${css.timelineDot} ${css[item.dotClass]}`} aria-hidden='true' />
                                        <div className={css.itemContent}>
                                            <h4 className={css.itemHeading}>{item.heading}</h4>
                                            <p className={css.itemDescription}>{item.description}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </article>
                    ))}
                </div>
            </ContentWidth>
        </section>
    )
}

export default RealisticDeliveryTimelines