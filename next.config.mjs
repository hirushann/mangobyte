/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  experimental: {
    agentFeedback: true,
  },
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  // Keep links to the old WordPress URLs working
  async redirects() {
    return [
      { source: "/about-website-design-company-in-sri-lanka", destination: "/about", permanent: true },
      { source: "/contact-us", destination: "/contact", permanent: true },
      { source: "/portfolio", destination: "/work", permanent: true },
    ];
  },
};

export default nextConfig;
