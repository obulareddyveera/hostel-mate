/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';
import GoogleSignIn from '../../components/utils/googleSignIn';
import Logo from '../../components/utils/logo';

const SignInContainer = () => {
    return (
        <>
            <div className='w-full h-screen bg-[#49a8dd] bg-no-repeat bg-contain bg-center bg-signIn'>
                <div className='flex flex-col h-full w-full justify-center items-center'>
                    <div className='mt-[14rem]'>
                        <GoogleSignIn />
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignInContainer