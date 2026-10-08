import ContentWidth from "@/component/ContentWidth/ContentWidth";
import css from "./CaseStudyWhatWeBuild.module.css";

const CaseStudyWhatWeBuild = ({ data, bulletColor, id, numberColor }) => {
  return (
    <>
      <ContentWidth>
        <div className={css.container} id={id}>
          <h2 className={css.sectionTitle}>What We Built</h2>
          <div className={css.gridContainer}>
            {data.map((item) => (
              <div key={item.id} className={css.card}>
                <div className={css.contentContainer}>
                  <div className={css.header}>
                    <div
                      className={css.number}
                      style={{
                        backgroundColor: bulletColor,
                        color: numberColor
                          ? `${numberColor} !important`
                          : "#fff",
                      }}
                    >
                      {item.id}
                    </div>
                    <h3 className={css.title}>{item.title}</h3>
                  </div>
                  <p className={css.description}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ContentWidth>
    </>
  );
};

export default CaseStudyWhatWeBuild;
