import React from 'react';
import css from './IcodeWorksSection.module.css';
import ContentWidth from '@/component/ContentWidth/ContentWidth';
import classNames from 'classnames';
import Link from 'next/link';

const steps = [
  {
    id: 1,
    title: "Share Your Vision",
    desc: "Tell us about your marketplace idea, challenges, and goals.",
  },
  {
    id: 2,
    title: "Get a Tailored Roadmap",
    desc: "Clear build plan — timelines, budgets, tech stack, fixed scope.",
  },
  {
    id: 3,
    title: "Build & Launch Fast",
    desc: "Agile delivery in weeks — payments, booking logic, AI features.",
  },
  {
    id: 4,
    title: "Scale & Optimise",
    desc: "Post-launch support, new features, performance scaling.",
  },
];

function IcodeWorksSection() {
    return (
        <div className={css.workSection}>
            <ContentWidth className={css.workContentContainer}>
                <section className={css.section}>
                    <p className={css.tag}>WHY ICODELABS</p>
                    <h2 className={css.heading}>
                        How icodelabs Works for You
                    </h2>
                    <div className={css.cards}>
                        {steps.map((step) => (
                            <div key={step.id} className={css.card}>
                                <div className={css.badge}>{step.id}</div>
                                <h3>{step.title}</h3>
                                <p>{step.desc}</p>
                            </div>
                        ))}
                    </div>
                    <div className={css.cta}>
                        <h3>Ready to launch your marketplace?</h3>
                        <p>
                            Book a free scoping call. We'll tell you which package fits, what we'll
                            build, and how long it takes. No commitment.
                        </p>

                        <Link href={'https://calendly.com/jaytiwary'} className={classNames(css.button, "primaryGradientBtn")}>
                            Book a Free Scoping Call
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 11L11 1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M1 1H11V11" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </Link>
                    </div>
                </section>
            </ContentWidth>
        </div>
    )
}

export default IcodeWorksSection