import React from 'react';
import Description from './Description';
import Map from './Map';

const ProblemSection = () => {
  return (
    <section className='side-wrapper py-[80px] md:py-[124px] '>
      <Description />
      <Map />
    </section>
  );
};

export default ProblemSection;
