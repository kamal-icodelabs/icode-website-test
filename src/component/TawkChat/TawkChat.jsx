"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Tawk.to property/widget IDs — unchanged.
const TAWK_SRC = "https://embed.tawk.to/68dccbe66f76d8194fba444e/1j6f7ovvf";
// Defer Tawk so it doesn't block initial render / TBT.
const TAWK_DEFER_MS = 5000;

const TawkChat = () => {
  const pathname = usePathname();

  // 1) Inject the Tawk script ~4s after mount (idle window).
  useEffect(() => {
    let cancelled = false;
    let scriptEl = null;

    const inject = () => {
      if (cancelled) return;
      // Don't double-inject across SPA navigations.
      if (document.querySelector('script[data-tawk="1"]')) return;

      // Initialise Tawk's globals before the embed loads.
      window.Tawk_API = window.Tawk_API || {};
      window.Tawk_LoadStart = new Date();
      window.Tawk_API.customStyle = {
        visibility: {
          desktop: { position: "br", xOffset: 20, yOffset: 20 },
          mobile: { position: "br", xOffset: 10, yOffset: 10 },
        },
      };
      window.Tawk_API.onLoad = function () {
        if (typeof window.Tawk_API.setAttributes === "function") {
          window.Tawk_API.setAttributes({
            "hide-title-notification": true,
          });
        }
      };

      scriptEl = document.createElement("script");
      scriptEl.src = TAWK_SRC;
      scriptEl.async = true;
      scriptEl.crossOrigin = "anonymous";
      scriptEl.dataset.tawk = "1";
      document.body.appendChild(scriptEl);
    };

    const timer = setTimeout(inject, TAWK_DEFER_MS);

    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, []);

  // 2) Suppress Tawk's title-bar "(1) new message" notifications.
  //    Re-runs on route change because Next updates document.title async.
  useEffect(() => {
    let observer = null;
    const timer = setTimeout(() => {
      const currentPageTitle = document.title;

      observer = new MutationObserver(() => {
        const newTitle = document.title;
        const isTawkNotification =
          newTitle.includes("new message") ||
          newTitle.includes("(1)") ||
          /^\(\d+\)/.test(newTitle);

        if (isTawkNotification) {
          document.title = currentPageTitle;
        }
      });

      const titleTag = document.querySelector("title");
      if (titleTag) {
        observer.observe(titleTag, { childList: true });
      }
    }, 500);

    return () => {
      clearTimeout(timer);
      if (observer) observer.disconnect();
    };
  }, [pathname]);

  return null;
};

export default TawkChat;
