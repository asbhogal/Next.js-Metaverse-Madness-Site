'use client';

import dynamic from "next/dynamic";

const NewFeatures = () => (
    <div>
        New Features
    </div>
);
  
  export default dynamic (() => Promise.resolve(NewFeatures), { ssr: false });