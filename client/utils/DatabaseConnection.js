import { ApolloClient, InMemoryCache, ApolloLink, HttpLink } from "@apollo/client";
import { onError } from "@apollo/client/link/error";

const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
        graphQLErrors.forEach(({ message, locations, path }) =>
            console.log(
                `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
            ),
        );
    if (networkError) console.log(`[Network error]: ${networkError}`);
});


let ngrokIp = "https://583c-73-223-178-81.ngrok.io/graphql"

const httpLink = new HttpLink({
    uri: ngrokIp,
})

export const apolloClient = new ApolloClient({
    cache: new InMemoryCache(),
    link: ApolloLink.from([errorLink, httpLink])
});
