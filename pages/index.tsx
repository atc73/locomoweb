import type { NextPage } from 'next'
import Head from 'next/head'
import styles from './index.module.scss'

import Header from '../components/header'
import LandingBanner from '../components/landingBanner'
import Services from '../components/services'
import ResponsiveBanner from '../components/responsiveBanner'
import SlidingStripe from '../components/slidingStripe'
import StepsToBuild from '../components/stepsToBuild'


const Home: NextPage = () => {
  return (
    <div className={styles.maincontainer}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.contentContainer}>
        <LandingBanner />
        <Services />
        <ResponsiveBanner />
        <SlidingStripe />
        <StepsToBuild />
      </main>
    </div>
  )
}

export default Home
