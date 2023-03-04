'use client';

import dynamic from "next/dynamic";

const Hero = () => (
    <section>
      Hero section
    </section>
);
  
export default dynamic (() => Promise.resolve(Hero), { ssr: false });