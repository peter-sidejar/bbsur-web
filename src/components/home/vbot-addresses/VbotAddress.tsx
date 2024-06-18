import React from 'react';

const VbotAddress: React.FC<{ title: string; description: string }> = ({
  title,
  description,
}) => {
  return (
    <div className='flex flex-col gap-1 text-neutral-12 p-4 rounded-[12px] border border-neutral-alpha-4 bg-panel-1'>
      <h5 className='bold-4'>{title}</h5>
      <p className='regular-4'>{description}</p>
    </div>
  );
};

export default VbotAddress;
