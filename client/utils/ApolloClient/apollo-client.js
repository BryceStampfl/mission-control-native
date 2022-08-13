import { ApolloClient, InMemoryCache, ApolloLink, HttpLink } from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistCache, AsyncStorageWrapper } from 'apollo3-cache-persist';
import { ngrokIp } from "utils/environmental-variables";

const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
        graphQLErrors.forEach(({ message, locations, path }) =>
            console.log(
                `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
            ),
        );
    if (networkError) console.log(`[Network error]: ${networkError}`);
});


const httpLink = new HttpLink({
    uri: ngrokIp,
})

const cache = new InMemoryCache({})


export const createClient = async () => {
    // await before instantiating ApolloClient, else queries might run before the cache is persisted
    await persistCache({
        cache,
        storage: new AsyncStorageWrapper(AsyncStorage),
    });
    return new ApolloClient({
        cache: cache,
        link: ApolloLink.from([errorLink, httpLink])
    });
};

// export const apolloClient = new ApolloClient({
//     cache: cache,
//     link: ApolloLink.from([errorLink, httpLink])
// });





