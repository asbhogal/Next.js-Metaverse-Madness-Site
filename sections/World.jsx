'use client';

import dynamic from "next/dynamic";

const World = () => (
    <section>
      World section
    </section>
);
  
export default dynamic (() => Promise.resolve(World), { ssr: false });