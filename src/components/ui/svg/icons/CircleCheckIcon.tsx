import React from 'react';

const CircleCheckIcon: React.FC<React.SVGAttributes<HTMLOrSVGElement>> = (
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
        d='M10 1.667a8.333 8.333 0 100 16.666 8.333 8.333 0 000-16.666zm3.145 6.777a.833.833 0 00-1.29-1.055l-3.167 3.87-1.015-1.015a.833.833 0 00-1.179 1.179l1.667 1.666a.833.833 0 001.234-.061l3.75-4.584z'
        clipRule='evenodd'
      ></path>
    </svg>
  );
};

export default CircleCheckIcon;
