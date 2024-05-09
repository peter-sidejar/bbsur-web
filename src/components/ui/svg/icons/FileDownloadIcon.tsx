import React from 'react';

const FileDownloadIcon: React.FC<React.SVGAttributes<HTMLOrSVGElement>> = (
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
        d='M5.833 1.667H10v4.166a2.5 2.5 0 002.5 2.5h4.167v7.5a2.5 2.5 0 01-2.5 2.5H5.833a2.5 2.5 0 01-2.5-2.5V4.167a2.5 2.5 0 012.5-2.5zm6.84 12.672l-2.084 2.084a.833.833 0 01-1.178 0l-2.083-2.084a.833.833 0 011.178-1.178l.66.66v-2.988a.833.833 0 011.668 0v2.989l.66-.661a.834.834 0 011.179 1.178z'
        clipRule='evenodd'
      ></path>
      <path
        fill='currentColor'
        d='M11.667 2.155l4.512 4.512H12.5a.833.833 0 01-.833-.834V2.155z'
      ></path>
    </svg>
  );
};

export default FileDownloadIcon;
