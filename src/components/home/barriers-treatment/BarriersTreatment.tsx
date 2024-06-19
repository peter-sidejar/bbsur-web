import React from 'react';
import TreatmentCard from './TreatmentCard';

const barriersTreatmentData = [
  {
    title: 'Stigma',
    description:
      'Negative societal attitudes and discrimination toward individuals with substance use disorders.',
    path: '/barriers/stigma',
  },
  {
    title: 'Access',
    description: 'Increase access by eliminating obstacles',
    path: '/barriers/access',
  },
  {
    title: 'Financial',
    description: 'Remove financial hurdles to treatment',
    path: '/barriers/financial',
  },
  {
    title: 'Social Determinants of Health (SDOH)',
    description: 'Assist with factors that impact health',
    path: '/barriers/sdoh',
  },
  {
    title: 'Trauma',
    description: 'Past traumatic experiences affecting recovery',
    path: '/barriers/trauma',
  },
  {
    title: 'Justice',
    description: 'Legal system involvement hindering recovery',
    path: '/barriers/justice',
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
            path={barrier.path}
          />
        ))}
      </div>
    </section>
  );
};

export default BarriersTreatment;
