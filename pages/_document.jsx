// Default core packages
import { Html, Head, Main, NextScript } from 'next/document'

import { publicPath } from '../lib/publicPath'

/**
 * Favicon: circular SVG with JPEG inlined as data URI (external bitmaps in SVG
 * favicons are blocked in Chromium). JPEG link is fallback. publicPath() for basePath.
 */
export default function Document() {
	const faviconSvg = publicPath('/favicon/favicon.svg')
	const faviconJpeg = publicPath('/favicon/favicon-32x32.jpeg')
	const pinned = publicPath('/favicon/safari-pinned-tab.svg')

	return (
		<Html lang="en">
			<Head>
				<link rel="icon" href={faviconSvg} type="image/svg+xml" />
				<link rel="icon" href={faviconJpeg} type="image/jpeg" sizes="32x32" />
				<link rel="shortcut icon" href={faviconSvg} type="image/svg+xml" />
				<link rel="apple-touch-icon" href={faviconSvg} />
				<link rel="manifest" href={publicPath('/favicon/site.webmanifest')} />
				<link rel="mask-icon" href={pinned} color="#5bbad5" />
				<meta name="msapplication-TileColor" content="#da532c" />
				<meta name="theme-color" content="#0e0f11" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
