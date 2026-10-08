import React from "react";
import dynamic from "next/dynamic";
import ContentWidth from "@/component/ContentWidth/ContentWidth";
import HeroSectionContact from "./components/HeroSectionContact";
import FormCardHero from "./components/FormCardHero";
import css from "./ContactUs.module.css";

const ContactusForm = dynamic(() => import("./components/ContactusForm"));

const Page = () => {
  return (
    <div>
      <HeroSectionContact />
      <ContentWidth>
        <div className={css.formNcardWrapper}>
          <FormCardHero />
          <ContactusForm />
        </div>
      </ContentWidth>
    </div>
  );
};

export default Page;
