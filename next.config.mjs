/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  env: {
    MONGO_URI:
      "mongodb+srv://abc:abc@cluster0.hftbctu.mongodb.net/panel?retryWrites=true&w=majority",
  },
};

export default nextConfig;
