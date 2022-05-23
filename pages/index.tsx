import type { NextPage } from 'next'
import Head from 'next/head'
import Feedback from '../components/Feedback'
import Header from '../components/Header'
import Hero from '../components/Hero'
import RecentSection from '../components/RecentSection'
import SearchBox from '../components/SearchBox'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col ">
      <Head>
        <title>Ecommerce Landing Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mx-auto w-full max-w-[1440px] py-4">
        <Header />
        <Hero />
        <SearchBox />
        <RecentSection />
        <Feedback />
      </main>
    </div>
  )
}

export default Home
