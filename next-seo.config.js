/**
 * SEO settings
 * https://github.com/garmeeh/next-seo#readme
 */
const siteName = 'Next-Stage'
const siteUrl = 'https://next-stage-demo.vercel.app'
export default {
  titleTemplate: `%s | ${siteName}`,
  defaultTitle: `Welcome to ${siteName} | ${siteName}`,
  additionalMetaTags: [
    {
      property: 'theme-color',
      content: '#333'
    }
  ],
  additionalLinkTags: [
    {
      rel: 'icon',
      href: `${siteUrl}/favicon.ico`,
    },
    {
      rel: 'apple-touch-icon',
      href: `${siteUrl}/apple-touch-icon.png`,
      sizes: '180x180',
    },
    {
      rel: 'manifest',
      href: '/manifest.webmanifest'
    },
  ],
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: `${siteUrl}`,
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 800,
        height: 600,
        alt: 'Og Image Alt',
        type: 'image/jpeg',
      },
    ],
    site_name: `${siteName}`,
  },
  twitter: {
    handle: '@handle',
    site: '@site',
    cardType: 'summary_large_image',
  },
}
