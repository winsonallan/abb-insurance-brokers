import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	/* config options here */
	images: {
		remotePatterns: [
			{
				protocol: process.env.NEXT_PUBLIC_API_PROTOCOL || 'http',
				hostname: process.env.NEXT_PUBLIC_API_HOSTNAME || 'localhost',
				port: process.env.NEXT_PUBLIC_API_PORT || '5000',
				pathname: '/images/**',
			},
		],
	},
};

export default nextConfig;
