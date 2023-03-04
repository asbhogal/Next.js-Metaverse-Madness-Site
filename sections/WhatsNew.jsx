'use client';

import dynamic from "next/dynamic";

const WhatsNew = () => (
    <section>
      What's new section
    </section>
);
  
export default dynamic (() => Promise.resolve(WhatsNew), { ssr: false });