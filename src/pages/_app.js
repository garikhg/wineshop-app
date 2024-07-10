import "@styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";
import { ApolloProvider } from "@apollo/client";
import client from "../utils/apollo/apollo-client";

export default function App( { Component, pageProps } ) {
    return (
        <ApolloProvider client={ client }>
            <NextUIProvider>
                <Component { ...pageProps } />
            </NextUIProvider>
        </ApolloProvider>
    );
}
