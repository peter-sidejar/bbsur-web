import React from 'react';
import Hero from './Hero';
import Coalition from './Coalition';
import ProblemSection from './problem-section/ProblemSection';
import EconomicMetrics from './economic-metrics/EconomicMetrics';

const Home = () => {
  return (
    <div>
      <Hero />
      <Coalition />
      <ProblemSection />
      <EconomicMetrics />
    </div>
  );
};

export default Home;
