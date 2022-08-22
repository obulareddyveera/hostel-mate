import Head from 'next/head';
import React from 'react';
import SignInContainer from '../src/containers/auth/signIn';

const SignIn = () => {
    return (
        <>
            <Head>
                <title>HostelMate | SignIn</title>
            </Head>
            <SignInContainer />
        </>
    )
}

export default SignIn;
