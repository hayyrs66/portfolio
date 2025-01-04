/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "utfs.io",
        port: "",
        pathname: "/f/**",
      },
    ],
  },
  experimental: {
    turbo: {
      rules: {
        '*.glsl': {
          loaders: ['glslify-loader'],
          as: '*.js',
        },
        '*.vs': {
          loaders: ['glslify-loader'],
          as: '*.js',
        },
        '*.fs': {
          loaders: ['glslify-loader'],
          as: '*.js',
        },
      },
    },
  },
};

module.exports = nextConfig;
