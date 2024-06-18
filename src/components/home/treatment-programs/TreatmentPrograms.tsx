import React from 'react';
import treatmentPrograms from './treatment-programs.json';
import TreatmentProgram from './TreatmentProgram';
const TreatmentPrograms = () => {
  return (
    <section className='side-wrapper text-neutral-12 mt-[80px] md:mt-[124px]'>
      <div className='flex justify-center'>
        <h2 className='bold-9 md:text-center max-w-[587px]'>
          There are many treatment programs that are available today:
        </h2>
      </div>
      <div className='flex justify-center mt-[56px]'>
        <ul className='flex flex-col gap-8 w-full md:w-[684px]'>
          {treatmentPrograms.map((program, index) => (
            <li key={index}>
              <TreatmentProgram
                title={program.title}
                description={program.description}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default TreatmentPrograms;
