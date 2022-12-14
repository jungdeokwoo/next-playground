/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ['d3t32hsnjxo7q6.cloudfront.net'],
  },
  compiler: {
    styledComponents: true,
  },
}

module.exports = nextConfig
