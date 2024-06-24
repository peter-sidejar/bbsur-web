import Badge, { BadgeColorType } from '@/components/ui/Badge';
import FileBlendIcon from '@/components/ui/svg/icons/FileBlendIcon';
import React from 'react';

export type ProgramBadgeType = {
  id: number;
  title: string;
  color: BadgeColorType;
};

const TreatmentProgram: React.FC<{
  title: string;
  description: string;
  badges: ProgramBadgeType[];
}> = ({ title, description, badges }) => {
  return (
    <div className='flex items-start gap-4'>
      <div className='shrink-0'>
        <FileBlendIcon className='w-6 h-6 text-neutral-12' />
      </div>
      <div className='flex flex-col gap-1 text-neutral-12'>
        <div className='flex items-center gap-2 flex-wrap'>
          <h5 className='bold-4'>{title}</h5>
          {badges.map((badge) => (
            <Badge key={badge.id} size={1} color={badge.color}>
              {badge.title}
            </Badge>
          ))}
        </div>

        <p className='regular-4'>{description}</p>
      </div>
    </div>
  );
};

export default TreatmentProgram;
