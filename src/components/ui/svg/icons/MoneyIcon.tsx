import React from 'react';

const MoneyIcon: React.FC<React.SVGAttributes<HTMLOrSVGElement>> = (props) => {
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
        d='M.833 5.833a2.5 2.5 0 012.5-2.5h13.334a2.5 2.5 0 012.5 2.5v8.334a2.5 2.5 0 01-2.5 2.5H3.333a2.5 2.5 0 01-2.5-2.5V5.833zM3.333 5a.833.833 0 000 1.667h.834a.833.833 0 000-1.667h-.834zM10 7.917a2.083 2.083 0 100 4.166 2.083 2.083 0 000-4.166zm5.833 5.416a.833.833 0 100 1.667h.834a.833.833 0 000-1.667h-.834z'
        clipRule='evenodd'
      ></path>
    </svg>
  );
};

export default MoneyIcon;
