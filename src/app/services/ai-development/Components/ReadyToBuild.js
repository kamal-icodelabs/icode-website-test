import React from "react";
import css from "../aiDevStyle.module.css";
import ContentWidth from "@/component/ContentWidth/ContentWidth";
import IconCollection from "@/component/IconCollection/IconCollection";
import Image from "next/image";
import { PrimaryBtnLink } from "@/component/Animations/CTAbutton";

function ReadyToBuild() {
  return (
    <>
      <div className={`${css.ReadyToBuildWrapper}`}>
        <ContentWidth>
          <div className={css.centeredContent}>
            <div className={css.cardContent}>
              <h2 className={css.h2}>Ready to Build or Integrate AI?</h2>
              <p className={css.info}>
                Whether you're launching a new platform, upgrading a legacy
                system, or exploring how AI fits into your product—iCodeLabs is
                your partner.
              </p>

              <div className={css.featureCards}>
                <div className={css.featureBoxCard}>
                  <div className={css.iconWrapper}>
                    <IconCollection name="ringingCall" />
                  </div>
                  <span>Schedule Your Free Consultation</span>
                </div>
                <div className={css.lineBar} />
                <div className={css.featureBoxCard}>
                  <div className={css.iconWrapper}>
                    <IconCollection name="lineRocket" />
                  </div>
                  <span>Launch Your MVP in 3–5 Weeks</span>
                </div>
                <div className={css.lineBar} />
                <div className={css.featureBoxCard}>
                  <div className={css.iconWrapper}>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z"
                        stroke="white"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <span>Request a Demo</span>
                </div>
              </div>

              <PrimaryBtnLink className={css.startBuildBtn} href="/contact">
                Start Building with AI Today
              </PrimaryBtnLink>
            </div>
          </div>
        </ContentWidth>
      </div>
    </>
  );
}

export default ReadyToBuild;
