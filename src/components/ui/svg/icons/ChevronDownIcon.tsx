import React from 'react';

const ChevronDownIcon: React.FC<React.SVGAttributes<HTMLOrSVGElement>> = (
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
    >
      <path
        fill={'currentColor'}
        fillRule='evenodd'
        d='M9.41 12.256a.833.833 0 001.179 0l3.333-3.333a.833.833 0 00-1.178-1.179L10 10.488 7.256 7.744a.833.833 0 10-1.179 1.179l3.333 3.333z'
        clipRule='evenodd'
      ></path>
    </svg>
  );
};

export default ChevronDownIcon;
