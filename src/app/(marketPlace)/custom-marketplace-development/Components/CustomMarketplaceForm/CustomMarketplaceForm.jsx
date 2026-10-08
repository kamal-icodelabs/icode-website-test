import ContentWidth from "@/component/ContentWidth/ContentWidth";
import css from "./CustomMarketplaceForm.module.css";
import IconCollection from "@/component/IconCollection/IconCollection";
import classNames from "classnames";
import Link from "next/link";

const CustomMarketplaceForm = () => {
  return (
    <>
      <section className={css.CustomMarketplaceFormSection}>
        <ContentWidth>
          <div className={css.ItemWrapper}>
            {/* LEFT CONTENT */}
            <div className={css.formContent}>
              <span className={css.formLabel}>GET STARTED</span>

              <h2 className={css.formHeading}>Tell Us What You're Building</h2>

              <p className={css.formInfo}>
                A 30-minute scoping call is enough to tell you what stack is
                right, what it’ll cost, and how long it takes. No commitment
                required.
              </p>

              <h4 className={css.formPointsHeading}>
                What we’ll cover on the call:
              </h4>

              <ul className={css.formPoints}>
                <li>Your marketplace model and transaction logic</li>
                <li>Whether custom or Sharetribe is the right fit</li>
                <li>Recommended tech stack for your requirements</li>
                <li>Realistic timeline and cost range</li>
                <li>Fixed-price proposal within 48 hours if you proceed</li>
              </ul>
            </div>

            {/* RIGHT FORM */}
            <div className={css.formContainer}>
              <div className={css.rowContainer}>
                <div className={css.inputContainer}>
                  <label>Your Name</label>
                  <input type="text" placeholder="Enter your full name" />
                </div>

                <div className={css.inputContainer}>
                  <label>Email</label>
                  <input type="email" placeholder="Enter your email" />
                </div>
              </div>
              <div className={css.inputContainer}>
                <label>What are you building? (brief description)</label>
                <textarea placeholder="Marketplace URL (Live or Testing)"></textarea>
              </div>

              <div className={css.inputContainer}>
                <label>Marketplace type</label>
                <input type="text" placeholder="Marketplace type..." />
              </div>

              <div className={css.inputContainer}>
                <label>Estimated budget</label>
                <input type="text" placeholder="$8000" />
              </div>

              <div className={css.inputContainer}>
                <label>
                  Do you have an existing platform you're migrating from?
                </label>
                <input type="text" placeholder="Yes / No" />
              </div>

              <button className={css.submitBtn}>
                Book a free Scoping call
                <IconCollection name={"rightArrowTop"} />
              </button>

              <p className={css.contactText}>
                Or email us at hello@icodelabs.co
              </p>
            </div>
          </div>

          {/* CTA SECTION */}
          <div className={classNames(css.ctaSection, css.ctaSectionSpacing)}>
            <div className={css.ctaContentBox}>
              <p className={css.ctaLabel}>Not sure if you need custom?</p>

              <h3 className={css.ctaHeading}>
                Start with Sharetribe — faster, lower risk, proven.
              </h3>

              <Link
                href={"/services/sharetribe#packagesection"}
                className={css.ctaBtn}
              >
                View Sharetribe Packages
                <IconCollection name={"rightArrowTop"} />
              </Link>
            </div>
          </div>
        </ContentWidth>

        <div className={css.ctaSection}>
          <div className={css.orange}></div>
          <div className={css.green}></div>
          <div className={css.blue}></div>
        </div>
      </section>
    </>
  );
};

export default CustomMarketplaceForm;
