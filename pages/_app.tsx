import '../styles/globals.css'
import React, { useEffect } from 'react'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import Container from '../components/Layout/Container'
import Navbar from '../components/Layout/Nav/Navbar'
import Footer from '../components/Layout/Footer'
import { useRouter, Router } from 'next/router'
import Head from 'next/head'

declare global {
  interface Window {
    dataLayer: any
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const pageView = (url: string, title: string) => {
    window &&
      window.dataLayer &&
      window.dataLayer.push({
        event: 'virtualPageview',
        virtualPageURL: url,
        virtualPageTitle: title,
      })
  }

  useEffect(() => {
    pageView(router.pathname, document.title)
    const handleRouteChange = (url: string) => {
      pageView(url, document.title)
    }
    Router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      Router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [])
  return (
    <ThemeProvider attribute="class">
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
      </Head>
      <Container>
        <Navbar />

        <main className="flex flex-col mx-auto max-w-4xl pt-12 px-4 md:px-8 mb-8 flex-grow w-full">
          <Component {...pageProps} />
        </main>
        <Footer />
      </Container>
    </ThemeProvider>
  )
}

export default MyApp
