import Head from "next/head";

import '../styles/globals.css';
import '../styles/typography.css';
import '../styles/colors.css';

const MetaversusApp = ({ Component, pageProps }) => (
    <>
        <Head>
            <title>Metaversus</title>
            <meta name="author" content="Aman Singh Bhogal"></meta>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="./assets/favicon.ico"/>
        </Head>
        <Component {...pageProps} />
    </>
);

export default MetaversusApp;