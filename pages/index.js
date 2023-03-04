import { Suspense } from 'react';
import { Footer, Navbar } from '../components/exports';
import { About, Explore, Feedback, GetStarted, Hero, Insights, WhatsNew, World } from '../sections/exports';

const Page = () => (
  <Suspense >
  <div className="bg-DarkGunmetal overflow-hidden">
    <Navbar />
    <Hero />
    <About />
    <Explore />
    <GetStarted />
    <WhatsNew />
    <World />
    <Insights />
    <Feedback />
    <Footer />
  </div>
  </Suspense>
);

export default Page;