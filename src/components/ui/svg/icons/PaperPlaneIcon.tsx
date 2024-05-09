import React from 'react';

const PaperPlaneIcon: React.FC<React.SVGAttributes<HTMLOrSVGElement>> = (
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
        d='M1.425 5.47C.192 4.487.888 2.5 2.465 2.5h15.057a1.667 1.667 0 011.447 2.495l-7.37 12.89c-.77 1.348-2.802 1.004-3.085-.522l-1.203-6.477 4.768-2.71a.833.833 0 10-.824-1.45l-4.82 2.741-5.01-3.997z'
      ></path>
    </svg>
  );
};

export default PaperPlaneIcon;
