import React from 'react';
import Head from 'next/head';
import cookie from 'cookie';
import jwt from 'jsonwebtoken';
import { gql } from '@apollo/client';
import { apolloClientEntity } from '../../../client/apollo';

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
        query: gql`
  query userByGoogleId($id: String!) {
    userByGoogleId(id: $id) {
      id
      displayName
      familyName
      givenName
      email
      photoUrl
      googleId
    }
  }
  `, variables: { id: tokenEntity.payload.id }
    })


    return {
        props: { user: data && data.userByGoogleId ? data.userByGoogleId : tokenEntity.payload }
    }
}