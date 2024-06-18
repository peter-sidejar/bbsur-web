import ShieldIcon from '@/components/ui/svg/icons/ShieldIcon';
import React from 'react';

const ProgramAssert: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div className='flex items-start gap-4'>
      <div className='shrink-0'>
        <ShieldIcon className='w-6 h-6 text-neutral-12' />
      </div>
      <div className='flex flex-col gap-1 text-neutral-12'>
        <h5 className='bold-4'>{title}</h5>
      </div>
    </div>
  );
};

export default ProgramAssert;
