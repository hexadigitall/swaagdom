import { ThemeProvider } from 'next-themes'
import Head from 'next/head'
import type { AppProps } from 'next/app'
import '../styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <Head>
        <title>SWAAGDOM — Style, intelligently.</title>
        <meta name="description" content="SWAAGDOM — Style, intelligently. Discover fashion, swaggadishly." />
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
        <meta property="og:title" content="SWAAGDOM — Style, intelligently." />
        <meta property="og:description" content="AI-powered style guidance with global cultural intelligence. Discover fashion, swaggadishly." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/logos/swaagi-logo-large.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SWAAGDOM — Style, intelligently." />
        <meta name="twitter:description" content="Style, intelligently. Dress swaggadishly with AI-powered fashion discovery." />
        
        {/* Preconnect to optimize performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
