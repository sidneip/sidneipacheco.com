import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  // Turbopack is default in Next 16; empty config silences webpack warning
  turbopack: {},
};

export default nextConfig;
