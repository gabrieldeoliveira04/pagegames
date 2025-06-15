/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['sujeitoprogramador.com'], // libera imagens desse domínio
  },
  env: {
    NEXT_API_URL: process.env.NEXT_API_URL,
  },
};

module.exports = nextConfig;
