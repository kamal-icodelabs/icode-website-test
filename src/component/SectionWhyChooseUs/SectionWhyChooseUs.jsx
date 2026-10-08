"use client";

import React, { useState } from "react";
import css from "./SectionWhyChooseUs.module.css";
import ContentWidth from "../ContentWidth/ContentWidth";
import IconCollection from "../IconCollection/IconCollection";
import Link from "next/link";
import { whyChooseUsContent } from "../helperData";
import { PrimaryBtnLink } from "../Animations/CTAbutton";

export default function WhyChooseUs() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) =>
    setActiveIndex(activeIndex === index ? null : index);

  return (
    <div className={css.WhyChooseUsContainer}>
      <ContentWidth>
        <div className={css.whyCHooseTab}>
          Why <span>iCode</span>Labs?
        </div>
        <h2>What Makes iCodeLabs Different</h2>
        <p>
          At iCodeLabs, we are passionate about creating custom mobile and web applications that solve real-world problems. With a team of skilled developers, designers, and digital strategists.
        </p>

        {/* Static Grid Section */}
        <div className={css.contentGridWrapper}>
          {whyChooseUsContent?.map((item, index) => (
            <div className={css.boxContent} key={index}>

              <h6 className={css.heading}>
                <span>{item.icon}</span>
                {item.title}</h6>
              <div className={css.contentWrapper}>
                <p className={css.description}>{item.description}</p>
                <ul className={css.points}>
                  {item?.points?.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Accordion Section */}
        <div className={css.whyChooseAccordionWrapper}>
          {whyChooseUsContent?.map((item, index) => (
            <div
              key={index}
              className={`${css.accordionItem} ${css[`accordionItem${String(index + 1).padStart(2, "0")}`]
                }`}
            >
              <button
                className={css.accordionHeader}
                onClick={() => toggleAccordion(index)}
              >
                {item?.title}
                <span className={css.dropDownIcons}>
                  <IconCollection
                    name={activeIndex === index ? "dropdownUP" : "dropdown"}
                  />
                </span>
              </button>

              <div
                className={`${css.accordionBody} ${activeIndex === index ? css.open : ""
                  }`}
              >
                <div className={css.accordionContent}>
                  <p>{item?.description}</p>
                  <ul>
                    {item?.points?.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call-to-Action Card */}
        
      </ContentWidth>
    </div>
  );
}
