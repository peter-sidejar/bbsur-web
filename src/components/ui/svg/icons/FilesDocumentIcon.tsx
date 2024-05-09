import React from 'react';

const FilesDocumentIcon: React.FC<React.SVGAttributes<HTMLOrSVGElement>> = (
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
        d='M8.333 1.667a2.5 2.5 0 00-2.5 2.5 2.5 2.5 0 00-2.5 2.5v9.166a2.5 2.5 0 002.5 2.5H12.5a2.5 2.5 0 002.5-2.5 2.5 2.5 0 002.5-2.5V7.5h-3.333a2.5 2.5 0 01-2.5-2.5V1.667H8.333zm5 14.166h-5a2.5 2.5 0 01-2.5-2.5v-7.5A.833.833 0 005 6.667v9.166c0 .46.373.834.833.834H12.5c.46 0 .833-.373.833-.834z'
        clipRule='evenodd'
      ></path>
      <path
        fill='currentColor'
        d='M13.333 2.155l3.679 3.678h-2.845A.833.833 0 0113.333 5V2.155z'
      ></path>
    </svg>
  );
};

export default FilesDocumentIcon;
