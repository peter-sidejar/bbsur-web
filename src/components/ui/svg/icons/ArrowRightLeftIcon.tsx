import React from 'react';

const ArrowRightLeftIcon: React.FC<React.SVGAttributes<HTMLOrSVGElement>> = (
  props
) => {
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
        d='M12.944 1.91a.833.833 0 011.179 0l3.333 3.334a.833.833 0 010 1.179l-3.333 3.333a.833.833 0 11-1.179-1.179l1.91-1.91H3.535a.833.833 0 010-1.667h11.32l-1.91-1.91a.833.833 0 010-1.18zm-5.488 8.334a.833.833 0 010 1.179l-1.91 1.91h11.32a.833.833 0 110 1.667H5.547l1.91 1.91a.833.833 0 11-1.179 1.18l-3.333-3.334a.833.833 0 010-1.179l3.333-3.333a.833.833 0 011.179 0z'
        clipRule='evenodd'
      ></path>
    </svg>
  );
};

export default ArrowRightLeftIcon;
