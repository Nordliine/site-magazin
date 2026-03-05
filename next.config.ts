import path from 'node:path'
import type { NextConfig } from 'next'

const normalizeBasePath = (value: string | undefined): string => {
  if (!value) {
    return ''
  }

  const trimmed = value.trim()
  if (!trimmed || trimmed === '/') {
    return ''
  }

  const withLeadingSlash = trimmed.startsWith('/') ? trimmed : `/${trimmed}`
  return withLeadingSlash.replace(/\/+$/, '')
}

const basePath = normalizeBasePath(process.env.NEXT_PUBLIC_BASE_PATH)

const nextConfig: NextConfig = {
  reactStrictMode: true,
  allowedDevOrigins: ['127.0.0.1'],
  output: 'export',
  trailingSlash: true,
  basePath: basePath || undefined,
  assetPrefix: basePath || undefined,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  webpack: (config) => {
    config.resolve ??= {}
    config.resolve.alias ??= {}
    config.resolve.alias['react-router-dom'] = path.resolve(
      process.cwd(),
      'lib/react-router-dom.tsx',
    )

    return config
  },
}

export default nextConfig
