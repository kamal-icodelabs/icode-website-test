"use client";

import React, { useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import css from "./DoBusinessBetter.module.css";
import ContentWidth from "../ContentWidth/ContentWidth";
import IconCollection from "../IconCollection/IconCollection";
import { aiServices, features } from "../helperData";
import Link from "next/link";

const DoBusinessBetter = () => {
  const swiperBreakpoints = useMemo(
    () => ({
      540: { slidesPerView: 1.5 },
      640: { slidesPerView: 2.5 },
      1024: { slidesPerView: 3.5 },
    }),
    [],
  );

  return (
    <div className={css.doItBettercontainer}>
      <ContentWidth>
        <div className={css.contentContainer}>
          <div>
            <p className={css.aiServicesHeading}>AI Services</p>
            <h2 className={css.aiHeading}>
              AI That Builds, Learns, and Delivers.
            </h2>
          </div>
        </div>

        <div className={css.aiToolsList}>
          {aiServices?.map(
            ({ icon, Heading, description, isChatBox, chatHead }, index) => (
              <React.Fragment key={index}>
                {isChatBox ? (
                  <div className={css.chatBox}>
                    <div className={css.chatHead}>{chatHead}</div>
                    <Link href={"https://calendly.com/jaytiwary"}>
                      Book a call 👋
                    </Link>
                  </div>
                ) : (
                  <div className={css.carouselCard}>
                    <div className={css.iconWrapper}>{icon}</div>
                    <h5>{Heading}</h5>
                    <p className="contentText">{description}</p>
                  </div>
                )}
              </React.Fragment>
            ),
          )}
        </div>
      </ContentWidth>
    </div>
  );
};

export default DoBusinessBetter;
