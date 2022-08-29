import React, { useEffect } from 'react';
import { useQuery, useReactiveVar } from '@apollo/client';
import { faBars, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import ProtectedNav from '../../components/nav/protectedNav';
import ProtectedSideNav from '../../components/nav/protectedSideNav';
import Register from '../hostel/register';
import { settings } from '../../apollo/makeVar/settings';
import { STAFF_BY_GOOGLEID } from '../../apollo/queries/staff';


const ProtectedHome = (props) => {
    const settingsMakevar = useReactiveVar(settings);
    const { sidemenu } = settingsMakevar
    const { user } = props;
    if (!user || !user.googleId) {
        <>
            <div className="flex justify-center items-center">
                <FontAwesomeIcon icon={faSpinner} className="w-12 h-12" />
            </div>
        </>
    }
    const { loading, error, data } = useQuery(STAFF_BY_GOOGLEID, { variables: { userGoogleId: user.googleId } })
    useEffect(() => {
        settings({
            sidemenu: {
                toggle: data && data.staffByGoogleId && data.staffByGoogleId.id,
            }
        })
    }, [data])
    const onMenuToggle = () => {
        settings({
            sidemenu: {
                toggle: !sidemenu.toggle
            }
        })
    }

    return (
        <>
            <ProtectedNav profile={props.user} />
            <ProtectedSideNav profile={props.user} />
            <div className={`${sidemenu && sidemenu.toggle ? 'ml-[16rem]' : 'm-2'} flex flex-col h-full p-4`}>
                <div className='flex justify-between items-end m-2'>
                    <button className='btn btn-sm btn-circle text-white' onClick={onMenuToggle}>
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
