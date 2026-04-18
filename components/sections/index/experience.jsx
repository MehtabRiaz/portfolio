// Section structure
import Section from '../../structure/section'
import Container from '../../structure/container'

import SectionTitle from '../../blocks/section.title.block'
import Icon from '../../utils/icon.util'

import about from '../../../styles/sections/index/about.module.scss'
import content from '../../../content/index/experience.json'

/**
 * Section: Experience — roles only (full-width cards below Technical).
 */
export default function Experience() {
	const { title, preTitle, subTitle, roles } = content

	return (
		<Section classProp={`${about.section} borderBottom`}>
			<Container spacing={['verticalXXXLrg']}>
				<SectionTitle
					title={title}
					preTitle={preTitle}
					subTitle={subTitle}
				/>
				<section className={`${about.content} ${about.experienceStack}`}>
					<div className={about.copy}>
						{roles.map((job) => (
							<div key={job.company} className={about.container}>
								<span className={about.icon}>
									<Icon icon={[ 'fad', 'building' ]} />
								</span>
								<h3>{job.company}</h3>
								<p className={about.experienceMeta}>
									<strong>{job.role}</strong>
									{' · '}
									{job.period}
								</p>
								<p className={about.experienceLocation}>{job.location}</p>
								<ul className={about.experienceList}>
									{job.highlights.map((line, i) => (
										<li key={i}>{line}</li>
									))}
								</ul>
							</div>
						))}
					</div>
				</section>
			</Container>
		</Section>
	)
}
