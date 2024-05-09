import React from 'react';

const WarningIcon: React.FC<React.SVGAttributes<HTMLOrSVGElement>> = (
  props
) => {
  const { ...rest } = props;
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='16'
      height='16'
      fill='none'
      viewBox='0 0 16 16'
      {...rest}
    >
      <path
        fill='currentColor'
        fillRule='evenodd'
        d='M1.333 8a6.667 6.667 0 1113.334 0A6.667 6.667 0 011.333 8zm7.334-1.987a.667.667 0 00-1.334 0v1.996a.667.667 0 001.334 0V6.013zM8 9.167a.833.833 0 100 1.666.833.833 0 000-1.666z'
        clipRule='evenodd'
      ></path>
    </svg>
  );
};

export default WarningIcon;
