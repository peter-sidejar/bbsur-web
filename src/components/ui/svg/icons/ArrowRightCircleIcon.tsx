import React from 'react';

const ArrowRightCircle: React.FC<React.SVGAttributes<HTMLOrSVGElement>> = (
  props
) => {
  const { ...rest } = props;
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='25'
      height='24'
      fill='none'
      viewBox='0 0 25 24'
      {...rest}
    >
      <path
        fill='currentColor'
        fillRule='evenodd'
        d='M12.5 22c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10zm1.707-13.707a1 1 0 10-1.414 1.414L14.086 11H8.5a1 1 0 100 2h5.586l-1.293 1.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3z'
        clipRule='evenodd'
      ></path>
    </svg>
  );
};

export default ArrowRightCircle;
