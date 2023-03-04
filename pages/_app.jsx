import Head from "next/head";

import '../styles/globals.css';
import '../styles/typography.css';
import '../styles/colors.css';

import dynamic from "next/dynamic";

const MyApp = ({ Component, pageProps }) => (
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

export default dynamic (() => Promise.resolve(MyApp), { ssr: false });