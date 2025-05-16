/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // output: "export",
  // distDir: "dist",
  images: {
    unoptimized: true, // Fix for image optimization issue in static export
  },
};

export default nextConfig;