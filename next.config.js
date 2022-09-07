/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    // Locales provided in config as per docs:
    // https://nextjs.org/docs/advanced-features/i18n-routing
    locales: ['es', 'en'],
    // locales: ['es', 'en', 'fr'],
    defaultLocale: 'es',
  },
  experimental: {
    newNextLinkBehavior: true,
    images: {
      allowFutureImage: true,
      remotePatterns: [
        { protocol: 'https', hostname: '**.cdninstagram.com' },
        { protocol: 'http', hostname: '**loremflickr.com' }, // REMoVE AFTER TESTING
      ],
    },
  },
}

module.exports = nextConfig

// // /////////////////// BUNDLE ANALYZER //////////////////////////
// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//   enabled: process.env.ANALYZE === 'true',
// })
// module.exports = withBundleAnalyzer(nextConfig) // bundleanalyzer
// // /////////////////////////////////////////////////////////////
