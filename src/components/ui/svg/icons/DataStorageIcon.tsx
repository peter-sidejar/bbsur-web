import React from 'react';

const DataStorageIcon: React.FC<React.SVGAttributes<HTMLOrSVGElement>> = (
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
        d='M1.667 5.833a2.5 2.5 0 012.5-2.5h11.666a2.5 2.5 0 012.5 2.5v3.334H1.667V5.833zm3.75.417a.833.833 0 11-1.667 0 .833.833 0 011.667 0zM1.667 10.833h16.666v3.334a2.5 2.5 0 01-2.5 2.5H4.167a2.5 2.5 0 01-2.5-2.5v-3.334zm3.75 2.917a.833.833 0 11-1.667 0 .833.833 0 011.667 0z'
        clipRule='evenodd'
      ></path>
    </svg>
  );
};

export default DataStorageIcon;
