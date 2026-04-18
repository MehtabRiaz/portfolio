/**
 * Prefix paths to `public/` assets when the app uses a Next.js `basePath`
 * (e.g. GitHub Pages project site at /REPO/).
 */
export function publicPath(path) {
	const base = process.env.NEXT_PUBLIC_BASE_PATH || ''
	const normalized = path.startsWith('/') ? path : `/${path}`
	return `${base}${normalized}`
}
