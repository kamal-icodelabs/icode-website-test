"use client";

import Link from "next/link";
import css from "./CaseStudyChallenge.module.css";
import ContentWidth from "@/component/ContentWidth/ContentWidth";

export default function CaseStudyChallenge({ data, id, slug }) {
  const { title, info, link, linklabel, color } = data;

  const handleLiveSiteClick = () => {
    if (typeof window === "undefined" || typeof window.gtag !== "function") return;
    window.gtag("event", "view_live_site", {
      event_category: "Case Study",
      event_label: slug || "",
      value: 1,
    });
  };

  return (
    <section id={id} className={css.challengeSection}>
      <ContentWidth>
        <div className={css.challengeContent}>
          <div className={css.challengeHeading}>
            <h2>{title}</h2>
            {info.map((i) => (
              <p key={`key-${i}`}>{i}</p>
            ))}
          </div>

          <div className={css.websiteLink}>
            <span className={css.websiteLabel}>Website</span>
            <Link
              href={link}
              onClick={handleLiveSiteClick}
              style={{ color: `${color} !important` }}
            >
              {linklabel}
            </Link>
          </div>
        </div>
      </ContentWidth>
    </section>
  );
}
