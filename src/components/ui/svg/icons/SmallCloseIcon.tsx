import React from 'react';

const SmallCloseIcon: React.FC<React.SVGAttributes<HTMLOrSVGElement>> = (
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
        d='M6.077 6.077a.833.833 0 011.179 0L10 8.822l2.744-2.745a.833.833 0 111.178 1.179L11.178 10l2.744 2.744a.833.833 0 01-1.178 1.179L10 11.178l-2.744 2.745a.833.833 0 01-1.179-1.179L8.821 10 6.077 7.256a.833.833 0 010-1.179z'
        clipRule='evenodd'
      ></path>
    </svg>
  );
};

export default SmallCloseIcon;
