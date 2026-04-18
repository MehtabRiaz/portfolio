// Core packages
import Image from 'next/image'

// Section structure
import Section from '../../structure/section';
import Container from '../../structure/container';

// Section general blocks
import SectionTitle from '../../blocks/section.title.block'

// Section specific blocks
import BadgesBlock from '../../blocks/about.badges.block'
import CopyBlock from '../../blocks/about.copy.block'

// Section scss
import about from '../../../styles/sections/index/about.module.scss';
import { publicPath } from '../../../lib/publicPath';

/**
 * Section: About
 * An overview of yourself.
 * Highlight your top level attributes and disciplines.
 * 
 * @returns {jsx} <About />
 */
export default function About() {
	return (
		<Section classProp={about.section}>	
			<Container spacing={['verticalXXXLrg']}>
				<SectionTitle
					title="About Me"
					preTitle="Overview"
					subTitle="Senior full-stack engineer focused on production SaaS, real-time data, and fintech—shipping end-to-end features with Vue, Nuxt, React, TypeScript, and Ruby on Rails."
				/>
				<section className={about.content}>
					<div className={about.image}>
						<div className={about.imageFrame}>
							<Image
								src={publicPath('/img/mehtab-profile.png')}
								alt="Mehtab Riaz"
								fill
								className={about.profileImage}
								sizes="(max-width: 768px) 100vw, 42vw"
								priority
							/>
						</div>
					</div>
					<div className={about.copy} >
						<CopyBlock 
							title="How I work"
							containerClass={about.container}
							iconClass={about.icon}
							icon={[ 'fad', 'handshake' ]}
							copy="I thrive in cross-functional teams—translating product and compliance needs into clear specs, mentoring junior engineers, and owning delivery from design through deploy. I care about observability, performance, and maintainability, and I am comfortable in async, remote-first environments with institutional stakeholders."
						/>
						<BadgesBlock 
							title="Planning & delivery" 
							containerClass={about.container}
							list={methods} 
							fullContainer="fullContainer"
							block="methods" 
							icon="diagram-project"
							copy="I enjoy shaping architecture early—API contracts, data models, caching, and UX for data-heavy views—then iterating with metrics, code review, and CI/CD until the experience feels fast and dependable for users."
							headerIcon={`${about.icon}`}
						/>
					</div>
				</section>	
			</Container>
		</Section>
	)
}

const methods 	= [
	{ key: 'diagram-project', 	name: 'System design', 		type: 'fad' },
	{ key: 'code', 				name: 'Full-stack delivery', type: 'fad' },
	{ key: 'gauge-high', 		name: 'Performance', 		type: 'fad' },
	{ key: 'shield-check', 		name: 'Security & compliance', type: 'fad' },
	{ key: 'users', 			name: 'Collaboration', 		type: 'far' },
	{ key: 'comments', 			name: 'Client communication', type: 'far' },
]
