
import React from 'react';
import { ApolloProvider } from "@apollo/client";
import Navigation from 'components/Navigation';
import { apolloClient } from 'utils/DatabaseConnection';

// Starting point of application
// Apollo Provider Context is so we can use Apollo/Graphql for queries and mutations
// Navigation Component is for bottom tabs
export default function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <Navigation />
    </ApolloProvider>
  );
}