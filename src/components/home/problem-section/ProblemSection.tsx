import React from 'react';
import Description from './Description';
import Map from './Map';

const ProblemSection = () => {
  return (
    <section className='side-wrapper py-[80px] md:py-[124px] '>
      <Description />
      <div className='relative mt-[80px] md:mt-[56px]'>
        <div>
          <Map />
        </div>

        <div className='pt-[56px] flex justify-center'>
          <p className=' relative regular-4 w-[684px]'>
            Innovative solutions are necessary to ensure equitable access to
            life-saving treatment and support services, bridging the urban-rural
            gap and providing essential care to those in need, particularly
            veterans.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
