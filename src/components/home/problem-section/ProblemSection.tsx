import React from 'react';
import Description from './Description';
import Map from './Map';

const ProblemSection = () => {
  return (
    <section className='side-wrapper mt-[80px] md:mt-[124px] '>
      <Description />
      <Map />
    </section>
  );
};

export default ProblemSection;
