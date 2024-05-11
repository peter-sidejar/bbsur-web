import React from 'react';

const Description = () => {
  return (
    <div className='flex justify-center text-neutral-12'>
      <div className='md:w-[684px]'>
        <h2 className='bold-9'>The problem</h2>
        <p className='mt-3 regular-4'>
          The opioid epidemic, particularly acute in rural areas, poses a
          significant challenge, especially for veterans grappling with limited
          access to treatment due to geographic isolation and unique healthcare
          needs.
        </p>

        <div className='flex flex-col gap-8 sm:flex-row justify-between mt-[56px]'>
          <div className='flex flex-col gap-4'>
            <span className='regular-4'>Vets in shortage area</span>
            <span className='bold-13'>5.125m</span>
          </div>
          <div className='flex flex-col gap-4'>
            <span className='regular-4'>Avg distance to treatment</span>
            <span className='bold-13'>44.5miles</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
