/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    baseApiUrl: 'http://127.0.0.1:5000/api',
    baseUrl: 'http://127.0.0.1:5000',
    environment: 'development'
  },
  publicRuntimeConfig:{
    baseApiUrl: 'http://127.0.0.1:5000/api',
  }
}

module.exports = nextConfig
