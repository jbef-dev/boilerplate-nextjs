/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    // https://nextjs.org/docs/advanced-features/i18n-routing
    locales: ['en', 'es'],
    defaultLocale: 'es',
  },
}

module.exports = nextConfig
