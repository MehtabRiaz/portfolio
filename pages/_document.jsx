// Default core packages
import { Html, Head, Main, NextScript } from 'next/document'

import { publicPath } from '../lib/publicPath'

/**
 * Load custom scripts in <Head>
 * 
 * @returns <Html>
 */
export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<link rel="apple-touch-icon" sizes="180x180" href={publicPath('/favicon/apple-touch-icon.png')} />
				<link rel="icon" type="image/png" sizes="32x32" href={publicPath('/favicon/favicon-32x32.png')} />
				<link rel="icon" type="image/png" sizes="16x16" href={publicPath('/favicon/favicon-16x16.png')} />
				<link rel="manifest" href={publicPath('/favicon/site.webmanifest')} />
				<link rel="mask-icon" href={publicPath('/favicon/safari-pinned-tab.svg')} color="#5bbad5" />
				<meta name="msapplication-TileColor" content="#da532c" />
				<meta name="theme-color" content="#ffffff" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}