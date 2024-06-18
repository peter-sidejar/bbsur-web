import React from 'react';
import TreatmentCard from './TreatmentCard';

const barriersTreatmentData = [
  {
    title: 'Stigma',
    description:
      'Negative societal attitudes and discrimination toward individuals with substance use disorders.',
  },
  {
    title: 'Access',
    description: 'Increase access by eliminating obstacles',
  },
  {
    title: 'Financial',
    description: 'Remove financial hurdles to treatment',
  },
  {
    title: 'Social Determinants of Health (SDOH)',
    description: 'Assist with factors that impact health',
  },
  {
    title: 'Trauma',
    description: 'Past traumatic experiences affecting recovery',
  },
  {
    title: 'Justice',
    description: 'Legal system involvement hindering recovery',
  },
];

const BarriersTreatment = () => {
  return (
    <section className='side-wrapper text-neutral-12'>
      <h2 className='bold-9 md:text-center'>Barriers to Treatment</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mt-[56px]'>
        {barriersTreatmentData.map((barrier, index) => (
          <TreatmentCard
            key={index}
            title={barrier.title}
            description={barrier.description}
          />
        ))}
      </div>
    </section>
  );
};

export default BarriersTreatment;
