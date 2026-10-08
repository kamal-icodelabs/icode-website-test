import ContentWidth from "@/component/ContentWidth/ContentWidth";
import css from "./CaseStudyTheme.module.css";

// Helper to convert hex to RGB
const hexToRgb = (hex) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` : '';
};

const CaseStudyTheme = ({ data, id }) => {
  const { title, info, colors, typography } = data;
  return (
    <section className={css.section} id={id}>
      <ContentWidth>
        <div className={css.wrapper}>
          {/* TOP CONTENT */}
          <div className={css.topContent}>
            <h2 className={css.sectionTitle}>{title}</h2>
            <p className={css.sectionInfo}>{info}</p>
          </div>

          {/* COLOR GRID */}
          <div className={css.colorGrid}>
            {/* LEFT LARGE CARD */}
            <div
              className={`${css.colorCard} ${css.largeCard}`}
              style={{
                backgroundColor: colors[0].hex,
                color: colors[0].textColor
              }}
            >
              <div>
                <p className={css.colorName}>{colors[0].name}</p>
                <p>{colors[0].hex}</p>
                <span>RGB: {colors[0].rgb || hexToRgb(colors[0].hex)}</span>
              </div>
            </div>

            {/* RIGHT GRID */}
            <div className={css.rightGrid}>
              {colors.slice(1).map((item) => (
                <div
                  key={item.id}
                  className={css.colorCard}
                  style={{
                    backgroundColor: item.hex,
                    color: item.textColor
                  }}
                >
                  <div>
                    <p className={css.colorName}>{item.name}</p>
                    <p>{item.hex}</p>
                    <span>RGB: {item.rgb || hexToRgb(item.hex)}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* TYPOGRAPHY */}
          <div style={{ background: typography?.bgColor }} className={css.fontSection}>
            {/* LEFT */}
            <div className={css.fontLeft}>
              <h3 style={{ fontFamily: `var(${typography?.fontFamily?.fontVariable})`, color: typography?.fontFamily?.color }}>
                {typography?.fontFamily?.label}
                <br />
                <span>
                  {typography?.fontFamily?.primaryFontWeight}
                </span>
              </h3>
              <br />
              <div
                className={css.bigText}
                style={{ fontFamily: `var(${typography.bigText?.fontVariable})`, color: typography?.bigText?.color }}
              >
                {typography?.bigText?.label}
              </div>
            </div>

            {/* RIGHT */}
            <div className={css.fontRight}>
              <div className={css.characters}>
                {typography.secondary.characters.map((char, index) => (
                  <span style={{ fontFamily: `var(${typography?.secondary?.fontVariable})`, color: typography?.secondary?.charactersColor }} key={index}>
                    {char}
                  </span>
                ))}
              </div>

              <div className={css.secondaryFont}>
                <h3 style={{ color: typography?.secondary?.color, fontFamily: `var(${typography?.secondary?.fontVariable})` }}>
                  {typography?.secondary?.fontFamily}
                </h3>

                <p style={{ fontFamily: `var(${typography?.secondary?.fontVariable})`, color: typography?.secondary?.charactersColor }}>{typography?.secondary?.fontWeight}</p>
              </div>
            </div>
          </div>
        </div>
      </ContentWidth>
    </section>
  );
};

export default CaseStudyTheme;
