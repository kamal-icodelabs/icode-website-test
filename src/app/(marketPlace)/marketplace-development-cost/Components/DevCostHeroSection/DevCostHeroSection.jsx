import React from 'react'
import Link from 'next/link'
import ContentWidth from '@/component/ContentWidth/ContentWidth'
import Image from 'next/image'
import css from './DevCostHeroSection.module.css'
import IconCollection from '@/component/IconCollection/IconCollection'

export default function DevCostHeroSection() {
    return (
        <section className={css.devCostHeroSection}>

            <ContentWidth>
                <div className={css.heroWrapper}>
                    <div className={css.contentWrapper}>
                        <span className={css.span}>Marketplace Development Cost</span>

                        <h1 className={css.title}>How Much Does It Cost to Build a Marketplace in 2026?</h1>
                        <p className={css.info}>Real pricing, real timelines, no fluff. Based on 50+ marketplace builds across rental, service, product, and booking platforms. Whether you're using Sharetribe or building fully custom — here's exactly what to expect.</p>

                        <div className={css.btnContainer}>
                            <Link href="/contact" className={css.priBtn}>Get a Fixed-Price Quote <IconCollection name='rightArrowTop' /></Link>
                            <Link href="#pricing-tiers" className={css.secBtn}>Jump to Pricing Tiers <IconCollection name='rightArrowTop' /></Link>
                        </div>
                    </div>


                    <div className={css.imgWrapper}>


                        <div className={css.mainImg}>
                            <Image quality={100} src='/assests/img/marketplace/devCost/herosectiondevcost.png' width={648} height={572} alt='girl looking into laptop screen' /> </div>


                    </div>
                </div>
            </ContentWidth>
        </section>
    )
}