/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
      // Agrega la regla para manejar archivos GLSL
      config.module.rules.push({
        test: /\.(glsl|vs|fs)$/,
        exclude: /node_modules/,
        use: ['raw-loader','glslify-loader'],
      });
      return config;
    },
  };