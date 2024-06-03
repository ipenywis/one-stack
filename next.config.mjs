/** @type {import('next').NextConfig} */
const nextConfig = {};

import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';
const withVanillaExtract = createVanillaExtractPlugin();

export default withVanillaExtract(nextConfig);
