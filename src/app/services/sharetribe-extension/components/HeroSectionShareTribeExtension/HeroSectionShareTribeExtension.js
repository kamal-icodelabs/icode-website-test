import React from 'react'
import Link from 'next/link'
import IconCollection from "@/component/IconCollection/IconCollection"
import css from './HeroSectionShareTribeExtension.module.css'
import Image from 'next/image'
import classNames from 'classnames'
import ContentWidth from '@/component/ContentWidth/ContentWidth'
import * as helperData from "@/component/helperData"

const { title, subtitle, description, btnText, img, imgWidth, imgHeight, smallDescription } = helperData.sharetribeExtensionHeroData;

const items = [
  "Fixed price before work starts",
  "Safe for live marketplaces",
  "90-day bug guarantee",
  "Sharetribe vetted experts",
];

export default function HeroSectionShareTribeExtension() {
    return (
        <>
            <section className={css.heroSection}>
                <ContentWidth>
                    <div className={css.heroContent}>
                        <p className={css.smallHeading}>Sharetribe Feature Extensions</p>
                        <h1 className={css.title}>{title}</h1>
                        <p className={css.subtitle}>{subtitle}</p>
                        <p className={css.description}>{description}</p>
                        <p className={css.smallDescription}>{smallDescription}</p>
                        <div className={css.coverRowButtons}>
                            <Link href="#features-section" className={classNames(css.gradientButton, 'primaryGradientBtn')}>
                                Browse Feature Modules
                                <IconCollection name={'rightArrowTop'} />
                            </Link>
                            <Link href="#feedback-form" className={classNames(css.featureButton, 'primaryBtn')}>
                                {btnText}
                                <IconCollection name={'rightArrowTop'} />
                            </Link>
                        </div>
                        <div className={css.extensionListWrapper}>
                            <div className={css.strip}>
                                {items.map((text, index) => (
                                    <div key={index} className={css.item}>
                                        <span className={css.icon}>
                                            <IconCollection name="check-icon" />
                                        </span>
                                        <span>{text}</span>

                                        {/* Divider except last */}
                                        {index !== items.length - 1 && (
                                            <span className={css.divider}></span>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className={css.heroImgContainer}>
                        <Image
                            src={img}
                            width={imgWidth}
                            height={imgHeight}
                            alt="Sharetribe feature module catalogue dashboard"
                            priority
                            sizes="(max-width: 768px) 100vw, 1396px"
                        />
                    </div>
                </ContentWidth>
            </section>
        </>
    )
}
