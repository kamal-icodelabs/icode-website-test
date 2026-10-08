import React from "react";
import css from "./CostCta.module.css";
import ContentWidth from "@/component/ContentWidth/ContentWidth";
import IconCollection from "@/component/IconCollection/IconCollection";
import { PrimaryBtnLink } from "@/component/Animations/CTAbutton";
import Link from "next/link";

const CostCta = ({ data }) => {
    const { section, ctaInfo } = data || {};

    return (
        <section className={css.section}>
            <ContentWidth>
                <div className={css.ctaContainer}>

                    {/* LEFT CONTENT */}
                    <div className={css.left}>
                        <p className={css.sectionLabel}>{section?.label}</p>

                        <h2 className={css.sectionTitle}>
                            {section?.title}
                        </h2>

                        <p className={css.sectionInfo}>
                            {section?.info}
                        </p>
                    </div>

                    {/* RIGHT CTA */}
                    <div className={css.right}>
                        <h3 className={css.ctaTitle}>
                            {ctaInfo?.ctaTitle}
                        </h3>

                        <div className={css.btnGroup}>
                            <PrimaryBtnLink href={ctaInfo?.btn1Link || '/'} className={css.primaryBtn}>
                                {ctaInfo?.btn1Label}
                                <IconCollection name={"rightArrowTop"} />
                            </PrimaryBtnLink>

                            <Link href={ctaInfo?.btn2Link || '/'} className={css.secondaryBtn}>
                                {ctaInfo?.btn2Label}
                                <IconCollection name={"rightArrowTop"} />
                            </Link>
                        </div>
                    </div>

                </div>
            </ContentWidth>
        </section >
    );
};

export default CostCta;