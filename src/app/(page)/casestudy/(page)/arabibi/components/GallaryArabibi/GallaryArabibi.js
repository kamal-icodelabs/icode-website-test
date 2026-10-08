"use client";
import Image from "next/image";
import css from "./GallaryArabibi.module.css";
import { motion } from "motion/react";
import { fadeInDown, fadeInUp } from "../../../groovebay/animations";
import { fadeAppear } from "../../../densyte/animations";
import ContentWidth from "@/component/ContentWidth/ContentWidth";

export function ArabibiGallery() {
  return (
    <ContentWidth>
      <div className={css.groovecssContainer}>
        <div style={{ background: "#EEEAE2" }} className={css.g1}>
          <motion.div
            {...fadeInDown}
            viewport={{ once: true }}
            className={css.g1i1}
          >
            <Image
              width={1440}
              height={1080}
              src="/assests/img/casestudy/arabibi/Group 1686558821.png"
              alt="Arabibi hero preview"
            />
          </motion.div>
        </div>

        <div style={{ background: "#EEEAE2" }} className={css.g2}>
          <motion.div
            {...fadeInDown}
            viewport={{ once: true }}
            className={css.g2i1}
          >
            <Image
              width={1274}
              height={1187}
              src="/assests/img/casestudy/arabibi/image 906.png"
              alt="Arabibi feature screens"
            />
          </motion.div>
          <motion.div
            {...fadeInUp}
            viewport={{ once: true }}
            className={css.g2i2}
          >
            <Image
              width={1274}
              height={1187}
              src="/assests/img/casestudy/arabibi/image 907.png"
              alt="Arabibi feature screens"
            />
          </motion.div>
          <motion.div
            {...fadeInDown}
            viewport={{ once: true }}
            className={css.g2i3}
          >
            <Image
              width={1274}
              height={1187}
              src="/assests/img/casestudy/arabibi/image 908.png"
              alt="Arabibi feature screens"
            />
          </motion.div>
          <motion.div
            {...fadeInUp}
            viewport={{ once: true }}
            className={css.g2i4}
          >
            <Image
              width={1274}
              height={1187}
              src="/assests/img/casestudy/arabibi/image 909.png"
              alt="Arabibi feature screens"
            />
          </motion.div>
        </div>

        <div style={{ background: "#EEEAE2" }} className={css.g3}>
          <motion.div
            {...fadeAppear}
            viewport={{ once: true }}
            className={css.g3i1}
          >
            <Image
              fill
              src="/assests/img/casestudy/arabibi/Group 1686558807.png"
              alt="Arabibi platform overview"
            />
          </motion.div>
        </div>
      </div>
    </ContentWidth>
  );
}

export function ArabibiGalleryTwo() {
  const cardBG = "#EEEAE2";
  return (
    <section className={css.arabibiGalleryTwo}>
      <ContentWidth>
        <div style={{ background: cardBG }} className={css.t_r1}>
          <motion.div
            viewport={{ once: true }}
            {...fadeAppear}
            className={css.t_r1_img1}
          >
            <Image
              src="/assests/img/casestudy/arabibi/Group 1686558823.png"
              alt="img"
              fill
            />
          </motion.div>
        </div>
        <div className={css.t_r2} style={{ background: cardBG }}>
          <motion.div
            viewport={{ once: true }}
            {...fadeInDown}
            className={css.t_r2_img1}
          >
            <Image
              src="/assests/img/casestudy/arabibi/image 918.png"
              alt="img"
              width={1200}
              height={1900}
            />
          </motion.div>
        </div>
        <div className={css.t_r3} style={{ background: cardBG }}>
          <motion.div
            viewport={{ once: true }}
            {...fadeInDown}
            className={css.t_r3_img1}
          >
            <Image
              src="/assests/img/casestudy/arabibi/Group 1686558809.png"
              alt="img"
              width={1200}
              height={1900}
            />
          </motion.div>
        </div>
      </ContentWidth>
    </section>
  );
}
