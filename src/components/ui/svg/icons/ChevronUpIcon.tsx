import React from 'react';

const ChevronUpIcon: React.FC<React.SVGAttributes<HTMLOrSVGElement>> = (
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
        d='M9.41 7.744a.833.833 0 011.179 0l3.333 3.333a.833.833 0 01-1.178 1.179L10 9.512l-2.744 2.744a.833.833 0 11-1.179-1.179L9.41 7.744z'
        clipRule='evenodd'
      ></path>
    </svg>
  );
};

export default ChevronUpIcon;
