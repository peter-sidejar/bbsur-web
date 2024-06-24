import React from 'react';
import bbusrAsserts from './bbusr-asserts.json';
import ProgramAssert from './ProgramAssert';
import Button from '@/components/ui/Button';
import NextLink from 'next/link';

const BBUSRAsserts = () => {
  return (
    <section className='side-wrapper text-neutral-12 my-[80px] md:my-[124px]'>
      <div className='flex justify-center'>
        <h2 className='bold-9 md:text-center max-w-[587px]'>
          Breaking Barriers asserts that treatment for Substance Use Recovery
          should:
        </h2>
      </div>
      <div className='flex justify-center mt-[56px]'>
        <ul className='flex flex-col gap-8 w-full md:w-[684px]'>
          {bbusrAsserts.map((programAssert, index) => (
            <li key={index}>
              <ProgramAssert title={programAssert.title} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default BBUSRAsserts;
