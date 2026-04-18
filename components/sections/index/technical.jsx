// Core packages
import Image from 'next/image'

// Section structure
import Section from '../../structure/section'
import Container from '../../structure/container'

// Section general blocks
import SectionTitle from '../../blocks/section.title.block'

// Section specific blocks
import BadgesBlock from '../../blocks/about.badges.block'
import CopyBlock from '../../blocks/about.copy.block'

// Section scss
import about from '../../../styles/sections/index/about.module.scss'

import content from '../../../content/index/technical.json'

/**
 * Section: Technical — “How I ship”, stack badges, decorative graphic on the right.
 */
export default function Technical() {
	const {
		title,
		preTitle,
		subTitle,
		intro,
		stackTitle,
		stackCopy,
		stackBadges,
	} = content

	return (
		<Section classProp={`${about.section} borderBottom`}>
			<Container spacing={['verticalXXXLrg']}>
				<SectionTitle
					title={title}
					preTitle={preTitle}
					subTitle={subTitle}
				/>
				<section className={`${about.content} ${about.technicalWithArt}`}>
					<div className={about.copy}>
						<CopyBlock
							title={intro.title}
							icon={intro.icon}
							copy={intro.copy}
							iconClass={about.icon}
							containerClass={about.container}
						/>
						<BadgesBlock
							title={stackTitle}
							copy={stackCopy}
							list={stackBadges}
							block="tech"
							fullContainer="fullContainer"
							icon="laptop-code"
							containerClass={about.container}
							headerIcon={about.icon}
						/>
					</div>
					<div className={`${about.image} ${about.technicalSvg}`}>
						<div className={about.technicalImageInner}>
							<Image
								src="/img/dataism-24.svg"
								width={477}
								height={1111}
								alt="Data Strings 01 by Colorpong: https://ywft.us/2177b695b"
								className={about.technicalSvgImg}
								priority={false}
							/>
						</div>
					</div>
				</section>
			</Container>
		</Section>
	)
}
