import '../styles/globals.scss'

import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { DefaultSeo } from 'next-seo'
import { useEffect } from 'react'

import { useDefaultTheme } from '@/hooks/useDefaultTheme'
import { useTheme } from '@/hooks/useTheme'
import { GA_TRACKING_ID, pageview } from '@/libs/gtag'

import SEO from '../../next-seo.config'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  useDefaultTheme()
  useTheme()
  useEffect(() => {
    if (!GA_TRACKING_ID) return
    const handleRouteChange = (url: string) => {
      pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])
  return (
    <>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
