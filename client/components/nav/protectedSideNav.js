/* eslint-disable @next/next/no-img-element */
import { faInvision, faTeamspeak } from '@fortawesome/free-brands-svg-icons';
import { faAngleDown, faBackward, faRightArrowFromBracket, faBank, faBars, faCalendar, faDemocrat, faGear, faMoneyBill, faPeopleGroup, faSignOut, faStop, faUpDown, faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const ProtectedSideNav = ({ profile, handleToggleMenu, toggle = true }) => {
    const { email, photoUrl, displayName } = profile
    return (
        <>
            <div className={`fixed w-full h-full md:flex`}>
                {
                    toggle && (
                        <>
                            <div className="flex flex-col justify-between h-screen bg-white border-r">
                                <div className="px-4 py-6">
                                    <div className='flex justify-end items-end ml-2 md:hidden'>
                                        <button className='btn btn-sm btn-link text-black' onClick={() => handleToggleMenu(!toggle)}>
                                            <FontAwesomeIcon className='w-4 h-4' icon={faRightToBracket} />
                                        </button>
                                    </div>
                                    <nav className="flex flex-col mt-6 space-y-1">
                                        <span className="ml-3 text-sm font-medium"> General </span>
                                        <a className="flex items-center px-4 py-2 text-gray-700 bg-gray-100 rounded-lg">
                                            <FontAwesomeIcon className='w-5 h-5 opacity-75' icon={faGear} />
                                            <span className="ml-3 text-sm font-medium"> General </span>
                                        </a>
                                        <details className="group">
                                            <summary className="flex items-center px-4 py-2 text-gray-500 rounded-lg cursor-pointer hover:bg-gray-100 hover:text-gray-700">
                                                <FontAwesomeIcon className='w-5 h-5' icon={faPeopleGroup} />
                                                <span className="ml-3 text-sm font-medium"> Teams </span>
                                                <FontAwesomeIcon className='w-3 h-3 ml-auto transition duration-300 shrink-0 group-open:-rotate-180' icon={faAngleDown} />
                                            </summary>

                                            <nav className="mt-1.5 ml-8 flex flex-col">
                                                <a className="flex items-center px-4 py-2 text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700">
                                                    <FontAwesomeIcon className='w-5 h-5 opacity-75' icon={faStop} />
                                                    <span className="ml-3 text-sm font-medium"> Banned Users </span>
                                                </a>
                                                <a className="flex items-center px-4 py-2 text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700">
                                                    <FontAwesomeIcon className='w-5 h-5 opacity-75' icon={faCalendar} />
                                                    <span className="ml-3 text-sm font-medium"> Calendar </span>
                                                </a>
                                            </nav>
                                        </details>

                                        <a className="flex items-center px-4 py-2 text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700">
                                            <FontAwesomeIcon className='w-5 h-5 opacity-75' icon={faMoneyBill} />
                                            <span className="ml-3 text-sm font-medium"> Billing </span>
                                        </a>
                                        <a className="flex items-center px-4 py-2 text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700">
                                            <FontAwesomeIcon className='w-5 h-5 opacity-75' icon={faInvision} />
                                            <span className="ml-3 text-sm font-medium"> Invoices </span>
                                        </a>
                                        <details className="group">
                                            <summary className="flex items-center px-4 py-2 text-gray-500 rounded-lg cursor-pointer hover:bg-gray-100 hover:text-gray-700">
                                                <FontAwesomeIcon className='w-5 h-5 opacity-75' icon={faDemocrat} />
                                                <span className="ml-3 text-sm font-medium"> Account </span>
                                                <FontAwesomeIcon className='w-3 h-3 ml-auto transition duration-300 shrink-0 group-open:-rotate-180' icon={faAngleDown} />
                                            </summary>
                                            <nav className="mt-1.5 ml-8 flex flex-col">
                                                <a className="flex items-center px-4 py-2 text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700">
                                                    <FontAwesomeIcon className='w-5 h-5 opacity-75' icon={faDemocrat} />
                                                    <span className="ml-3 text-sm font-medium"> Details </span>
                                                </a>
                                                <a className="flex items-center px-4 py-2 text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700">
                                                    <FontAwesomeIcon className='w-5 h-5 opacity-75' icon={faTeamspeak} />
                                                    <span className="ml-3 text-sm font-medium"> Security </span>
                                                </a>
                                                <form action="/logout">
                                                    <button type="submit" className="flex items-center w-full px-4 py-2 text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700">
                                                        <FontAwesomeIcon className='w-5 h-5 opacity-75' icon={faSignOut} />
                                                        <span className="ml-3 text-sm font-medium"> Logout </span>
                                                    </button>
                                                </form>
                                            </nav>
                                        </details>
                                    </nav>
                                </div>
                                <div className="sticky inset-x-0 bottom-0 border-t border-gray-100">
                                    <div className="flex items-center p-4 bg-white hover:bg-gray-50 shrink-0">
                                        <img
                                            className="object-cover w-10 h-10 rounded-full"
                                            src={photoUrl}
                                            alt="Hostelmart"
                                        />
                                        <div className="ml-1.5">
                                            <p className="text-xs">
                                                <strong className="block font-medium">{displayName}</strong>
                                                <span>{email}</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                }

            </div>
        </>
    )
}

export default ProtectedSideNav;