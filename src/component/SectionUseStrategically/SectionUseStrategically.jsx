import React from "react";
import css from "./SectionUseStrategically.module.css";
import ContentWidth from "../ContentWidth/ContentWidth";
import teamButtonImg from "../../assets/images/ourApproach/teamButtonImg.svg";
import teamButtonImg1 from "../../assets/images/ourApproach/teambackgroundImg1.svg";
import teamButtonImg2 from "../../assets/images/ourApproach/teamBackground2.svg";
import teamButtonImg3 from "../../assets/images/ourApproach/teamBackground3.svg";
import Image from "next/image";
import IconCollection from "../IconCollection/IconCollection";

const SectionUseStrategically = () => {
  const purposeOptions = [
    {
      heading: "When to Use Sharetribe",
      description:
        "Perfect for MVPs or early-stage marketplaces that need speed, structure, and simplicity without heavy backend complexity.",
    },
    {
      heading: "When to Go Custom (React, Node.js, Supabase)",
      description:
        "Best for projects needing full flexibility, deep third-party integrations, or non-standard workflows that demand tailored architecture.",
    },
    {
      heading: "When to Layer AI",
      description:
        "Ideal for automating content, guiding users, or delivering personalized experiences — integrating GPT, vector search, and other AI tools where they add measurable value.",
    },
    {
      heading: "When to Think Serverless",
      description:
        "For event-driven apps or cost-efficient scaling, services like AWS Lambda and Vercel Functions ensure you only pay for what you use.",
    },
  ];
  return (
    <ContentWidth>
      <div className={css.strategicallyWrapper}>
        <h1 className={css.strategicallyHeading}>
          Technology With Purpose, Strategy at the Core
        </h1>

        {/* <div className={`${css.desktopHide} ${css.rightStrategically}`}></div> */}

        <div className={css.strategicallyContainer}>
          {/* left section */}
          <div className={css.leftStrategically}>
            <h2 className={css.leftStrategicallyHeading}>
              Tech With a Purpose
            </h2>
            <p className={css.leftStrategicallyDescription}>
              We don’t choose tools because they’re trendy. We choose them
              because they serve your product goals better — whether it’s
              getting to market faster, scaling seamlessly, or integrating
              smarter AI flows. Our technology decisions are always tied to your
              business outcomes, ensuring the solution we deliver is both
              functional and future-ready.
            </p>

            {/* listing data */}
            <ul className={css.techPurposeBox}>
              {purposeOptions.map((item, index) => {
                return (
                  <li className={css.techPurposeContainer} key={index}>
                    <IconCollection name="technoList" />
                    <div className={css.purposeWrapper}>
                      <h2 className={css.purposeheading}>{item.heading}</h2>
                      <p className={css.purposeDescription}>
                        {item.description}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
            <div className={css.borderLine}></div>

            <div className={css.ourTeamContainer}>
              <div className={css.ourTeamBox}>
                <h1 className={css.ourTeamHeading}>
                  Need help choosing the right tech path?
                </h1>
              </div>
              <div className={css.outTeamButtonWrapper}>
                <button className={css.ourTeamButton}>
                  Talk to Our Team
                  <div className={css.teamButtonImgWrapper}>
                    <Image src={teamButtonImg} alt="img" loading="lazy" />
                    <Image src={teamButtonImg1} alt="img" loading="lazy"/>
                    <Image src={teamButtonImg2} alt="img" loading="lazy"/>
                    <Image src={teamButtonImg3} alt="img" loading="lazy"/>
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* right section */}
          <div className={`${css.mobileHide} ${css.rightStrategically}`}>
            {" "}
            <Image
              src="/assests/img/wedontusetech.png"
              width={648}
              height={478}
            />
          </div>
        </div>
      </div>
    </ContentWidth>
  );
};

export default SectionUseStrategically;
