import React from "react";
import css from "./ImageNcontentSection.module.css";
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
            src="/assests/img/reactApp1.png"
            width={526}
            height={551}
            quality={100}
            alt="..."
            loading="lazy"
          />
        </div>

        <div className={css.contentContainer}>
          <h2>React Apps. Powerful. Engaging. Branded.</h2>
          <p>
            Unlock the full potential of your business with our custom mobile
            app development services. We specialize in creating intuitive,
            scalable, and high-performing mobile applications tailored to your
            unique needs. From idea to launch,{" "}
          </p>
          <p>
            our team ensures every app is designed with user experience,
            performance, and innovation at its core—helping you engage
            customers, streamline operations, and stay ahead in the digital
            world.
          </p>

          <a className="primaryBtn">Say Hi👋 to Discuss a project</a>
        </div>
      </div>
    </ContentWidth>
  );
}

export function TextnImageSection() {
  return (
    <section>
      <div className={css.GradientImgNTextWrapper}>
        <div className={css.bgWrapper}>
          <div className={css.glowbgLeft} />
          <div className={css.leftContainer}>
            <div>
              <h2>
                Grow Your Business With The Help Of <span>iCode</span>Labs
              </h2>
              <p>   Our comprehensive services range from strategic planning and
                market research to operational optimization and digital
                transformation.{" "}
              </p>

              <PrimaryBtnLink href="/contact" className="primaryBtnWhite">
                Let’s Discuss with us! 👋
              </PrimaryBtnLink>
            </div>
          </div>
          <div
            className={css.rightContainer}
          ></div>
        </div>
      </div>
    </section>
  );
}
