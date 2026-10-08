import React from 'react'
import css from './WeProvideShareTribeExtension.module.css'
import ContentWidth from '@/component/ContentWidth/ContentWidth'
import Link from 'next/link'
import IconCollection from '@/component/IconCollection/IconCollection'
import classNames from 'classnames'
import Image from 'next/image'
import * as helperData from "@/component/helperData"

const { sharetribeFeatureModules } = helperData;

const WeProvideShareTribeExtension = () => {
    return (
        <section className={css.weProvideShareTribeExtension}>
            <ContentWidth>

                <h2 className={css.sectionTitle}>We Deliver Sharetribe <span className={css.featureModules}>Feature Modules</span> with:</h2>
                <div className={css.cardContainer}>
                    {
                        sharetribeFeatureModules.map((i, index) => {
                            return (
                                <React.Fragment key={index}>
                                    <div className={classNames(css.card, css[`card-${index}`])}>
                                        <div className={css.cardIcon}>
                                            <Image quality={100} src={i.icon} width={80} height={80} />
                                        </div>

                                        <div className={css.cardContent}>
                                            <h4 className={css.cardTitle}>
                                                {i.title}
                                            </h4>

                                            <p>{i.description}</p>
                                        </div>

                                    </div>
                                </React.Fragment>
                            )
                        })
                    }
                </div>

                <p className={css.infoText}>No open-ended development. No surprise costs.</p>
                <Link className={classNames(css.redirectBtn)} href='/services/sharetribe'>Starting from scratch? {sharetribeNextArrow} View Sharetribe Launch Packages</Link>
            </ContentWidth>
        </section >
    )
}

export default WeProvideShareTribeExtension


const sharetribeNextArrow = [
    <svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.39205 18.2102L7.36932 17.1989L10.9205 13.6477H2V12.1705H10.9205L7.36932 8.625L8.39205 7.60795L13.6932 12.9091L8.39205 18.2102Z" fill="#1B1B1B" />
    </svg>
];
