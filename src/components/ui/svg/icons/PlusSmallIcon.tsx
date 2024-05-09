import React from 'react';

const PlusSmallIcon: React.FC<React.SVGAttributes<HTMLOrSVGElement>> = (
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
        d='M10 5c.46 0 .833.373.833.833v3.334h3.334a.833.833 0 010 1.666h-3.334v3.334a.833.833 0 01-1.666 0v-3.334H5.833a.833.833 0 010-1.666h3.334V5.833c0-.46.373-.833.833-.833z'
        clipRule='evenodd'
      ></path>
    </svg>
  );
};

export default PlusSmallIcon;
