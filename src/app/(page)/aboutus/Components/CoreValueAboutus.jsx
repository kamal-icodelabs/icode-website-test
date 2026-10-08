import React from 'react'
import css from '../aboutUs.module.css'
import ContentWidth from '@/component/ContentWidth/ContentWidth'
import { strengthList } from '@/component/helperData'
import Link from 'next/link'
import AboutUsAccordion from './AboutUsAccordion/AboutUsAccordion'
import OurProcess from './AboutUsAccordion/Our Process/OurProcess'
import Image from 'next/image'
import { PrimaryBtn, PrimaryBtnLink } from '@/component/Animations/CTAbutton'

const CoreValueAboutus = () => {
    return (
        <>
            <section className={css.strengthWrapper}>
                <ContentWidth className={css.strengthContainer}>
                    <div className={css.coreValue}>
                        <div className={css.coreValueHeading}>
                            <div className={css.coretitle}>Our Core Strengths</div>
                            <p className={css.info}>
                                Guided by innovation and fueled by experience, our team goes
                                beyond code to craft scalable, future-ready solutions — helping
                                clients grow with confidence.
                            </p>
                        </div>
                        <div className={css.rightColumn}>
                            <div className={`${css.hideContentMobile} ${css.strengthList}`}>
                                {strengthList.map((item, i) => (
                                    <div key={i} className={css.strengthCard}>
                                        <div className={css.checkIcon}>
                                            <Image
                                                src={item.coreIcon}
                                                alt={item.title}
                                                loading="lazy"
                                            />
                                        </div>
                                        <div className={css.strengthListContent}>
                                            <div className={css.strengthListWrapper}>
                                                <div className={css.title}>{item.title}</div>
                                                <span className="subTitle">{item.description}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                <div className={`${css.strengthCard} ${css.extraOrdinaryCard}`}>
                                    <div className={css.strengthListContent}>
                                        <h3 className={css.extraOrdinaryTitle}>
                                            You're in good hands; our work delivers real results
                                        </h3>
                                        <PrimaryBtnLink
                                            href="/contact"
                                            className={css.extraOrdinaryButton}
                                        >
                                            Say Hello👋
                                        </PrimaryBtnLink>
                                    </div>
                                </div>
                            </div>
                            <AboutUsAccordion data={strengthList} />
                            <div
                                className={`${css.strengthCard} ${css.extraOrdinaryCard} ${css.lastCardHideDesktop}`}
                            >
                                <div className={css.strengthListContent}>
                                    <h3 className={css.extraOrdinaryTitle}>
                                        You're in good hands; our work delivers real results
                                    </h3>
                                    <PrimaryBtnLink
                                        href="/contact"
                                        className={css.extraOrdinaryButton}
                                    >
                                        Say Hello👋
                                    </PrimaryBtnLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </ContentWidth>

                <div>
                    <OurProcess />
                </div>

            </section>


        </>
    )
}

export default CoreValueAboutus