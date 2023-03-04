'use client';

import dynamic from "next/dynamic";

const Insights = () => (
    <section>
      Insights section
    </section>
);
  
export default dynamic (() => Promise.resolve(Insights), { ssr: false });