// next.config.js
module.exports = {
  productionBrowserSourceMaps: false, // Disable for better performance
  images: {
    minimumCacheTTL: 2678400,
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
       {
        protocol: "https",
        hostname: "popseekltest.s3.us-east-2.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "api.icodestaging.in",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },

      {
        protocol: "https",
        hostname: "icodelabs.co",
      },
      {
        protocol: "https",
        hostname: "cdn.icodelabs.co",
      },
    ],
    deviceSizes: [320, 420, 768, 1024, 1200, 1536],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // Enable experimental features for better performance
  experimental: {
    optimizePackageImports: ['react-icons', 'lodash', 'swiper'],
    cssChunking: true,
  },

  // Compiler optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  compress: true,
  swcMinify: true,
  // SEO-friendly redirects (301 permanent redirects)
  async redirects() {
    return [
      {
        source: '/services/expert-sharetribe-flex-development-services-company',
        destination: '/services/sharetribe',
        permanent: true,
      },
      {
        source: '/services/ios-mobile-app-development-services-company',
        destination: '/services/mobile-app-development',
        permanent: true,
      },

      // Old case study paths
      { source: '/case-study', destination: '/casestudy', permanent: true },
      { source: '/case-studies', destination: '/casestudy', permanent: true },
      { source: '/case-study/:slug', destination: '/casestudy/:slug', permanent: true },

      // Retired case-study slugs — existed on the previous site, no current equivalent
      { source: '/casestudy/pinktada', destination: '/casestudy', permanent: true },
      { source: '/casestudy/rental-marketplace', destination: '/rental-marketplace', permanent: true },
      { source: '/casestudy/product-marketplace', destination: '/product-marketplace', permanent: true },
      { source: '/casestudy/mobile-app-development', destination: '/casestudy', permanent: true },

      // Old service paths with SEO equity
      { source: '/sharetribe-development', destination: '/services/sharetribe', permanent: true },
      { source: '/sharetribe-marketplace-development', destination: '/services/sharetribe', permanent: true },
      { source: '/services/marketplace-development', destination: '/services/sharetribe', permanent: true },

      // Old top-level service slugs → current /services/* URLs
      { source: '/mobile-app-development', destination: '/services/mobile-app-development', permanent: true },
      { source: '/ai-development', destination: '/services/ai-development', permanent: true },
      { source: '/sharetribe', destination: '/services/sharetribe', permanent: true },
      { source: '/digital-marketing', destination: '/services/digital-marketing', permanent: true },
      { source: '/services/digital-marketing-seo-services-company', destination: '/services/digital-marketing', permanent: true },

      // Legacy /Industries/* vertical pages → closest live marketplace vertical
      { source: '/Industries/ecommerce-marketplace-app-website-development-services', destination: '/product-marketplace', permanent: true },
      { source: '/Industries/real-estate-app-website-development-services', destination: '/rental-marketplace', permanent: true },

      // Old about/contact
      { source: '/about', destination: '/aboutus', permanent: true },
      { source: '/about-us', destination: '/aboutus', permanent: true },
      { source: '/contact-us', destination: '/contact', permanent: true },
      { source: '/our-approach', destination: '/ourapproach', permanent: true },

      // Old marketplace paths
      { source: '/rental-marketplace-development', destination: '/rental-marketplace', permanent: true },
      { source: '/service-marketplace-development', destination: '/service-marketplace', permanent: true },
      { source: '/custom-marketplace', destination: '/custom-marketplace-development', permanent: true },
      { source: '/marketplace-cost', destination: '/marketplace-development-cost', permanent: true },

      // Old blog slug formats that may have changed
      {
        source: '/blog/sharetribe-marketplace-app-development',
        destination: '/blog/sharetribe-marketplace-app-development-options-cost-and-timeline',
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/_next/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        // Pages: allow CDN/proxy to cache for 60s, browser revalidates
        source: "/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, s-maxage=60, stale-while-revalidate=300",
          },
        ],
      },
    ];
  },
};
