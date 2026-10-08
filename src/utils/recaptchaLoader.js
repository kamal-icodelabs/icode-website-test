// Module-level state — shared across every import in the same JS bundle.
// Guarantees the Google reCAPTCHA script is injected at most once per page load.
let injected = false;
const readyCallbacks = [];

function notifyAll() {
  while (readyCallbacks.length) readyCallbacks.shift()();
}

export function injectRecaptchaOnce() {
  if (typeof window === "undefined") return;

  // Already injected — nothing to do.
  if (injected) return;
  injected = true;

  // If api.js is already present in the DOM (e.g. another lib added it), just
  // wait for grecaptcha to become available without adding a second tag.
  if (document.querySelector('script[src*="recaptcha/api.js"]')) {
    pollUntilReady();
    return;
  }

  const script = document.createElement("script");
  script.src = "https://www.google.com/recaptcha/api.js";
  script.async = true;
  script.defer = true;
  script.onload = notifyAll;
  script.onerror = () => {
    injected = false; // allow a retry on next focus/scroll
  };
  document.head.appendChild(script);
}

function pollUntilReady() {
  if (window.grecaptcha?.ready) {
    window.grecaptcha.ready(notifyAll);
  } else {
    const id = setInterval(() => {
      if (window.grecaptcha?.ready) {
        clearInterval(id);
        window.grecaptcha.ready(notifyAll);
      }
    }, 100);
  }
}

/** Returns a cleanup function that removes the listener. */
export function onRecaptchaReady(fn) {
  if (typeof window !== "undefined" && window.grecaptcha) {
    fn();
    return () => {};
  }
  readyCallbacks.push(fn);
  return () => {
    const idx = readyCallbacks.indexOf(fn);
    if (idx !== -1) readyCallbacks.splice(idx, 1);
  };
}
