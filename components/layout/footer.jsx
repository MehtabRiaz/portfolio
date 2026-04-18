import Container from '../structure/container'
import Icon from '../utils/icon.util'

import css from '../../styles/structure/footer.module.scss'

import content from '../../content/footer.json'

function CreditLine({ person, link, note }) {
	const href = typeof link === 'string' ? link.trim() : ''
	const hasLink = href.length > 0

	return (
		<li>
			{hasLink ? (
				<a href={href} rel="noreferrer" target="_blank">
					{person} <Icon icon={[ 'fad', 'arrow-up-right-from-square' ]} />
				</a>
			) : (
				<span className={css.creditName}>{person}</span>
			)}
			<p>{note}</p>
		</li>
	)
}

export default function Footer() {
	const titles = content.sectionTitles ?? {}
	const linksTitle = titles.links ?? 'Resources'
	const socialTitle = titles.social ?? 'Social'

	const links = content.links ?? []
	const splitAt = Math.ceil(links.length / 2)
	const linksLeft = links.slice(0, splitAt)
	const linksRight = links.slice(splitAt)

	return (
		<footer className={css.container}>
			<Container spacing={['verticalXXLrg', 'bottomLrg']}>
				<section className={css.sections}>
					<div className={css.resources}>
						<h4 className={css.resourcesHeading}>{linksTitle}</h4>
						<div className={css.resourcesGrid}>
							<ul className={css.linksColumn}>
								{linksLeft.map(({ person, link, note }, index) => (
									<CreditLine key={index} person={person} link={link} note={note} />
								))}
							</ul>
							<ul className={css.linksColumn}>
								{linksRight.map(({ person, link, note }, index) => (
									<CreditLine key={splitAt + index} person={person} link={link} note={note} />
								))}
							</ul>
						</div>
					</div>
					<ul className={css.social}>
						<li><h4>{socialTitle}</h4></li>
						<li className={css.socialList}>
							{
							content.social.map( ({ url, icon }, index) => {
								return (
									<a key={index} href={url} rel="noreferrer" target="_blank"><Icon icon={[ 'fab', icon ]} /></a>
								)
							})
							}
						</li>
					</ul>
				</section>
				{content.epitaph && (
					<div className={css.epitaph}>
						<p className={css.epitaphKicker}>{content.epitaph.kicker}</p>
						<p className={css.epitaphLine}>{content.epitaph.line}</p>
						<p className={css.epitaphMono}>{content.epitaph.mono}</p>
					</div>
				)}
			</Container>
			<canvas id="gradient-canvas" className={''} data-transition-in ></canvas>
		</footer>
	)
}
