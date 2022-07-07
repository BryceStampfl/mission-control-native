
import React from 'react';
import Navigation from 'components/Navigation';
import { ApolloPersistentProvider } from 'utils/ApolloClient/ApolloPersistentProvider';

// Starting point of application
// Apollo Provider Context is so we can use Apollo/Graphql for queries and mutations
// Navigation Component is for bottom tabs
export default function App() {
  return (

    <ApolloPersistentProvider>
      <Navigation />
    </ApolloPersistentProvider>
  );
}