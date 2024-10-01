import { withExpo } from '@expo/next-adapter';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  transpilePackages: ['react-native', 'react-native-web', 'expo'],
  experimental: {
    forceSwcTransforms: true,
  },
};

export default withExpo(nextConfig);
