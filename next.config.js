module.exports = {
  async redirects() {
    return [
      {
        source: '/blog',
        destination: 'https://blog.catdrout.xyz',
        permanent: true,
      },
    ]
  },
  i18n: {
    locales: ['en'], // Add your languages here
    defaultLocale: 'en',
    localeDetection: false,
  },
}
