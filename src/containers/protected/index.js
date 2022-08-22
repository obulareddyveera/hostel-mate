import React, { useEffect } from 'react';
import { useRecoilState } from "recoil";
import { isMobile } from 'react-device-detect';
import { gql, useQuery } from '@apollo/client';
import { faBars, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import ProtectedNav from '../../components/nav/protectedNav';
import ProtectedSideNav from '../../components/nav/protectedSideNav';
import { userProfile } from '../../recoil/atoms/userProfile';

const ORGUSER_BY_GOOGLEID = gql `query orgUserByGoogleId($userGoogleId: String!) {
    orgUserByGoogleId(googleId: $userGoogleId) {
        id
        roleId
    }
  }`

const ProtectedHome = (props) => {
    const [userProfileAtom, setUserProfileAtom] = useRecoilState(userProfile);
    const { toggleMenu, user } = userProfileAtom;

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

    const { loading, error, data } = useQuery(ORGUSER_BY_GOOGLEID, { variables: {userGoogleId: user.googleId} })
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
                {
                    loading && (
                        <>
                            <div className="flex justify-center items-center">
                                <FontAwesomeIcon icon={faSpinner} className="w-12 h-12" />
                            </div>
                        </>
                    )
                }
                <div className='flex flex-col'>
                    {
                        data && data.orgUserByGoogleId && data.orgUserByGoogleId.id ? (
                            <>
                                <div>Register Organization</div>
                            </>
                        ) : (
                            <>
                                <div>Register User</div>
                            </>
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default ProtectedHome;
