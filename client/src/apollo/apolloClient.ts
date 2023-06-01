import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
	uri: "http://localhost:4000/graphql", // GraphQL server endpoint
	cache: new InMemoryCache(),
});

export default client;