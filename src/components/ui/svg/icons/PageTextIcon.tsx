import React from 'react';

const PageTextIcon: React.FC<React.SVGAttributes<HTMLOrSVGElement>> = (
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
        d='M5.833 1.667a2.5 2.5 0 00-2.5 2.5v11.666a2.5 2.5 0 002.5 2.5H9.31a2.495 2.495 0 01-.142-.833v-3.333c0-.817.392-1.543.998-2A4.169 4.169 0 0116.667 10V4.167a2.5 2.5 0 00-2.5-2.5H5.833zm.834 2.5a.833.833 0 100 1.666h5a.833.833 0 000-1.666h-5zm0 3.333a.833.833 0 000 1.667h2.5a.833.833 0 000-1.667h-2.5z'
        clipRule='evenodd'
      ></path>
      <path
        fill='currentColor'
        fillRule='evenodd'
        d='M16.667 13.556v-.223a2.5 2.5 0 00-5 0v.223A1.666 1.666 0 0010.833 15v1.667c0 .92.746 1.666 1.667 1.666h3.333c.92 0 1.667-.746 1.667-1.666V15c0-.617-.335-1.155-.833-1.444zm-3.334-.223H15a.833.833 0 00-1.667 0zm2.5 1.667H12.5v1.667h3.333V15z'
        clipRule='evenodd'
      ></path>
    </svg>
  );
};

export default PageTextIcon;
