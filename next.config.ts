import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "", // Essential for user/org GitHub Pages
};

export default nextConfig;
