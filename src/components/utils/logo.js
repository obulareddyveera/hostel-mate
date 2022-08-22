/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';

const Logo = ({ light=true, logoStyles={} }) => {
    return (
        <Link href="/">
            <a className="block text-teal-300">
                <div className='w-full flex justify-center items-center'>
                    <span className="sr-only">Home</span>
                    <img className={logoStyles} src={light ? "/images/hostelMateLightLogo.png" : "/images/hostelMateLogo.png"} alt="HostelMate" />
                </div>
            </a>
        </Link>
    )
}

export default Logo;