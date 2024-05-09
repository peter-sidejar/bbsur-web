import React from 'react';

const ArrowTopCircleIcon: React.FC<React.SVGAttributes<HTMLOrSVGElement>> = (
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
        d='M18.333 10a8.333 8.333 0 10-16.666 0 8.333 8.333 0 0016.666 0zM6.911 8.577a.833.833 0 001.178 1.179l1.078-1.078v4.655a.833.833 0 001.666 0V8.678l1.078 1.078a.833.833 0 001.178-1.179l-2.5-2.5a.833.833 0 00-1.178 0l-2.5 2.5z'
        clipRule='evenodd'
      ></path>
    </svg>
  );
};

export default ArrowTopCircleIcon;
