import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Serve AVIF first (≈20–30% smaller than WebP), fall back to WebP, then the original.
    // Vercel optimizes on first request and caches the result at the edge.
    formats: ["image/avif", "image/webp"],
    // Keep optimized variants cached at the edge for 31 days (default is 4 hours).
    // Safe here because these are static project assets that rarely change.
    minimumCacheTTL: 60 * 60 * 24 * 31,
  },
};

export default nextConfig;
