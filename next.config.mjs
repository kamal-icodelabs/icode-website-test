/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_APP_API_URL: process.env.NEXT_APP_API_URL,
  },

  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      { protocol: 'https', hostname: 'popseekltest.s3.us-east-2.amazonaws.com' }, { protocol: 'https', hostname: 'icodelabs.co' },
      { protocol: 'https', hostname: 'api.icodestaging.in' },
      { protocol: 'https', hostname: 'res.cloudinary.com' },
    ],
    deviceSizes: [320, 420, 768, 1024, 1200, 1536],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  experimental: {
    optimizePackageImports: ['react-icons', 'lodash'],
    optimizeCss: true,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
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
        source: "/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "no-store",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
