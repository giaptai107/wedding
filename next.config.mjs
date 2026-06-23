/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/wedding',
  assetPrefix: '/wedding/',
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
