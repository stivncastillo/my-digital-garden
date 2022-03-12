import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import Container from '../components/Layout/Container'
import Navbar from '../components/Layout/Navbar'
import hljs from 'highlight.js'
import javascript from 'highlight.js/lib/languages/javascript'
hljs.registerLanguage('javascript', javascript)
import 'highlight.js/styles/github.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <Container>
        <Navbar />

        <main className="flex flex-col mx-auto max-w-4xl pt-12 px-4 md:px-8 mb-8">
          <Component {...pageProps} />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default MyApp
