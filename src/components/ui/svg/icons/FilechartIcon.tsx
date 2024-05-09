import React from 'react';

const FilechartIcon: React.FC<React.SVGAttributes<HTMLOrSVGElement>> = (
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
        d='M5.833 1.667H10v4.166a2.5 2.5 0 002.5 2.5h4.167v7.5a2.5 2.5 0 01-2.5 2.5H5.833a2.5 2.5 0 01-2.5-2.5V4.167a2.5 2.5 0 012.5-2.5zM7.917 13.75a.833.833 0 10-1.667 0V15a.833.833 0 001.667 0v-1.25zM10 10.417c.46 0 .833.373.833.833V15a.833.833 0 01-1.666 0v-3.75c0-.46.373-.833.833-.833zm3.75 2.5a.833.833 0 00-1.667 0V15a.833.833 0 101.667 0v-2.083z'
        clipRule='evenodd'
      ></path>
      <path
        fill='currentColor'
        d='M11.667 2.155l4.511 4.512H12.5a.833.833 0 01-.833-.834V2.155z'
      ></path>
    </svg>
  );
};

export default FilechartIcon;
