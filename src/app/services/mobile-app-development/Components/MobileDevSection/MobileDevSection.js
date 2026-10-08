import React from "react";
import css from "./MobileDevSection.module.css";
import bottomGradient from "../../../../../assets/imgs/images/aiDevBottomGradient.svg";
import Image from "next/image";
import ContentWidth from "@/component/ContentWidth/ContentWidth";
import IconCollection from "@/component/IconCollection/IconCollection";
import { PrimaryBtnLink } from "@/component/Animations/CTAbutton";

export const mobileAppServices = [
  {
    title: "App Strategy & Consulting",
    description:
      "Validate your app idea with market research, feature prioritization, and the right tech stack — whether native iOS (Swift), Android (Kotlin), React Native, or Flutter.",
    icons: "ideation",
  },
  {
    title: "Rapid MVP Development",
    description:
      "Launch fast with a lean, scalable Minimum Viable Product. Test your concept with real users, gather insights, and iterate — ideal for startups and enterprise innovation teams.",
    icons: "MVP",
  },
  {
    title: "Full-Stack App Development",
    description:
      "End-to-end development from UI/UX to App Store deployment. We build secure, high-performance apps for iOS, Android, and cross-platform using React Native and Flutter.",
    icons: "appDev",
  },
  {
    title: "App Modernization",
    description:
      "Upgrade legacy apps to modern frameworks, refactor codebases, and migrate to cloud-native infrastructure — improving speed, security, and user retention.",
    icons: "migration",
  },
  {
    title: "Interactive & Gaming Apps",
    description:
      "Create engaging interactive experiences and mobile games with smooth performance across iOS and Android devices, built with optimized rendering engines.",
    icons: "gameDev",
  },
  {
    title: "Post-Launch Support",
    description:
      "Continuous monitoring, OS compatibility updates, performance tuning, and feature enhancements to keep your app competitive and crash-free on every release.",
    icons: "supportNmain",
  },
];
export default function ReactnativeDevSection() {
  const CardCTA = () => (
    <div className={css.aiDevCardWrapper}>
      <IconCollection name="logoFavicon" />
      <h3>Focus on Growth While We Drive Your Tech Innovation.</h3>
      <p>Is Tech Troubles Holding You Back?</p>
      <PrimaryBtnLink href="/contact" className={css.innovationBtn}>
        Innovate With Us
        <IconCollection name="rightArrowTop" />
      </PrimaryBtnLink>
    </div>
  );

  return (
    <div className={css.SectionAIDevelopmentPartnerWrapper}>
      {/* <Image
        src={bottomGradient}
        width={1200}
        height={400}
        className={css.gradientBottom}
        alt="Background Gradient"
        loading="lazy"
      /> */}

      <ContentWidth>
        <div className={css.leftNrightContainer}>
          <div className={css.leftContentContainer}>
            <h2>Mobile App Development Services</h2>
            <p>
              Unlock the full potential of your business with our custom mobile applications—built for iOS, Android, and cross-platform frameworks like React Native and Flutter. We design intuitive, scalable, and high-performing apps tailored to your unique goals, ensuring seamless user experiences and future-ready innovation. </p>
            <CardCTA />
          </div>

          <div className={css.rightContentWrapper}>
            <div className={css.cardWrapper}>
              {mobileAppServices.map((item, index) => (
                <div key={index} className={css.cardContainer}>
                  <div className={css.iconContainer}>
                    <IconCollection name={item.icons} />
                  </div>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={css.leftContentContainerMobile}>
            <div className={css.aiDevCardWrappermobile}>
              <CardCTA />
            </div>
          </div>
        </div>
      </ContentWidth>
    </div>
  );
}
