import React, { useEffect } from 'react';
import Head from 'next/head';

import ProtectedHome from '../../src/containers/protected';

const OrgRoute = (props) => {
    console.log('--== OrgRoute ', props);

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
            <div className="bg-gray-200">
                <ProtectedHome {...props} />
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

        return {
            props: { ...userEntity, token: query.id }
        }
    }

    return {
        props: { token: query.id }
    }

}