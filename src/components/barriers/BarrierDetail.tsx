import React from 'react';
import { BarrierType } from './data/type';
import clsx from 'classnames';

const BarrierDetail: React.FC<{ barrier: BarrierType }> = ({ barrier }) => {
  const pointsLength = barrier.list.length;
  return (
    <div className='my-[30px] md:my-[64px] side-wrapper text-neutral-12'>
      <div className='flex md:items-center flex-col'>
        <h1 className='md:text-center bold-9'>{barrier.title}</h1>
        <p className='md:text-center max-w-[684px] mt-4'>
          {barrier.description}
        </p>
      </div>
      <ul
        className={clsx(
          'mt-[56px] md:mt-[64px] grid grid-cols-1 gap-5',
          pointsLength > 3 ? 'md:grid-cols-2 xl:grid-cols-4' : 'lg:grid-cols-3'
        )}
      >
        {barrier.list.map((point, index) => (
          <li key={index} className='flex flex-col gap-2'>
            <span className='bold-4'>{point.title}</span>
            <p className='regular-3'>{point.description}</p>
          </li>
        ))}
      </ul>
      <div className='mt-[56px] md:mt-[64px] flex md:items-center flex-col'>
        <p className='md:text-center regular-4 max-w-[684px]'>
          {barrier.summary}
        </p>
      </div>
    </div>
  );
};

export default BarrierDetail;
