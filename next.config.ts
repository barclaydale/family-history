import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.join(__dirname),
  },
  // The site itself is the static index.html (and friends) in public/ — Next.js
  // only adds the auth API routes and the gate middleware on top. Map "/" to it
  // explicitly since that mapping isn't automatic the way it is on a plain static host.
  async rewrites() {
    return [{ source: "/", destination: "/index.html" }];
  },
};

export default nextConfig;
