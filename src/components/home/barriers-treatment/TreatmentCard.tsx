import SquareLinesNoteIcon from '@/components/ui/svg/icons/SquareLinesNoteIcon';
import React from 'react';

const TreatmentCard: React.FC<{ title: string; description: string }> = ({
  title,
  description,
}) => {
  return (
    <div className='p-4 border border-neutral-alpha-4 card-shadow rounded-[12px]'>
      <SquareLinesNoteIcon className='text-black h-6 w-6' />
      <div className='mt-3 flex flex-col'>
        <span className='bold-4 uppercase'>{title}</span>
        <p className='regular-4 mt-1'>{description}</p>
      </div>
    </div>
  );
};

export default TreatmentCard;
