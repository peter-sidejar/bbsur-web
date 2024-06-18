import React from 'react';

const FileBlendIcon: React.FC<React.SVGAttributes<HTMLOrSVGElement>> = (
  props
) => {
  const { ...rest } = props;
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='none'
      viewBox='0 0 24 24'
      {...rest}
    >
      <path
        fill='currentColor'
        fillRule='evenodd'
        d='M4 5a3 3 0 013-3h5.172a3 3 0 012.12.879l-.334.334.335-.334 4.828 4.828A3 3 0 0120 9.828V19a3 3 0 01-3 3H7a3 3 0 01-3-3V5zm8-1H7a1 1 0 00-1 1v14a1 1 0 001 1h10a1 1 0 001-1v-9h-3a3 3 0 01-3-3V4zm4.586 4H15a1 1 0 01-1-1V5.414L16.586 8z'
        clipRule='evenodd'
      ></path>
    </svg>
  );
};

export default FileBlendIcon;
