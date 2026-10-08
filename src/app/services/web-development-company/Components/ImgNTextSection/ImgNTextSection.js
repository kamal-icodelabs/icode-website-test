"use client";
import dynamic from "next/dynamic";
import ContentWidth from "@/component/ContentWidth/ContentWidth";
import Image from "next/image";
import Link from "next/link";
import css from "./ImgNTextSection.module.css";
import { deliveryData, techItems, valueProps } from "@/app/helpData";
import { PrimaryBtnLink } from "@/component/Animations/CTAbutton";

// Dynamically import IconCollection with SSR disabled to prevent hydration issues
const IconCollection = dynamic(
  () => import("@/component/IconCollection/IconCollection"),
  {
    ssr: false,
  }
);

export default function ImgNTextSection() {
  const items = [
    { icon: "aiCloud", id: "aiCloud" },
    { icon: "menfunnelToDollar", id: "menfunnelToDollar" },
    { icon: "growthUp", id: "growthUp" },
  ];

  const renderText = (id) => {
    switch (id) {
      case "aiCloud":
        return (
          <div>
            Next-Gen Web Development Services, Backed By <br />
            <span>AI Capabilities</span>
          </div>
        );
      case "menfunnelToDollar":
        return (
          <div>
            Web Development For Higher Engagement, <span>Conversion &</span>{" "}
            <span>Retention</span>
          </div>
        );
      case "growthUp":
        return (
          <div>
            User-Centric Web Design That Powers Your <span>Brand</span>{" "}
            <span>Growth</span>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <ContentWidth className={css.mainWrapper}>
        <div className={css.usbContainer}>
          {items.map(({ icon, id }) => (
            <div className={css.usbItem} key={id}>
              <IconCollection name={icon} />
              <h3>{renderText(id)}</h3>
            </div>
          ))}
        </div>

        <div className={css.imgNcontentWrapper}>
          <Image
            src="/assests/img/webDev_stayFocus.png"
            width={648}
            height={363}
            alt="Web development team focused"
            loading="lazy"
            onError={() => console.error("Image failed to load")}
          />
          <div className={css.contentContainer}>
            <h2>Stay Focused, We Handle the Tech.</h2>
            <p>
              Our expert team designs and delivers platforms end-to-end — so you can focus on growth while we handle UX, integrations, and scalability.

            </p>
            <p>
              Ready to offload the tech headaches?
            </p>
            <PrimaryBtnLink href="https://calendly.com/jaytiwary" className="primaryBtn">
              Book a free strategy session today
            </PrimaryBtnLink>
          </div>
        </div>
      </ContentWidth>
    </div>
  );
}

export function GradientImgNText() {
  return (
    <div className={css.GradientImgNTextWrapper}>
      <div className={css.bgWrapper}>
        <div className={css.glowbgLeft} />
        <div className={css.leftContainer}>
          <div>
            <h2>
              Turn Ideas Into Scalable Web Apps — With Experts You Can Trust
            </h2>
            <p>  At iCodeLabs, we don’t just build websites — we engineer fast, scalable, and business-ready web applications. Our experienced team ensures your project is delivered on time, optimized for performance, and built for growth.
            </p>

            <a href="/contact" className="primaryBtnWhite">
              Start Your Project Today<span>👋</span>
            </a>
          </div>
        </div>
        <div
          className={css.rightContainer}
        ></div>
      </div>


    </div>
  );
}

export function DeliveryWebSolnSection() {
  return (
    <section className={css.DeliveryWebSolnSection}>
      <ContentWidth className={css.contentPadding}>
        <div className={css.contentContainer}>
          <h2>Deliver Web Solutions With Team iCodeLabs</h2>
          <p>
            From discovery to deployment, we design, build, and scale modern web apps—fast, secure, and tailored to your goals.
          </p>
        </div>

        <div className={css.contentNimg}>
          <div className={css.gridContainer}>
            {deliveryData.map((item, index) => (
              <div className={css.itemBox} key={index}>
                <Image
                  src={item.icon}
                  width={50}
                  height={50}
                  alt={item.title}
                  loading="lazy"
                />
                <div className={css.contentBox}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className={css.imgContainer}>
            <Image
              src="/assests/img/humanLookingInScreen.png"
              width={429}
              height={754}
              quality={100}
              alt="Developer working on screen"
              loading="lazy"
            />
          </div>
        </div>
      </ContentWidth>
    </section>
  );
}

export function OurProficiency() {
  return (
    <ContentWidth className={css.OurProficiencySection}>
      <div className={css.contentContainer}>
        <h2>Our Web Development Technology Stack</h2>
        <p>
          We use modern, battle-tested technologies across frontend, backend, and cloud infrastructure to build scalable, high-performance web applications.
        </p>
      </div>

      <div className={css.gridContainer}>
        {techItems.map((tool, index) => (
          <div key={index} className={css.gridItem}>
            <div className={css.icon}>
              <IconCollection name={tool.icon} />
            </div>
            <div>
              <h3>{tool.title}</h3>
              <p>{tool.description}</p>
            </div>
          </div>
        ))}
      </div>
    </ContentWidth>
  );
}

export function YourSrcForWebDevSection() {
  return (
    <ContentWidth className={css.YourSrcForWebDevSection}>
      <div className={css.contentContainer}>
        <h2>Why Businesses Choose iCodeLabs for Web Development</h2>
        <p>
          More than code — we deliver speed, scalability, and reliability. From idea to deployment, our team ensures your web apps perform flawlessly and drive measurable business results.
        </p>
      </div>

      <div className={css.cardContainer}>
        {valueProps.map((item, index) => (
          <div key={index} className={css.cardItem}>
            <IconCollection name={item.icon} />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </ContentWidth>
  );
}

// Ensure data is consistently loaded
export async function getStaticProps() {
  return {
    props: {
      deliveryData,
      techItems,
      valueProps,
    },
  };
}
