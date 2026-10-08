import ContentWidth from "@/component/ContentWidth/ContentWidth";

const CaseStudyGallaryLayout = ({ children, id }) => {
  return (
    <section id={id}>
      <ContentWidth>
        {children}
      </ContentWidth>
    </section>
  );
};

export default CaseStudyGallaryLayout;
