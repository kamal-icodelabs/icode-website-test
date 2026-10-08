import React from 'react'
import css from '../aboutUs.module.css'

const HeroBannerAboutus = () => {
    return (
        <>
            <div className={css.banner}>
                <h1 className={css.bannerTitle}>
                    About iCodelabs —{" "}
                    <span className={css.bannerTitleBox}>Marketplace, Web & AI</span>{" "}
                    Engineering Studio
                </h1>
                <p className={css.bannerSubtitle}>
                    At iCodeLabs, our 50+ experts work as an extension of your
                    team—building marketplaces, apps, and AI-powered platforms that
                    deliver results.
                </p>
            </div>

        </>
    )
}

export default HeroBannerAboutus