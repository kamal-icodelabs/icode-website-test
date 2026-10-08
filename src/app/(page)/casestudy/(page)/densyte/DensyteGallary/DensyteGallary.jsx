import ContentWidth from "@/component/ContentWidth/ContentWidth";
import { motion } from 'motion/react'
import css from './DensyteGallary.module.css'
import Image from "next/image";
import { fadeInDown } from "../../groovebay/animations";
import { fadeAppear, fadeDown, fadeUp } from "../animations";

export function DensyteGallaryOne() {
    return (
        <section className={css.densyteGallaryOne}>
            <ContentWidth>
                <div className={css.gallaryOne}>
                    <div className={css.g1r1}>
                        <motion.div {...fadeInDown} viewport={{ once: true }} className={css.g1r1i1}>
                            <Image width={1400} height={2760} src='/assests/img/casestudy/densyte/Group 1686558818123123.png' alt='' />
                        </motion.div>
                    </div>


                    <div className={css.g1r2}>
                        <motion.div {...fadeAppear} viewport={{ once: true }} className={css.g1r2i1}>
                            {/* width={2000} height={1600} */}
                            <img src='/assests/img/casestudy/densyte/Group 1686558806.png' alt='image' />
                        </motion.div>
                    </div>
                </div>
            </ContentWidth>
        </section>
    );
}

export function DensyteGallaryTwo() {
    return (
        <section className={css.densyteGallaryTwo}>

            <ContentWidth>
                <div className={css.gridLayout}>
                    <div style={{ background: "#DAA520" }} className={css.gridItemOne}>
                        <motion.div {...fadeAppear} viewport={{ once: true }} className={css.g2i1}>
                            <Image src='/assests/img/casestudy/densyte/Group 168655881821312.png' alt='img' width={556} height={639} />
                        </motion.div>
                    </div>

                    <div style={{ background: "#4A6741" }} className={css.gridItemTwo}>
                        <motion.div {...fadeUp} viewport={{ once: true }} className={css.g2i2}>
                            <Image src='/assests/img/casestudy/densyte/screen 7.png' alt='img' width={282} height={590} />
                        </motion.div>
                        <motion.div {...fadeDown} viewport={{ once: true }} className={css.g2i3}>
                            <Image src='/assests/img/casestudy/densyte/screen 5.png' alt='img' width={282} height={590} />
                        </motion.div>
                    </div>

                    <div style={{ background: "#DAA520" }} className={css.gridItemThree}>
                        <motion.div {...fadeAppear} viewport={{ once: true }} className={css.g2i4}>
                            <Image src='/assests/img/casestudy/densyte/image 893.png' alt='img' width={1273} height={710} />
                        </motion.div>
                    </div>
                </div>
            </ContentWidth>
        </section >
    )
}