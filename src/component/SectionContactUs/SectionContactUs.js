"use client";
import React, { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import css from "./SectionContactUs.module.css";
import ContentWidth from "../ContentWidth/ContentWidth";
import IconCollection from "../IconCollection/IconCollection";
import { useMutation } from "@tanstack/react-query";
import { createContactMessage } from "@/services/service";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import ReCAPTCHA from "react-google-recaptcha";
import { injectRecaptchaOnce, onRecaptchaReady } from "@/utils/recaptchaLoader";

// Dynamically import react-select and react-international-phone with SSR disabled
const Select = dynamic(() => import("react-select"), { ssr: false });
const PhoneInput = dynamic(() => import("react-international-phone").then(mod => mod.PhoneInput), {
  ssr: false,
});

const SectionContactUs = () => {
  const [countryCode, setCountryCode] = useState("");
  const [isClient, setIsClient] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState("");
  const [recaptchaError, setRecaptchaError] = useState("");
  const [recaptchaScriptReady, setRecaptchaScriptReady] = useState(false);
  const recaptchaRef = useRef(null);
  const sectionRef = useRef(null);
  const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  useEffect(() => {
    setIsClient(true);
    getGeoInfo();
  }, []);

  // Lazy-load reCAPTCHA script only when this section scrolls into view.
  // The singleton in recaptchaLoader.js ensures the <script> tag is injected
  // at most once per page, regardless of how many form instances exist.
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

  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    setFieldTouched,
    setFieldValue,
    resetForm,
  } = useFormik({
    initialValues: {
      name: "",
      email: "",
      phoneNumber: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Full Name is required."),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required."),
      message: Yup.string().required("Message is required."),
    }),
    onSubmit: (values) => {
      if (!recaptchaToken) {
        setRecaptchaError("Please verify that you are not a robot.");
        return;
      }
      const normalizedPhone = (values.phoneNumber || "").replace(/\s+/g, "");
      const phoneNumber =
        normalizedPhone && /^\+\d{1,4}$/.test(normalizedPhone)
          ? ""
          : values.phoneNumber;
      // Data for Strapi API (with capitalized keys)
      const strapiData = {
        Email: values.email,
        Message: values.message,
        Name: values.name,
      };
      if (phoneNumber) {
        strapiData.MobileNo = phoneNumber;
      }

      // Data for Email API (with lowercase keys)
      const emailData = {
        name: values.name,
        email: values.email,
        message: values.message,
        packages: "",
        title: "",
        recaptchaToken,
      };
      if (phoneNumber) {
        emailData.phoneNumber = phoneNumber;
      }

      mutation.mutate({ strapiData, emailData });
    },
  });

  const getGeoInfo = () => {
    axios
      .get("https://ipapi.co/json/")
      .then((response) => {
        let country = response.data.country_code.toLowerCase();
        setCountryCode(country);
      })
      .catch((error) => console.log(error));
  };

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

  const customStyles = {
    control: (provided) => ({
      ...provided,
      backgroundColor: "transparent",
      border: "none",
      boxShadow: "none",
      color: "#fff",
    }),
    placeholder: (provided) => ({
      ...provided,
      color: "#fff",
      fontWeight: 600,
      fontSize: "20px",
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "#fff",
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: "#fff",
      color: "#000",
    }),
    option: (provided, state) => ({
      ...provided,
      color: "#000",
      backgroundColor: state.isFocused ? "#f0f0f0" : "#fff",
    }),
  };

  const options = [
    { value: "Mobile App Development", label: "Mobile App Development" },
    { value: "Sharetribe Development", label: "Sharetribe Development" },
    { value: "Custom Software Development", label: "Custom Software Development" },
    { value: "Marketplace Development", label: "Marketplace Development" },
    { value: "Web Development", label: "Web Development" },
    { value: "Digital Marketing | SEO | PPC", label: "Digital Marketing | SEO | PPC" },
  ];

  const isSubmitting = mutation.isPending;
  const isSubmitDisabled = !recaptchaToken || !recaptchaSiteKey || isSubmitting;

  if (!isClient) {
    return <div>Loading...</div>;
  }

  return (
    <section ref={sectionRef} className={css.contactUsWrapper}>
      <div className={css.leftGradient} />
      <div className={css.rightGradient} />

      <ContentWidth>
        <div className={css.leftNrightWrapper}>
          <div className={css.leftSection}>
            <h2>Have an idea or a project in mind? Let’s Connect!</h2>
            <p>
              Whether you’re launching a marketplace, scaling your product, or exploring AI—our experts are ready to guide you.
            </p>
          </div>

          <div className={css.rightSection}>
            <form onSubmit={handleSubmit} className={css.contactForm}>
              <div className={css.formContent}>
                <div className={css.nameInput}>
                  <input
                    type="text"
                    placeholder="Full Name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="name"
                    value={values.name}
                    className={css.inputField}
                  />
                  {errors.name && touched.name && (
                    <p className={css.error}>{errors.name}</p>
                  )}
                </div>

                <div className={css.emailWrapper}>
                  <input
                    type="email"
                    placeholder="Email ID*"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="email"
                    value={values.email}
                    className={css.inputField}
                  />
                  {errors.email && touched.email && (
                    <p className={css.error}>{errors.email}</p>
                  )}
                </div>

                <div className={css.phoneNserviceContainer}>
                  <div>
                    <div className={`${css.inputBox} ${css.phoneInputWrapper}`}>
                      {countryCode && (
                        <PhoneInput
                          defaultCountry={countryCode}
                          value={values.phoneNumber}
                          placeholder="Phone Number"
                          onChange={(value) => setFieldValue("phoneNumber", value)}
                          onBlur={() => setFieldTouched("phoneNumber", true)}
                          className={css.PhoneInputField}
                        />
                      )}
                    </div>
                    <div className={css.validationError}>
                      {errors.phoneNumber && touched.phoneNumber && (
                        <p className={css.error}>{errors.phoneNumber}</p>
                      )}
                    </div>
                  </div>
                  <div className={`${css.inputBox} ${css.selectWrapper}`}>
                    <Select
                      options={options}
                      className={css.inputSelect}
                      styles={customStyles}
                      instanceId="service-select"
                      placeholder="Select a service"
                    />
                  </div>
                </div>

                <div className={css.textareaBox}>
                  <textarea
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Describe your project/Idea In Brief (Help us to come back with better Prepared)*"
                    name="message"
                    value={values.message}
                    className={css.textarea}
                  />
                  {errors.message && touched.message && (
                    <p className={css.error}>{errors.message}</p>
                  )}
                </div>

                <div className={css.contentBox}>
                  <h6>Integrate Towards Innovation</h6>
                  <p>Become an iCodeLabs Partner to Launch, Run and Grow Your Business Globally.</p>
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
                        <p className={css.error}>{recaptchaError}</p>
                      ) : null}
                    </>
                  ) : (
                    <p className={css.error}>Missing reCAPTCHA site key.</p>
                  )}
                </div>

                <Link href="/" className={css.partnerText}>
                  Become a Partner
                </Link>
                <button
                  type="submit"
                  className={`${css.submitButton} ${isSubmitDisabled ? css.disabledButton : ""} ${isSubmitting ? css.loadingButton : ""}`}
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
              </div>
            </form>
          </div>
        </div>
      </ContentWidth>
    </section>
  );
};

export default SectionContactUs;
