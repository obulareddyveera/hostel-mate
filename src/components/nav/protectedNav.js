/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { useRecoilValue } from "recoil";
import { userProfileSelector } from '../../recoil/selectors/userProfile';
import Logo from '../utils/logo';

const ProtectedNav = () => {
    const userProfileAtom = useRecoilValue(userProfileSelector)
    const { photoUrl, displayName } = userProfileAtom.user;
    return (
        <>
            <div className="navbar bg-neutral text-neutral-content">
                <div className="flex-1">
                    <Logo logoStyles={"w-16 h-16"} />
                </div>
                <div className="flex-none">
                    <div className="dropdown dropdown-end">
                        <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src={photoUrl} alt={displayName} />
                            </div>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow w-52 bg-neutral hover:bg-neutral-focus hover:text-white">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProtectedNav;
