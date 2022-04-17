import '../styles/globals.scss'

import type { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'

import { useBackground } from '@/hooks/useBackground'
import { useDefaultTheme } from '@/hooks/useDefaultTheme'
import { useLocationStatus } from '@/hooks/useLocationStatus'
import { useTheme } from '@/hooks/useTheme'

import SEO from '../../next-seo.config'

function MyApp({ Component, pageProps }: AppProps) {
  useLocationStatus()
  useDefaultTheme()
  useTheme()
  useBackground()
  return (
    <>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
