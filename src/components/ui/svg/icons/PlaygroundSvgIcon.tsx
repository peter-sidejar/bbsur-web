import React from 'react';

const PlaygroundSvgIcon: React.FC<React.SVGAttributes<HTMLOrSVGElement>> = (
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
        d='M12.896 2.536a1.667 1.667 0 00-2.042 1.178l-.862 3.22c-.239.89.289 1.803 1.178 2.041l3.22.863c.889.238 1.803-.29 2.041-1.179l.863-3.22a1.667 1.667 0 00-1.179-2.04l-3.22-.863zM5.47 5.769a1.25 1.25 0 00-2.034.74l-.752 4.265a1.25 1.25 0 001.659 1.391l4.069-1.48a1.25 1.25 0 00.376-2.133L5.47 5.77zM11.667 10.833a3.333 3.333 0 100 6.667 3.333 3.333 0 000-6.667z'
      ></path>
    </svg>
  );
};

export default PlaygroundSvgIcon;
