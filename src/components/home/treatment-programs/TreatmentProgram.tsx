import FileBlendIcon from '@/components/ui/svg/icons/FileBlendIcon';
import React from 'react';

const TreatmentProgram: React.FC<{ title: string; description: string }> = ({
  title,
  description,
}) => {
  return (
    <div className='flex items-start gap-4'>
      <div className='shrink-0'>
        <FileBlendIcon className='w-6 h-6 text-neutral-12' />
      </div>
      <div className='flex flex-col gap-1 text-neutral-12'>
        <h5 className='bold-4'>{title}</h5>
        <p className='regular-4'>{description}</p>
      </div>
    </div>
  );
};

export default TreatmentProgram;
