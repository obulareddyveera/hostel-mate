import React, { useEffect } from 'react';
import { useRecoilState } from "recoil";
import { isMobile } from 'react-device-detect';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import ProtectedNav from '../../components/nav/protectedNav';
import ProtectedSideNav from '../../components/nav/protectedSideNav';
import { userProfile } from '../../recoil/atoms/userProfile';

const ProtectedHome = (props) => {
    const [userProfileAtom, setUserProfileAtom] = useRecoilState(userProfile);
    const { toggleMenu } = userProfileAtom;

    useEffect(() => {
        setUserProfileAtom({
            ...props,
            toggleMenu: isMobile ? false : true
        });
    }, [props, setUserProfileAtom])

    const setToggleMenu = (status) => {
        setUserProfileAtom((params) => {
            return {
                ...params,
                toggleMenu: status
            }
        })
    }

    console.log('--== userProfileAtom ', userProfileAtom);
    return (
        <>
            <ProtectedNav profile={props.user} />
            <ProtectedSideNav profile={props.user} toggle={toggleMenu} handleToggleMenu={setToggleMenu} />
            <div className={`${toggleMenu ? 'ml-[16rem]' : 'm-2'} flex flex-col`}>
                <div className='flex justify-end items-end m-2'>
                    <button className='btn btn-sm btn-circle text-white' onClick={() => setToggleMenu(!toggleMenu)}>
                        <FontAwesomeIcon className='w-5 h-5 opacity-75' icon={faBars} />
                    </button>
                </div>
                <div className='flex flex-col'>
                    <div>Justify</div>
                </div>
            </div>
        </>
    )
}

export default ProtectedHome;
