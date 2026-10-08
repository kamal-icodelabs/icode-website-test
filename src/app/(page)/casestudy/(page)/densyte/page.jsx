"use client";

import Image from "next/image";
import { motion } from "motion/react";
import CaseStudyTemplate from "@/component/CasestudyComponents/CaseStudyTemplate";
import * as data from "@/data/casestudy/densyte";
import gallary from "@/component/CasestudyComponents/CaseStudyGallaryLayout/CaseStudyGallaryLayout.module.css";
import {
  DensyteGallaryOne,
  DensyteGallaryTwo,
} from "./DensyteGallary/DensyteGallary";
import { fadeDown, fadeUp } from "./animations";

const THEME_COLOR = "#4A6741";

function DensyteGallaryLayout() {
  return (
    <div>
      <div className={gallary.densyteGallaryLayout}>
        <div style={{ background: THEME_COLOR }} className={gallary.d_r1}>
          <motion.div viewport={{ once: true }} className={gallary.d_r1i1}>
            <Image
              src="/assests/img/casestudy/densyte/Group 1686558818 (1).png"
              alt="img"
              width={1440}
              height={4096}
            />
          </motion.div>
        </div>

        <div style={{ background: THEME_COLOR }} className={gallary.d_r2}>
          <motion.div
            {...fadeUp}
            viewport={{ once: true }}
            className={gallary.d_r2i1}
          >
            <Image
              src="/assests/img/casestudy/densyte/densyte.com_p_how-it-work 1.png"
              alt="img"
              width={290}
              height={1024}
            />
          </motion.div>
          <motion.div
            {...fadeDown}
            viewport={{ once: true }}
            className={gallary.d_r2i2}
          >
            <Image
              src="/assests/img/casestudy/densyte/densyte.com_p_join-the-team 1.png"
              alt="img"
              width={290}
              height={1024}
            />
          </motion.div>
          <motion.div
            {...fadeUp}
            viewport={{ once: true }}
            className={gallary.d_r2i3}
          >
            <Image
              src="/assests/img/casestudy/densyte/densyte.com_p_how-it-work 2.png"
              alt="img"
              width={290}
              height={1024}
            />
          </motion.div>
          <motion.div
            {...fadeDown}
            viewport={{ once: true }}
            className={gallary.d_r2i4}
          >
            <Image
              src="/assests/img/casestudy/densyte/densyte.com_ 1.png"
              alt="img"
              width={290}
              height={1024}
            />
          </motion.div>
        </div>

        <div className={gallary.d_r3} style={{ background: THEME_COLOR }}>
          <motion.div viewport={{ once: true }} className={gallary.d_r3i1}>
            <Image
              src="/assests/img/casestudy/densyte/Group 16865588182123.png"
              alt="img"
              width={1440}
              height={550}
            />
          </motion.div>
          <motion.div viewport={{ once: true }} className={gallary.d_r3i2}>
            <Image
              src="/assests/img/casestudy/densyte/Group 1686558819.png"
              alt="img"
              width={1440}
              height={877}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <CaseStudyTemplate
      slug="densyte"
      data={data}
      options={{
        themeColor: THEME_COLOR,
        whatWeBuildBulletColor: "#DAA520",
        technicalHighlightBulletColor: "#DAA520",
        heroXyPadding: false,
      }}
      slots={{
        insideGallery: <DensyteGallaryLayout />,
        afterWhatWeBuild: <DensyteGallaryOne />,
        afterTechnicalHighlight: <DensyteGallaryTwo />,
      }}
    />
  );
}
