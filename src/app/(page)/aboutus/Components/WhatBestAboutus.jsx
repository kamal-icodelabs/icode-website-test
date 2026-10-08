import React from 'react'
import css from '../aboutUs.module.css'
import IconCollection from '@/component/IconCollection/IconCollection'
import ContentWidth from '@/component/ContentWidth/ContentWidth'

const WhatBestAboutus = () => {
    return (
        <>
            <section className={css.whatBest}>
                <ContentWidth className={css.whatBestSection}>
                    <div className={css.whatBestHeading}>What We Do Best</div>
                    <div className={css.whatBestDescription}>
                        At iCodeLabs, our foundation is built by passionate individuals who
                        are both dreamers and doers.
                    </div>
                    <div className={css.dreamersGrid}>
                        <div className={css.columnCard}>
                            <div className={css.dreamerLeftCard}>
                                <div className={css.gradientCard}>
                                    <div className={css.gradientBox}>
                                        <div className={css.cardIcon}>
                                            <IconCollection name="ai_powered" />
                                        </div>
                                        <div className={css.cardMainHeading}>
                                            AI-Powered Features
                                        </div>
                                        <div className={css.cardCategories}>
                                            <span className={css.normalText}>Listings</span>
                                            <span className={css.dot}>&#x2022;</span>
                                            <span className={css.normalText}>Matching</span>
                                            <span className={css.dot}>&#x2022;</span>
                                            <span className={css.normalText}>Smart</span>
                                            <span className={css.dot}>&#x2022;</span>
                                            <span className={css.normalText}>Search</span>
                                        </div>
                                    </div>
                                </div>
                                <div className={css.gradientCard}>
                                    <div className={css.gradientBox}>
                                        <div className={css.cardIcon}>
                                            <IconCollection name="ui_ux" />
                                        </div>
                                        <div className={css.cardMainHeading}>UI/UX Design</div>
                                        <div className={css.cardCategories}>
                                            <span className={css.miniBold}>
                                                Branding, and Product Strategy
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={css.centerCard}>
                                <div className={css.cardIcon}>
                                    <IconCollection name="sharetrie" />
                                </div>
                                <div className={css.cardMainHeading}>
                                    Custom Sharetribe
                                    <br /> Marketplaces <br />
                                    (Mobile & Web
                                    <br /> Templates)
                                </div>
                            </div>
                            <div className={css.dreamerRightCard}>
                                <div className={css.gradientCard}>
                                    <div className={css.gradientBox}>
                                        <div className={css.cardIcon}>
                                            <IconCollection name="full_stack" />
                                        </div>
                                        <div className={css.cardMainHeading}>
                                            Full-Stack Custom Web & Mobile Apps
                                        </div>
                                        <div className={css.cardCategories}>
                                            <span className={css.normalText}>React</span>
                                            <span className={css.dot}>&#x2022;</span>
                                            <span className={css.normalText}>Node.js</span>
                                            <span className={css.dot}>&#x2022;</span>
                                            <span className={css.normalText}>Next.js</span>
                                            <span className={css.dot}>&#x2022;</span>
                                            <span className={css.normalText}>Flutter</span>
                                        </div>
                                    </div>
                                </div>
                                <div className={css.gradientCard}>
                                    <div className={css.gradientBox}>
                                        <div className={css.cardIcon}>
                                            <IconCollection name="product_build" />
                                        </div>
                                        <div className={css.cardMainHeading}>
                                            Rapid MVPs{" "}
                                            <span className={css.grayColor}>
                                                and scalable product builds
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </ContentWidth>
            </section>
        </>
    )
}

export default WhatBestAboutus