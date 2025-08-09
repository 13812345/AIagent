const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['example.com'], // Add your image domains here
  },
  env: {
    API_URL: process.env.API_URL, // Add your environment variables here
  },
  webpack: (config) => {
    // Custom webpack configuration can go here
    return config;
  },
};

module.exports = nextConfig;