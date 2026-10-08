import ContentWidth from "@/component/ContentWidth/ContentWidth";
import css from "./CaseStudyProductGallry.module.css";
import Image from "next/image";

const CaseStudyProductGallry = ({ data, id }) => {
  return (
    <>
      <ContentWidth>
        <div className={css.imgGrid} id={id}>
          {data.map((i) => (
            <div className={css.imgContainer}>
              <Image width={1000} height={1000} src={i} alt="img" />
            </div>
          ))}
        </div>
      </ContentWidth>
    </>
  );
};

export default CaseStudyProductGallry;
