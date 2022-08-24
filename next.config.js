/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    GRAPHQL_URL: 'http://localhost:3030/api/graphql'
  },
}

module.exports = nextConfig
