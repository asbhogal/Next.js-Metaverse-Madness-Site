'use client';

import dynamic from "next/dynamic";

const StartSteps = () => (
    <div>
      start steps
    </div>
);
  
export default dynamic (() => Promise.resolve(StartSteps), { ssr: false });