import Image from "next/image";
import css from "./CaseStudyRealTimeStory.module.css";
import ContentWidth from "@/component/ContentWidth/ContentWidth";

export default function CaseStudyRealTimeStory({ data, id }) {
  const { info, name, founder, avatar } = data;
  return (
    <ContentWidth>
      <div className={css.realTimeStory} id={id}>
        <h2 className={css.sectionTitle}>Real stories, Real Result</h2>

        <div>
          <div className={css.avavtarNname}>
            <Image
              width={52}
              height={52}
              className={css.avatar}
              src={avatar}
              alt="founder"
            />

            <div>
              <p className={css.name}>{name} </p>
              <p className={css.desgination}>{founder}</p>
            </div>
          </div>
          <p className={css.info}>"{info}"</p>
        </div>
      </div>
    </ContentWidth>
  );
}
