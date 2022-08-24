import React, { useEffect } from 'react';
import { useRecoilState } from "recoil";
import { isMobile } from 'react-device-detect';
import { gql, useQuery } from '@apollo/client';
import { faBars, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import ProtectedNav from '../../components/nav/protectedNav';
import ProtectedSideNav from '../../components/nav/protectedSideNav';
import { userProfile } from '../../recoil/atoms/userProfile';
import { breadcrumbs } from '../../recoil/atoms/breadcrumbs';
import Hostel from '../hostel';
import Register from '../hostel/register';
import BreadcrumbsComponent from '../../components/breadcrumbs.js';

const ORGUSER_BY_GOOGLEID = gql `query($userGoogleId: String!) {
    staffByGoogleId(userGoogleId: $userGoogleId) {
      id
    }
  }
  `

const ProtectedHome = (props) => {
    const [userProfileAtom, setUserProfileAtom] = useRecoilState(userProfile);
    const [breadcrumbsAtom, setBreadcrumbsAtom] = useRecoilState(breadcrumbs);
    const { toggleMenu, user } = userProfileAtom;
    console.log('---== ProtectedHome  ', props, breadcrumbsAtom);

    const setToggleMenu = (status) => {
        setUserProfileAtom((params) => {
            return {
                ...params,
                toggleMenu: status
            }
        })
    }
    if (!user || !user.googleId) {
        <>
            <div className="flex justify-center items-center">
                <FontAwesomeIcon icon={faSpinner} className="w-12 h-12" />
            </div>
        </>
    }

    const { loading, error, data } = useQuery(ORGUSER_BY_GOOGLEID, { variables: {userGoogleId: user.googleId} })

    useEffect(() => {
        let toggleMenuEntity = isMobile ? false : true;
        if (data && data.staffByGoogleId && data.staffByGoogleId.id) {
            setBreadcrumbsAtom((params) => {
                return {
                    ...params,
                    active: true,
                    path: [...params.path, {displayName: 'Hostel Dashboard'}]
                }
            })
        } else {
            toggleMenuEntity = false;
            const duplicateEntity = breadcrumbsAtom.path.filter(item => item.key === 1001)
            if (duplicateEntity.length === 0) {
                setBreadcrumbsAtom((params) => {
                    return {
                        ...params,
                        active: true,
                        path: [...params.path, {key: 1001,displayName: 'Hostel Registration'}]
                    }
                })
            }
        }

        setUserProfileAtom({
            ...props,
            toggleMenu: toggleMenuEntity
        });

    }, [data])

    return (
        <>
            <ProtectedNav profile={props.user} />
            {
                data && data.staffByGoogleId && data.staffByGoogleId.id && (
                    <ProtectedSideNav 
                        profile={props.user} 
                        toggle={toggleMenu} 
                        handleToggleMenu={setToggleMenu} 
                    />
                )
            }
            
            <div className={`${toggleMenu ? 'ml-[16rem]' : 'm-2'} flex flex-col h-full p-4`}>
                <div className='flex justify-between items-end m-2'>
                    <BreadcrumbsComponent />
                    {
                        data && data.staffByGoogleId && data.staffByGoogleId.id && (
                            <button className='btn btn-sm btn-circle text-white' onClick={() => setToggleMenu(!toggleMenu)}>
                                <FontAwesomeIcon className='w-5 h-5 opacity-75' icon={faBars} />
                            </button>
                        )
                    }
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
                        data && data.staffByGoogleId && data.staffByGoogleId.id ? (
                            <>
                                <div>Register User</div>
                            </>
                        ) : (
                            <>
                                <Register />
                            </>
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default ProtectedHome;
