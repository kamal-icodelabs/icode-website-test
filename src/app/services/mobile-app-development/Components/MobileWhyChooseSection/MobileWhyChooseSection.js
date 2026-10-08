"use client";

import React from "react";
import css from "./MobileWhyChooseSection.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import ContentWidth from "@/component/ContentWidth/ContentWidth";
import IconCollection from "@/component/IconCollection/IconCollection";
import Image from "next/image";

export default function CarouselNwhyChooseSection() {
  return (
    <section className={css.carouselNwhyChooseSection}>
      {/* <div className={css.carouselWrapper}>
        <Swiper
          spaceBetween={20}
          slidesPerView={1.6}
          centeredSlides
          modules={[Pagination]}
          breakpoints={{
            0: {
              spaceBetween: 20,
              slidesPerView: 1,
            },

            992: {
              spaceBetween: 20,
              slidesPerView: 1.4,
            },
          }}
          loop
          initialSlide={0}
          className="reactNativeCarousel"
          onAfterInit={(swiper) => {
            swiper.wrapperEl.style.transform =
              "translate3d(var(--carouselPosition), 0px, 0px)";
          }}
        >
          {carouselData.map((item, index) => (
            <SwiperSlide key={index}>
              <div className={`${css.cardContainer} ${item.bgClass}`}>
                <div className={css.contentContainer}>
                  <Image
                    src={item.logo}
                    width={100}
                    height={100}
                    quality={90}
                    alt={item.title}
                    className={css.logoImg}
                    loading="lazy"
                  />

                  <h2>{item.title}</h2>
                  <p>{item.description}</p>

                  <div className={css.statsContainer}>
                    <div>
                      <h4>{item.stats.conversion}</h4>
                      <p>Higher Conversion</p>
                    </div>
                    <span />
                    <div>
                      <h4>{item.stats.downloads}</h4>
                      <p>Higher Conversion</p>
                    </div>
                  </div>

                  <div className={css.technoDiv}>
                    <h5>Technologies</h5>
                    <div className={css.toolsDiv}>
                      <IconCollection name="androidWhite" />
                      <span />
                      <IconCollection name="appleWhite" />
                      <span />
                      <IconCollection name="reactWhite" />
                    </div>
                  </div>
                </div>

                <Image
                  src={item.image}
                  width={807}
                  height={676}
                  className={css.assetsImg}
                  loading="lazy"
                  alt={`${item.title} preview`}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div> */}

      <ContentWidth className={css.mainWrapper}>
        <div className={css.contentContainer}>
          <h2>
            Why Choose <span>iCode</span>Labs For Mobile App Development?
          </h2>
          <p>
            We deliver high-quality, scalable, and future-ready mobile
            applications for startups, enterprises, and everything in between.
          </p>
        </div>

        <div className={css.gridContainer}>
          {whyChoosePoints.map((point, index) => (
            <div key={index} className={css.gridItem}>
              <IconCollection name={point.icons} />
              <h3>{point.title}</h3>
              <p>{point.description}</p>
              <ul>
                {point.points.map((pt, idx) => (
                  <li key={idx}>
                    {/* <IconCollection name="blueBoxCheck" /> */}
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </ContentWidth>
    </section>
  );
}

// ✅ Static data outside component (no re-creation per render)
const whyChoosePoints = [
  {
    title: "We Delivered Excellence",
    description:
      "Our team of React Native developers is committed to delivering applications with an impressively low error rate of up to 99.9%. We achieve this by adhering to quality control standards that are not only approved by the React community, but also rigorously implemented throughout the app development.",
    points: [
      "Innovative Agency",
      "Security-Centric Approach",
      "Flexible Prices",
    ],
    icons: "weDelivered",
  },
  {
    title: "We Empower Businesses",
    description:
      "Embracing a transparent agile methodology, our custom React Native cross-platform app development services ensure a smooth journey from the inception of your product idea to the final app delivery. With proactive communication and best practices, we guarantee timely results and complete visibility.",
    points: [
      "Quality Commitment",
      "Passionate Development Team",
      "Seamless Client Interactions",
    ],
    icons: "weEmpower",
  },
  {
    title: "We Are With You",
    description:
      "Stay ahead of the competition with our experts who keep a close eye on the ever-evolving technology landscape. We ensure your app remains future-proof by incorporating the latest and upcoming trends into its development.",
    points: [
      "Timely Project Delivery",
      "Problem-Solving Approach",
      "24/7 Support",
    ],

    icons: "weAre",
  },
];

const carouselData = [
  {
    title: "Who She Win",
    logo: "/assests/img/sheWhoWins.svg",
    description:
      "Who She Win is a community and coaching app that helps women rise, connect, and grow. She Who Wins is a women’s coaching and community app that helps you grow, find support, and step into your power.",
    stats: { conversion: "30%", downloads: "15k" },
    bgClass: "sepiaGradient",
    image: "/assests/img/WhoSheWin.png",
  },
  {
    title: "Popseekl",
    logo: "/assests/logo/popseekl.svg",
    description:
      "Creator-driven fashion marketplace with multi-vendor storefronts, AI-powered search, and Stripe Connect split payouts. Built with React Native for iOS and Android.",
    stats: { conversion: "30%", downloads: "450k" },
    bgClass: "grayGradient",
    image: "/assests/img/Popseekl.png",
  },
  {
    title: "Kartshare",
    logo: "/assests/logo/kartShare.svg",
    description:
      "Peer-to-peer kart rental marketplace. Owners list karts, renters book by the hour. Availability calendars, deposits, and in-app chat. React Native on iOS and Android.",
    stats: { conversion: "30%", downloads: "450k" },
    bgClass: "tealGradient",
    image: "/assests/img/Kartshare.png",
  },
  {
    title: "Now",
    logo: "/assests/logo/now.svg",
    description:
      "Saudi service booking marketplace connecting merchants with consumers for salon, gym, and clinic appointments. Smart slot-filling, real-time booking, and merchant analytics — built for iOS and Android with React Native.",
    stats: { conversion: "30%", downloads: "450k" },
    bgClass: "darkOrangeGradient",
    image: "/assests/img/nowApp.png",
  },
];
