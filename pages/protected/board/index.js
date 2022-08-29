import React from 'react';
import Head from 'next/head';
import cookie from 'cookie';
import jwt from 'jsonwebtoken';
import { apolloClientEntity } from '../../../src/apollo';
import { GET_USER_BY_GOOGLEID } from '../../../src/apollo/queries/users';

const BoardRoute = (props) => {
    console.log('--== 2) -- private/home ', props);
    return (
        <>
            <Head>
                <title>HostelMate | Home</title>
            </Head>
            <div>Logged in successful</div>
        </>
    )
}


export default BoardRoute;

export async function getServerSideProps({ req, res }) {
    const { authToken } = cookie.parse(req.headers.cookie || '');
    const tokenEntity = jwt.decode(authToken, { complete: true });

    console.log('--== OrgRoute ::: tokenEntity ', tokenEntity);
    const { data } = await apolloClientEntity.query({
        query: GET_USER_BY_GOOGLEID, variables: { id: tokenEntity.payload.id }
    })


    return {
        props: { user: data && data.userByGoogleId ? data.userByGoogleId : tokenEntity.payload }
    }
}