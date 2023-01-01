// import '../styles/globals.css';
import type { AppProps } from 'next/app'
import '../styles/globals.css'
import Layout from '../components/Layout'


//This component is top on app.
export default function App({ Component, pageProps }: AppProps) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	)
}