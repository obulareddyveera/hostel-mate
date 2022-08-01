import React from 'react';
import Head from 'next/head';
import cookie from 'cookie';
import jwt from 'jsonwebtoken';


const AuthenticatedRoute = (props) => {
  console.log('--== AuthenticatedRoute ', props);
  return (
    <>
      <Head>
        <title>HostelMate | Home</title>
      </Head>
      <div>Logged in successful :: {props.id}</div>
    </>
  )
}

export default AuthenticatedRoute;

export async function getServerSideProps({ req, res }) {
  const { authToken } = cookie.parse(req.headers.cookie || '');
  const { payload } = jwt.decode(authToken, { complete: true });
  console.log('--== AuthenticatedRoute ::: getServerSideProps ', authToken, payload);

  return {
    props: { id: parseInt(payload.id) }
  }
}