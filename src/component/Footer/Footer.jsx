"use client";
import React, { useState, useCallback, useMemo } from "react";
import css from "./Footer.module.css";
import Link from "next/link";
import ContentWidth from "../ContentWidth/ContentWidth";
import IconCollection from "../IconCollection/IconCollection";
import { useMutation } from "@tanstack/react-query";
import { sendEmail } from "@/services/service";
import { marketplace, ourCompany, services } from "../helperData";

const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const Footer = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const sendEmailMutation = useMutation({
    mutationKey: ["sendEmail"],
    mutationFn: sendEmail,
    onSuccess: () => {
      setSuccess(true);
      setEmail("");
      setError("");
      setTimeout(() => setSuccess(false), 3000);
    },
    onError: () => {
      setError("Something went wrong. Please try again.");
    },
  });

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (!email || !validateEmail(email)) {
        setError("Please enter a valid email address.");
        return;
      }
      sendEmailMutation.mutate({ email });
    },
    [email, sendEmailMutation],
  );

  const renderList = (items) =>
    items?.map((item, index) => (
      <li key={index}>
        <Link href={`/${item?.Slug}`} prefetch={false}>{item?.SubTitle}</Link>
        {item.SubTitle === "Career" && (
          <div className={css.weareHire}>We are Hiring</div>
        )}
      </li>
    ));

  const marketplaceList = useMemo(() => renderList(marketplace), []);
  const servicesList = useMemo(() => renderList(services), []);
  const ourCompanyList = useMemo(() => renderList(ourCompany), []);

  const currentYear = new Date().getFullYear();

  return (
    <footer className={css.footerBox}>
      <ContentWidth>
        <div className={css.topFooterWrapper}>
          <div className={css.marketplaceContainer}>
            <h6>MARKETPLACE</h6>
            <ul>{marketplaceList}</ul>
          </div>

          <div className={css.servicesContainer}>
            <h6>Our services</h6>
            <ul>{servicesList}</ul>
          </div>

          <div className={css.ourCompanyContainer}>
            <h6>Our Company</h6>
            <ul>{ourCompanyList}</ul>
          </div>
        </div>

        <div className={css.bottomFooterWrapper}>
          <div className={css.logoNcontent}>
            <IconCollection name="headerLogo" />
            <p>
              The fastest Sharetribe marketplace builders — now AI-augmented. Trusted by 50+ founders
              across 20+ countries.
            </p>

            {success && (
              <p className={css.successMessage}>
                Thank you! Your email has been submitted successfully.
              </p>
            )}
            {error && <p className={css.errorMessage}>{error}</p>}
          </div>

          <div className={css.logoContainer}>
            <div className={css.contactusWrapper}>
              <h6>Get in touch</h6>
              <div className={css.rightFlexWrapper}>
                <div className={css.iconNtextContainer}>
                  <IconCollection name="phoneFooter" />
                  <div className={css.verticalBar}></div>
                  <div>
                    <p>(+91) 98777-88646</p>
                    <p>(+91) 83604-42703</p>
                  </div>
                </div>

                <div className={css.iconNtextContainer}>
                  <IconCollection name="emailFooter" />
                  <div className={css.verticalBar}></div>
                  <div>
                    <p>hello@icodelabs.co</p>
                    <p>jay@icodelabs.co</p>
                  </div>
                </div>

                <div className={`${css.iconNtextContainer} ${css.hideContent}`}>
                  <IconCollection
                    name="locationFooter"
                    className={css.hideStyle}
                  />
                  <div className={css.verticalBar}></div>
                  <div>
                    <p>
                      D-176, Phase 8B, Industrial Area, Sector 74, Sahibzada
                      Ajit Singh Nagar, Punjab 160055
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={css.lowerFooterWrapper}>
          <div className={css.copyrightText}>
            © {currentYear}. Innovative Code Labs Pvt. Ltd. All Rights Reserved
          </div>
          <div>
            <div className={css.socialWrapper}>
              <h6>Let’s be social</h6>
              <div className={css.iconsContainer}>
                <a
                  href="https://www.facebook.com/InnovativecodeLabs"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <IconCollection name="fbFooter" />
                </a>
                <a
                  href="https://www.linkedin.com/company/icodelabs"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <IconCollection name="likdinFooter" />
                </a>
                <a
                  href="https://www.instagram.com/icode_labs/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <IconCollection name="igFooter" />
                </a>
                <a
                  href="https://www.Twitter.com/icodelabs/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                >
                  <IconCollection name="twitterFooter" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </ContentWidth>
    </footer>
  );
};

export default Footer;
