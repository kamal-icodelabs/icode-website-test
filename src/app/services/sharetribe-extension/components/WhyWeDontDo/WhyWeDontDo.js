import React from 'react'
import css from './WhyWeDontDo.module.css'
import Link from 'next/link'
import IconCollection from '@/component/IconCollection/IconCollection'
import ContentWidth from '@/component/ContentWidth/ContentWidth'
import classNames from 'classnames'
import * as helperData from "@/component/helperData"
import { PrimaryBtn } from '@/component/Animations/CTAbutton'

const { sharetribeWhyWeDontDoData } = helperData;

const WhyWeDontDo = () => {
    return (
        <section className={css.WhyWeDontDo}>
            <ContentWidth>
                <div className={css.flexBoxContainer}>

                    <div className={css.leftContainer}>
                        <h2 className={css.sectionTitle}>
                            {sharetribeWhyWeDontDoData.sectionTitle}
                        </h2>
                        <p className={css.sectionInfo}>{sharetribeWhyWeDontDoData.sectionInfo}</p>

                        <div className={css.ptContainer}>
                            <p className={css.ptContainerHeading}> {sharetribeWhyWeDontDoData.ptContainerHeading}</p>
                            <ul>
                                {sharetribeWhyWeDontDoData.protectionPoints.map((point, index) => (
                                    <li key={index}>{point}</li>
                                ))}
                            </ul>

                            <div className={css.btnNicon}>
                                <PrimaryBtn href={'/services/sharetribe'}>{sharetribeWhyWeDontDoData.buttonText} <IconCollection name={'rightArrowTop'} /></PrimaryBtn>
                                <div className={css.curleArrow}>
                                    {curleArrow}
                                </div>
                            </div>
                        </div>


                    </div>

                    <div className={css.rightContainer}>
                        <div className={css.OpenEnded}>
                            <p className={css.title}>{sharetribeWhyWeDontDoData.openEndedCustom.title}</p>
                            <ul className={css.pt}>
                                {sharetribeWhyWeDontDoData.openEndedCustom.points.map((point, index) => (
                                    <li key={index}>{point}</li>
                                ))}
                            </ul>
                        </div>

                        <div className={css.fixedScope}>
                            <p className={css.title}>{sharetribeWhyWeDontDoData.fixedScopeModules.title}</p>
                            <ul className={css.pt}>
                                {sharetribeWhyWeDontDoData.fixedScopeModules.points.map((point, index) => (
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

export default WhyWeDontDo


const curleArrow = [
    <svg width="147" height="142" viewBox="0 0 147 142" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_14335_747)">
            <path d="M2.86064 62.2427C14.3394 38.1995 34.617 18.7568 59.3874 8.59645C82.0492 -0.699344 112.128 -1.69435 122.611 24.8875C126.748 35.38 126.658 47.5667 123.053 58.1941C120.361 66.131 112.257 78.9392 101.984 72.6342C92.256 66.6644 98.3064 52.6546 105.786 47.8684C115.495 41.6569 128.068 45.9627 135.143 54.1146C144.922 65.3815 145.239 82.6335 141.715 96.3806C137.962 111.012 129.074 124.11 116.753 132.913C114.363 134.62 111.993 130.885 114.28 129.14C130.933 116.428 141.477 95.3794 138.708 74.2441C137.184 62.6043 129.867 49.4368 116.567 48.9885C110.811 48.7949 105.276 51.8597 102.573 56.9716C100.94 60.0596 100.303 64.0511 102.338 67.0971C105.405 71.6896 110.9 70.1994 114.165 66.7021C120.487 59.9295 122.192 48.0562 121.707 39.212C121.206 30.0857 117.993 20.8327 111.362 14.3225C95.2848 -1.45713 68.3568 6.90681 51.0036 15.9307C30.9527 26.3582 14.7262 43.0399 4.7363 63.214C4.13305 64.4317 2.27671 63.4664 2.86064 62.2427Z" fill="white" />
            <path d="M117.23 109.497C117.368 109.46 117.508 109.424 117.646 109.387C118.18 109.249 118.911 109.389 119.195 109.928C122.782 116.719 116.237 126.496 116.15 133.57C115.201 132.921 114.253 132.272 113.303 131.623C119.325 129.231 127.366 125.23 133.949 125.747C135.458 125.866 136.526 127.864 134.949 128.816C132.057 130.56 128.636 131.02 125.413 131.99C121.774 133.086 118.202 134.352 114.661 135.729C112.973 136.385 111.687 134.716 111.862 133.205C112.286 129.553 113.393 126.201 114.617 122.749C115.118 121.337 118.531 112.549 117.059 111.598C116.301 111.109 116.188 109.767 117.23 109.494L117.23 109.497Z" fill="white" />
        </g>
        <defs>
            <clipPath id="clip0_14335_747">
                <rect width="134.441" height="140.042" fill="white" transform="matrix(0.0491487 0.998792 0.998792 -0.0491487 0 6.8829)" />
            </clipPath>
        </defs>
    </svg>
]