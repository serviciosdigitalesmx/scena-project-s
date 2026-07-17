/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'scena.com.mx',
          },
        ],
        destination: 'https://www.scena.com.mx/:path*',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
