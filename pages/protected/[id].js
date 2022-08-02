import React, { useEffect } from 'react';
import Head from 'next/head';
import jwt from 'jsonwebtoken';
import { gql } from '@apollo/client';
import { apolloClientEntity } from '../../client/apollo';

const OrgRoute = (props) => {
    console.log('--== OrgRoute ', props);
    const {token, user} = props;


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
            <div>Logged in successful :: {user && user.email}</div>
        </>
    )
}

export default OrgRoute;

export async function getServerSideProps({ req, res, query }) {
    if (query && query.id) {
        const userEntity = await fetch(`http://${req.headers.host}/api/auth`, {
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
            props: { ...userEntity,  token: query.id }
        }
    }

    return {
        props: { token: query.id }
    }

}