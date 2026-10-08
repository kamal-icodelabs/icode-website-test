import ContentWidth from "@/component/ContentWidth/ContentWidth";
import css from "./PlatformIntegration.module.css";
import { PrimaryBtnLink } from "@/component/Animations/CTAbutton";
import IconCollection from "@/component/IconCollection/IconCollection";

const PlatformIntegration = ({ data }) => {
  const { section, integrations, cta } = data;

  return (
    <section className={css.section}>
      <ContentWidth>
        {/* Heading */}
        <div className={css.sectionHeading}>
          <p className={css.sectionLabel}>{section?.label}</p>
          <h2 className={css.sectionTitle}>{section?.title}</h2>
          <p className={css.sectionDescription}>{section?.description}</p>
        </div>

        {/* Integrations logos */}
        <div className={css.logoWrapper}>
          {integrations?.map((item, index) => (
            <div key={index} className={css.logoCard}>
              <img src={item.image} alt={item.name} className={css.logoImg} />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={css.ctaCard}>
          <div className={css.ctaContent}>
            <h3 className={css.ctaTitle}>{cta.ctaTitle}</h3>
            <p className={css.ctaText}>{cta.subInfo}</p>
          </div>

          <PrimaryBtnLink href={cta.link}>{cta?.linkLabel} <IconCollection name={'rightArrowTop'} /></PrimaryBtnLink>
        </div>
      </ContentWidth>
    </section>
  );
};

export default PlatformIntegration;
