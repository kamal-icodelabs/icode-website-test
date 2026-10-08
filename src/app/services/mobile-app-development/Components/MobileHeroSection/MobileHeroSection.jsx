"use client";
import React, { useEffect, useRef, useState } from "react";
import css from "./MobileHeroSection.module.css";
import IconCollection from "@/component/IconCollection/IconCollection";
import ContentWidth from "@/component/ContentWidth/ContentWidth";
import Link from "next/link";
import { useMutation } from "@tanstack/react-query";
import { useFormik } from "formik";
import * as Yup from "yup";
import { createContactMessage } from "@/services/service";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";
import { injectRecaptchaOnce, onRecaptchaReady } from "@/utils/recaptchaLoader";
import { PrimaryBtnLink } from "@/component/Animations/CTAbutton";
import classNames from "classnames";

export default function MobileHeroSection({
  title,
  content,
  btnLink,
  btnText,
  secBtnText,
  secBtnTextLink,
  bgIcon,
}) {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState("");
  const [recaptchaError, setRecaptchaError] = useState("");
  const [recaptchaScriptReady, setRecaptchaScriptReady] = useState(false);
  const recaptchaRef = useRef(null);
  const sectionRef = useRef(null);
  const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.disconnect();
          injectRecaptchaOnce();
          const cleanup = onRecaptchaReady(() => setRecaptchaScriptReady(true));
          return cleanup;
        }
      },
      { rootMargin: "200px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const mutation = useMutation({
    mutationFn: async ({ strapiData, emailData }) => {
      // Step 1: Store data in Strapi first
      const strapiResponse = await createContactMessage({ data: strapiData });

      // Step 2: Only send emails after Strapi storage is successful
      const emailResponse = await axios.post('/api/email', emailData);

      return { strapiResponse, emailResponse: emailResponse.data };
    },
    onSuccess: () => {
      setShowSuccessMessage(true);
      resetForm();
      setRecaptchaToken("");
      setRecaptchaError("");
      recaptchaRef.current?.reset?.();
      // Hide success message after 5 seconds
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 5000);
    },
    onError: (error) => {
      console.error("Submission failed:", error);
      const errorMessage = error.response?.data?.error || error.message || "Failed to send message. Please try again.";
      alert(errorMessage);
    },
  });

  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    resetForm,
    isValid,
    dirty,
  } = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
      service: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Full Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      message: Yup.string().required("Message is required"),
      service: Yup.string().required("Please select a service"),
    }),
    onSubmit: async (values, { setSubmitting }) => {
      if (!isValid || !dirty) {
        return;
      }

      if (!values.name || !values.email || !values.service) {
        return;
      }
      if (!recaptchaToken) {
        setRecaptchaError("Please verify that you are not a robot.");
        return;
      }

      try {
        // Data for Strapi API (with capitalized keys)
        const strapiData = {
          Email: values.email,
          Message: values.message || "",
          Name: values.name,
          Title: values.service,
        };

        // Data for Email API (with lowercase keys)
        const emailData = {
          name: values.name,
          email: values.email,
          phoneNumber: "",
          message: values.message || "",
          packages: "",
          title: values.service,
          recaptchaToken,
        };

        await mutation.mutateAsync({ strapiData, emailData });
      } catch (error) {
        console.error("Submission error:", error);
      } finally {
        setSubmitting(false);
      }
    },
  });

  useEffect(() => { }, [values, errors, touched]);

  const options = [
    { value: "Mobile App Development", label: "Mobile App Development" },
    { value: "Sharetribe Development", label: "Sharetribe Development" },
    {
      value: "Custom Software Development",
      label: "Custom Software Development",
    },
    { value: "Marketplace Development", label: "Marketplace Development" },
    { value: "Web Development", label: "Web Development" },
    {
      value: "Digital Marketing | SEO | PPC",
      label: "Digital Marketing | SEO | PPC",
    },
  ];

  const isFormValid = () => {
    return (
      isValid &&
      dirty &&
      values.name.trim() !== "" &&
      values.email.trim() !== "" &&
      values.service !== ""
    );
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      handleSubmit(e);
    } else {
      alert("Please fill in all required fields");
    }
  };

  const isSubmitting = mutation.isPending;
  const isSubmitDisabled = !recaptchaToken || !recaptchaSiteKey || !isFormValid() || isSubmitting;

  return (
    <section ref={sectionRef} className={css.heroBannerWrapper}>
      <div className={css.glowbgLeft} />
      <div className={css.glowbgRight} />
      <ContentWidth>
        <div className={css.contentNformRapper}>
          <div className={css.contentContainer}>
            <h1>{title}</h1>
            <p>{content}</p>

            <div className={css.btnDiv}>
              <PrimaryBtnLink href={btnLink} className={classNames('primaryBtn', css.primaryBtn)}>
                {btnText}
                <IconCollection name="rightArrowTop" />
              </PrimaryBtnLink>

              {secBtnText?.length > 0 && (
                <Link href={secBtnTextLink} className="outlineBtn">
                  {secBtnText}
                  <IconCollection name="rightArrowTop" />
                </Link>
              )}
            </div>
          </div>

          <div className={css.formContainer}>
            <h4>Ready to take your app to the next level?</h4>
            <p>Discover how we can help your business grow</p>

            <form
              className={css.heroFormStyling}
              onSubmit={handleFormSubmit}
              noValidate
            >
              <div className={css.formGroup}>
                <input
                  name="name"
                  type="text"
                  placeholder="Full Name*"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  className={touched.name && errors.name ? css.errorInput : ""}
                />
                {touched.name && errors.name && (
                  <div className={css.errorMessage}>{errors.name}</div>
                )}
              </div>

              <div className={css.formGroup}>
                <input
                  name="email"
                  type="email"
                  placeholder="E-mail ID*"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  className={
                    touched.email && errors.email ? css.errorInput : ""
                  }
                />
                {touched.email && errors.email && (
                  <div className={css.errorMessage}>{errors.email}</div>
                )}
              </div>

              <div className={css.formGroup}>
                <select
                  name="service"
                  value={values.service}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  className={
                    touched.service && errors.service ? css.errorInput : ""
                  }
                >
                  <option value="">Select a service*</option>
                  {options.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                {touched.service && errors.service && (
                  <div className={css.errorMessage}>{errors.service}</div>
                )}
              </div>

              <div className={css.formGroup}>
                <textarea
                  name="message"
                  placeholder="Describe your project...*"
                  value={values.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    touched.message && errors.message ? css.errorInput : ""
                  }
                />
                {touched.message && errors.message && (
                  <div className={css.errorMessage}>{errors.message}</div>
                )}
              </div>

              {showSuccessMessage && (
                <div style={{
                  background: '#fff',
                  border: '1px solid #0075f2',
                  padding: '20px',
                  borderRadius: '16px',
                  textAlign: 'center',
                  marginBottom: '20px'
                }}>
                  <h5 style={{ color: '#0075f2', margin: '0 0 6px 0', fontSize: '18px' }}>Message Sent Successfully!</h5>
                  <p style={{ color: '#242424', margin: 0, fontSize: '14px' }}>
                    You will receive a confirmation email shortly.
                  </p>
                </div>
              )}

              <div className={css.recaptchaWrap}>
                {recaptchaSiteKey ? (
                  <>
                    {recaptchaScriptReady && (
                      <ReCAPTCHA
                        ref={recaptchaRef}
                        sitekey={recaptchaSiteKey}
                        onChange={(token) => {
                          setRecaptchaToken(token || "");
                          if (token) setRecaptchaError("");
                        }}
                        onExpired={() => setRecaptchaToken("")}
                      />
                    )}
                    {recaptchaError ? (
                      <div className={css.recaptchaError}>{recaptchaError}</div>
                    ) : null}
                  </>
                ) : (
                  <div className={css.recaptchaError}>Missing reCAPTCHA site key.</div>
                )}
              </div>

              <button
                type="submit"
                className={`primaryBtn ${isSubmitDisabled ? css.disabledButton : ""} ${isSubmitting ? css.loadingButton : ""}`}
                disabled={isSubmitDisabled}
                aria-disabled={isSubmitDisabled}
                aria-busy={isSubmitting}
              >
                {isSubmitting ? (
                  <span className={css.buttonContent}>
                    <span className={css.spinner} aria-hidden="true" />
                    Sending...
                  </span>
                ) : (
                  <>
                    Get Your FREE Proposal Now
                    <IconCollection name="rightArrowTop" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </ContentWidth>
    </section>
  );
}
