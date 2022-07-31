/* eslint-disable @next/next/no-img-element */
import { faSignIn } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const IntroCta = () => {
    return (
        <aside
            className="overflow-hidden bg-gray-900 sm:grid sm:grid-cols-2 sm:items-center"
        >
            <div className="p-8 md:p-12 lg:px-16 lg:py-24 text-white">
                <div className="max-w-xl mx-auto text-center sm:text-left">
                    <div className="text-md">
                        <span className='text-2xl md:text-3xl font-bold font-slabo'>
                            {`"Beware of little Expenses. A small leak will sink a great ship."`}
                        </span>
                    </div>
                    <div className="font-roboto m-4 flex justify-center">
                        This applies at every job. Hostel service business runs with expenses, someone needs to record and study each expense to keep it healthy.
                    </div>
                    <div className="m-4">
                        <span className='text-2xl font-bold font-dancingScript'>HostelMate</span>
                        <span className='text-md font-merriweather'> is a platform to manage each service expense.</span>
                    </div>
                    <div className='flex justify-center items-center m-4'>
                        <strong className="inline-flex items-center border border-gray-200 rounded relative px-2.5 py-1.5 text-xs font-medium mr-2 ml-2">
                            <span className="animate-ping w-2.5 h-2.5 bg-green-600/75 rounded-full absolute -top-1 -left-1"></span>
                            <span className="w-2.5 h-2.5 bg-green-600 rounded-full absolute -top-1 -left-1"></span>
                            <span className="text-white ml-1.5">
                                No cards needed
                            </span>
                        </strong>
                        <strong className="inline-flex items-center border border-gray-200 rounded relative px-2.5 py-1.5 text-xs font-medium mr-2 ml-2">
                            <span className="animate-ping w-2.5 h-2.5 bg-green-600/75 rounded-full absolute -top-1 -left-1"></span>
                            <span className="w-2.5 h-2.5 bg-green-600 rounded-full absolute -top-1 -left-1"></span>
                            <span className="text-white ml-1.5">
                                Zero charges
                            </span>
                        </strong>
                        <strong className="inline-flex items-center border border-gray-200 rounded relative px-2.5 py-1.5 text-xs font-medium mr-2 ml-2">
                            <span className="animate-ping w-2.5 h-2.5 bg-green-600/75 rounded-full absolute -top-1 -left-1"></span>
                            <span className="w-2.5 h-2.5 bg-green-600 rounded-full absolute -top-1 -left-1"></span>
                            <span className="text-white ml-1.5">
                                Free for Ever !!
                            </span>
                        </strong>
                    </div>
                    <button className='btn btn-sm btn-success m-2'>
                        <FontAwesomeIcon className='w-4 h-4' icon={faSignIn} />
                        <span className='mr-1 ml-1'>{`Start Now !!`}</span>
                    </button>

                </div>
            </div>

            <img
                alt="#"
                src="/images/finSlateHome.jpeg"
                className="object-cover w-full h-full sm:h-[calc(100%_-_2rem)] md:h-[calc(100%_-_4rem)] sm:rounded-tl-[30px] md:rounded-tl-[60px] sm:self-end"
            />
        </aside>
    )
}

export default IntroCta;