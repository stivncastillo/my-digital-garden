/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['tsx', 'ts'],
  experimental: {
    externalDir: true,
  },
//   i18n: {
//    locales: ["es", "en-US"],
//    defaultLocale: "es",
//    localeDetection: false,
//  },
}

module.exports = nextConfig
