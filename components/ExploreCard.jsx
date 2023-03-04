'use client';

import dynamic from 'next/dynamic';
import React from 'react'

const ExploreCard = () => (
    <div>
      Explore Card
    </div>
);

export default dynamic(() => Promise.resolve(ExploreCard), { ssr: false });