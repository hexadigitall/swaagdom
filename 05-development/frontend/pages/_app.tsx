import { ThemeProvider } from 'next-themes'
import Head from 'next/head'
import type { AppProps } from 'next/app'
import '../styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <Head>
        <title>SWAAGDOM — Style, Swaggadishly.</title>
        <meta name="description" content="Swaagdom is an AI-powered fashion platform for global discovery, inspired by African design traditions. Style, Swaggadishly." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Favicons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Theme colors */}
        <meta name="theme-color" content="#F59E0B" />
        <meta name="msapplication-TileColor" content="#F59E0B" />
        
        {/* SEO Meta */}
        <meta property="og:title" content="SWAAGDOM — Style, Swaggadishly." />
        <meta property="og:description" content="Discover global style, curated with intelligence and grounded in African-inspired creativity." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/logos/swaagi-logo-large.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SWAAGDOM — Style, Swaggadishly." />
        <meta name="twitter:description" content="AI-powered global fashion discovery with an African-inspired perspective. #Swaggadishly" />
        
        {/* Preconnect to optimize performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
