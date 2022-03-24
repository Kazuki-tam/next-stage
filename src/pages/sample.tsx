import type { NextPage } from 'next'
// import Head from 'next/head'
import { NextSeo } from 'next-seo'

import { Layout } from '../components/layout/Layout'
import { BaseText } from '../components/text/BaseText'
import styles from '../styles/pages/top.module.scss'

const Home: NextPage = () => {
  return (
    <Layout>
      <NextSeo title="This is a sample page." description="A short description goes here." />
      <h1 className={styles['top_heading--lev1']}>
        This is a <span className={styles['top_heading--accent']}>Sample Page</span>.
      </h1>
      <div className="l-container">
        <BaseText size="medium" align="center">
          Please remove this file before when you start your project!
        </BaseText>
      </div>
    </Layout>
  )
}

export default Home