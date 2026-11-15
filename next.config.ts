import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 게임이 하나뿐이라 목록 페이지 대신 바로 작품으로 보낸다. 두 번째 게임이 생기면 /games 페이지로 교체.
  redirects: async () => [
    { source: "/games", destination: "/games/paper-seasons", permanent: false },
  ],
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
};

export default nextConfig;
