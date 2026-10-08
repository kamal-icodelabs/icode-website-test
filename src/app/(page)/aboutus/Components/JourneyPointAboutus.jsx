import ContentWidth from '@/component/ContentWidth/ContentWidth'
import React from 'react'
import css from '../aboutUs.module.css'
import { journeyList } from '@/component/helperData'

const JourneyPointAboutus = () => {
    return (
        <>
            <section className={css.journeyContainer}>
                <ContentWidth className={css.journeyContent}>
                    <div className={css.journeyRow}>
                        <div className={css.journeyHeading}>
                            From Humble
                            <br className={css.journeyPoint} /> Beginnings
                            <br className={css.journeyPoint} /> to an{" "}
                            <span className={css.AI}>AI-First</span>
                            <br className={css.journeyPoint} />{" "}
                            <span className={css.future}>Future.</span>
                        </div>
                        <div className={css.journeyDetail}>
                            <ul>
                                {journeyList.map((item, i) => (
                                    <li key={i}>
                                        <div className={css.stepYear}>{item.years}</div>
                                        <div className={css.stepTitle}>{item.title}</div>
                                        <div className={css.stepDescription}>
                                            {item.description}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </ContentWidth>
            </section>
        </>
    )
}

export default JourneyPointAboutus