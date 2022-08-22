/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';
import Logo from '../utils/logo';

const HomeFooter = () => {
    return (
        <footer className="bg-gray-900">
            <div
                className="relative max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8 lg:pt-24"
            >

                <div className="lg:flex lg:items-end lg:justify-between">
                    <div>
                        <div className="flex justify-center text-teal-300 lg:justify-start">
                            <Logo light={true} />
                        </div>

                        <p className="max-w-md mx-auto mt-6 leading-relaxed text-center text-gray-400 lg:text-left">
                            Hostel service business runs with expenses, someone needs to record and study each expense to keep it healthy.
                        </p>
                        <div className="m-4 text-white">
                            <span className='text-2xl font-bold font-dancingScript'>HostelMate</span>
                            <span className='text-md font-merriweather'> is a platform to maintain Hostel services effectively.</span>
                        </div>
                    </div>

                    <nav className="mt-12 lg:mt-0" aria-labelledby="footer-navigation">
                        <h2 className="sr-only" id="footer-navigation">Footer navigation</h2>
                        <ul className="flex flex-wrap justify-center gap-6 lg:justify-end md:gap-8 lg:gap-12">
                            <li>
                                <Link href="https://techieveera.vercel.app/">
                                    <a className="text-white transition hover:text-white/75">
                                        About
                                    </a>
                                </Link>
                            </li>

                            <li>
                                <Link href="https://techieveera.vercel.app/blog">
                                    <a className="text-white transition hover:text-white/75">
                                        Projects
                                    </a>
                                </Link>
                            </li>

                            <li>
                                <Link href="https://techieveera.vercel.app/blog">
                                    <a className="text-white transition hover:text-white/75">
                                        Blog
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>

                <p className="mt-12 text-sm text-center text-gray-400 lg:text-right">
                    Copyright &copy; 2022. All rights reserved.
                </p>
            </div>
        </footer>
    )
}

export default HomeFooter;
