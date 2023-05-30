/** @type {import('next').NextConfig} */


module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'storage.yandexcloud.net',
          port: '',
          pathname: '/suefa-backet/**',
        },
      ],
    },
  }
