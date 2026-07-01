/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "standalone",
  poweredByHeader: false,
  images: {
    formats: ['image/avif', 'image/webp'],
    // Required so the labelled SVG placeholder assets render through next/image.
    // Once the client supplies real raster assets (JPG/PNG/WebP) this stays harmless.
    dangerouslyAllowSVG: true,
    contentDispositionType: 'inline',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
}

module.exports = nextConfig
