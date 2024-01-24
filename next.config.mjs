/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "**",
      },
    ],
  },

  env: {
    MONGO_URI:
      "mongodb+srv://abc:abc@cluster0.hftbctu.mongodb.net/panel?retryWrites=true&w=majority",
      SECURE_URL: "hotelwebite123",
  },
};

export default nextConfig;
