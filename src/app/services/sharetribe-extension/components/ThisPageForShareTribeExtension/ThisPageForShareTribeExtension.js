'use client'
import React from 'react'
import css from './ThisPageForShareTribeExtension.module.css'
import ContentWidth from '@/component/ContentWidth/ContentWidth'
import Link from 'next/link'
import classNames from 'classnames'
import * as helperData from "@/component/helperData"
import { PrimaryBtn } from '@/component/Animations/CTAbutton'
import IconCollection from '@/component/IconCollection/IconCollection'

const { sharetribeThisPageData } = helperData;

const ThisPageForShareTribeExtension = () => {
    const handleScrollToFeatures = (e) => {
        e.preventDefault();
        const element = document.getElementById("features-section");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section className={css.ThisPageForShareTribeExtensionSection}>
            <ContentWidth>
                <div>
                    <h2 className={css.cardSectionTitle}>
                        {sharetribeThisPageData.cardSectionTitle}
                    </h2>
                    <div className={css.cardContainer}>
                        <div className={css.notFitCard}>
                            <h3 className={css.cardTitle}>
                                {sharetribeRedCross}
                                {sharetribeThisPageData.notFitCard.title}
                            </h3>
                            <ul className={css.cardPoints}>
                                {sharetribeThisPageData.notFitCard.points.map((point, index) => (
                                    <li key={index}>{point}</li>
                                ))}
                            </ul>
                        </div>
                        <div className={css.goodFitCard}>
                            <h3 className={css.cardTitle}>{sharetribeGreenCheck} {sharetribeThisPageData.goodFitCard.title}</h3>
                            <ul className={css.cardPointCheck}>
                                {sharetribeThisPageData.goodFitCard.points.map((point, index) => (
                                    <li key={index}>{point}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </ContentWidth>
        </section>
    )
}

export default ThisPageForShareTribeExtension


export const sharetribeDownArrow = [
    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.06956 0.999244L8.06956 15.1414" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M15.1406 8.07031L8.06956 15.1414L0.99849 8.07031" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
];



export const sharetribeRedCross = [
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_498_339)">
            <path d="M26.5624 0H3.43758C1.54129 0 0 1.54129 0 3.43758V26.5624C0 28.4587 1.54129 30 3.43758 30H26.5624C28.4587 30 30 28.4587 30 26.5624V3.43758C30 1.54129 28.4587 0 26.5624 0Z" fill="#F44336" />
            <path d="M20.5235 18.7559C21.0122 19.2448 21.0122 20.036 20.5235 20.5235C20.2798 20.7673 19.9598 20.8898 19.6396 20.8898C19.3196 20.8898 18.9996 20.7673 18.7559 20.5235L14.9997 16.7671L11.2435 20.5235C10.9998 20.7673 10.6798 20.8898 10.3598 20.8898C10.0396 20.8898 9.71963 20.7673 9.47587 20.5235C8.98721 20.036 8.98721 19.2448 9.47587 18.7559L13.2323 14.9997L9.47587 11.2435C8.98721 10.7546 8.98721 9.96339 9.47587 9.47587C9.96476 8.98721 10.7546 8.98721 11.2435 9.47587L14.9997 13.2323L18.7559 9.47587C19.2448 8.98721 20.0346 8.98721 20.5235 9.47587C21.0122 9.96339 21.0122 10.7546 20.5235 11.2435L16.7671 14.9997L20.5235 18.7559Z" fill="#FAFAFA" />
        </g>
        <defs>
            <clipPath id="clip0_498_339">
                <rect width="30" height="30" fill="white" />
            </clipPath>
        </defs>
    </svg>
];

export const sharetribeGreenCheck = [
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_14335_733)">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M4.40094 0H25.601C28.0244 0 30.001 1.97657 30.001 4.39996V25.6C30.001 28.0234 28.0244 30 25.601 30H4.40094C1.97755 30 0.000976562 28.0234 0.000976562 25.6V4.39996C0.000976562 1.97657 1.97755 0 4.40094 0Z" fill="#48B02C" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.3533 19.2099L21.9254 8.638C22.2368 8.32643 22.7482 8.32962 23.0566 8.638L24.0773 9.65871C24.3857 9.9671 24.3857 10.4817 24.0773 10.79L13.5054 21.362C13.197 21.6704 12.6856 21.6736 12.374 21.362L11.3533 20.3413C11.0417 20.0297 11.0417 19.5215 11.3533 19.2099Z" fill="white" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.0596 12.7656L14.4996 19.2055C14.811 19.5171 14.8074 20.0291 14.4996 20.3369L13.4789 21.3576C13.1711 21.6653 12.6553 21.6653 12.3475 21.3576L5.90751 14.9177C5.59972 14.6099 5.59606 14.0979 5.90751 13.7863L6.92822 12.7656C7.2398 12.4541 7.74803 12.4541 8.0596 12.7656Z" fill="white" />
        </g>
        <defs>
            <clipPath id="clip0_14335_733">
                <rect width="30" height="30" fill="white" />
            </clipPath>
        </defs>
    </svg>
];
