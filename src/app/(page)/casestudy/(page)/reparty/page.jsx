"use client";

import Image from "next/image";
import classNames from "classnames";
import * as motion from "motion/react-client";
import CaseStudyTemplate from "@/component/CasestudyComponents/CaseStudyTemplate";
import { CaseStudyLoopingScreens } from "@/component/CasestudyComponents/CaseStudyLoopingScreens/CaseStudyLoopingScreens";
import * as data from "@/data/casestudy/reparty";
import gallary from "@/component/CasestudyComponents/CaseStudyGallaryLayout/CaseStudyGallaryLayout.module.css";

const fadeInUp = {
  initial: { opacity: 0, y: 100 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" },
};

const fadeInDown = {
  initial: { opacity: 0, y: -100 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" },
};

function GallaryDesign() {
  return (
    <div className={gallary.gallery_wrapper}>
      <div className={gallary.rowOne}>
        <motion.div
          {...fadeInUp}
          viewport={{ once: true }}
          style={{ width: "100%" }}
        >
          <div className={classNames(gallary.imgContainer, gallary.r1i1)}>
            <Image
              fetchPriority="high"
              src="/assests/img/casestudy/reparty/r1i1.png"
              alt="img"
              width={949}
              height={1030}
            />
          </div>
        </motion.div>
        <motion.div
          {...fadeInUp}
          viewport={{ once: true }}
          className={gallary.widthFix}
        >
          <div className={classNames(gallary.imgContainer, gallary.r1i2)}>
            <Image
              fetchPriority="high"
              src="/assests/img/casestudy/reparty/r1i2.png"
              alt="img"
              width={310}
              height={1030}
            />
          </div>
        </motion.div>
      </div>

      <div className={gallary.rowTwo}>
        <motion.div
          {...fadeInUp}
          viewport={{ once: true }}
          style={{ width: "100%" }}
        >
          <div className={gallary.r2i1}>
            <Image
              fetchPriority="high"
              width={952}
              height={1327}
              src="/assests/img/casestudy/reparty/r2i1.png"
              alt="img"
            />
          </div>
        </motion.div>
        <motion.div
          {...fadeInDown}
          viewport={{ once: true }}
          style={{ width: "100%" }}
        >
          <div className={gallary.r2i2}>
            <Image
              fetchPriority="high"
              width={894}
              height={1078}
              src="/assests/img/casestudy/reparty/r2i2.png"
              alt="img"
            />
          </div>
        </motion.div>
      </div>

      <div className={gallary.rowThree}>
        <motion.div
          {...fadeInUp}
          viewport={{ once: true }}
          style={{ width: "100%" }}
        >
          <div className={gallary.r3i1}>
            <Image
              fetchPriority="high"
              width={1294}
              height={1123}
              src="/assests/img/casestudy/reparty/r3i1.png"
              alt="img"
            />
          </div>
        </motion.div>
      </div>

      <div className={gallary.rowFour}>
        <div className={gallary.gridLeft}>
          <motion.div
            {...fadeInUp}
            viewport={{ once: true }}
            style={{ width: "100%" }}
          >
            <div className={gallary.r4i1}>
              <Image
                fetchPriority="high"
                width={765}
                height={847}
                src="/assests/img/casestudy/reparty/r4i1.png"
                alt="img"
              />
            </div>
          </motion.div>
          <motion.div
            {...fadeInUp}
            viewport={{ once: true }}
            style={{ width: "100%" }}
          >
            <div className={gallary.r4i2}>
              <Image
                fetchPriority="high"
                width={765.2}
                height={721.23}
                src="/assests/img/casestudy/reparty/r4i2.png"
                alt="img"
              />
            </div>
          </motion.div>
        </div>
        <div className={gallary.gridRight}>
          <motion.div
            {...fadeInDown}
            viewport={{ once: true }}
            style={{ width: "100%" }}
          >
            <div className={gallary.r4i3}>
              <Image
                fetchPriority="high"
                width={765.22}
                height={966.79}
                src="/assests/img/casestudy/reparty/r4i3.png"
                alt="img"
              />
            </div>
          </motion.div>
          <motion.div
            {...fadeInDown}
            viewport={{ once: true }}
            style={{ width: "100%" }}
          >
            <div className={gallary.r4i4}>
              <Image
                fetchPriority="high"
                width={765.14}
                height={927.22}
                src="/assests/img/casestudy/reparty/r4i4.png"
                alt="img"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <CaseStudyTemplate
      slug="reparty"
      data={data}
      options={{
        themeColor: "#0075F2",
        whatWeBuildBulletColor: "#F9C6C9",
        whatWeBuildNumberColor: "#000",
        technicalHighlightBulletColor: "#0075F2",
        heroTransition: false,
        showProductGallery: true,
      }}
      slots={{
        insideGallery: <GallaryDesign />,
        afterTechnicalHighlight: (
          <CaseStudyLoopingScreens data={data.loopingScreen} />
        ),
      }}
    />
  );
}
