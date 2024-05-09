import React from 'react';

const ChevronRightSmall: React.FC<React.SVGAttributes<HTMLOrSVGElement>> = (
  props
) => {
  const { ...rest } = props;
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='20'
      height='20'
      fill='none'
      viewBox='0 0 20 20'
      {...rest}
    >
      <path
        fill='currentColor'
        fillRule='evenodd'
        d='M7.744 6.077a.833.833 0 011.179 0l3.333 3.334a.833.833 0 010 1.178l-3.333 3.334a.833.833 0 01-1.179-1.179L10.488 10 7.744 7.256a.833.833 0 010-1.179z'
        clipRule='evenodd'
      ></path>
    </svg>
  );
};

export default ChevronRightSmall;
