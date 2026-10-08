import React from 'react'
import css from './OtherVertical.module.css'
import ContentWidth from '@/component/ContentWidth/ContentWidth'
import { ServiceMarketplaceCard } from '@/component/CommonComponents/ServiceMarketplaceCard/ServiceMarketplaceCard'

const OtherVertical = ({ data }) => {
    const { section } = data
    return (
        <section className={css.section}>
            <ContentWidth>
                <div className={css.sectionHeading}>
                    <span className={css.sectionLabel}>{section.label}</span>
                    <h2 className={css.sectionTitle}>{section.title}</h2>
                </div>

                <div>
                    <ServiceMarketplaceCard />
                </div>
            </ContentWidth>
        </section>
    )
}

export default OtherVertical