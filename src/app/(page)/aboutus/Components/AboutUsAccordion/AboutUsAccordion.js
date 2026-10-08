"use client";
import React, { useState } from "react";
import css from "./AboutUsAccordion.module.css";
import IconCollection from "@/component/IconCollection/IconCollection";
import Image from "next/image";

export default function AboutUsAccordion({ data }) {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={css.aboutUsAccordionWrapper}>
      {data.map((item, index) => (
        <div key={index} className={css.accordionBox}>
          <div className={css.header} onClick={() => handleToggle(index)}>
            {openIndex === index && (
              <div className={css.imgNtoggle}>
                <>
                  <Image
                    src={item.coreIcon}
                    width={40}
                    height={40}
                    alt={item.title}
                    loading="lazy"
                  />
                  <IconCollection
                    name={
                      openIndex === index ? "accordionMinus" : "accordionPlus"
                    }
                  />
                </>
              </div>
            )}
            <div className={css.headerContent}>
              <h3 className={css.title}>{item.title}</h3>
              {openIndex !== index && (
                <IconCollection
                  name={
                    openIndex === index ? "accordionMinus" : "accordionPlus"
                  }
                />
              )}
            </div>
          </div>
          <div
            className={`${css.contentBox} ${openIndex === index ? css.open : ""}`}
          >
            <p className={css.info}>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
