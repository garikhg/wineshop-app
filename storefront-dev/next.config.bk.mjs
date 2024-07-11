/** @type {import('next').NextConfig} */
const withPlugins = require( 'next-compose-plugins' );
const withTM = require( 'next-transpile-modules' )( [ '@apollo/client', 'graphql' ] );

module.exports = withPlugins( [ withTM ], {
    reactStrictMode: true,
    sassOptions: {
        includePaths: [ 'node_modules' ],
    },
    env: {
        GRAPHQL_ENDPOINT: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
        JWT_SECRET: process.env.JWT_SECRET,
    },
    webpack: ( config ) => {
        // Further custom configuration here
        return config;
    },
    images: {
        domains: [
            'swewoocommerce.dfweb.no',
            'res.cloudinary.com',
            'via.placeholder.com'
        ],
    },

    // async rewrites() {
    //     return [
    //         {
    //             source: '/product-category/:slug*',
    //             destination: '/product-category/[slug]',
    //         },
    //         {
    //             source: '/my-account/:slug*',
    //             destination: '/my-account/[slug]',
    //         },
    //     ];
    // },
} );

// export default nextConfig;
