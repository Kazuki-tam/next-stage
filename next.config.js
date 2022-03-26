/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')
const path = require('path')

const nextConfig = {
  pwa: {
    dest: 'public',
    runtimeCaching,
  },
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}

module.exports = withPWA(nextConfig)
