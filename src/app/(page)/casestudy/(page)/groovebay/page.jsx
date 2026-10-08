"use client";

import CaseStudyTemplate from "@/component/CasestudyComponents/CaseStudyTemplate";
import * as data from "@/data/casestudy/groovebay";
import Image from "next/image";
import * as motion from "motion/react-client";
import gallary from "@/component/CasestudyComponents/CaseStudyGallaryLayout/CaseStudyGallaryLayout.module.css";
import {
  GrooveBayGallary,
  GrooveBayGallaryMobile,
} from "./components/GrooveBayGallary/GrooveBayGallary";
import { fadeInDown, fadeInUp } from "./animations";

function Gallary() {
  return (
    <div className={gallary.grooveGallaryContainer}>
      <div style={{ background: "#CB4C4E" }} className={gallary.r1im1}>
        <motion.div {...fadeInUp} viewport={{ once: true }}>
          <Image
            width={1440}
            height={1080}
            src="/assests/img/casestudy/groove/Group 1686558811.png"
          />
        </motion.div>
      </div>

      <div className={gallary.r1im2} style={{ background: "#008080" }}>
        <motion.div {...fadeInUp} viewport={{ once: true }}>
          <Image
            width={1440}
            height={1080}
            src="/assests/img/casestudy/groove/Group 1686558818.png"
          />
        </motion.div>
      </div>

      <div className={gallary.r1im3} style={{ background: "#CB4C4E" }}>
        <div className={gallary.g_left_grid}>
          <motion.div {...fadeInUp} viewport={{ once: true }}>
            <Image
              width={888}
              height={1158}
              src="/assests/img/casestudy/groove/image 926.png"
            />
          </motion.div>
        </div>

        <div className={gallary.g_right_grid}>
          <motion.div {...fadeInDown} viewport={{ once: true }}>
            <Image
              width={892}
              height={720}
              className={gallary.g_right_grid_1}
              src="/assests/img/casestudy/groove/image 927.png"
            />
          </motion.div>

          <motion.div {...fadeInUp} viewport={{ once: true }}>
            <Image
              width={890}
              height={712}
              className={gallary.g_right_grid_2}
              src="/assests/img/casestudy/groove/image 928.png"
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
      slug="groovebay"
      data={data}
      options={{
        themeColor: "#CB4C4E",
        whatWeBuildNumberColor: "#fff",
        whatWeBuildBulletColor: "#CD5C5C",
        technicalHighlightBulletColor: "#008080",
        showRealStory: false,
      }}
      slots={{
        insideGallery: <Gallary />,
        afterWhatWeBuild: <GrooveBayGallaryMobile />,
        afterTechnicalHighlight: <GrooveBayGallary />,
      }}
    />
  );
}
