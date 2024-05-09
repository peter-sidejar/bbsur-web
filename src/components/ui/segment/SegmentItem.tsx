import React from 'react';
import clsx from 'classnames';
export type SegmentItemProps = {
  index: number;
  title: string;
  Icon?: React.FC<React.SVGAttributes<HTMLOrSVGElement>> | undefined;
  onItemClick?: () => void;
  isActive?: boolean;
};

const SegmentItem: React.FC<{ data: SegmentItemProps }> = (props) => {
  const { data } = props;
  const { title, Icon, onItemClick, isActive } = data;
  return (
    <button
      onClick={onItemClick}
      className={clsx(
        'transition-colors duration-200 px-3 h-8 sm:h-10 rounded-[8px] sm:rounded-[10px] gap-1 medium-2 sm:semibold-3 flex items-center justify-center hover:text-neutral-12',
        isActive
          ? 'bg-panel-1 text-neutral-12 segment-shadow'
          : 'bg-none text-neutral-11'
      )}
    >
      {Icon && <Icon className='hidden sm:block w-5 h-auto shrink-0' />}
      <span className='block'>{title}</span>
    </button>
  );
};

export default SegmentItem;
