import type { NextConfig } from "next";
experimental: {
    serverActions: {
      bodySizeLimit: "6mb",
    },
  },
  // Ingore Typescript errors
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "**",
        pathname: "/**",
      },
    ],
  },
const nextConfig: NextConfig = {
  /* config options here */experimental: {
    serverActions: {
      bodySizeLimit: "6mb",
    },
  },
  // Ingore Typescript errors
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "**",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
