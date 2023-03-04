'use client';

import dynamic from "next/dynamic";

const Explore = () => (
    <section>
      Explore section
    </section>
);
  
export default dynamic (() => Promise.resolve(Explore), {ssr: false});