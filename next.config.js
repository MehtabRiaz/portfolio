/**
 * GitHub Pages: basePath is set in CI via NEXT_PUBLIC_BASE_PATH (see .github/workflows).
 * Local dev: leave unset for basePath "" (http://localhost:3000).
 */
function basePath() {
	if (process.env.NEXT_PUBLIC_BASE_PATH !== undefined) {
		return process.env.NEXT_PUBLIC_BASE_PATH
	}
	const ref = process.env.GITHUB_REPOSITORY
	if (!ref) return ''
	const [owner, repo] = ref.split('/')
	if (!owner || !repo) return ''
	if (repo === `${owner}.github.io`) return ''
	return `/${repo}`
}

const bp = basePath()

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	output: 'export',
	trailingSlash: true,
	basePath: bp,
	assetPrefix: bp || undefined,
	env: {
		dir: '/',
	},
	images: {
		unoptimized: true,
		remotePatterns: [
			{
				protocol: 'https',
				hostname: '**.vercel.app',
				pathname: '/api/**',
			},
			{
				protocol: 'https',
				hostname: '**.vercel.app',
				pathname: '?app=portfolio-theme-jqe0jhmif-atlamors.vercel.app',
			},
			{
				protocol: 'https',
				hostname: '**.shields.io',
				pathname: '/badge/**',
			},
			{
				protocol: 'https',
				hostname: '**.shields.io',
				pathname: '/github/**',
			},
			{
				protocol: 'https',
				hostname: '**.githubusercontent.com',
				pathname: '/**',
			},
			{
				protocol: 'https',
				hostname: '**.medium.com',
				pathname: '/**',
			},
		],
	},
}

module.exports = nextConfig
