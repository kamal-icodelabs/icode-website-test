'use client';

import React, { useState } from "react";
import css from "./ImgNcontentSection.module.css";
import ContentWidth from "@/component/ContentWidth/ContentWidth";
import Link from "next/link";
import IconCollection from "@/component/IconCollection/IconCollection";
import Image from "next/image";
import img1 from "../../../../../assets/imgs/images/web-dev/img1.png";
import img2 from "../../../../../assets/imgs/images/web-dev/img2.png";
import img22 from "../../../../../assets/imgs/images/web-dev/img22.png";
import img3 from "../../../../../assets/imgs/images/web-dev/img3.png";
import img4 from "../../../../../assets/imgs/images/web-dev/img4.png";
import img5 from "../../../../../assets/imgs/images/web-dev/img5.png";

export default function ImgNcontentSection() {
  return (
    <ContentWidth className={css.ImgNcontentSection}>
      <div className={css.imgNcontentWrapper}>
        <Image
          src="/assests/img/Make your website easy.png"
          className={css.img}
          width={648}
          height={526}
          alt="..."
          loading="lazy"
        />
        <div className={css.contentContainer}>
          <h2>
            Make your website easy to discover on Google and other search
            engines
          </h2>
          <p>
            With technical and creative expertise, we drive high-volume organic
            traffic that converts visitors into customers. We help your site
            become more visible and trustworthy both for your audience and web
            crawlers.
          </p>
          <Link className="primaryBtn" href="/contact">
            Free Website Analysis
            <IconCollection name={"rightArrowTop"} />
          </Link>
        </div>
      </div>

      <div className={css.statsContainer}>
        {statsData.map((i, index) => {
          return (
            <>
              <div className={css.statsBox}>
                <h2>{i.number}</h2>
                <p> {i.content}</p>
              </div>
            </>
          );
        })}

        <Link className="primaryBtn" href="/contact">
          Free Website Analysis
          <IconCollection name={"rightArrowTop"} />
        </Link>
      </div>
    </ContentWidth>
  );
}

const statsData = [
  {
    number: "350+",
    content: "Current clients",
  },
  {
    number: "12 weeks",
    content: `On Average to Build
a Custom Website`,
  },
  {
    number: "45",
    content: `Gold, Silver, and Bronze
Design Awards Won`,
  },
];

export function EmpowerYourBusiness() {
  return (
    <section className={css.EmpowerYourBusinessSection}>
      <ContentWidth>
        <div className={css.contentContainer}>
          <h2>
            Empower Your Business Presence with a Range of Digital Marketing
            Solutions
          </h2>

          <p>
            With our all-encompassing digital marketing services, our team of
            experts is dedicated to elevating your business's online presence
            and global reach.
          </p>
        </div>

        <div className={css.gridContainer}>
          {valueProps.map((item) => (
            <div key={item.title} className={css.gridItem}>
              <Image width={50} height={50} src={item.icon} loading="lazy" alt={item.title} />
              <h5>{item.title}</h5>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </ContentWidth>
    </section>
  );
}

const valueProps = [
  {
    icon: "/assests/icons/digitalMarketing/growth.svg",
    title: "Search Engine Optimization – SEO",
    description:
      "Leveraging meticulous keyword research and ethical practices, we guarantee top rankings across major search engines. Witness the power of organic growth as your online visibility soars.",
  },
  {
    icon: "/assests/icons/digitalMarketing/smo.svg",
    title: "Social Media Marketing - SMO",
    description:
      "Stay seamlessly connected to your audience through our potent social media strategies. Whether working independently or collaboratively, we keep your social community captivated and engaged.",
  },
  {
    icon: "/assests/icons/digitalMarketing/dollarcoin.svg",
    title: "Pay Per Click – PPC",
    description:
      "Embrace the power of instant impact! While SEO fuels long-term growth, our PPC campaigns provide an immediate boost. Our seasoned experts ensure optimal utilization of your funds, maximizing returns. With a decade of industry experience, we strategically lead your Paid Ad-campaigns.",
  },
  {
    icon: "/assests/icons/digitalMarketing/rating.svg",
    title: "Online Reputation Management - ORM",
    description:
      "Preserve and elevate your online standing with our seasoned experts. Safeguard your valuable reputation and reap the rewards of lasting, tangible benefits.",
  },
  {
    icon: "/assests/icons/digitalMarketing/aws.svg",
    title: "Amazon Marketing",
    description:
      "Finding your footing on Amazon is no cakewalk! With fierce competition abound, standing out becomes a challenge. Fear not, our experienced Amazon marketing experts are here to guide you. We'll craft a customized strategy that maximizes your budget, propelling your products to the forefront.",
  },
  {
    icon: "/assests/icons/digitalMarketing/note.svg",
    title: "Content Writing",
    description:
      "Our SEO-savvy content writers craft compelling marketing copy that informs and persuades, aligning seamlessly with your business objectives. Witness the magic of impactful communication.",
  },
];

export function AllInOneSolnSection() {
  return (
    <>
      <ContentWidth className={css.AllInOneSolnSectionWrapper}>
        <div className={css.contentContainer}>
          <h2>Icodelasbs: Your All-in-One Digital Growth Partner </h2>
        </div>

        <div className={css.seoGrid}>
          {seoServices.map((service, index) => (
            <div className={css.seoCard} key={index}>
              <div className={css.seoCardTop}
                style={{ backgroundColor: service.bgColor }}
              >
                <Image src={service.img} alt={service.title} width={200} height={150} loading="lazy" />
                <div className={css.seoCard2ndImg}>
                  {service?.img2?.length > 1 && <Image src={service.img2} alt={`${service.title} secondary`} width={200} height={150} loading="lazy" />}
                </div>
              </div>
              <div className={css.seoCardContent}>
                <h6 className={css.seoTitle}>{service.title}</h6>
                <p className={css.seoDescription}>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </ContentWidth>
    </>
  );
}

const seoServices = [
  {
    title: "In-Depth Keyword Research",
    description:
      "Keywords are vital for attracting online customers, and our experts excel in analyzing high-priority keywords, both long and short-tail.",
    bgColor: "#F7F2FF",
    img: img1.src,
  },
  {
    title: "SEO for Google Business Listing",
    description:
      "For local businesses, being easily discoverable on Google is crucial. We optimize your Google Business Listing by updating relevant information and engaging more people with your business. effortlessly.",
    bgColor: "#E9F1FF",
    img: img2.src,
    img2: img22.src,
  },
  {
    title: "Technical Optimization",
    description:
      "An intriguing aspect of digital marketing is technical optimization, which enhances crawling capabilities. In simple terms, it involves refining everything except content optimization and link building.",
    bgColor: "#FDF2E3",
    img: img3.src,
  },
  {
    title: "Off-Page Optimization",
    description:
      "Building strong relationships with clients and connecting with potential customers is one of our strengths. Our dedicated teams take care of managing social media, backlinks, promotions, and more.",
    bgColor: "#E5F8DB",
    img: img4.src,
  },
  {
    title: "Local SEO Optimization",
    description:
      "While capturing the global market is essential, it is equally important to connect with your local customers. Our effective local SEO strategies drive more traffic.",
    bgColor: "#E8F8F6",
    img: img5.src,
  },
];

// export function BlankSection() {
//   return <div className={css.blankSection}></div>;
// }

export function SmartChoice(params) {
  return (
    <ContentWidth className={css.smartChoiceWrapper}>
      <div className={css.contentContainer}>
        <h2>
          Make the <span>Smarter</span> Choice
        </h2>

        <p>
          From the local markets to global audiences, we’ve got you covered.
        </p>
      </div>

      <div className={css.cardContainer}>
        <div className={css.cardOne}>
          <ul>
            {cardOnePoints.map((i, index) => (
              <li key={index}>
                <IconCollection name="redCross" /> {i}
              </li>
            ))}
          </ul>

          <div className={css.innerCardContainer}>
            <Image
              src="/assests/img/makesmartonecardone.png"
              width={544}
              height={274}
              loading="lazy"
            />
          </div>
        </div>

        <div className={css.cardTwo}>
          <div className={css.logoContainer}>
            <IconCollection name="icodeLogo" />
            <h5>
              <span>Icode</span>labs
            </h5>
          </div>
          <ul>
            {cardTwoPoints.map((i, index) => (
              <li key={index}>
                <IconCollection name="blueTick" /> {i}
              </li>
            ))}
          </ul>

          <div className={css.innerCardContainer}>
            <Image
              width={319}
              height={232}
              src="/assests/img/makesmarterone.png"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </ContentWidth>
  );
}

const cardOnePoints = [
  "No intent check. Usually cannibalise their own content.",
  "Old school approach. Not at all scalable.",
  "Pricing latched on number of words.",
  "Slow implementation. Limited content production capacity.",
  "Varied experience based on team assigned to you.",
];

const cardTwoPoints = [
  "Focus on intent, not keywords.",
  "Future-proof your marketing with LLM optimization.",
  "Simple outcome based monthly pricing. No lock-ins.",
  "Go live faster, scale quickly to dominate your niche.",
  "Access top in-house SEO experts & proprietary AI platform.",
];

export function WeBuildForToday() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (value) => {
    setActiveIndex(value);
  };
  return (
    <>
      <ContentWidth className={css.WeBuildForTodayWrapper}>
        <div className={css.contentContainer}>
          <h2>We Build for Today’s Traffic & Tomorrow’s Expansion </h2>
          <p>
            Learn how our 6-step approach streamlines success and efficiency.
          </p>
        </div>

        <div className={css.verticalTabWrapper}>
          <div className={css.leftSection}>
            {verticalTabData.map((i, index) => {
              return (
                <>
                  <div
                    className={`${css.itemBox} ${activeIndex === index ? css.activeState : ""
                      }`}
                    onClick={() => handleClick(index)}
                  >
                    <div className={css.numberbox}>
                      <span className="subTitle"> {i.number} </span>{" "}
                    </div>

                    <div className={css.contentBox}>
                      <h5>{i.title}</h5>
                      <p>{i.description}</p>
                    </div>
                  </div>
                </>
              );
            })}
          </div>

          <div className={css.rightSection}>
            <div className={css.contentBox}>
              <h5>{verticalTabData[activeIndex].content.heading}</h5>
              <p>{verticalTabData[activeIndex].content.para}</p>
            </div>

            <Image
              src={verticalTabData[activeIndex].content.img}
              width={803}
              height={488}
              loading="lazy"
            />
          </div>
        </div>
      </ContentWidth>
    </>
  );
}

const verticalTabData = [
  {
    number: "1",
    title: "Research",
    description:
      "An intriguing aspect of digital marketing is technical optimization, ",
    content: {
      heading: "We find what your customers are searching for.",
      para: "We dig into your niche to discover untapped opportunities and create a monthly keyword plan tailored specifically for your business.",
      img: "/assests/img/digital-marketing/googleSrc.png",
    },
  },
  {
    number: "2",
    title: "Plan",
    description:
      "An intriguing aspect of digital marketing is technical optimization",
    content: {
      heading: "We map out content that ranks.",
      para: "Our proprietary AI platform scrapes millions of top-ranking pages, and creates an outline that match exactly what your audience is searching for.",
      img: "/assests/img/digital-marketing/fillContent.png",
    },
  },
  {
    number: "3",
    title: "Create",
    description:
      "An intriguing aspect of digital marketing is technical optimization.",
    content: {
      heading: "We find and fill content gaps.",
      para: "We your approval, our expert writers dedicate a full day to crafting content specifically designed to outrank the top competing articles.",
      img: "/assests/img/digital-marketing/map.png",
    },
  },
  {
    number: "4",
    title: "Publish",
    description:
      "An intriguing aspect of digital marketing is technical optimization.",
    content: {
      heading: "We manage publishing from draft to live site.",
      para: "We handle the publishing process end-to-end, connecting with your CRM and implementing proven SEO practices that maximize your ontent’s visibility. - any awkward phrasing.",
      img: "/assests/img/digital-marketing/publication.png",
    },
  },
  {
    number: "5",
    title: "Analyse",
    description:
      "An intriguing aspect of digital marketing is technical optimization.",
    content: {
      heading: "We track what’s working and what’s not.",
      para: "Every two weeks, we analyze your content performance and deliver detailed reports showing exactly where you’re gaining traffic and rankings.",
      img: "/assests/img/digital-marketing/track.png",
    },
  },
  {
    number: "6",
    title: "Amplify",
    description:
      "An intriguing aspect of digital marketing is technical optimization.",
    content: {
      heading: "We build relevant links that boost your rankings.",
      para: "To strengthen your site’s authority, we build quality backlinks from relevant, trusted websites in your industry, accelerating your ranking progress.",
      img: "/assests/img/digital-marketing/webuild.png",
    },
  },
];

export function LetsMaximizeYour({ data, title }) {
  return (
    <>
      <section className={css.LetsMaximizeYourWrapper}>
        {/* <ContentWidth>
          <div className={css.textNimgContainer}>
            <div className={css.contentContainer}>
              <h2>Let's Maximize Your Organic Leads</h2>
              <p>
                We help your business get the maximum out of each step of your
                marketing funnel, so you can increase revenue, improve brand
                visibility and loyalty, and achieve leadership in your industry.
              </p>
              <Link href={"#"} className="primaryBtn">
                Schedule a Call With Us!
              </Link>
            </div>
          </div>
        </ContentWidth> */}
        <div className={css.GradientImgNTextWrapper}>
          <div className={css.bgWrapper}>
            <div className={css.glowbgLeft} />
            <div className={css.leftContainer}>
              <div>
                <h2>
                  Let's Maximize Your Organic Leads
                </h2>
                <p>
                  We help your business get the maximum out of each step of your
                  marketing funnel, so you can increase revenue, improve brand
                  visibility and loyalty, and achieve leadership in your industry.
                </p>

                <Link href="https://calendly.com/jaytiwary" className="primaryBtn">
                  Schedule a Call With Us!
                </Link>
              </div>
            </div>
            <div
              className={css.rightContainer}
            ></div>
          </div>


        </div>
      </section>
    </>
  );
}
