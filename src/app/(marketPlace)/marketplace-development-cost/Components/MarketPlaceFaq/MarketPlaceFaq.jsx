'use client';

import React, { useState } from 'react'
import ContentWidth from '@/component/ContentWidth/ContentWidth'
import css from './MarketPlaceFaq.module.css'
import IconCollection from '@/component/IconCollection/IconCollection'
import { marketplaceCostFAQs as faqData } from '../../faqData'

const MarketPlaceFaq = () => {
    const [activeIndex, setActiveIndex] = useState(null)

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index)
    }

    return (
        <>
            <section className={css.marketPlaceFaqSection}>
                <ContentWidth>
                    <div className={css.sectionHeading}>
                        <span className={css.sectionLabel}>🚀 FAQs</span>
                        <h2 className={css.sectionTitle}>Common Questions on Marketplace Cost</h2>
                        <p className={css.sectionDescription}>
                            Get answers to frequently asked questions about marketplace development costs, timelines, and technical considerations.
                        </p>
                    </div>

                    <div className={css.faqContainer}>
                        {
                            faqData.map((item, idx) => {
                                const isActive = activeIndex === idx
                                return (
                                    <div key={idx} className={`${css.faqQuestBox} ${isActive ? css.active : ''}`}>
                                        <h3
                                            className={css.question}
                                            onClick={() => toggleFAQ(idx)}
                                        >
                                            <span>{item.question}</span>
                                            <div className={`${css.accordionIcon} ${isActive ? css.rotated : ''}`}>
                                                <IconCollection name={isActive ? "circleMinus" : "circlePlus"} />
                                            </div>
                                        </h3>

                                        <div className={`${css.faqAnswer} ${isActive ? css.expanded : ''}`}>
                                            <p>
                                                {item.answer}
                                            </p>
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

export default MarketPlaceFaq