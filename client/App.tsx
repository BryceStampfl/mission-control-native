
import React from 'react';
import { ApolloProvider } from "@apollo/client";
import Navigation from 'components/Navigation';
import { apolloClient } from 'utils/DatabaseConnection';

export default function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <Navigation />
    </ApolloProvider>
  );
}