/* eslint-disable @next/next/no-img-element */
import React from 'react';
import GoogleSignIn from '../../components/utils/googleSignIn';
import Logo from '../../components/utils/logo';
import Separator from '../../components/utils/separator';

const SignInContainer = () => {
    return (
        <>
            <div className='w-full h-screen bg-[#ebc38f] flex justify-center items-center'>
                <div className="card w-full h-full md:w-[35vw] bg-base-100 shadow-none">
                    <figure><img src="images/signIn/dormitory-room-with-roommates.jpeg" alt="Shoes" /></figure>
                    <div className="card-body bg-[#ebc38f]">
                        <div className='flex justify-center items-center'>
                            <GoogleSignIn />
                        </div>
                        <Logo />
                        <div className="card-actions justify-end">
                            <div className="badge badge-success">google</div>
                            <div className="badge badge-warning">sign-in</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignInContainer