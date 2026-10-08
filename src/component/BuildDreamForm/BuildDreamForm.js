"use client";
import React, { useState, useRef, useEffect } from "react";
import css from "./BuildDreamForm.module.css";
import classNames from "classnames";
import meetingGroup from "../../assets/imgs/images/meetingGroup.png";
import Image from "next/image";
import { useMutation } from "@tanstack/react-query";
import { createContactMessage } from "@/services/service";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import ReCAPTCHA from "react-google-recaptcha";
import { injectRecaptchaOnce, onRecaptchaReady } from "@/utils/recaptchaLoader";

const BuildDreamForm = (props) => {
  const { className } = props;
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState("");
  const [recaptchaError, setRecaptchaError] = useState("");
  const [recaptchaScriptReady, setRecaptchaScriptReady] = useState(false);
  const recaptchaRef = useRef(null);
  const formRef = useRef(null);
  const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  useEffect(() => {
    const el = formRef.current;
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
    resetForm,
  } = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      projectDetails: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Full Name is required."),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required."),
      projectDetails: Yup.string().required("Project details are required."),
    }),
    onSubmit: (values) => {
      if (!recaptchaToken) {
        setRecaptchaError("Please verify that you are not a robot.");
        return;
      }

      // Data for Strapi API (only include MobileNo if provided)
      const strapiData = {
        Name: values.name,
        Email: values.email,
        Message: values.projectDetails,
      };
      if (values.phone && values.phone.trim()) {
        strapiData.MobileNo = values.phone.trim();
      }

      // Data for Email API (only include phoneNumber if provided)
      const emailData = {
        name: values.name,
        email: values.email,
        message: values.projectDetails,
        packages: "",
        title: "Build Your Dream Project",
        recaptchaToken,
      };
      if (values.phone && values.phone.trim()) {
        emailData.phoneNumber = values.phone.trim();
      }

      mutation.mutate({ strapiData, emailData });
    },
  });

  const mutation = useMutation({
    mutationFn: async ({ strapiData, emailData }) => {
      const strapiResponse = await createContactMessage({ data: strapiData });
      const emailResponse = await axios.post("/api/email", emailData);
      return { strapiResponse, emailResponse: emailResponse.data };
    },
    onSuccess: () => {
      setShowSuccessMessage(true);
      resetForm();
      setRecaptchaToken("");
      setRecaptchaError("");
      recaptchaRef.current?.reset?.();
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 5000);
    },
    onError: (error) => {
      console.error("Submission failed:", error);
      const errorMessage =
        error.response?.data?.error ||
        error.message ||
        "Failed to send message. Please try again.";
      alert(errorMessage);
    },
  });

  const isSubmitting = mutation.isPending;
  const isSubmitDisabled = !recaptchaToken || !recaptchaSiteKey || isSubmitting;

  return (
    <div ref={formRef} className={classNames(className, css.formContainer)}>
      <div className={css.ImgWrapper}>
        <Image
          src={meetingGroup}
          width={412}
          height={304}
          className={css.meetingImg}
          loading="lazy"
          alt="meeting group"
        />
      </div>

      <h3 className={css.formTitle}>Do You Have An Interesting Project?</h3>
      <form onSubmit={handleSubmit} className={css.formGroupWrapper}>
        <div className={css.formGroup}>
          <input
            type="text"
            name="name"
            className={css.nameInput}
            placeholder="Full Name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.name && touched.name && (
            <p className={css.error}>{errors.name}</p>
          )}
        </div>
        <div className={css.formGroup}>
          <input
            type="email"
            name="email"
            className={css.emailInput}
            placeholder="Email Id"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.email && touched.email && (
            <p className={css.error}>{errors.email}</p>
          )}
        </div>
        <div className={css.formGroup}>
          <input
            type="text"
            name="phone"
            className={css.formInput}
            placeholder="Mobile Number"
            value={values.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            style={{ flex: 1 }}
          />
          {errors.phone && touched.phone && (
            <p className={css.error}>{errors.phone}</p>
          )}
        </div>
        <div className={css.formGroup}>
          <textarea
            name="projectDetails"
            className={css.textarea}
            placeholder="What's Your Project About?"
            value={values.projectDetails}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.projectDetails && touched.projectDetails && (
            <p className={css.error}>{errors.projectDetails}</p>
          )}
        </div>

        {showSuccessMessage && (
          <div
            style={{
              background: "#fff",
              border: "1px solid #0075f2",
              padding: "16px",
              borderRadius: "12px",
              textAlign: "center",
              marginBottom: "16px",
            }}
          >
            <h5
              style={{ color: "#0075f2", margin: "0 0 6px 0", fontSize: "16px" }}
            >
              Message Sent Successfully!
            </h5>
            <p style={{ color: "#242424", margin: 0, fontSize: "13px" }}>
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

        <button
          type="submit"
          className={`primaryBtn ${css.submitBtn} ${isSubmitDisabled ? css.disabledBtn : ""
            } ${isSubmitting ? css.loadingBtn : ""}`}
          disabled={isSubmitDisabled}
          aria-disabled={isSubmitDisabled}
          aria-busy={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Get a Quote"}
        </button>
      </form>
    </div>
  );
};

export default BuildDreamForm;
