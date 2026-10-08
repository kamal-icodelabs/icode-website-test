import IconCollection from "@/component/IconCollection/IconCollection";
import css from "./HonestGuide.module.css";
import Link from "next/link";
import ContentWidth from "@/component/ContentWidth/ContentWidth";

const HonestGuide = () => {
  return (
    <>
      <section className={css.honestGuideSection}>
        <ContentWidth>
          <div className={css.headingContainer}>
            <span className={css.sectionLabel}>Platform Decision</span>
            <h2 className={css.sectionTitle}>
              Sharetribe or Custom Build — The Honest Guide
            </h2>
            <p className={css.sectionInfo}>
              We build both. Here's exactly how we advise founders on which is
              right for their situation. No upselling — if Sharetribe fits,
              we'll tell you.
            </p>
          </div>

          <div className={css.sectionContentContainer}>
            <div className={css.startShareDiv}>
              <h5>Start with Sharetribe if...</h5>
              <ul className={css.startPoints}>
                <li>You want to launch in 3–6 weeks</li>
                <li>You're still validating before heavy investment</li>
                <li>You're validating before investing heavily</li>
                <li>Stripe Connect works for your payment needs</li>
                <li>
                  Budget is in<span>$3k–$8k</span> range
                </li>
              </ul>

              <Link className={css.linkBtn} href="/">
                 See Sharetribe packages <IconCollection name="rightArrowTop" />
              </Link>
            </div>

            <div className={css.line} />
            <div className={css.considerDiv}>
              <h5>Consider a custom build if...</h5>
              <ul className={css.considerPt}>
                <li>
                  Your transaction logic doesn't fit standard marketplace
                  patterns
                </li>
                <li>
                  You need non-Stripe payment infrastructure or custom payment
                  rails
                </li>
                <li>Multi-tenant or white-label architecture is required</li>
                <li>
                  You need deep backend logic (complex automation, ML, custom
                  APIs)
                </li>
                <li>You've already validated and are building for scale</li>
                <li>Your requirements consistently hit platform limitations</li>
                <li>Budget is in $10k+ and timeline flexibility is available</li>
              </ul>
            </div>
          </div>

          <div className={css.ctaContainer}>
            <div className={css.content}>
              <h5 className={css.ctaTitle}>Not sure? </h5>
              <p className={css.ctaInfo}>
                Book a free 30-minute scoping call. We'll tell you honestly
                which approach fits — and if Sharetribe is the right answer,
                we'll say so. We build both.
              </p>
            </div>

            <Link href="https://calendly.com/jaytiwary" className={css.ctaBtn}>
              Book a call <IconCollection name="rightArrowTop" />
            </Link>
          </div>
        </ContentWidth>
      </section>
    </>
  );
};

export default HonestGuide;
