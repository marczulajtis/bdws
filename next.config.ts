import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // fonty do obrazków podglądu linku (opengraph-image) muszą trafić na serwer Vercela
  outputFileTracingIncludes: {
    "/opengraph-image": ["./src/assets/og/**/*"],
    "/wpis/[slug]/opengraph-image": ["./src/assets/og/**/*"],
  },
  experimental: {
    serverActions: { bodySizeLimit: "2mb" },
  },
};

export default nextConfig;
