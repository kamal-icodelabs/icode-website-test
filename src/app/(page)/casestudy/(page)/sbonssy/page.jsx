"use client";

import Image from "next/image";
import { motion } from "motion/react";
import classNames from "classnames";
import CaseStudyTemplate from "@/component/CasestudyComponents/CaseStudyTemplate";
import CaseStudyGallaryLayout from "@/component/CasestudyComponents/CaseStudyGallaryLayout/CaseStudyGallaryLayout";
import * as data from "@/data/casestudy/sbonssy";
import gallary from "@/component/CasestudyComponents/CaseStudyGallaryLayout/CaseStudyGallaryLayout.module.css";

const THEME_COLOR = "#F97316";

function SbonssyGallaryLayout() {
  return (
    <div>
      <div className={gallary.densyteGallaryLayout}>
        <div className={gallary.sb_gallaryWrapper}>
          <motion.div style={{ background: THEME_COLOR }} viewport={{ once: true }} className={gallary.sb_r3i1}>
            <Image src="/assests/img/casestudy/sbonssy/Group 1686558826 (1).png" alt="img" width={1440} height={4096} />
          </motion.div>
          <motion.div viewport={{ once: true }} style={{ background: THEME_COLOR }} className={gallary.sb_r2i1}>
            <Image src="/assests/img/casestudy/sbonssy/Group 1686558826 (2).png" alt="img" width={1440} height={4096} />
          </motion.div>
          <motion.div viewport={{ once: true }} style={{ background: THEME_COLOR }} className={gallary.sb_r3i1}>
            <Image src="/assests/img/casestudy/sbonssy/Group 1686558826 (3).png" alt="img" width={1440} height={4096} />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function SbonssyImgOne() {
  return (
    <div className={classNames(gallary.sb_gallaryWrapper, gallary.sectionPadding)}>
      <motion.div style={{ background: THEME_COLOR }} viewport={{ once: true }} className={gallary.sb_r3i1}>
        <Image src="/assests/img/casestudy/sbonssy/Group 1686558826 (1).png" alt="img" width={1440} height={4096} />
      </motion.div>
    </div>
  );
}

function SbonssyImgTwo() {
  return (
    <div className={classNames(gallary.sb_gallaryWrapper, gallary.sectionPadding)}>
      <motion.div style={{ background: THEME_COLOR }} viewport={{ once: true }} className={gallary.sb_r3i1}>
        <Image src="/assests/img/casestudy/sbonssy/Group 1686558826 (1).png" alt="img" width={1440} height={4096} />
      </motion.div>
    </div>
  );
}

export default function Page() {
  return (
    <CaseStudyTemplate
      slug="sbonssy"
      data={data}
      options={{
        themeColor: THEME_COLOR,
        whatWeBuildBulletColor: "#F97316",
        technicalHighlightBulletColor: "#F97316",
      }}
      slots={{
        insideGallery: <SbonssyGallaryLayout />,
        afterWhatWeBuild: (
          <CaseStudyGallaryLayout>
            <SbonssyImgOne />
          </CaseStudyGallaryLayout>
        ),
        afterTechnicalHighlight: (
          <CaseStudyGallaryLayout>
            <SbonssyImgTwo />
          </CaseStudyGallaryLayout>
        ),
      }}
    />
  );
}
