
import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider, ApolloLink, HttpLink } from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import Navigation from 'components/Navigation';

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
      ),
    );
  if (networkError) console.log(`[Network error]: ${networkError}`);
});


let ngrokIp = "https://020d-73-223-178-81.ngrok.io/graphql"

const httpLink = new HttpLink({
  uri: ngrokIp,
})

const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: ApolloLink.from([errorLink, httpLink])
});


export default function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <Navigation />
    </ApolloProvider>
  );
}