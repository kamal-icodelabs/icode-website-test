'use client'
import React, { useEffect, useMemo, useRef, useState } from 'react'
import css from './FeedBackFormShareTribeExtension.module.css'
import ContentWidth from '@/component/ContentWidth/ContentWidth'
import Image from 'next/image'
import Link from 'next/link'
import IconCollection from '@/component/IconCollection/IconCollection'
import classNames from 'classnames'
import * as helperData from "@/component/helperData"
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { createContactMessage } from '@/services/service'
import ReCAPTCHA from 'react-google-recaptcha'
import { injectRecaptchaOnce, onRecaptchaReady } from '@/utils/recaptchaLoader'

const { sharetribeFeedbackFormData } = helperData;


const FeedBackFormShareTribeExtension = () => {
    const recaptchaRef = useRef(null);
    const formRef = useRef(null);
    const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
    const [recaptchaScriptReady, setRecaptchaScriptReady] = useState(false);

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
            { rootMargin: '200px' }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);
    const initialFields = useMemo(() => {
        return sharetribeFeedbackFormData.feedbackForm.inputFields.reduce((acc, field) => {
            acc[field.label] = '';
            return acc;
        }, {});
    }, []);

    const [formState, setFormState] = useState({
        module: '',
        fields: initialFields,
    });
    const [submitStatus, setSubmitStatus] = useState(null);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [recaptchaToken, setRecaptchaToken] = useState('');
    const [recaptchaError, setRecaptchaError] = useState('');
    const [fieldErrors, setFieldErrors] = useState({});

    const handleModuleChange = (event) => {
        setFormState((prev) => ({ ...prev, module: event.target.value }));
        setFieldErrors((prev) => ({ ...prev, module: '' }));
    };

    const handleFieldChange = (fieldLabel, value) => {
        setFormState((prev) => ({
            ...prev,
            fields: { ...prev.fields, [fieldLabel]: value },
        }));
        setFieldErrors((prev) => ({ ...prev, [fieldLabel]: '' }));
    };

    const mutation = useMutation({
        mutationFn: async ({ strapiData, emailData }) => {
            const strapiResponse = await createContactMessage({ data: strapiData });
            const emailResponse = await axios.post('/api/email', emailData);
            return { strapiResponse, emailResponse: emailResponse.data };
        },
        onSuccess: () => {
            setFormState({ module: '', fields: initialFields });
            setSubmitStatus(null);
            setShowSuccessMessage(true);
            setRecaptchaToken('');
            setRecaptchaError('');
            recaptchaRef.current?.reset?.();
            setTimeout(() => {
                setShowSuccessMessage(false);
            }, 5000);
        },
        onError: () => {
            setSubmitStatus({ type: 'error', message: 'Submission failed. Please try again.' });
        },
    });

    const validateFields = () => {
        const payload = {
            module: formState.module,
            fields: formState.fields,
        };
        const emailValue = formState.fields?.Email || ''; 
        const targetTimelineValue = formState.fields?.['Target Timeline'] || '';
        const budgetRangeValue = formState.fields?.['Budget range'] || '';
        const moduleLabel = sharetribeFeedbackFormData.feedbackForm.modules.find(
            (mod) => mod.id === payload.module
        )?.label || '';

        const nextErrors = {};
        if (!moduleLabel) nextErrors.module = 'Please select a module.';
        if (!emailValue) nextErrors.Email = 'Email is required.'; 
        if (!targetTimelineValue) nextErrors['Target Timeline'] = 'Target timeline is required.';
        if (!budgetRangeValue) nextErrors['Budget range'] = 'Budget range is required.';

        return { nextErrors, payload, emailValue, targetTimelineValue, budgetRangeValue, moduleLabel };
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setSubmitStatus(null);
        setFieldErrors({});
        const {
            nextErrors,
            payload,
            emailValue,
            liveTestingValue,
            targetTimelineValue,
            budgetRangeValue,
            moduleLabel,
        } = validateFields();

        if (Object.keys(nextErrors).length > 0) {
            setFieldErrors(nextErrors);
            setSubmitStatus({ type: 'error', message: 'Please fill all required fields.' });
            return;
        }
        if (!recaptchaToken) {
            setRecaptchaError('Please verify that you are not a robot.');
            return;
        }

        const strapiData = {
            Title: moduleLabel,
            Email: emailValue,
            Url: liveTestingValue,
            Packages: budgetRangeValue,
            Message: targetTimelineValue,
            Name: sharetribeFeedbackFormData.feedbackForm.formHeading,
        };

        const emailData = {
            email: emailValue,
            name: moduleLabel,
            message: targetTimelineValue,
            recaptchaToken,
            module: payload.module,
            fields: payload.fields,
        };

        mutation.mutate({ strapiData, emailData });
    };

    const points = [
        "We review your marketplace setup",
        "Compatibility check within 24 hours",
        "Fixed-scope quote sent to your email",
        "No commitment to proceed",
        "Multiple modules? We'll propose a phased plan",
    ];

    return (
        <>
            <section ref={formRef} id="feedback-form" className={css.feedBackFormShareTribeExtension}>
                <ContentWidth>
                    <div className={css.importantGuideline}>

                        {/* feedback form */}
                        <div className={css.feedbackForm}>
                            <div className={css.content}>
                                <div className={css.quoteSection}>
                                    <span className={css.topTag}>GET A QUOTE</span>
                                    <h2 className={css.heading}>
                                        Request an Extension <br /> Quote
                                    </h2>
                                    <p className={css.description}>
                                        Tell us which modules you need and we'll run a compatibility check and
                                        send you a fixed-scope quote within 24 hours.
                                    </p>
                                    <h3 className={css.subHeading}>What Happens After you Submit</h3>
                                    <ul className={css.list}>
                                        {points.map((item, index) => (
                                            <li key={index} className={css.listItem}>
                                                <span className={css.icon}>
                                                    <IconCollection name="blue-check" />
                                                </span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <form className={css.form} onSubmit={handleSubmit}>
                                <div className={css.inputFormGroup}>
                                    {sharetribeFeedbackFormData.feedbackForm.inputFields.map((field, index) => (
                                        <div key={index} className={css.inputField}>
                                            <label htmlFor={`feedback-field-${index}`}>{field.label}</label>
                                            <input
                                                id={`feedback-field-${index}`}
                                                type='text'
                                                placeholder={field.placeholder}
                                                value={formState.fields[field.label] || ''}
                                                onChange={(event) => handleFieldChange(field.label, event.target.value)}
                                            />
                                            {fieldErrors[field.label] ? (
                                                <p className={css.fieldError}>{fieldErrors[field.label]}</p>
                                            ) : null}
                                        </div>
                                    ))}
                                </div>
                                <div className={css.radioContainer}>
                                    <p className={css.formHeading}>{sharetribeFeedbackFormData.feedbackForm.formHeading}</p>
                                    <div className={css.fromCheckRow}>
                                        {sharetribeFeedbackFormData.feedbackForm.modules.map((module, index) => (
                                            <div key={index} className={css.radioBtn}>
                                                <label className={css.labelText} htmlFor={module.id}>{module.label}</label>
                                                <label>
                                                    <input
                                                        type='radio'
                                                        name="module"
                                                        id={module.id}
                                                        value={module.id}
                                                        checked={formState.module === module.id}
                                                        onChange={handleModuleChange}
                                                    />
                                                    <span className={css.radio}></span>
                                                </label>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                {fieldErrors.module ? (
                                    <p className={css.fieldError}>{fieldErrors.module}</p>
                                ) : null}
                               
                                {recaptchaSiteKey ? (
                                    <div className={css.recaptcha}>
                                        {recaptchaScriptReady && (
                                            <ReCAPTCHA
                                                ref={recaptchaRef}
                                                sitekey={recaptchaSiteKey}
                                                onChange={(token) => {
                                                    setRecaptchaToken(token || '');
                                                    setRecaptchaError('');
                                                }}
                                            />
                                        )}
                                        {recaptchaError ? (
                                            <p className={css.recaptchaError}>{recaptchaError}</p>
                                        ) : null}
                                    </div>
                                ) : null}
                                {submitStatus?.message ? (
                                    <p className={css.submitMessage} data-status={submitStatus.type}>
                                        {submitStatus.message}
                                    </p>
                                ) : null}
                                {showSuccessMessage ? (
                                      <div className={css.successMessage} style={{
                                        background: '#fff',
                                        border: '1px solid #0075f2',
                                        padding: '20px',
                                        borderRadius: '16px',
                                        textAlign: 'center',
                                        marginBottom: '20px'
                                      }}>
                                        <h5 style={{ color: '#0075f2', margin: '0 0 6px 0', fontSize: '20px' }}>Message Sent Successfully!</h5>
                                        <p style={{ color: '#242424', margin: 0, fontSize: '15px' }}>
                                          You will receive a confirmation email shortly.
                                        </p>
                                      </div>
                                ) : null}
                                <div
                                    onClick={() => {
                                        if (!recaptchaToken) {
                                            setRecaptchaError('Please verify that you are not a robot.');
                                        }
                                        const { nextErrors } = validateFields();
                                        if (Object.keys(nextErrors).length > 0) {
                                            setFieldErrors(nextErrors);
                                            setSubmitStatus({ type: 'error', message: 'Please fill all required fields.' });
                                        }
                                    }}
                                >
                                    <button
                                        className={classNames('btn', css.formBtn)}
                                        type="submit"
                                        disabled={mutation.isPending || !recaptchaToken}
                                        aria-busy={mutation.isPending}
                                    >
                                        {mutation.isPending ? (
                                            <span className={css.btnLoading}>
                                                <span className={css.spinner} aria-hidden="true" />
                                                Sending...
                                            </span>
                                        ) : (
                                            <>
                                                {sharetribeFeedbackFormData.feedbackForm.buttonText}{' '}
                                                <IconCollection name={'rightArrowTop'} />
                                            </>
                                        )}
                                    </button>
                                </div>
                            </form>
                        </div>

                    </div>
                </ContentWidth>
            </section>


            {/* <section className={css.ctaSection}>
                <ContentWidth>
                    <h5 className={css.scratchText}>Starting from scratch instead?</h5>
                    <h2 className={css.ctaTile}>{sharetribeFeedbackFormData.ctaSection.title}</h2>
                    <p className={css.ctaInfo}>{sharetribeFeedbackFormData.ctaSection.info}</p>
                    <Link className={classNames('btn', css.redirectBtn)} href={'/services/sharetribe'}>{sharetribeFeedbackFormData.ctaSection.buttonText} <IconCollection name={'rightArrowTop'} /></Link>
                </ContentWidth>

                <div className={css.circleBgGraidient}>
                    <div className={css.orange} />
                    <div className={css.green} />
                    <div className={css.blue} />
                </div>
            </section> */}
        </>

    )
}

export default FeedBackFormShareTribeExtension
