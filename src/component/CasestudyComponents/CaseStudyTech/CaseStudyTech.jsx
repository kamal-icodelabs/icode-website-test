import ContentWidth from "@/component/ContentWidth/ContentWidth";
import css from "./CaseStudyTech.module.css";
import React from "react";


const CaseStudyTech = ({ data, id }) => {
  const { title, info, techStack, color } = data;

  return (
    <section className={css.CaseStudyTech} id={id}>
      <ContentWidth>
        <h2 className={css.sectionTitle}>{title}</h2>

        <p className={css.sectionInfo}>{info}</p>

        <div className={css.techContainer} style={{ borderColor: color }}>
          <div className={css.tableHeader}>
            <div className={css.layer} role="columnheader">
              <span className={css.columnLabel} style={{ backgroundColor: color }}>LAYER</span>
            </div>

            <div className={css.technology} role="columnheader">
              <span className={css.columnLabel} style={{ backgroundColor: color }}>TECHNOLOGY</span>
            </div>
          </div>

          <div className={css.tech}>
            {techStack.map((item, index) => (
              <React.Fragment key={index} className={css.tableRow}>
                <div style={{ borderColor: color }} className={css.layer} >
                  <p style={{ borderColor: color }}>{item.layer}</p>
                </div>

                <div className={css.technology}>
                  <p style={{ borderColor: color, color: color }}>{item.technology}</p>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </ContentWidth>
    </section>
  );
};

export default CaseStudyTech;
