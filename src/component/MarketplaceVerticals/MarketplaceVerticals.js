import React from 'react'
import ContentWidth from '../ContentWidth/ContentWidth';
import css from './MarketplaceVerticals.module.css'
import IconCollection from '../IconCollection/IconCollection';
import { PrimaryBtnLink } from '../Animations/CTAbutton';
import Link from 'next/link';

const cards = [
    {
        id: 1,
        slug: "/rental-marketplace",
        icon: <IconCollection name="rental-marketplace" />,
        title: "Rental Marketplaces",
        desc: "Availability calendars, deposits, damage protection, time-based pricing, AI-powered listing descriptions.",
        tags: ["Car & Mobility", "Equipment", "Fashion", "Spaces"],
        tagsBg: "#DEEEFF",
        bg: "#EFF7FF"
    },
    {
        id: 2,
        slug: "/service-marketplace",
        icon: <IconCollection name="service-marketplace" />,
        title: "Service Marketplaces",
        desc: "Provider vetting, Cronofy calendar sync, scheduling buffers, milestone payments, portfolio display.",
        tags: ["Freelance", "Home Services", "Consulting"],
        tagsBg: "#EBE6FF",
        bg: "#F3F0FF"
    },
    {
        id: 3,
        slug: "/product-marketplace",
        icon: <IconCollection name="product-marketplace" />,
        title: "Product Marketplaces",
        desc: "Multi-vendor inventory, Shippo shipping, Stripe Connect split payouts, AI-powered listings.",
        tags: ["Handmade", "Vintage", "B2B"],
        tagsBg: "#FFE5E2",
        bg: "#FFEFED"
    },
    {
        id: 4,
        slug: "/booking-and-events-marketplace",
        icon: <IconCollection name="booking-event" />,
        title: "Booking & Events",
        desc: "Group booking, capacity management, iCal and Google Calendar sync, event ticketing.",
        tags: ["Wellness", "Education", "Events"],
        tagsBg: "#FFEECF",
        bg: "#FFF6E5"
    }
];

function MarketplaceVerticals() {
    return (
        <div>
            <ContentWidth>
                <section className={css.container}>
                    <p className={css.subtitle}>MARKETPLACE VERTICALS</p>
                    <h2 className={css.heading}>
                        Every Type of Marketplace.
                        <br />
                        One Specialist Team.
                    </h2>

                    <div className={css.grid}>
                        {cards.map((card) => (
                            <div 
                                key={card.id} 
                                className={css.card}
                                style={{backgroundColor: card.bg}}
                            >
                                <div>
                                    <div className={css.icon}>{card.icon}</div>
                                    <h3>{card.title}</h3>
                                    <p>{card.desc}</p>
                                    <div className={css.tags}>
                                        {card.tags.map((tag, i) => (
                                            <span key={i} style={{backgroundColor: card.tagsBg}}>{tag}</span>
                                        ))}
                                    </div>
                                </div>
                                <div className={css.bottomButton}>
                                    <Link href={card.slug || '/'} className={`${css.footerButton} defaultGradientBtn`}>
                                        Explore More
                                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.707092 11L10.7071 1" stroke="#001730" stroke-width="2" stroke-linejoin="round"/>
                                        <path d="M0.707092 1H10.7071V11" stroke="#001730" stroke-width="2" stroke-linejoin="round"/>
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className={css.infoCardWrapper}>
                        <div className={css.smallbadge}>
                            <IconCollection name="whiteMsg" />
                        </div>
                        <h5>
                            Ready to launch your marketplace? Let's talk.
                        </h5>
                        <PrimaryBtnLink href="https://calendly.com/jaytiwary">
                            Schedule a Free Strategy Call<span>👋</span>
                        </PrimaryBtnLink>
                        </div>
                </section>
            </ContentWidth>
        </div>
    )
}

export default MarketplaceVerticals
