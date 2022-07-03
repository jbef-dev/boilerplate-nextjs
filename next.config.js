/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    // Locales provided in config as per docs:
    // https://nextjs.org/docs/advanced-features/i18n-routing
    locales: ['es', 'en', 'fr'],
    defaultLocale: 'es',
  },
  // As per official template
  // only in canary build
  // https://github.com/vercel/next.js/blob/canary/examples/with-emotion-swc/next.config.js
  compiler: {
    emotion: true,
  },
}

module.exports = nextConfig
