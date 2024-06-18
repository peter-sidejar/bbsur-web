import React from 'react';
import bbusrAsserts from './bbusr-asserts.json';
import ProgramAssert from './ProgramAssert';
import Button from '@/components/ui/Button';

const BBUSRAsserts = () => {
  return (
    <section className='side-wrapper text-neutral-12 my-[80px] md:my-[124px]'>
      <div className='flex justify-center'>
        <h2 className='bold-9 md:text-center max-w-[587px]'>
          BBSUR asserts that treatment for Substance Use Recovery should:
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
      <div className='flex justify-center mt-[56px]'>
        <div className=' w-full md:w-[684px] gap-4 p-4 flex flex-col lg:flex-row justify-between items-center rounded-[12px] border border-neutral-alpha-4'>
          <div className='text-neutral-12 w-full lg:w-[360px] flex flex-col gap-1'>
            <span className='bold-4 block'>
              For Example, BBSUR has identified a recommended delivery model
              called VBOT.
            </span>
            <span className='regular-4'>{`(Virtual Based Opioid Treatment)`}</span>
          </div>

          <Button size={2} variant='outlined' className='w-full lg:w-auto'>
            Learn more
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BBUSRAsserts;
