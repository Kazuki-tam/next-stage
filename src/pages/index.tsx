import type { NextPage } from 'next'
// import Head from 'next/head'
import { NextSeo } from 'next-seo'

import { BaseText } from '..//components/text/BaseText'
import { Layout } from '../components/layout/Layout'
import styles from '../styles/pages/top.module.scss'

const Home: NextPage = () => {
  return (
    <Layout>
      <NextSeo title="Simple Usage Example" description="A short description goes here." />
      <h1 className={styles['top_heading--lev1']}>
        <span className={styles['top_heading--accent']}>Next-Stage</span> is a starter template.
      </h1>
      <div className="l-container">
        <BaseText size="medium" align="center">
          This tempalte is made from Next.js.
        </BaseText>
      </div>
    </Layout>
  )
}

export default Home
