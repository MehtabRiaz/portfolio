// Core packages
import { useEffect, useState } from 'react'

// Font Awesome — free packages only (no Pro / npm token)
const { library } = require('@fortawesome/fontawesome-svg-core')
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, far, fab)

/** Pro-style prefixes from old content map to free sets FontAwesomeIcon can resolve. */
const PREFIX_TO_FREE = {
	fas: 'fas',
	far: 'far',
	fab: 'fab',
	fad: 'fas',
	fat: 'fas',
	fal: 'fas',
}

/**
 * Icon factory — [prefix, iconName] e.g. ['fas', 'building'], ['fab', 'github'].
 * Duotone / thin / light (fad, fat, fal) are mapped to solid so existing JSON keeps working.
 */
export default function Icon({ icon }) {
	const [iconType, iconKey] = icon
	const resolvedPrefix = PREFIX_TO_FREE[iconType] || 'fas'

	const [stateIconKey, setIconKey] = useState('circle-notch')

	useEffect(() => setIconKey(iconKey), [iconKey])

	return <FontAwesomeIcon icon={[resolvedPrefix, stateIconKey]} />
}
