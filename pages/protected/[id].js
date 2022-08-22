import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { isMobile } from 'react-device-detect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import ProtectedNav from '../../client/components/nav/protectedNav';
import ProtectedSideNav from '../../client/components/nav/protectedSideNav';

const OrgRoute = (props) => {
    console.log('--== OrgRoute ', props);
    const { token, user } = props;
    const [toggleMenu, setToggleMenu] = useState(isMobile ? false : true)

    useEffect(() => {
        if (typeof window !== 'undefined' && props.token) {
            window.sessionStorage.setItem('accessTokeen', props.token);
        }
    }, [props, props.token])

    return (
        <>
            <Head>
                <title>HostelMate | Home</title>
            </Head>
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

export default OrgRoute;

export async function getServerSideProps({ req, res, query, ...context }) {
    if (query && query.id) {
        const protocol = req.headers.referer ? req.headers.referer.split('://')[0] : 'http';
        const userEntity = await fetch(`${protocol}://${req.headers.host}/api/auth`, {
            method: "POST",
            body: JSON.stringify({
                token: query.id
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then(response => response.json());
        console.log('--== userEntity ', userEntity);
        return {
            props: { ...userEntity, token: query.id }
        }
    }

    return {
        props: { token: query.id }
    }

}