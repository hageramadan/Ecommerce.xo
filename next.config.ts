import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.freepik.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "your-api-domain.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "thumbs.dreamstime.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "api.watertank6tons.com",
        port: "",
        pathname: "/**",
      },
    ],
    unoptimized: true,
    minimumCacheTTL: 86400,

    formats: ["image/avif", "image/webp"],
  },

  reactStrictMode: true,
  poweredByHeader: false,

  output: "export",
  compress: true,

  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },

  experimental: {
    optimizeCss: true,
  },
};

export default nextConfig;
