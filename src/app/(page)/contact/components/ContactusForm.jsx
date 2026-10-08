"use client";

import React, { useEffect, useRef, useState } from "react";
import css from "../ContactUs.module.css";
import IconCollection from "@/component/IconCollection/IconCollection";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useMutation } from "@tanstack/react-query";
import { createContactMessage } from "@/services/service";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { budgetOptions, serviceOptions } from "@/utils/data";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";
import { injectRecaptchaOnce, onRecaptchaReady } from "@/utils/recaptchaLoader";

const ContactusForm = () => {
    const [isClient, setIsClient] = useState(false);
    const [countryCode, setCountryCode] = useState("");
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [recaptchaToken, setRecaptchaToken] = useState("");
    const [recaptchaError, setRecaptchaError] = useState("");
    const [recaptchaScriptReady, setRecaptchaScriptReady] = useState(false);
    const recaptchaRef = useRef(null);
    const formRef = useRef(null);
    const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

    useEffect(() => {
        setIsClient(true);
        getGeoInfo();
    }, []);

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

    const getGeoInfo = () => {
        axios
            .get("https://ipapi.co/json/")
            .then((response) => {
                let country = response.data.country_code.toLowerCase();
                setCountryCode(country);
            })
            .catch((error) => console.log(error));
    };

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
            packages: "",
            title: "",
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

            const strapiData = {
                Email: values.email,
                Message: values.message,
                Name: values.name,
                Packages: values.packages,
                Title: values.title,
            };
            if (phoneNumber) {
                strapiData.MobileNo = phoneNumber;
            }

            const emailData = {
                name: values.name,
                email: values.email,
                message: values.message,
                packages: values.packages,
                title: values.title,
                recaptchaToken,
            };
            if (phoneNumber) {
                emailData.phoneNumber = phoneNumber;
            }

            mutation.mutate({ strapiData, emailData });
        },
    });

    const mutation = useMutation({
        mutationFn: async ({ strapiData, emailData }) => {
            const strapiResponse = await createContactMessage({ data: strapiData });
            const emailResponse = await axios.post('/api/email', emailData);
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
            const errorMessage = error.response?.data?.error || error.message || "Failed to send message. Please try again.";
            console.log('errorMessage', errorMessage)
            alert(errorMessage);
        },
    });

    const isSubmitting = mutation.isPending;
    const isSubmitDisabled = !recaptchaToken || !recaptchaSiteKey || isSubmitting;
    return (
        <div ref={formRef} className={css.formContainer}>
                        <div className={css.formSection}>
                            <form onSubmit={handleSubmit} className={css.form}>
                                <div className={css.inputGroup}>
                                    <input
                                        type="text"
                                        placeholder="Full Name"
                                        className={css.nameInput}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        name="name"
                                        value={values.name}
                                    />
                                    {errors.name && touched.name && (
                                        <p className={css.error}>{errors.name}</p>
                                    )}
                                </div>

                                <div className={css.inputGroup}>
                                    <input
                                        type="email"
                                        placeholder="Email Id"
                                        className={css.emailInput}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        name="email"
                                        value={values.email}
                                    />
                                    {errors.email && touched.email && (
                                        <p className={css.error}>{errors.email}</p>
                                    )}
                                </div>

                                <div className={css.inputMainGroup}>
                                    <div className={css.inputGroup}>
                                        <div className={css.inputBox}>
                                            {isClient && (
                                                <PhoneInput
                                                    defaultCountry={countryCode || "in"}
                                                    value={values.phoneNumber}
                                                    onChange={(value) =>
                                                        setFieldValue("phoneNumber", value)
                                                    }
                                                    onBlur={() => setFieldTouched("phoneNumber", true)}
                                                    className={css.PhoneInputField}
                                                    placeholder="Contact Number (optional)"
                                                    enableSearch={true}
                                                />
                                            )}

                                            {errors.phoneNumber && touched.phoneNumber && (
                                                <p className={css.error}>{errors.phoneNumber}</p>
                                            )}
                                        </div>
                                    </div>

                                    <div className={css.inputGroup}>
                                        <div className={css.inputBox}>
                                            <select
                                                className={css.input}
                                                name="packages"
                                                value={values.packages}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                            >
                                                {budgetOptions?.map((option, index) => (
                                                    <option key={index} value={option?.value}>
                                                        {option?.label}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div className={css.inputGroup}>
                                    <select
                                        className={css.input}
                                        name="title"
                                        value={values.title}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    >
                                        {serviceOptions?.map((option, index) => (
                                            <option key={index} value={option?.value}>
                                                {option.label}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div className={css.inputGroup}>
                                    <textarea
                                        placeholder="Describe your project/Idea In Brief (Help us to come back with better Prepared)*"
                                        className={css.textarea}
                                        name="message"
                                        value={values.message}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    ></textarea>
                                    {errors.message && touched.message && (
                                        <p className={css.error}>{errors.message}</p>
                                    )}
                                </div>

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
                                        <p className={css.error}>
                                            Missing reCAPTCHA site key.
                                        </p>
                                    )}
                                </div>

                                {showSuccessMessage ? (
                                    <div className={css.successMessage} style={{
                                        background: '#fff',
                                        border: '1px solid #0075f2',
                                        padding: '20px',
                                        borderRadius: '16px',
                                        textAlign: 'center',
                                        marginBottom: '20px'
                                    }}>
                                        <p style={{ color: '#0075f2', margin: '0 0 6px 0', fontSize: '20px', fontWeight: 600 }}>Message Sent Successfully!</p>
                                        <p style={{ color: '#242424', margin: 0, fontSize: '15px' }}>
                                            You will receive a confirmation email shortly.
                                        </p>
                                    </div>
                                ) : (
                                    <div className={css.contentContainer}>
                                        <h3>Integrate Towards Innovation</h3>
                                        <p>
                                            Become an iCodeLabs Partner to Launch, Run and Grow Your
                                            Business Globally.
                                        </p>
                                    </div>
                                )}

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
    )
}

export default ContactusForm