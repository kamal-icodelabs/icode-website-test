import Image from "next/image";
import css from "../ContactUs.module.css";

export default function FormCardHero() {
  return (
    <div className={css.formCard}>
      <h2>Your Success Begins Here. Let’s Connect!</h2>
      <p>
        Partner with us to drive your project forward with custom white-label
        solutions and on-demand developers. Your vision, powered by our
        expertise.
      </p>
      <Image
        src="/assests/img/contact.png"
        width={460}
        height={494}
        alt="iCodelabs team — get in touch"
        loading="lazy"
      />
    </div>
  );
}
