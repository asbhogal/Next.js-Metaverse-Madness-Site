'use client';

import dynamic from "next/dynamic";

const Footer = () => (
    <footer>
        Footer
    </footer>
);

export default dynamic (() => Promise.resolve(Footer), { ssr: false });