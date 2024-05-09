import React from 'react';

const ClockIcon: React.FC<React.SVGAttributes<HTMLOrSVGElement>> = (props) => {
  const { ...rest } = props;
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='21'
      height='20'
      fill='none'
      viewBox='0 0 21 20'
      {...rest}
    >
      <path
        fill='currentColor'
        fillRule='evenodd'
        d='M10.8 18.333a8.333 8.333 0 100-16.666 8.333 8.333 0 000 16.666zm.833-11.666a.833.833 0 10-1.666 0V10c0 .221.087.433.244.59l2.083 2.083a.833.833 0 001.179-1.179l-1.84-1.84V6.668z'
        clipRule='evenodd'
      ></path>
    </svg>
  );
};

export default ClockIcon;
