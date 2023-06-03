import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
	uri: `${process.env.NEXT_PUBLIC_SERVER_URL}`, // GraphQL server endpoint
	cache: new InMemoryCache(),
});

export default client;