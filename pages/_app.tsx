import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Script from 'next/script'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        id='tailwind-css'
        strategy="beforeInteractive"
        src="https://cdn.tailwindcss.com"
        onError={(e) => {
          console.error('Script failed to load', e)
        }}
      />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
