import ContentWidth from "@/component/ContentWidth/ContentWidth";
import { motion } from 'motion/react'
import css from './DirezioneGallary.module.css'
import Image from "next/image";
import { fadeInDown } from "../../groovebay/animations";
import { fadeAppear, fadeDown, fadeUp } from "../page";

export function DirezioneGallaryOne() {
    return (
        <section className={css.direzioneGallaryOne}>
            <ContentWidth>
                <div className={css.gallaryOne}>
                    <div className={css.g1r1}>
                        <motion.div {...fadeInDown} viewport={{ once: true }} className={css.g1r1i1}>
                            <Image width={1400} height={2760} src='/assests/img/casestudy/direzione/gallary-one-1.png' alt='' />
                        </motion.div>
                    </div>


                    <div className={css.g1r2}>
                        <motion.div {...fadeAppear} viewport={{ once: true }} className={css.g1r2i1}>
                            <img src='/assests/img/casestudy/direzione/gallary-one-2.png' alt='image' />
                        </motion.div>
                    </div>
                </div>
            </ContentWidth>
        </section>
    );
}

export function DirezioneGallaryTwo() {
    return (
        <section className={css.direzioneGallaryTwo}>

            <ContentWidth>
                <div className={css.gridLayout}>
                    <div style={{ background: "#C9A24A" }} className={css.gridItemOne}>
                        <motion.div {...fadeAppear} viewport={{ once: true }} className={css.g2i1}>
                            <Image src='/assests/img/casestudy/direzione/gallary-two-1.png' alt='img' width={556} height={639} />
                        </motion.div>
                    </div>

                    <div style={{ background: "#0E0E0E" }} className={css.gridItemTwo}>
                        <motion.div {...fadeUp} viewport={{ once: true }} className={css.g2i2}>
                            <Image src='/assests/img/casestudy/direzione/gallary-two-2.png' alt='img' width={282} height={590} />
                        </motion.div>
                        <motion.div {...fadeDown} viewport={{ once: true }} className={css.g2i3}>
                            <Image src='/assests/img/casestudy/direzione/gallary-two-3.png' alt='img' width={282} height={590} />
                        </motion.div>
                    </div>

                    <div style={{ background: "#C9A24A" }} className={css.gridItemThree}>
                        <motion.div {...fadeAppear} viewport={{ once: true }} className={css.g2i4}>
                            <Image src='/assests/img/casestudy/direzione/gallary-two-4.png' alt='img' width={1273} height={710} />
                        </motion.div>
                    </div>
                </div>
            </ContentWidth>
        </section >
    )
}
