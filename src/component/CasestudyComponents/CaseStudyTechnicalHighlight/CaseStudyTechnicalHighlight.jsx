import ContentWidth from "@/component/ContentWidth/ContentWidth";
import css from "./CaseStudyTechnicalHighlight.module.css";

const CaseStudyTechnicalHighlight = ({ bulletColor, data, id }) => {
  return (
    <section id={id}>
      <ContentWidth>
        <div className={css.hightlightSection}>
          <h2 className={css.sectionTitle}>Technical Highlights</h2>

          <ul className={css.ptContainer}>
            {data.map((pt) => (
              <li key={`key-${pt}`} className={css.pt}>
                <span
                  style={{ background: bulletColor }}
                  className={css.bullet}
                />
                {pt}
              </li>
            ))}
          </ul>
        </div>
      </ContentWidth>
    </section>
  );
};

export default CaseStudyTechnicalHighlight;
