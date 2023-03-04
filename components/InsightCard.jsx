'use client';

import dynamic from "next/dynamic";

const InsightCard = () => (
    <div>
      Insight Card
    </div>
  );
  
  export default dynamic (() => Promise.resolve(InsightCard), { ssr: false });