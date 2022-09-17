import '../styles/hey.css'
import '../css/prism.css'
import 'katex/dist/katex.css'
import '../styles/globals.css'

import '@fontsource/inter/variable-full.css'
import Head from 'next/head'
import Analytics from '../components/analytics'
import ClientReload from '../components/ClientReload'
import LayoutWrapper from '../components/LayoutWrapper'
import { ThemeProvider } from 'next-themes'
import { AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'
import { Footer } from '@/components/Footer'
import { Navbar } from '@/components/Navbar'

const isDevelopment = process.env.NODE_ENV === 'development'
const isSocket = process.env.SOCKET

function MyApp({ Component, pageProps }) {
    const route = useRouter()
    const getNavs = () => {
        if (route.pathname.match(['/blog/+'])) {
            return ['home', 'about', 'portfolio']
        } else {
            return ['about', 'portfolio']
        }
    }

    return (
        <>
            <ThemeProvider enableSystem={true} attribute="class">
                <Head>
                    <meta name="viewport" content="width=device-width" initial-scale="1" />
                </Head>
                {isDevelopment && isSocket && <ClientReload />}
                <Analytics />
                {route.pathname === '/' || route.pathname === '/portfolio' ? (
                    <LayoutWrapper>
                        <Component {...pageProps} />
                    </LayoutWrapper>
                ) : (
                    <LayoutWrapper>
                        <div className="notion-frame">
                            <Navbar navLinks={getNavs()} />
                            <div className="notion-page-scroller ">
                                <Component {...pageProps} />
                                <Footer />
                            </div>
                        </div>
                    </LayoutWrapper>
                )}
            </ThemeProvider>
        </>
    )
}

export default MyApp
