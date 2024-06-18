import React from 'react';
import Hero from './Hero';
import Coalition from './Coalition';
import EconomicMetrics from './economic-metrics/EconomicMetrics';
import Press from './press/Press';
import BarriersTreatment from './barriers-treatment/BarriersTreatment';
import TreatmentPrograms from './treatment-programs/TreatmentPrograms';
import BBUSRAsserts from './asserts/BBUSRAsserts';
import VbotAddresses from './vbot-addresses/VbotAddresses';

const Home = () => {
  return (
    <div className='text-neutral-12'>
      <Hero />
      <EconomicMetrics />
      <BarriersTreatment />
      <TreatmentPrograms />
      <BBUSRAsserts />
      <VbotAddresses />
      <Coalition />
      <Press />
    </div>
  );
};

export default Home;
