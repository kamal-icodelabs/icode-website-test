import React from "react";
import css from "./GetFixedPrice.module.css";
import IconCollection from "@/component/IconCollection/IconCollection";
import Link from "next/link";

const GetFixedPrice = () => {
  return (
    <div className={css.getFixedPriceSection}>
      <h2 className={css.sectionTitle}>
        Get a Fixed-Price Quote for Your Marketplace
      </h2>
      <p className={css.sectionInfo}>
        Free 30-minute scoping call. We'll tell you which tier fits, what's
        included, and give you a written proposal within 48 hours. No
        commitment.
      </p>
      <div className={css.btnContainer}>
        <Link href={"https://calendly.com/jaytiwary"} className={css.btnPri}>
          Book a Free Scoping Call  <IconCollection name="rightArrowTop" />
        </Link>
        <Link
          href={"/services/sharetribe#packagesection"}
          className={css.btnSec}
        >
          See Sharetribe Packages <IconCollection name="rightArrowTop" />
        </Link>
      </div>

      <div className={css.green} />
      <div className={css.orange} />
      <div className={css.blue} />
    </div>
  );
};

export default GetFixedPrice;
