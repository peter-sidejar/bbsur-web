import React from 'react';
import Hero from './Hero';
import Coalition from './Coalition';
import ProblemSection from './problem-section/ProblemSection';
import EconomicMetrics from './economic-metrics/EconomicMetrics';
import Press from './press/Press';
import BarriersTreatment from './barriers-treatment/BarriersTreatment';

const Home = () => {
  return (
    <div className='text-neutral-12'>
      <Hero />
      <Coalition />
      <ProblemSection />
      <EconomicMetrics />
      <BarriersTreatment />
      <Press />
    </div>
  );
};

export default Home;
