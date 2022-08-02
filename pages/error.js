/* eslint-disable @next/next/no-img-element */
import { faSpider } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/router';
import React, {useEffect} from 'react';

const Technical = () => {
    const route = useRouter();

    useEffect(() => {
        setTimeout(() => {
            route.push('/')
        }, 1600)
    }, []);

    return (
        <>

            <div className="max-w-5xl px-4 py-8 mx-auto">
                <section className="p-8 bg-gray-100 rounded-lg">
                    <div className="grid grid-cols-1 gap-12 sm:grid-cols-3 sm:items-center">
                        <div className="relative">
                            <div className="aspect-w-1 aspect-h-1">
                                <img src="/images/hostelMateLogo.png" alt="HostelMate" className="object-cover rounded-lg" />
                            </div>

                            <div
                                className="absolute inline-flex px-4 py-2 bg-white rounded-lg shadow-xl -bottom-4 -right-4"
                            >
                                <div className='flex justify-center items-center'>
                                    <FontAwesomeIcon className='w-4 h-4' icon={faSpider} />
                                </div>
                            </div>
                        </div>

                        <blockquote className="sm:col-span-2">
                            <h3>Something wrong here...</h3>
                            <p className="text-xl font-medium sm:text-2xl">
                                Sorry, we are having some technical issues.
                            </p>

                            <cite className="inline-flex items-center mt-8 not-italic">
                                <span className="hidden w-6 h-px bg-gray-400 sm:inline-block"></span>
                                <p className="text-sm text-gray-500 uppercase sm:ml-3">
                                    <strong>HostelMate</strong>
                                </p>
                            </cite>
                        </blockquote>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Technical;