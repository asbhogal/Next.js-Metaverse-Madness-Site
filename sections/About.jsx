'use client';

import dynamic from "next/dynamic";

const About = () => (
    <section>
        About section
    </section>
);

export default dynamic (() => Promise.resolve(About), { ssr: false });  