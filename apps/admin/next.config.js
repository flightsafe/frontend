const { join } = require("path");
const withPlugin = require("next-compose-plugins");
const withTM = require("next-transpile-modules")([
  "ui",
  "common",
  "api-client",
  "model",
  "drf-data-provider",
]);
const { i18n } = require("./next-i18next.config");

/** @type {import('next').NextConfig} */
const nextConfig = withTM({
  reactStrictMode: true,
});

module.exports = withPlugin([], { i18n, ...nextConfig });
