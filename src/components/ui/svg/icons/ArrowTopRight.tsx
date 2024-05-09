import React from 'react';

const ArrowTopRight: React.FC<React.SVGAttributes<HTMLOrSVGElement>> = (
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
        fillOpacity='0.882'
        fillRule='evenodd'
        d='M6.667 5c0-.46.373-.833.833-.833H15c.46 0 .833.373.833.833v7.5a.833.833 0 01-1.666 0V7.012l-8.161 8.16a.833.833 0 11-1.179-1.178l8.161-8.16H7.5A.833.833 0 016.667 5z'
        clipRule='evenodd'
      ></path>
    </svg>
  );
};

export default ArrowTopRight;
