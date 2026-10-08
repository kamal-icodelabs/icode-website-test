import React from "react";
import ContentWidth from "../ContentWidth/ContentWidth";
import css from "./CoreServices.module.css";
import Image from "next/image";
import marketplace from "../../assets/images/marketplace-dev.png";
import IconCollection from "../IconCollection/IconCollection";
import webApp from "../../assets/images/web-app.png";
import aiFeature from "../../assets/images/ai-feature.png";
import Link from "next/link";

function CoreServices() {
  const bgImage =
    "data:image/svg+xml,%3Csvg%20width%3D%221396%22%20height%3D%22612%22%20viewBox%3D%220%200%201396%20612%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20filter%3D%22url(%23filter0_f_16180_20642)%22%3E%3Cellipse%20cx%3D%22112.5%22%20cy%3D%2216.4732%22%20rx%3D%2297.5%22%20ry%3D%2297.341%22%20fill%3D%22%23ED4F2E%22%2F%3E%3C%2Fg%3E%3Cg%20filter%3D%22url(%23filter1_f_16180_20642)%22%3E%3Cellipse%20cx%3D%22684.5%22%20cy%3D%2244.4275%22%20rx%3D%22103.5%22%20ry%3D%22103.331%22%20fill%3D%22%23FEC220%22%2F%3E%3C%2Fg%3E%3Cg%20filter%3D%22url(%23filter2_f_16180_20642)%22%3E%3Cellipse%20cx%3D%221333.5%22%20cy%3D%2253.4127%22%20rx%3D%22100.5%22%20ry%3D%22100.336%22%20fill%3D%22%23B7D9FE%22%2F%3E%3C%2Fg%3E%3Cdefs%3E%3Cfilter%20id%3D%22filter0_f_16180_20642%22%20x%3D%22-485%22%20y%3D%22-580.868%22%20width%3D%221195%22%20height%3D%221194.68%22%20filterUnits%3D%22userSpaceOnUse%22%20color-interpolation-filters%3D%22sRGB%22%3E%3CfeFlood%20flood-opacity%3D%220%22%20result%3D%22BackgroundImageFix%22%2F%3E%3CfeBlend%20mode%3D%22normal%22%20in%3D%22SourceGraphic%22%20in2%3D%22BackgroundImageFix%22%20result%3D%22shape%22%2F%3E%3CfeGaussianBlur%20stdDeviation%3D%22250%22%20result%3D%22effect1_foregroundBlur_16180_20642%22%2F%3E%3C%2Ffilter%3E%3Cfilter%20id%3D%22filter1_f_16180_20642%22%20x%3D%2281%22%20y%3D%22-558.904%22%20width%3D%221207%22%20height%3D%221206.66%22%20filterUnits%3D%22userSpaceOnUse%22%20color-interpolation-filters%3D%22sRGB%22%3E%3CfeFlood%20flood-opacity%3D%220%22%20result%3D%22BackgroundImageFix%22%2F%3E%3CfeBlend%20mode%3D%22normal%22%20in%3D%22SourceGraphic%22%20in2%3D%22BackgroundImageFix%22%20result%3D%22shape%22%2F%3E%3CfeGaussianBlur%20stdDeviation%3D%22250%22%20result%3D%22effect1_foregroundBlur_16180_20642%22%2F%3E%3C%2Ffilter%3E%3Cfilter%20id%3D%22filter2_f_16180_20642%22%20x%3D%22733%22%20y%3D%22-546.923%22%20width%3D%221201%22%20height%3D%221200.67%22%20filterUnits%3D%22userSpaceOnUse%22%20color-interpolation-filters%3D%22sRGB%22%3E%3CfeFlood%20flood-opacity%3D%220%22%20result%3D%22BackgroundImageFix%22%2F%3E%3CfeBlend%20mode%3D%22normal%22%20in%3D%22SourceGraphic%22%20in2%3D%22BackgroundImageFix%22%20result%3D%22shape%22%2F%3E%3CfeGaussianBlur%20stdDeviation%3D%22250%22%20result%3D%22effect1_foregroundBlur_16180_20642%22%2F%3E%3C%2Ffilter%3E%3C%2Fdefs%3E%3C%2Fsvg%3E";
  return (
    <section>
      <ContentWidth>
        <h5 className={css.coreServicesHeading}>Core Services</h5>
        <h2 className={css.servicesHeading}>
          Everything We Build,
          <br /> We Build with AI.
        </h2>
        <div className={css.servicesGrid}>
          <div
            className={css.topSection}
            style={{
              backgroundImage: `url("${bgImage}")`,
            }}
          >
            <div className={css.leftContent}>
              <span className={css.badge}>MARKETPLACE DEVELOPMENT</span>
              <h2 className={css.servicesHead}>
                Sharetribe & Custom Marketplaces
              </h2>
              <p className={css.cardDescription}>
                Rental, service, booking, and product marketplaces — built on
                Sharetribe or fully custom. From $3,000 MVPs to enterprise-grade
                platforms. Delivered in 3–12 weeks.
              </p>

              <ul className={css.sectionList}>
                <li>
                  <IconCollection name="red-check" /> Rental, service & product
                  marketplaces
                </li>
                <li>
                  <IconCollection name="red-check" /> Built on Sharetribe or
                  fully custom
                </li>
                <li>
                  <IconCollection name="red-check" /> MVP to enterprise
                  solutions
                </li>
                <li>
                  <IconCollection name="red-check" /> Fast delivery (3–12 weeks)
                </li>
              </ul>

              <Link
                href={"/services/sharetribe"}
                className={`${css.exploreServices} defaultGradientBtn`}
              >
                Explore marketplace services
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.707092 11L10.7071 1"
                    stroke="#001730"
                    stroke-width="2"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M0.707092 1H10.7071V11"
                    stroke="#001730"
                    stroke-width="2"
                    stroke-linejoin="round"
                  />
                </svg>
              </Link>
            </div>

            <div className={css.rightImage}>
              <Image
                src={marketplace}
                alt="marketplace"
                width="637"
                height="492"
                objectFit="contain"
                loading="lazy"
              />
            </div>
          </div>
          <div className={css.cardGrid}>
            <div
              className={css.card}
              style={{
                background:
                  "linear-gradient(206.45deg, #DFF3EC 0%, #FFFFFF 50%, #F4F9FF 100%)",
              }}
            >
              <div className={css.cardContent}>
                <span className={css.badgeBlue}>AI DEVELOPMENT</span>
                <h2 className={css.servicesHead}>
                  AI Features & AI-Native Products
                </h2>
                <p className={css.cardDescription}>
                  Smart search, listing generation, automated moderation, AI
                  onboarding, recommendation engines. Or we build AI-native
                  applications from scratch.
                </p>

                <ul className={css.sectionList}>
                  <li>
                    <IconCollection name="blue-check" /> Smart search &
                    recommendations
                  </li>
                  <li>
                    <IconCollection name="blue-check" /> Listing generation &
                    automation
                  </li>
                  <li>
                    <IconCollection name="blue-check" /> AI moderation &
                    onboarding
                  </li>
                  <li>
                    <IconCollection name="blue-check" /> Custom AI-native app
                    development
                  </li>
                </ul>

                <Link
                  href="/services/ai-development"
                  className={`${css.exploreServices} defaultGradientBtn`}
                >
                  See AI development
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.707092 11L10.7071 1"
                      stroke="#001730"
                      stroke-width="2"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M0.707092 1H10.7071V11"
                      stroke="#001730"
                      stroke-width="2"
                      stroke-linejoin="round"
                    />
                  </svg>
                </Link>
              </div>

              <div className={css.cardImage}>
                <Image
                  src={aiFeature}
                  alt="web-app"
                  width="568"
                  height="318"
                  objectFit="contain"
                />
              </div>
            </div>
            <div
              className={css.card}
              style={{
                background:
                  "linear-gradient(206.45deg, #F9FFDA 0%, #FFFFFF 50%, #EFFFFA 100%)",
              }}
            >
              <div className={css.cardContent}>
                <span className={css.badgeGreen}>Web & Mobile Apps</span>
                <h2 className={css.servicesHead}>
                  Web Platforms & Mobile Apps
                </h2>
                <p className={css.cardDescription}>
                  React Native mobile apps, Next.js web platforms, full-stack
                  custom builds. One team, full stack, AI-accelerated delivery —
                  built to last.
                </p>

                <ul className={css.sectionList}>
                  <li>
                    <IconCollection name="green-check" /> React Native mobile
                    apps
                  </li>
                  <li>
                    <IconCollection name="green-check" /> Next.js web platforms
                  </li>
                  <li>
                    <IconCollection name="green-check" /> Full-stack custom
                    builds
                  </li>
                  <li>
                    <IconCollection name="green-check" /> Scalable AI-powered
                    development
                  </li>
                </ul>

                <Link
                  href={"/services/mobile-app-development"}
                  className={`${css.exploreServices} defaultGradientBtn`}
                >
                  Explore web & mobile
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.707092 11L10.7071 1"
                      stroke="#001730"
                      stroke-width="2"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M0.707092 1H10.7071V11"
                      stroke="#001730"
                      stroke-width="2"
                      stroke-linejoin="round"
                    />
                  </svg>
                </Link>
              </div>

              <div className={css.cardImage}>
                <Image
                  src={webApp}
                  alt="web-app"
                  width="568"
                  height="318"
                  objectFit="contain"
                />
              </div>
            </div>
          </div>
        </div>
      </ContentWidth>
    </section>
  );
}

export default CoreServices;
