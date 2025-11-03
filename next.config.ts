import type { NextConfig } from "next";

const nextConfig: Partial<NextConfig> & {
    eslint?: { ignoreDuringBuilds?: boolean };
    typescript?: { ignoreBuildErrors?: boolean };
} = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    typescript: {
        ignoreBuildErrors: true,
    },
};

export default nextConfig;
