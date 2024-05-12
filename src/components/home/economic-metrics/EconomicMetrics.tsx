import React from 'react';
import Description from './Description';
import Metrics from './Metrics';

const EconomicMetrics = () => {
  return (
    <section className='py-[56px] md:py-[124px] bg-accent-3'>
      <div className='side-wrapper'>
        <Description />
      </div>
      <Metrics />
    </section>
  );
};

export default EconomicMetrics;
