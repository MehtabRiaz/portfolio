import Image from 'next/image'

import { useEffect } from 'react'
import { m, useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer'

import Badges 		from '../../utils/badge.list.util'
import Icon 		from '../../utils/icon.util'

import css 			from '../../../styles/sections/projects/featured.module.scss'
import { publicPath } from '../../../lib/publicPath'

export default function FeaturedProject({ content }, index) {

	const { project, url: projectUrl, repo, descriptionTitle,description, stack, imageOptions, images } = content

	const goToProject = () => {
		if ( ! projectUrl ) return
		window.open(projectUrl, '_blank', 'noopener,noreferrer')
	}

	const onCardKeyDown = (e) => {
		if (e.key === 'Enter' || e.key === ' ') {
			e.preventDefault()
			goToProject()
		}
	}

	const layoutValue = Array.isArray(imageOptions)
		? imageOptions.find(({ key }) => key === 'layout')?.value
		: null

	const imageLayoutCenter = layoutValue === 'center' || layoutValue === 'centerProminent'
	const imageLayoutCenterProminent = layoutValue === 'centerProminent'

	const controls = useAnimation();
	const { ref, inView  } = useInView({
		"threshold": 0.25,
		"triggerOnce": false
	})

	useEffect( () => {
		if ( inView ) {	controls.start("visible") }
		if ( !inView ) { controls.start("hidden") }
	}, [ controls, inView ] )

	return (
		<m.section 	
			key={index}
			className={css.project} 
			//framer-motion
			ref={ref}
			variants={container}
			initial={[ "rest", "hidden" ]}
			whileHover="hover"
			animate={controls}
			role="link"
			tabIndex={0}
			aria-label={`Open ${project} — ${descriptionTitle}`}
			onClick={goToProject}
			onKeyDown={onCardKeyDown}
		>
			
			<div className={css.details}>
				<div className={css.projectHeader}>
					<div className={css.header}>
						<h3 className="highlight">{project}</h3><span className={css.privateOr}><i className="devicon-github-plain"></i>{repo}</span>	
					</div>
					<div className={css.description}>
						<p><strong>{descriptionTitle}</strong> {description}</p>
					</div>
					<div className={css.stackContainer}>
						<Badges list={stack} block="stack" fullContainer={false} color={false} />
					</div>
					<m.div variants={''} className={css.viewProject}>
						<Icon icon={[ 'fad', 'arrow-right-to-bracket' ]} />
					</m.div>
				</div>
			</div>

			<div className={[
				css.imageContainer,
				imageLayoutCenter ? css.imageLayoutCenter : '',
				imageLayoutCenterProminent ? css.imageLayoutCenterProminent : '',
			].filter(Boolean).join(' ')}
			>
				<span className={`${css.imageAnimationContainer}`}>
					{ images.map( ({key, url: imageSrc, hover, h, w, unoptimized }, index) => {
						const resolvedSrc = publicPath(imageSrc)
						hover = ( hover === 'left' ) ? hoverLeft : hoverRight
						const isSvg = String(resolvedSrc).toLowerCase().endsWith('.svg')
						const nw = Number(w)
						const nh = Number(h)
						const ratioStyle =
							nw > 0 && nh > 0
								? { aspectRatio: `${nw} / ${nh}`, objectFit: 'contain' }
								: { objectFit: 'contain' }
						return (
							<m.div key={`${index}-${key}`} variants={item}>
								<m.div variants={hover}>
									<Image
										src={resolvedSrc}
										alt={`${project} product preview`}
										height={nh}
										width={nw}
										className={css.featuredImage}
										style={ratioStyle}
										unoptimized={Boolean(unoptimized) || isSvg}
										quality={isSvg || unoptimized ? undefined : 95}
										sizes={unoptimized || isSvg ? undefined : '(max-width: 768px) 92vw, 42vw'}
									/>
								</m.div>
							</m.div>
						)}
					) }
				</span>
			</div>
		</m.section>
	)
}

const container = {
	hidden: { 
		transition: {
			delayChildren: 0.125,
			staggerChildren: 0.0625
		}
	},
	visible: {
		transition: {
			delayChildren: 0.125,
			staggerChildren: 0.25,
		}
	},
	rest: {
		transition: {
			delayChildren: 0,
			staggerChildren: 0,
		}
	},
	hover: {
		transition: {
			delayChildren: 0,
			staggerChildren: 0,
		}
	}
}

const item = {
	hidden: { 
		y: 75, 
		opacity: 0,
		transition: {
			type: "tween",
			ease: "easeIn",
			duration: .35, 
		}
	},
	visible: {
		y: 0,
		opacity: 1,
		transition: {
			type: "tween",
			ease: "easeOut",
			duration: .5, 
		}
	},
}

const hoverTransition = {
	type: 'tween',
	ease: [0.25, 0.1, 0.25, 1],
	duration: 0.35,
}

const hoverLeft = {
	rest: {
		x: 0,
		scale: 1,
		transition: hoverTransition,
	},
	hover: {
		x: -16,
		scale: 1.055,
		transition: hoverTransition,
	},
}

const hoverRight = {
	rest: {
		x: 0,
		scale: 1,
		transition: hoverTransition,
	},
	hover: {
		x: 16,
		scale: 1.055,
		transition: hoverTransition,
	},
}

