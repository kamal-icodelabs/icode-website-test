import ContentWidth from '@/component/ContentWidth/ContentWidth'
import { achievementsList, professionalsList } from '@/component/helperData'
import IconCollection from '@/component/IconCollection/IconCollection'
import Link from 'next/link'
import React from 'react'
import css from '../aboutUs.module.css'
import { PrimaryBtnLink } from '@/component/Animations/CTAbutton'

const ProfessionalAboutus = () => {
    return (
        <div>
            <section>
                <ContentWidth className={css.aboutSection}>
                    <div className={css.professionalsWrapper}>
                        <div className={css.professionalsList}>
                            {professionalsList?.map((item, i) => (
                                <div className={css.professionalsCard} key={i}>
                                    <div className={css.listTitle}>{item.listTitle}</div>

                                    <div className={css.professionalsDetail}>
                                        {item?.professionalsDetail?.map((detail, j) => (
                                            <div key={j} className={css.professionalsDescription}>
                                                <h2 className={css.professionalsDetailTitle}>
                                                    {item?.secondaryTitle}
                                                </h2>
                                                <p>{detail.detail}</p>
                                                {detail.detail2 && <p>{detail.detail2}</p>}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}

                            {/* <div className={css.CTABtn}> */}
                                <PrimaryBtnLink className={css.ctaBtn} href="https://calendly.com/jaytiwary">
                                    Book a Free Call <IconCollection name="rightArrowTop" />
                                </PrimaryBtnLink>
                            {/* </div> */}
                        </div>

                        <div className={css.achievementsList}>
                            <div className={css.achievementsDetail}>
                                {achievementsList?.map((item, i) => (
                                    <div className={css.achievementsCountData} key={i}>
                                        <div className={css.title}>{item.title}</div>
                                        <div className={css.description}>{item.description}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </ContentWidth>
            </section>

        </div>
    )
}

export default ProfessionalAboutus