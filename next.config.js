/** @type {import('next').NextConfig} */
const nextConfig = {
  // Add these options
  optimizeFonts: false,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
