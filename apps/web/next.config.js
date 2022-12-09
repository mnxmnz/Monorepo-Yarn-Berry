// @workspace/ui 패키지를 tranpile 시킨다.
const withTM = require("next-transpile-modules")(["@workspace/ui"]);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = withTM(nextConfig);
