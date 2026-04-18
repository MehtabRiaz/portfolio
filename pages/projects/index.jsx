// Sections
import GitRecentProjects from '../../components/sections/projects/recent'
import FeaturedProjects from '../../components/sections/projects/featured'

import Color from '../../components/utils/page.colors.util'

import settings from '../../content/_settings.json'
import colors from '../../content/projects/_colors.json'

export default function Projects({ user, repos }) {
	return (
		<>
			<Color colors={colors} />
			<FeaturedProjects />
			<GitRecentProjects user={user} repos={repos} />
		</>
	)
}

/** Static export (GitHub Pages): data is fetched at build time. Re-push to refresh. */
export async function getStaticProps() {
	let user = []
	let repos = []

	try {
		const [gitUserRes, gitReposRes] = await Promise.all([
			fetch(`https://api.github.com/users/${settings.username.github}`),
			fetch(`https://api.github.com/users/${settings.username.github}/repos`),
		])

		const rawUser = await gitUserRes.json()
		const rawRepos = await gitReposRes.json()

		if (rawUser?.login) {
			user = [{ login: rawUser.login, name: rawUser.name, avatar_url: rawUser.avatar_url, html_url: rawUser.html_url }]
		}

		if (Array.isArray(rawRepos) && rawRepos.length) {
			repos = rawRepos
				.map(
					({
						name,
						fork,
						description,
						forks_count,
						html_url,
						language,
						watchers,
						default_branch,
						homepage,
						pushed_at,
						topics,
					}) => {
						const timestamp = Math.floor(new Date(pushed_at) / 1000)
						return {
							name,
							fork,
							description,
							forks_count,
							html_url,
							language,
							watchers,
							default_branch,
							homepage,
							timestamp,
							topics,
							pushed_at,
						}
					}
				)
				.sort((a, b) => b.timestamp - a.timestamp)
				.filter((e, i) => i < 8 && !(e.topics || []).includes('github-config'))
		}
	} catch (e) {
		console.error('GitHub fetch failed:', e)
	}

	return { props: { repos, user } }
}
