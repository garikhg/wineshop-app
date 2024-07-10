import "@styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";
import { ApolloProvider } from "@apollo/client";
import client from "@utils/apollo/apollo-client";
import "@fontsource/marcellus";
import "@fontsource/marcellus-sc";
import "@fontsource/open-sans";

export default function App( { Component, pageProps } ) {
    return (
        <ApolloProvider client={ client }>
            <NextUIProvider>
                <Component { ...pageProps } />
            </NextUIProvider>
        </ApolloProvider>
    );
}
