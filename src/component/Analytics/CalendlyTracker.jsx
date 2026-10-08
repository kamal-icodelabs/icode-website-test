"use client";

import { useEffect } from "react";

/**
 * Site-wide click delegation that fires a GA4 `generate_lead` event whenever
 * a user clicks a link pointing to calendly.com/jaytiwary. Mounted once in
 * the root layout so every Calendly CTA is tracked without touching each
 * component individually.
 */
export default function CalendlyTracker() {
  useEffect(() => {
    const handler = (event) => {
      const anchor = event.target.closest?.('a[href*="calendly.com/jaytiwary"]');
      if (!anchor) return;
      if (typeof window === "undefined" || typeof window.gtag !== "function") return;
      window.gtag("event", "generate_lead", {
        event_category: "Calendly",
        event_label: "Book Scoping Call",
        value: 1,
      });
    };

    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  return null;
}
