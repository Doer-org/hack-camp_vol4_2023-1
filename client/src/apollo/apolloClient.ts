import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from "@apollo/client";

export const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  link: new HttpLink({
    uri: `${process.env.NEXT_PUBLIC_SERVER_URL}/query`, // GraphQL server endpoint
  }),
  cache: new InMemoryCache(),
  headers: {
    'Content-Type': 'application/json',
  },
});

export default client;
