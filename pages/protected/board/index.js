import React from 'react';
import Head from 'next/head';

const AuthenticatedRoute = (props) => {
    console.log('--== 2) -- private/home ', props);
    return (
        <>
            <Head>
                <title>HostelMate | Home</title>
            </Head>
            <div>Logged in successful</div>
        </>
    )
}


export default AuthenticatedRoute;

export async function getServerSideProps(context) {
    const {session} = context.query
    console.log('--== 1) -- /private/home ', session);

    return {
      props: { googleSession: JSON.parse(session) }
    }
  }
