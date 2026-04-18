import Recent from '../../components/sections/articles/recent'

import Color from '../../components/utils/page.colors.util'

import colors from '../../content/articles/_colors.json'
import settings from '../../content/_settings.json'

export default function Articles({ mediumArticles }) {
	return (
		<>
			<Color colors={colors} />
			<Recent mediumArticles={mediumArticles} />
		</>
	)
}

const emptyFeed = { feed: {}, items: [] }

/** Static export (GitHub Pages): Medium feed is fetched at build time. Re-push to refresh. */
export async function getStaticProps() {
	let mediumArticles = emptyFeed

	try {
		const mediumRSS = await fetch(
			`https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/${settings.username.medium}`
		)
		const json = await mediumRSS.json()
		if (json?.items && Array.isArray(json.items)) {
			mediumArticles = json
		}
	} catch (e) {
		console.error('Medium / rss2json fetch failed:', e)
	}

	return { props: { mediumArticles } }
}
