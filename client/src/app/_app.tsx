import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import apolloClient from "../apollo/apolloClient";
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <ApolloProvider client={apolloClient}>
        <Component {...pageProps} />
      </ApolloProvider>
    </SessionProvider>
  );
}
