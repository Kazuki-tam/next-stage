import type { NextPage } from 'next'
import { NextSeo } from 'next-seo'

// import { Link as Scroll } from 'react-scroll';
import { Layout } from '../components/layout/Layout'
import { BaseText } from '../components/text/BaseText'
import styles from '../styles/pages/sample.module.scss'

const Sample: NextPage = () => {
  return (
    <Layout>
      <NextSeo title="This is a sample page." description="A short description goes here." />
      <h1 className={styles['sample_heading--lev1']}>
        <span className={styles['sample_heading--accent']}>Sample Page</span>
      </h1>
      <div className="l-container">
        <BaseText size="medium" align="center">
          Please remove this file before when you start your project!
        </BaseText>
      </div>
    </Layout>
  )
}

export default Sample
