/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ichef.bbci.co.uk",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn.webtekno.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.webtekno.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "geoim.bloomberght.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
