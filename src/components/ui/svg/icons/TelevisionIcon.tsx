import React from 'react';

const TelevisionIcon: React.FC<React.SVGAttributes<HTMLOrSVGElement>> = (
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
        d='M1.667 5a2.5 2.5 0 012.5-2.5h11.666a2.5 2.5 0 012.5 2.5v6.667a2.5 2.5 0 01-2.5 2.5H4.167a2.5 2.5 0 01-2.5-2.5V5zM5.271 17.455a14.506 14.506 0 014.73-.788c1.653 0 3.242.277 4.728.788a.833.833 0 00.542-1.576 16.174 16.174 0 00-5.27-.879c-1.842 0-3.614.309-5.272.879a.833.833 0 00.542 1.576z'
      ></path>
    </svg>
  );
};

export default TelevisionIcon;
