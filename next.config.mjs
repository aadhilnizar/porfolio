/** @type {import('next').NextConfig} */

// On GitHub Pages this project deploys to https://aadhilnizar.github.io/porfolio,
// so it needs a basePath in production. Locally (dev / `next start`) it stays "".
const isProd = process.env.NODE_ENV === "production";
const basePath = isProd ? "/porfolio" : "";

const nextConfig = {
  reactStrictMode: true,
  output: "export", // static HTML export for GitHub Pages
  basePath,
  images: { unoptimized: true }, // no image optimization server on Pages
  trailingSlash: true, // emit /route/index.html so Pages resolves cleanly
  env: { NEXT_PUBLIC_BASE_PATH: basePath }, // exposed to asset() helper
};

export default nextConfig;
