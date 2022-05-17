const { join } = require("path");
const withTM = require("next-transpile-modules")([
  "ui",
  "common",
  "api-client",
  "model",
]);

/** @type {import('next').NextConfig} */
const nextConfig = withTM({
  reactStrictMode: true,
});

module.exports = nextConfig;
