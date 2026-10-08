import React from "react";
import css from "./MobileContentSection.module.css";
import ContentWidth from "@/component/ContentWidth/ContentWidth";
import Image from "next/image";
import Link from "next/link";
import { PrimaryBtnLink } from "@/component/Animations/CTAbutton";

export default function ImageNcontentSection() {
  return (
    <ContentWidth className={css.mainWrapper}>
      <div className={css.imgNcontentContainer}>
        <div className={css.imgContainer}>
          <Image
            src="/assests/img/mobileApp.png"
            fill
            quality={100}
            alt="iOS and Android mobile app development showcase"
            loading="lazy"
          />
        </div>

        <div className={css.contentContainer}>
          <h2>Mobile Apps. Powerful. Engaging. Branded.</h2>
          <p>
            Unlock the full potential of your business with our custom <strong>mobile app development</strong> services. We design and build intuitive, scalable, and high-performing apps for<strong> iOS and Android</strong> using modern stacks like <strong>React Native</strong> and <strong>Flutter</strong>—tailored to your unique goals.
          </p>
          <p>
            From idea to launch, our team handles strategy, UI/UX, APIs, and deployment. Every app is engineered for <strong>user experience,</strong> <strong>performance</strong>, and<strong> growth</strong>—helping you engage customers, streamline operations, and stay ahead.
          </p>
          
          <Link
            className={css.ctaBtn}
            href="https://calendly.com/jaytiwary"
            target="_blank"
            rel="noopener"
          >
            Build Your iOS/Android App <span>👋</span>
          </Link>
        </div>
      </div>
    </ContentWidth>
  );
}

export function TextnImageSection() {
  return (
    <section className={css.textnImgSectionWrapper}>
      {/* <div className={css.glowbgLeft} />
      <div className={css.glowbgRight} />
      <ContentWidth className={css.mainWrapper}>
        <div className={css.TextnImgContainer}>
          <div className={css.contentContainer}>
            <h2>
              Grow Your Business With The Help Of <span>Icode</span>labs
            </h2>
            <p>
              Our comprehensive services range from strategic planning and
              market research to operational optimization and digital
              transformation.{" "}
            </p>
            <Link href={"#"} className="primaryBtn">
              Let’s Discuss with us! 👋
            </Link>
          </div>
        </div>
      </ContentWidth> */}
      {/* <div className={css.GradientImgNTextWrapper}>
        <div className={css.bgWrapper}>
          <div className={css.glowbgLeft} />
          <div className={css.leftContainer}>
            <div>
              <h2>
                From Idea to App Store — <span>iCode</span>Labs Delivers
              </h2>
              <p>
                We help founders and enterprises ship high-quality{" "}
                <strong>iOS and Android apps</strong> in weeks, not months. From React Native{" "}
                MVPs to full native builds with Swift and Kotlin, we handle architecture,{" "}
                testing, and App Store deployment end-to-end.{" "}
              </p>

              <PrimaryBtnLink href={"/contact"} className="primaryBtn">
                Let’s Discuss with us! 👋
              </PrimaryBtnLink>
            </div>
          </div>
          <div className={css.rightContainer}></div>
        </div>
      </div> */}
    </section>
  );
}
