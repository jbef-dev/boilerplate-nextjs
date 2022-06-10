/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    // Locales provided in config following docs:
    // https://nextjs.org/docs/advanced-features/i18n-routing
    locales: ['en', 'es'],
    defaultLocale: 'es',
  },
}

module.exports = nextConfig
