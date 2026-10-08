import React from 'react'
import css from '../ContactUs.module.css'
import ContentWidth from '@/component/ContentWidth/ContentWidth'
import IconCollection from '@/component/IconCollection/IconCollection'
import { PrimaryBtnLink } from '@/component/Animations/CTAbutton'

const HeroSectionContact = () => {
    return (
        <div>
            <div className={css.heroSection}>
                <div className={css.contentContainer}>
                    <p className={css.eyebrow}>Say hello</p>
                    <h1>Contact iCodelabs — We’re Excited to Connect</h1>
                    <span className="subTitle">
                        Whether you have a question, feedback, or just want to say hello —
                        we’d love to hear from you. Let’s start the conversation!
                    </span>
                </div>
            </div>

            <ContentWidth>

                <div className={css.contactContainer}>
                    {contactData?.map((section, idx) => (
                        <div key={idx} className={css.card}>
                            <div className={css.tag}>{section?.tag}</div>

                            <div className={css.rightBorder}>
                                {section?.lines?.map((line, i) => (
                                    <div key={i} className={css.text}>
                                        {line}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className={css.darkInfoCard}>
                    <div>
                        <h3>Talk to our expert Developer</h3>
                        <p>
                            Get a 30-min. free consultation with a Developer to optimize
                            your websites.
                        </p>
                    </div>

                    <PrimaryBtnLink href="https://calendly.com/jaytiwary" className="primaryBtn">
                        Book a slot <IconCollection name="rightArrowTop" />
                    </PrimaryBtnLink>
                </div>
            </ContentWidth>
        </div>
    )
}

export default HeroSectionContact



const contactData = [
    {
        tag: "Support",
        lines: [
            "Get in touch with our experts",
            <div className={css.linkText}>
                To contact our support team, <br /> write to us at, <br />
                <a href="mailto:hello@icodelabs.co" className={css.emailLink}>
                    hello@icodelabs.co
                </a>
            </div>,
        ],
    },
    {
        tag: "Sales",
        lines: [
            "Connect with iCodelabs team",
            <div className={css.linkText}>
                Email/Call Us at <br />
                <a href="mailto:hello@icodelabs.co" className={css.emailLink}>
                    hello@icodelabs.co
                </a>
            </div>,
            "+91 98777 88646, +91 83604 42703",
        ],
    },
    {
        tag: "Human Resources",
        lines: [
            "Reach our people",
            <div className={css.linkText}>
                For employment verification and <br /> other HR information
                <br />
                <a href="mailto:hr@icodelabs.co" className={css.emailLink}>
                    hr@icodelabs.co
                </a>
            </div>,
        ],
    },
    {
        tag: "Offices",
        lines: [
            "Find us",

            <div className={css.linkText}>
                D-176, Phase 8B, Industrial Area, <br /> Sector 74, Sahibzada Ajit Singh
                Nagar, Punjab 160055
            </div>,
        ],
    },
];
