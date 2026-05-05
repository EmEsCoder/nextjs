/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "moviesapi.ir",
        port: "",
        pathname: "/images/**", // توجه: مسیر تصاویر، نه مسیر API
      },
    ],
  },
};

export default nextConfig;
