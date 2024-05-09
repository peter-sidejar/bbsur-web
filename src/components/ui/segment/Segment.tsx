import React from 'react';
import SegmentItem, { SegmentItemProps } from './SegmentItem';

type SegmentProps = {
  activeIndex: number;
  segmentItems: SegmentItemProps[];
};

const Segment: React.FC<{
  data: SegmentProps;
}> = (props) => {
  const { data } = props;
  const { activeIndex, segmentItems } = data;
  return (
    <ul className='rounded-[10px] sm:rounded-[12px] bg-panel-4 px-1 flex items-center justify-center h-10 sm:h-12 gap-1'>
      {segmentItems.map((segmentItem) => (
        <li className='shrink-0' key={segmentItem.index}>
          <SegmentItem
            data={{
              ...segmentItem,
              isActive: activeIndex === segmentItem.index,
            }}
          />
        </li>
      ))}
    </ul>
  );
};

export default Segment;
