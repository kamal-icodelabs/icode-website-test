"use client";

import Image from "next/image";
import css from "./ProjectInfoCard.module.css";
import Link from "next/link";
import classNames from "classnames";
import { useRef, useEffect } from "react";

const cloudinaryLoader = ({ src, width, quality }) => {
  if (!src || typeof src !== "string" || src.indexOf("res.cloudinary.com") === -1)
    return src;
  const q = quality || "auto";
  return src.replace("/upload/", `/upload/f_auto,q_${q},c_limit,w_${width}/`);
};

const ProjectInfoCard = ({ data }) => {
  const hoverBtnRef = useRef();
  const cardRef = useRef();

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (hoverBtnRef.current && cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect();
        hoverBtnRef.current.style.left = e.clientX - rect.left - 60 + "px";
        hoverBtnRef.current.style.top = e.clientY - rect.top - 20 + "px";
      }
    };

    if (cardRef.current) {
      cardRef.current.addEventListener("mousemove", handleMouseMove);

      return () => {
        cardRef.current?.removeEventListener("mousemove", handleMouseMove);
      };
    }
  }, []);

  return (
    <>
      <Link
        ref={cardRef}
        href={data.link}
        className={css.projectInfoCardWrapper}
      >
        <div
          className={css.contentNimgContainer}
          style={{
            backgroundColor: data.bgColor,
          }}
        >
          <div className={css.carouselContentWrapper}>
            <div>
              <div className={css.topbarHead}>
                <div className={css.brandLogo}>
                  <Image
                    src={data.logo}
                    alt={data.title}
                    width={100}
                    height={100}
                    loading="lazy"
                  />
                </div>
                <h3>{data.title}</h3>
              </div>
              <p className={classNames('contentText',css.descText)}>{data.description}</p>
              <div className={css.listBox}>
                <div className={css.boxCard}>
                  <div className={css.boxIcon}>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21.8452 6.1744L12.4632 0.974395C12.205 0.809316 11.8607 0.809316 11.6025 0.974395C11.6025 0.974395 10.8278 1.38709 10.8278 1.46963C9.79497 2.04741 9.36461 3.20297 10.7418 3.86328C12.3772 4.68868 14.1847 5.59662 14.1847 5.59662C16.5087 6.75217 16.3365 7.49503 16.3365 8.81567V9.7236L10.7418 6.83471C10.3114 6.66963 10.0532 6.83471 10.0532 7.24741V8.56805C10.0532 8.98075 10.3975 9.55852 10.7418 9.7236L13.0657 10.9617C14.2708 11.622 16.3365 12.3649 16.3365 13.6855V20.8665L21.8452 17.9776C22.1034 17.8125 22.2755 17.5649 22.2755 17.3173V6.83471C22.2755 6.58709 22.1034 6.33948 21.8452 6.1744Z"
                        fill="white"
                      />
                      <path
                        d="M2.05236 17.8146L11.4343 23.0146C11.6925 23.1797 12.0368 23.1797 12.295 23.0146C12.295 23.0146 13.0697 22.6019 13.0697 22.5194C14.1026 21.9416 14.5329 20.7861 13.1558 20.1257C11.5204 19.3003 9.71285 18.3924 9.71285 18.3924C7.38888 17.3194 7.56103 16.494 7.56103 15.1734V14.2654L13.1558 17.1543C13.5861 17.4019 13.8444 17.1543 13.8444 16.7416V15.421C13.8444 15.0083 13.5001 14.4305 13.1558 14.2654L10.8318 13.0273C9.62678 12.367 7.56103 11.6241 7.56103 10.3035V3.12256L2.05236 6.01145C1.88021 6.17653 1.70807 6.50669 1.70807 6.75431V17.1543C1.70807 17.4019 1.88021 17.6495 2.05236 17.8146Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <div className={css.boxText}>{data?.keyPt?.platform}</div>
                </div>
                <div className={css.boxCard}>
                  <div className={css.boxIcon}>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20.0875 1.6001C16.657 1.6001 12.0538 3.9537 8.96256 8.0001H6.4C4.54832 8.0001 3.48704 9.38218 2.75632 10.8438L1.77808 12.8001H4.08752H6.4L8.8 15.2001L11.2 17.6001V19.9126V22.222L13.1563 21.2439C14.6179 20.5131 16 19.4518 16 17.6001V15.0375C20.0464 11.9463 22.4 7.34314 22.4 3.91258V1.6001H20.0875ZM16 6.4001C16.8837 6.4001 17.6 7.11642 17.6 8.0001C17.6 8.88378 16.8837 9.6001 16 9.6001C15.1163 9.6001 14.4 8.88378 14.4 8.0001C14.4 7.11642 15.1163 6.4001 16 6.4001ZM5.6 16.0001L4.8 16.8001C3.64448 17.9556 3.2 20.8001 3.2 20.8001C3.2 20.8001 5.9168 20.4833 7.2 19.2001L8 18.4001L5.6 16.0001Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  {data?.keyPt?.launchIn && (
                    <div className={css.boxText}>{data?.keyPt?.launchIn}</div>
                  )}
                  {data?.keyPt?.starPt && (
                    <div className={css.boxText}>{data?.keyPt?.starPt}</div>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className={css.carouselContainer}>
            <div className={css.carouselImgContainer}>
              <Image
                src={data.image}
                fill
                alt={data.title}
                loader={cloudinaryLoader}
                sizes="(max-width: 520px) 100vw, (max-width: 800px) 55vw, 380px"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <div
          ref={hoverBtnRef}
          className={classNames(css.redirectionBtn, css.hoveringBtn)}
        >
          View Case Study
        </div>
      </Link>
    </>
  );
};

export default ProjectInfoCard;
