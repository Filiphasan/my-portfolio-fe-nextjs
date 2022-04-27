/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    environment: 'development'
  },
  publicRuntimeConfig:{
    baseApiUrl: 'http://127.0.0.1:5000/api',
  }
}

module.exports = nextConfig
