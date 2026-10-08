"use client";
import React, { useState, useRef } from "react";
import css from "./ShareTribeAccordionSection.module.css";
// import ContentWidth from "@/component/ContentWidth/ContentWidth";
import IconCollection from "@/component/IconCollection/IconCollection";
import ContentWidth from "@/component/ContentWidth/ContentWidth";

export default function ShareTribeAccordionSection() {
  const [openIndex, setOpenIndex] = useState(null);
  const contentRefs = useRef([]);

  const handleToggle = (index) => {
    if (openIndex === index) {
      setOpenIndex(null); // Collapse if same index
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <div className={css.bgWrapper}>
      <div className={css.glowbgLeft} /> <div className={css.glowbgRight} />
      <ContentWidth>
        {/* ...glow bg and contentHeader */}
        <div className={css.contentWrapper}>
          <h2>Powerful Add-ons & Integrations for Your Sharetribe Platform</h2>
          <p>
            Every business is different. That’s why we offer a wide range of
            optional modules to make your marketplace smarter, faster, and
            easier to manage.
          </p>
        </div>
        <div className={css.accordionWrapper}>
          {accordionData.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`${css.accordionBox} ${
                  isOpen ? css.openAccordionBox : ""
                }`}
              >
                <div
                  className={css.titleNbtn}
                  onClick={() => handleToggle(index)}
                >
                  <h5>{item.heading}</h5>
                  <IconCollection
                    name={isOpen ? "closeBtnBlue" : "openBtnBlue"}
                  />
                </div>

                <div
                  ref={(el) => (contentRefs.current[index] = el)}
                  className={`${css.contentBox} ${
                    isOpen ? css.contentBoxShow : ""
                  }`}
                >
                  <h5>{item.title}</h5>
                  <div>
                    <span className="subTitle">{item.ptTitle}</span>
                    <ul>
                      {item.points.map((pt, idx) => (
                        <li key={idx}>{pt}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </ContentWidth>
    </div>
  );
}

const accordionData = [
  {
    heading: "AI-Enabled Marketplace",
    title:
      "Embed GPT-powered assistants, AI search, recommendations, and dynamic pricing into your marketplace.",
    ptTitle: "What do you get as the result?",
    points: [
      "Faster onboarding & listing creation",
      "AI chat/support to reduce tickets",
      "Personalized recommendations",
      "Dynamic pricing & insights",
    ],
  },
  {
    heading: "Multilingual GPT-Powered Content (incl. Arabic/RTL)",
    title:
      "Auto-translate listings, profiles, and UI copy with GPT; full right-to-left support for Arabic.",
    ptTitle: "What do you get as the result?",
    points: [
      "Instant multilingual content",
      "Arabic/RTL interface support",
      "Better global reach & SEO",
      "Lower manual translation effort",
    ],
  },
  {
    heading: "Custom Multiple-Tier Pricing",
    title:
      "Offer vendor/customer tiers and packages with tailored benefits and limits.",
    ptTitle: "What do you get as the result?",
    points: [
      "Serve multiple market segments",
      "Easy upgrades/downgrades",
      "Clear value ladders for growth",
    ],
  },
  {
    heading: "Subscription Payments",
    title:
      "Recurring billing for memberships, vendor fees, or subscription products.",
    ptTitle: "What do you get as the result?",
    points: [
      "Predictable recurring revenue",
      "Automated billing & invoicing",
      "Flexible cycles (weekly/monthly/yearly)",
    ],
  },
  {
    heading: "Discount Codes (Basic)",
    title:
      "Native Sharetribe coupons for simple promos and campaigns.",
    ptTitle: "What do you get as the result?",
    points: [
      "Quick promo setup",
      "Seasonal/launch discounts",
      "Trackable usage & redemptions",
    ],
  },
  {
    heading: "Discount Codes (Voucherify)",
    title:
      "Enterprise-grade campaigns with advanced rules, segments, and tracking.",
    ptTitle: "What do you get as the result?",
    points: [
      "Targeted campaigns & segments",
      "Tiered vouchers & referrals",
      "Detailed analytics & ROI",
    ],
  },
  {
    heading: "Negotiations / Reverse Marketplace",
    title:
      "Buyers post needs; providers bid, counter, and negotiate in-app.",
    ptTitle: "What do you get as the result?",
    points: [
      "Flexible pricing via bidding",
      "Higher match quality",
      "Clear audit trail of offers",
    ],
  },
  {
    heading: "Push Notifications",
    title:
      "Real-time alerts for bookings, messages, payouts, and status changes.",
    ptTitle: "What do you get as the result?",
    points: [
      "Higher retention & engagement",
      "Instant status visibility",
      "Mobile & web support",
    ],
  },
  {
    heading: "Real-Time Chat",
    title:
      "In-platform messaging with attachments and read receipts.",
    ptTitle: "What do you get as the result?",
    points: [
      "Faster buyer–seller decisions",
      "Reduced disputes",
      "Better conversion to checkout",
    ],
  },
  {
    heading: "Milestone-Based Payments",
    title:
      "Split project payments into verified milestones.",
    ptTitle: "What do you get as the result?",
    points: [
      "Lower delivery risk",
      "Release-on-approval flows",
      "Ideal for services & projects",
    ],
  },
  {
    heading: "Video Calling",
    title:
      "Zoom/Google Meet integration for live sessions and consultations.",
    ptTitle: "What do you get as the result?",
    points: [
      "Seamless virtual meetings",
      "Great for tutors/coaches",
      "No context-switching",
    ],
  },
  {
    heading: "Meetings & Calendar Integration",
    title:
      "Cronofy/Google/Calendly sync for availability, bookings, and reminders.",
    ptTitle: "What do you get as the result?",
    points: [
      "Accurate availability",
      "Auto reminders & reschedules",
      "Fewer no-shows",
    ],
  },
  {
    heading: "Deposits & Refunds",
    title:
      "Secure bookings with deposits and clear refund workflows.",
    ptTitle: "What do you get as the result?",
    points: [
      "Lower cancellations",
      "Trust via transparent policies",
      "Stripe-powered refunds",
    ],
  },
  {
    heading: "Custom Stripe Payments, Refunds & Payouts",
    title:
      "Go beyond defaults with custom splits, schedules, and flows.",
    ptTitle: "What do you get as the result?",
    points: [
      "Match your exact business model",
      "Support complex revenue sharing",
      "Automate reconciliation",
    ],
  },
  {
    heading: "Digital Contracts (DocuSign)",
    title:
      "E-signature flows tied to bookings, rentals, or enterprise deals.",
    ptTitle: "What do you get as the result?",
    points: [
      "Legally compliant agreements",
      "Frictionless signing UX",
      "Stored copies for records",
    ],
  },
  {
    heading: "Shipping Integrations (Shippo / ShipEngine)",
    title:
      "Rates, labels, and tracking integrated into order flows.",
    ptTitle: "What do you get as the result?",
    points: [
      "Cheapest carrier rates",
      "Real-time parcel tracking",
      "Automated label generation",
    ],
  },
  {
    heading: "Custom Payment Gateways",
    title:
      "Integrate PayPal, Tap Payments, TrustApp and other regional gateways.",
    ptTitle: "What do you get as the result?",
    points: [
      "Higher conversion in local markets",
      "Support preferred payment methods",
      "Wider geographic reach",
    ],
  },
  {
    heading: "Enterprise-Level Memberships",
    title:
      "Corporate/VIP tiers with gated features and billing.",
    ptTitle: "What do you get as the result?",
    points: [
      "Serve high-value clients",
      "Tiered benefits & access",
      "B2B-friendly controls",
    ],
  },
  {
    heading: "Social Login (Apple / LinkedIn / Google)",
    title:
      "One-tap signup and verified identities via social providers.",
    ptTitle: "What do you get as the result?",
    points: [
      "Faster onboarding",
      "Lower drop-offs at signup",
      "Improved trust & KYC signals",
    ],
  },
  {
    heading: "Single-Vendor Shopping Cart",
    title:
      "Cart and checkout optimized for single-merchant flows.",
    ptTitle: "What do you get as the result?",
    points: [
      "Simple D2C experiences",
      "Fewer steps to purchase",
      "Clean reporting per seller",
    ],
  },
  {
    heading: "Multi-Vendor Shopping Cart",
    title:
      "Cart supports items from multiple vendors with correct splits.",
    ptTitle: "What do you get as the result?",
    points: [
      "True marketplace checkout",
      "Accurate commission splits",
      "Better AOV via mixed carts",
    ],
  },
  {
    heading: "Media Uploads (Outside Sharetribe)",
    title:
      "Cloudinary/AWS S3 pipelines for heavy media, optimization, and AI transforms.",
    ptTitle: "What do you get as the result?",
    points: [
      "Faster pages via optimized media",
      "Background removal & variants",
      "Lower storage costs",
    ],
  },
  {
    heading: "Advanced Search (Algolia / Typesense)",
    title:
      "Lightning-fast search with facets, synonyms, and geo-filters.",
    ptTitle: "What do you get as the result?",
    points: [
      "Better discovery of listings",
      "Higher conversion from search",
      "Scalable search performance",
    ],
  },
  {
    heading: "Dynamic Commissions",
    title:
      "Set commissions by category, vendor tier, or order volume.",
    ptTitle: "What do you get as the result?",
    points: [
      "Flexible monetization",
      "Vendor incentives & promos",
      "Fine-grained revenue control",
    ],
  },
  {
    heading: "Tax Handling",
    title:
      "Automate tax rules, VAT/GST, and location-based rates.",
    ptTitle: "What do you get as the result?",
    points: [
      "Compliance in key regions",
      "Accurate tax at checkout",
      "Cleaner finance ops",
    ],
  },
  {
    heading: "Bulk Data Uploads (CSV / APIs)",
    title:
      "Import/export listings, vendors, and orders at scale.",
    ptTitle: "What do you get as the result?",
    points: [
      "Faster vendor onboarding",
      "Easy migrations from other tools",
      "Time-saving data ops",
    ],
  },
  {
    heading: "ID Verification (KYC)",
    title:
      "Verify users and vendors with government IDs and third-party KYC.",
    ptTitle: "What do you get as the result?",
    points: [
      "Higher trust & safety",
      "Reduced fraud & chargebacks",
      "Compliance-friendly onboarding",
    ],
  },
];
