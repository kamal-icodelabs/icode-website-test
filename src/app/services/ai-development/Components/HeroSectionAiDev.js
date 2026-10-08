import React from "react";
import Link from "next/link";
import css from "../aiDevStyle.module.css";
import ContentWidth from "@/component/ContentWidth/ContentWidth";
import Image from "next/image";
import IconCollection from "@/component/IconCollection/IconCollection";
import { PrimaryBtn } from "@/component/Animations/CTAbutton";

export default function HeroSectionAiDev() {
  return (
    <div className={css.heroWrapper}>
      <ContentWidth>
        <div className={css.imgNcontentContainer}>
          <div className={css.contentContainer}>
            <h1 className={css.heroTitle}>
              <span>AI Development Services</span> for Marketplaces & Custom Platforms
            </h1>
            <p className={css.subHeading}>
              From smart assistants to generative workflows — launch
              product-grade AI faster with iCodeLabs.
            </p>

            <p className={css.para}>
              iCodelabs builds production-ready AI features for marketplaces and
              custom platforms. Smart search, listing generation, AI agents,
              automated moderation, and recommendation engines — deployed into
              real products, not demos.
            </p>

            <div className={css.HerobtnContainer}>
              <a
                href="https://calendly.com/jaytiwary"
                target="_blank"
                rel="noopener noreferrer nofollow"
                style={{ textDecoration: "none" }}
              >
                <PrimaryBtn>
                  Book a Free Discovery Call{" "}
                  <IconCollection name="rightArrowTop" />
                </PrimaryBtn>
              </a>

              <Link href="/casestudy" className={`outlineBtn ${css.outlineBtn}`}>
                Explore AI Case Studies <IconCollection name="rightArrowTop" />
              </Link>
            </div>

            <div className={css.featureContainer}>
              {heroFeature.map((i) => {
                return (
                  <>
                    <div className={css.featureBox}>
                      <Image
                        width={32}
                        height={32}
                        src={i.icons}
                        loading="lazy"
                        alt={i.text}
                      />
                      <p>{i.text}</p>
                    </div>
                  </>
                );
              })}
            </div>
          </div>

          <div className={css.herImgContainer}>
            <Image
              src={"/assests/img/ai-dev/heroimg.png"}
              fill
              alt="AI development hero illustration"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </ContentWidth>
    </div>
  );
}

const heroFeature = [
  {
    icons: "/assests/icons/Icodelbas/ai-chip.svg",
    text: "Custom AI Products",
  },
  {
    icons: "/assests/icons/Icodelbas/ai-cloud.svg",
    text: "LLM Integrations",
  },
  {
    icons: "/assests/icons/Icodelbas/ai-brain.svg",
    text: "Gen AI Workflows",
  },
  {
    icons: "/assests/icons/Icodelbas/ai-bot.svg",
    text: "RAG Chatbots",
  },
];
