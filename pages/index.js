import Head from 'next/head'

import HomeContainer from '../client/containers/public/home'

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
