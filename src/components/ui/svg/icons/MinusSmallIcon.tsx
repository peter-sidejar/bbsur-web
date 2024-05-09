import React from 'react';

const MinusSmallIcon: React.FC<React.SVGAttributes<HTMLOrSVGElement>> = (
  props
) => {
  const { ...rest } = props;
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='none'
      viewBox='0 0 24 24'
      {...rest}
    >
      <path
        fill='currentColor'
        fillRule='evenodd'
        d='M6 12a1 1 0 011-1h10a1 1 0 110 2H7a1 1 0 01-1-1z'
        clipRule='evenodd'
      ></path>
    </svg>
  );
};

export default MinusSmallIcon;
