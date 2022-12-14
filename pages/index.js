import Head from 'next/head'

import HomeContainer from '../src/containers/public/home'

export default function Home() {
  return (
    <>
      <Head>
        <title>HostelMate | Home</title>    
      </Head>
      <HomeContainer />
    </>
  )
}
