import React from 'react'
import css from './HowOurSharetribeShareTribeExtension.module.css'
import ContentWidth from '@/component/ContentWidth/ContentWidth'
import classNames from 'classnames'
import { HowOurSharetribeShareTribeExtensionData } from '@/component/helperData'

const HowOurSharetribeShareTribeExtension = () => {
    return (
        <section className={css.HowOurSharetribeShareTribeExtension}>
            <ContentWidth>
                <div className={css.ourProcessHeading}>Our Process</div>
                <h2 className={css.sectionTitle}>How Our Feature Extensions Work</h2>
                <p className={css.sectionInfo}>Fixed scope, no surprises. Every module follows the same four-step delivery model.</p>
                <div className={css.cardContainer}>
                    {HowOurSharetribeShareTribeExtensionData.map((i, index) => {
                        return (
                            <>
                                <div className={classNames(css.card, css[`card-${index}`])}>
                                    <span className={css.number}>{i.step}</span>
                                    <h6 className={css.title}>{i.title}</h6>
                                    <p className={css.info}>{i.description}</p>
                                </div>
                            </>
                        )})
                    }
                </div>
            </ContentWidth>
        </section>
    )
}

export default HowOurSharetribeShareTribeExtension

