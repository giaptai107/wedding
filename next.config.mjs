/** @type {import('next').NextConfig} */
const githubBasePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const nextConfig = {
  output: "export",

  basePath: githubBasePath,

  assetPrefix: githubBasePath,

  trailingSlash: true,

  images: {
    unoptimized: true,
  },
  webpack(config, options) {
    config.module.rules.push({
      test: /\.(ogg|mp3|wav|mpe?g)$/i,
      use: [
        {
          loader: "url-loader",
          options: {
            name: "[name]-[hash].[ext]",
          },
        },
      ],
    });
    return config;
  },
};

export default nextConfig;
