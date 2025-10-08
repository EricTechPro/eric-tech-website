/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'app.trickle.so',
        port: '',
        pathname: '/**',
      },
    ],
  },
  // Static export configuration will be added in Phase 5 for GitHub Pages deployment
  // output: 'export',
}

module.exports = nextConfig
