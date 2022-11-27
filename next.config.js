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
}
