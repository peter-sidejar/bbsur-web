import React from 'react';

const WebcamIcon: React.FC<React.SVGAttributes<HTMLOrSVGElement>> = (props) => {
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
        d='M10 3.333a5 5 0 100 10 5 5 0 000-10zm-6.667 5a6.667 6.667 0 117.5 6.615v1.719h3.334a.833.833 0 010 1.666H5.833a.833.833 0 010-1.666h3.334v-1.719a6.668 6.668 0 01-5.834-6.615zM10 6.667A1.667 1.667 0 1010 10a1.667 1.667 0 000-3.333zM6.667 8.333a3.333 3.333 0 116.666 0 3.333 3.333 0 01-6.666 0z'
        clipRule='evenodd'
      ></path>
    </svg>
  );
};

export default WebcamIcon;
