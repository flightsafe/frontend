const { join } = require("path");
const withTM = require("next-transpile-modules")(["ui", "common"]);

/** @type {import('next').NextConfig} */
const nextConfig = withTM({
  reactStrictMode: true,
});

module.exports = nextConfig;
