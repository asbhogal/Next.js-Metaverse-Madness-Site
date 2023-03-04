'use client';

import dynamic from "next/dynamic";

const GetStarted = () => (
    <section>
      Get Started Section
    </section>
);
  
export default dynamic (() => Promise.resolve(GetStarted), { ssr: false });