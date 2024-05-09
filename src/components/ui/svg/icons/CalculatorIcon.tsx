import React from 'react';

const CalculatorIcon: React.FC<React.SVGAttributes<HTMLOrSVGElement>> = (
  props
) => {
  const { ...rest } = props;
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='19'
      height='18'
      fill='none'
      viewBox='0 0 19 18'
      {...rest}
    >
      <path
        fill='currentColor'
        fillOpacity='0.891'
        fillRule='evenodd'
        d='M5.75 1.5A2.25 2.25 0 003.5 3.75v10.5a2.25 2.25 0 002.25 2.25h7.5a2.25 2.25 0 002.25-2.25V3.75a2.25 2.25 0 00-2.25-2.25h-7.5zM14 5.25v-1.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 00-.75.75v1.5h9zm-6.188 4.875a.937.937 0 100-1.875.937.937 0 000 1.875zm0 3.375a.937.937 0 100-1.875.937.937 0 000 1.875zm4.313-4.313a.937.937 0 11-1.875 0 .937.937 0 011.875 0zm-.938 4.313a.937.937 0 100-1.875.937.937 0 000 1.875z'
        clipRule='evenodd'
      ></path>
    </svg>
  );
};

export default CalculatorIcon;
