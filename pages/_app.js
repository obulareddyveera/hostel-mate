import { ApolloProvider } from '@apollo/client';
import {apolloClientEntity} from './../client/apollo';

import '../styles/globals.css'

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <ApolloProvider client={apolloClientEntity}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}
