import SquareLinesNoteIcon from '@/components/ui/svg/icons/SquareLinesNoteIcon';
import React from 'react';
import NextLink from 'next/link';

const TreatmentCard: React.FC<{
  title: string;
  description: string;
  path: string;
}> = ({ title, description, path }) => {
  return (
    <NextLink
      href={path}
      className='block p-4 border border-neutral-alpha-4 hover:border-neutral-alpha-6 card-shadow rounded-[12px]'
    >
      <SquareLinesNoteIcon className='text-black h-6 w-6' />
      <div className='mt-3 flex flex-col'>
        <span className='bold-4 uppercase'>{title}</span>
        <p className='regular-4 mt-1'>{description}</p>
      </div>
    </NextLink>
  );
};

export default TreatmentCard;
