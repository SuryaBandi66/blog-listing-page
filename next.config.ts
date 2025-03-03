import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "api.slingacademy.com",
      "idea-usher-blog.s3.ap-south-1.amazonaws.com",
    ],
  },
};

export default nextConfig;
