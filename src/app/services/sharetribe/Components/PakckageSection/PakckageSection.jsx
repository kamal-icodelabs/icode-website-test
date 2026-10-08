"use client";
import React, { useRef, useState, useEffect } from "react";
import css from "./PakckageSection.module.css";
import ContentWidth from "@/component/ContentWidth/ContentWidth";
import IconCollection from "@/component/IconCollection/IconCollection";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import c1 from "../../../../../assets/imgs/images/clientImgs/c1.png";
import c2 from "../../../../../assets/imgs/images/clientImgs/c2.png";
import Image from "next/image";
import classNames from "classnames";
import Link from "next/link";

const checkIcon = (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="0.75" y="0.75" width="18.5" height="18.5" rx="5.25" stroke="white" stroke-width="1.5" />
    <path d="M14 7L8.5 12.5L6 10" stroke="white" stroke-width="1.5" stroke-linejoin="round" />
  </svg>
);

export default function PakckageSection() {
  const [screenWidth, setScreenWidth] = useState(0);
  const [activeStatIndex, setActiveStatIndex] = useState(0);
  const gridTemplateColumns = stats
    .map((_, i) => (i === activeStatIndex ? '2fr' : '1fr'))
    .join(' ');

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    // Set initial screen width
    setScreenWidth(window.innerWidth);

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={css.mainWrapper} id="packagesection">
      <ContentWidth className={css.packageContainer}>
        <div className={css.contentContainer}>
          <div className={css.titleSmall}>Pricing</div>
          <h2>Flexible Packages for Every Stage</h2>
          <p className={css.contentText}>
            From lean MVPs to fully scaled production-grade builds — transparent pricing, fixed scope, no surprises.
          </p>
        </div>

        <div className={css.packageCardCarousel}>
          {screenWidth <= 1220 && (
            <button ref={prevRef} className={`${css.navBtn} ${css.prevBtn}`}>
              <svg width="42" height="42" viewBox="0 0 42 42" fill="none">
                <circle cx="21" cy="21" r="20.5" fill="white" stroke="#D1D1D1" />
                <path d="M27.7188 20.998L14.5187 20.998" stroke="#1B1B1B" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M18.7207 16.7988L14.5207 20.9988L18.7207 25.1988" stroke="#1B1B1B" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          )}
          <Swiper
            slidesPerView={3}
            spaceBetween={32}
            initialSlide={1}
            loop={false}
            // centeredSlides={screenWidth <= 992 ? true : false}
            modules={screenWidth <= 1220 ? [Navigation] : []}
            onSwiper={(swiper) => {
              if (screenWidth <= 1220 && prevRef.current && nextRef.current) {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
                if (!swiper.navigation.initialized) {
                  swiper.navigation.init();
                }
                swiper.navigation.update();
              }
            }}
            breakpoints={{
              0: { slidesPerView: 1, spaceBetween: 16 },
              500: { slidesPerView: 1.5, spaceBetween: 16 },
              1024: {
                slidesPerView: 2,
                spaceBetween: 16,
              },
              1220: { slidesPerView: 3, spaceBetween: 32 },
            }}
          >
            <SwiperSlide>
              <div className={css.cardLeft}>
                <div className={css.cardIconBadge}>
                  <IconCollection name="startup" />
                </div>
                <h5>{firstCardData.title}</h5>
                <span className={css.textSub}>{firstCardData.subText}</span>
                <h4>{firstCardData.price}</h4>
                <div className={css.bugFreeText}>
                  ✓ 90-day bug-free guarantee included
                </div>
                {/* <div className={css.pauseText}>Pause Or Cancel Anytime</div> */}
                {/* <div className={css.bar} /> */}

                <div className={css.keyPointsWrapper}>
                  <p className={css.featuretitle}>Plan Features:</p>

                  {firstCardData?.featureHeadings.map((item, index) => {
                    return (
                      <div key={index} className={css.keyPoints}>
                        {checkIcon}
                        <p className={css.itemText}>{item}</p>
                      </div>
                    );
                  })}
                </div>
                <a href={firstCardData.btnLink}>
                  Get Started
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.707031 11L10.707 1" stroke="white" stroke-width="2" stroke-linejoin="round" />
                    <path d="M0.707031 1H10.707V11" stroke="white" stroke-width="2" stroke-linejoin="round" />
                  </svg>
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              {" "}
              <div className={css.cardMiddle}>
                <div className={css.cardContentWrapper}>
                  <div className={css.cardRowBox}>
                    <div className={css.cardIconBadge}>
                      <IconCollection name="growth-icon" />
                    </div>
                    <span className={css.popularBadge}>Recommended</span>
                  </div>
                  <div className={css.cardTitle}>
                    {middleCardData.title}
                  </div>
                  <span className={css.textSubMiddle}>{middleCardData.subText}</span>
                  <h4>{middleCardData.price}</h4>
                  <div className={css.bugFreeText}>
                    ✓ 90-day bug-free guarantee included
                  </div>
                  {/* <div className={css.pauseText}>Pause Or Cancel Anytime</div> */}

                  {/* <div className={css.bar} /> */}

                  <div className={css.keyPointsWrapper}>
                    <p className={css.featuretitle}>
                      Plan Features:
                    </p>
                    {middleCardData?.featureHeadings.map((item, index) => {
                      return (
                        <div key={index} className={css.keyPoints}>
                          {checkIcon}
                          <p>{item}</p>
                        </div>
                      );
                    })}
                  </div>
                  <a href={middleCardData.btnLink}>
                    Get Started
                    <IconCollection name="rightArrowTopDark" />
                  </a>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className={css.cardRight}>
                <div className={css.cardIconBadge}>
                  <IconCollection name="enter-price" />
                </div>
                <h5>{thirdCardData.title}</h5>
                <span className={css.textSub}>{thirdCardData.subText}</span>
                <h4>{thirdCardData.price}</h4>
                <div className={css.bugFreeText}>
                  ✓ 90-day bug-free guarantee included
                </div>

                {/* <div className={css.pauseText}>Pause Or Cancel Anytime</div> */}
                {/* <div className={css.bar} /> */}

                <div className={css.keyPointsWrapper}>
                  <p className={css.featuretitle}>Plan Features:</p>

                  {thirdCardData?.featureHeadings.map((item, index) => {
                    return (
                      <div key={index} className={css.keyPoints}>
                        {checkIcon}
                        <p className={css.itemText}>{item}</p>
                      </div>
                    );
                  })}
                </div>
                <a href={thirdCardData.btnLink}>
                  Get Started
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.707031 11L10.707 1" stroke="white" stroke-width="2" stroke-linejoin="round" />
                    <path d="M0.707031 1H10.707V11" stroke="white" stroke-width="2" stroke-linejoin="round" />
                  </svg>
                </a>
              </div>
            </SwiperSlide>
          </Swiper>
          {screenWidth <= 1220 && (
            <button ref={nextRef} className={`${css.navBtn} ${css.nextBtn}`}>
              <svg width="42" height="42" viewBox="0 0 42 42" fill="none">
                <circle cx="21" cy="21" r="20.5" fill="white" stroke="#D1D1D1" />
                <path d="M14.2812 20.998L27.4813 20.998" stroke="#1B1B1B" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M23.2793 16.7988L27.4793 20.9988L23.2793 25.1988" stroke="#1B1B1B" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          )}
        </div>

        <div className={css.bottomBar}>
          <div className={css.botomBarHeading}>
            <h5 className={css.barHeading}>
              Not sure which package fits?
            </h5>
            <div className={css.barSubHeading}>
              Book a free scoping call — we'll tell you honestly based on your marketplace model, timeline, and budget.
            </div>
          </div>
          <a
            href="https://calendly.com/jaytiwary"
            target="_blank"
            rel="noopener noreferrer"
            className={classNames(css.bookcallButton, "primaryGradientBtn")}
          >
            Book a Free Call
            <IconCollection name="rightArrowTop" />
          </a>
        </div>
      </ContentWidth>
      <div className={css.statsSection}>
        <ContentWidth>
          <div className={css.platformSection}>
            <p className={css.tag}>PLATFORM DECISION</p>
            <h2 className={css.heading}>
              Sharetribe or Custom Build?
              <br />
              Here's the Honest Answer.
            </h2>
            <p className={css.subtext}>
              We build both. Here's how we advise founders on which approach fits their situation.
            </p>
            <div className={css.card}>
              <div className={css.column}>
                <h2 className={css.title}>Choose Sharetribe if…</h2>
                <ul className={css.arrowList}>
                  <li><IconCollection name="check-icon" /> You want to launch in 3–6 weeks</li>
                  <li><IconCollection name="check-icon" /> Your model is rental, service, booking, or product</li>
                  <li><IconCollection name="check-icon" /> You're validating before investing heavily</li>
                  <li><IconCollection name="check-icon" /> Stripe Connect works for your payment needs</li>
                  <li><IconCollection name="check-icon" /> You want managed backend infrastructure</li>
                  <li>
                    <IconCollection name="check-icon" /> Budget is <span className={css.highlight}>$3k–$8k</span> range
                  </li>
                </ul>
              </div>
              <div className={css.divider}></div>
              <div className={css.column}>
                <h2 className={css.titleDark}>Consider a custom build if…</h2>
                <ul className={css.arrowList}>
                  <li><IconCollection name="right-arrow" /> Your transaction logic doesn't fit marketplace patterns</li>
                  <li><IconCollection name="right-arrow" /> You need non-Stripe payment infrastructure</li>
                  <li><IconCollection name="right-arrow" /> You require deep backend modifications</li>
                  <li><IconCollection name="right-arrow" /> Your business model is post-validation and scaling</li>
                  <li><IconCollection name="right-arrow" /> You need multi-tenant or white-label architecture</li>
                  <li>
                    <IconCollection name="right-arrow" /> Budget is <span className={css.highlight}>$15k+</span> range
                  </li>
                </ul>
                <Link href="/custom-marketplace-development" className={css.link}>
                  Explore custom marketplace development 
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.707031 11L10.707 1" stroke="#0075F2" stroke-width="2" stroke-linejoin="round"/>
                  <path d="M0.707031 1H10.707V11" stroke="#0075F2" stroke-width="2" stroke-linejoin="round"/>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </ContentWidth>
      </div>
    </div>
  );
}

const firstCardData = {
  title: "Lean",
  subText: "One marketplace flow, launched properly. For founders validating their first marketplace — products, rentals, services, or bookings.",
  price: "$3,000",
  btnLink: "https://calendly.com/jaytiwary",
  statement: "Fixed price. No billing surprises.",
  featuretitle: "Lean Plan Features",
  featureHeadings: [
    "Custom homepage & listing page design — brand colours, fonts, layout (beyond default Sharetribe templates)",
    "One marketplace flow configured — product, rental, service, or booking",
    "Custom listing fields for your vertical — size/condition for products, hourly rate for rentals, credentials for services",
    "Stripe Connect payments — commission structure configured to your model (fixed fee, percentage, or hybrid)",
    "Provider onboarding flow — custom signup steps and listing creation for your supply side",
    "Branded transactional emails — booking confirmed, payment received, listing approved",
    "SEO foundations — meta tags, sitemap, Open Graph, structured data",
    "Web OR mobile app (one platform)",
    "Launch-ready in ~2 weeks",
    "3 months free maintenance & support",
  ],
};

const middleCardData = {
  title: "Full",
  subText: "For marketplaces with more specific flows — scheduling, deposits, shipping, or reverse marketplace logic. All public pages custom designed.",
  price: "$4,000",
  btnLink: "https://calendly.com/jaytiwary",
  statement: "Fixed price. No billing surprises.",
  featuretitle: "Full Plan Features",
  featureHeadings: [
    "Everything in Lean, plus:",
    "All public pages custom designed — homepage, listing, search, provider profile, category pages",
    "2–3 marketplace flows supported — e.g. rental + service, or reverse marketplace (buyers post, providers respond)",
    "Booking & availability logic — time slots, buffer periods, instant vs request booking, cancellation rules",
    "Advanced payment flows — deposits, refunds, split payouts, escrow release post-transaction",
    "Shipping integration (Shippo) OR calendar sync (Cronofy) — your choice based on vertical",
    "Advanced search with Algolia or Typesense — faceted filters, geo-search, relevance ranking",
    "Custom review & trust system — verified profiles, response rates, dispute workflow",
    "Web AND mobile app (both platforms)",
    "Launch-ready in ~4 weeks",
    "3 months free maintenance & support",
  ],
};

const thirdCardData = {
  title: "Pro",
  subText: "You've validated your model and need to scale. Full custom design including internal dashboard pages, AI features, and complex integrations.",
  price: "$6,000+",
  btnLink: "https://calendly.com/jaytiwary",
  statement: "Fixed price. No billing surprises.",
  featuretitle: "Pro Plan Features",
  featureHeadings: [
    "Everything in Full, plus:",
    "Full custom design — all internal pages including user dashboard, booking management, transaction history, admin panel",
    "AI-powered features — listing generation from plain text, smart search recommendations, automated content moderation",
    "Multi-tier business models — subscriptions, memberships, featured listings, tiered commission by provider level",
    "Complex transaction logic — milestone payments, multi-step approvals, escrow, white-label architecture",
    "Complex third-party integrations — KYC/identity verification, CRM sync, Voucherify promotions, ERP connections",
    "Scalable backend — caching, queue management, performance under high transaction volume",
    "Launch-ready in ~6 weeks",
    "6 months free maintenance & support",
  ],
};

const stats = [
  {
    value: "50+",
    label: "Custom Marketplaces Delivered",
    backgroundColor: "#003B79",
  },
  {
    value: "4.9/5",
    label: "Average Client Satisfaction",
    backgroundColor: "#EFF7FF",
  },
  {
    value: "98%",
    label: "On-Time Delivery Rate",
    backgroundColor: "#EFF7FF",
  },
  {
    value: "10x",
    label: "Faster Delivery vs.Traditional Custom Build",
    backgroundColor: "#EFF7FF",
  },
];
