import type { NextPage } from 'next'
import Image from 'next/image'
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
        <Image src="/og-image.jpg" alt="Next-Stage Next.js starter template" width={1200} height={630} />
      </h1>
      <div className="l-container">
        <BaseText size="large">Please remove this file before when you start your project!</BaseText>
        <BaseText>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
          industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
          Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
          PageMaker including versions of Lorem Ipsum.
        </BaseText>
        <BaseText>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
          industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
          Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
          PageMaker including versions of Lorem Ipsum.
        </BaseText>
      </div>
    </Layout>
  )
}

export default Sample
