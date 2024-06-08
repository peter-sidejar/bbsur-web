import React from 'react';
import TreatmentCard from './TreatmentCard';

const barriersTreatmentData = [
  {
    title: 'STIGMA',
    description:
      'Negative societal attitudes and discrimination toward individuals with substance use disorders.',
  },
  {
    title: 'ACCESS',
    description: 'Increase access by eliminating obstacles',
  },
  {
    title: 'FINANCIAL',
    description: 'Remove financial hurdles to treatment',
  },
  {
    title: 'SOCIAL DETERMINANTS OF HEALTH (SDOH)',
    description: 'Assist with factors that impact health',
  },
  {
    title: 'TRAUMA',
    description: 'Past traumatic experiences affecting recovery',
  },
  {
    title: 'JUSTICE',
    description: 'Legal system involvement hindering recovery',
  },
];

const BarriersTreatment = () => {
  return (
    <section
      className='side-wrapper pt-[80px] md:pt-[124px] text-neutral-12'
      id='news'
    >
      <h2 className='bold-9 md:text-center'>Barriers to Treatment</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-[56px]'>
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
