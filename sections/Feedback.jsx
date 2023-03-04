'use client';

import dynamic from "next/dynamic";

const Feedback = () => (
    <section>
      Feedback section
    </section>
);
  
export default dynamic (() => Promise.resolve(Feedback), { ssr: false });  