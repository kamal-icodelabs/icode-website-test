'use client';

import Script from 'next/script';

const ADSENSE_ID = process.env.NEXT_PUBLIC_ADSENSE_ID;

const GoogleAdSense = () => {
    if (!ADSENSE_ID) {
        // Prevent runtime crash if env is missing
        return null;
    }

    return (
        <Script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_ID}`}
            crossOrigin="anonymous"
            strategy="afterInteractive"
        />
    );
};

export default GoogleAdSense;
