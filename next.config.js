module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/perguntas",
        destination: "/faq",
        permanent: true,
      },
    ];
  },
};
