import React from 'react';

const AlignmentJustifyIcon: React.FC<React.SVGAttributes<HTMLOrSVGElement>> = (
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
        d='M2.5 4.167c0-.46.373-.834.833-.834h13.334a.833.833 0 010 1.667H3.333a.833.833 0 01-.833-.833zM2.5 10c0-.46.373-.833.833-.833h13.334a.833.833 0 010 1.666H3.333A.833.833 0 012.5 10zm0 5.833c0-.46.373-.833.833-.833h13.334a.833.833 0 010 1.667H3.333a.833.833 0 01-.833-.834z'
        clipRule='evenodd'
      ></path>
    </svg>
  );
};

export default AlignmentJustifyIcon;
