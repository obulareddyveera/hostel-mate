import { ApolloProvider } from '@apollo/client';
import { RecoilRoot } from "recoil";
import {apolloClientEntity} from './../src/apollo';

import '../styles/globals.css'

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <RecoilRoot>
    <ApolloProvider client={apolloClientEntity}>
      <Component {...pageProps} />
    </ApolloProvider>
    </RecoilRoot>
  )
}
