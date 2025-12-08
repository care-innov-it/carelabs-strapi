/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,          // Enable new React compiler (good)
  swcMinify: true,              // Minifies output (good)

  browserslist: {
    production: [
      "last 2 chrome versions",
      "last 2 edge versions",
      "last 2 safari versions",
      "not dead",
      "not IE 11",
      "not chrome < 90",
      "not safari < 13"
    ],
    development: [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  },

  // Prevent Next from sending polyfills for old browsers
  experimental: {
    forceSwcTransforms: true,
    optimizePackageImports: ["lucide-react"],
  },
};

export default nextConfig;
