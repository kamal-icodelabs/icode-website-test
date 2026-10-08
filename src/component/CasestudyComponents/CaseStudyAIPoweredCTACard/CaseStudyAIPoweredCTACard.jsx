import IconCollection from "@/component/IconCollection/IconCollection";
import css from "./CaseStudyAIPoweredCTACard.module.css";
import ContentWidth from "@/component/ContentWidth/ContentWidth";
import Link from "next/link";

export default function CaseStudyAIPoweredCTACard({ data, id }) {
  const { title, info, link, linkLabel, stats, badge } = data;
  return (
    <ContentWidth className={css.pb}>
      <div className={css.container} id={id}>
        <div className={css.contentContainer}>
          {badge ? <span className={css.badge}>{badge}</span> : null}

          <h2 className={css.title}>{title}</h2>

          <p className={css.info}>{info}</p>

          {Array.isArray(stats) && stats.length > 0 ? (
            <ul className={css.stats}>
              {stats.map((stat, idx) => (
                <li className={css.statItem} key={`${stat.label}-${idx}`}>
                  <span className={css.statValue}>{stat.value}</span>
                  <span className={css.statLabel}>{stat.label}</span>
                </li>
              ))}
            </ul>
          ) : null}

          <Link href={link} className={css.btn}>
            {linkLabel} <IconCollection name="rightArrowTop" />
          </Link>
        </div>
      </div>
    </ContentWidth>
  );
}
