/* eslint-disable @next/next/no-img-element */
import { faHomeLgAlt, faContactCard } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React from 'react';
import Logo from '../utils/logo';

const HomeNav = () => {
    return (
        <header className="bg-gray-900">
            <div className="flex flex-col md:flex-row items-center md:items-start w-full p-4">
                <Logo light={true} />

                <div className="w-full flex items-center justify-end">
                    <div className="flex items-center gap-4">
                        <div className="sm:gap-4 sm:flex">
                            <Link href="https://techieveera.vercel.app/">
                                <a target={"_blank"} className="btn btn-sm btn-secondary btn-circle">
                                    <FontAwesomeIcon className='w-4 h-4' icon={faContactCard} />
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default HomeNav;