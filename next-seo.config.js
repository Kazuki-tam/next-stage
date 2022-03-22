/**
 * SEO settings
 * https://github.com/garmeeh/next-seo#readme
 */
const siteName = 'Next-Stage'
const siteUrl = 'https://example.com/'
export default {
  titleTemplate: `%s | ${siteName}`,
  defaultTitle: `Welcome to ${siteName} | ${siteName}`,
  additionalLinkTags: [
    {
      rel: 'icon',
      href: `${siteUrl}/favicon.ico`,
    },
    {
      rel: 'apple-touch-icon',
      href: `${siteUrl}/touch-icon.jpg`,
      sizes: '180x180',
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
