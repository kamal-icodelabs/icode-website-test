'use client';

import css from './GrooveBayGallary.module.css'
import Image from 'next/image'
import { motion } from "motion/react"
import ContentWidth from '@/component/ContentWidth/ContentWidth'
import { fadeInDown, fadeInUp } from '../../animations';


export function GrooveBayGallary() {
    return (
        <>
            <section className={css.grooveBayGallary}>
                <ContentWidth>
                    <div className={css.gallaryContainer}>

                        <div className={css.row1}>
                            <motion.div {...fadeInUp} style={{ width: '100%' }} viewport={{ once: true }}>
                                <Image src='/assests/img/casestudy/groove/image 930.png' alt="img" className={css.r1img1} width={633} height={819} />
                            </motion.div>
                            <div style={{ width: '100%' }}>
                                <div className={css.row1Child}>
                                    <motion.div {...fadeInDown} viewport={{ once: true }} style={{ width: "100%" }}>
                                        <Image src='/assests/img/casestudy/groove/image 931.png' alt="img" className={css.r1img2} width={634} height={592} />
                                    </motion.div>

                                    <motion.div {...fadeInUp} viewport={{ once: true }} style={{ width: "100%" }}>
                                        <Image src='/assests/img/casestudy/groove/image 932.png' alt="img" className={css.r1img3} width={634} height={592} />
                                    </motion.div>
                                </div>
                            </div>
                        </div>

                        <div className={css.row2}>
                            <motion.div {...fadeInUp} style={{ width: '100%' }} viewport={{ once: true }}>
                                <Image src='/assests/img/casestudy/groove/image 933.png' alt="img" className={css.r2img1} width={1440} height={1080} />
                            </motion.div>
                        </div>
                    </div>
                </ContentWidth>
            </section>
        </>
    )
}



export function GrooveBayGallaryMobile() {
    return (
        <>
            <ContentWidth>
                <div className={css.GrooveBayGallaryMobile}>

                    <div className={css.gridContainer}>
                        <div className={css.gridOne}>
                            <motion.div viewport={{ once: true }}>
                                <Image src='/assests/img/casestudy/groove/Group 1686558818772.png' alt='img' width={1440} height={4096} />
                            </motion.div>
                        </div>

                        <div className={css.combineGrid}>
                            <div className={css.gridTwo}>
                                <motion.div {...fadeInDown} viewport={{ once: true }} className={css.mobileImg_1}>
                                    <Image src='/assests/img/casestudy/groove/screen 1.png' alt='img' width={312} height={651} />
                                </motion.div>

                                <motion.div {...fadeInUp} viewport={{ once: true }} className={css.mobileImg_2}>
                                    <Image src='/assests/img/casestudy/groove/screen 2.png' alt='img' width={312} height={651} />
                                </motion.div>
                            </div>

                            <div className={css.gridThree}>
                                <motion.div {...fadeInUp} viewport={{ once: true }} className={css.mobileImg_3}>
                                    <Image src='/assests/img/casestudy/groove/Group 168655881867236.png' alt='img' width={600} height={705} />
                                </motion.div>
                            </div>
                        </div>
                    </div>


                </div>
            </ContentWidth>
        </>
    )
}