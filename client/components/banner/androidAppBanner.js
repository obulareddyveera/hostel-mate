/* eslint-disable @next/next/no-img-element */
import { faAndroid, faApple, faChrome } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React from 'react';

const AndroidAppBanner = () => {
    return (
        <div className='flex flex-col items-center justify-center bg-[#f7f7f7]'>
            <div className='flex justify-center items-center p-4'>
                <Link href="/signIn">
                    <a className='btn btn-sm btn-primary mr-1 ml-1'>
                        <FontAwesomeIcon className='w-4 h-4' icon={faChrome} />
                        <span className='pr-1 pl-1'>Web</span>
                    </a>
                </Link>
                <button className='btn btn-sm btn-success mr-1 ml-1'>
                    <FontAwesomeIcon className='w-4 h-4' icon={faAndroid} />
                    <span className='pr-1 pl-1'>Android</span>
                </button>
                <button className='btn btn-sm btn-success mr-1 ml-1' disabled>
                    <FontAwesomeIcon className='w-4 h-4' icon={faApple} />
                    <span className='pr-1 pl-1'>Apple</span>
                </button>
            </div>
            <img alt="Android Banner" src="banners/androidBanner.jpeg" className='w-full h-full' />
        </div>
    )
}

export default AndroidAppBanner;
