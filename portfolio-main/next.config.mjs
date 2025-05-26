/** @type {import('next').NextConfig} */
import createBundleAnalyzer from '@next/bundle-analyzer';

const withBundleAnalyzer = createBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
  experimental: {
    esmExternals: true
  },
  swcMinify: true,
  transpilePackages: [],
};

export default withBundleAnalyzer(nextConfig);
