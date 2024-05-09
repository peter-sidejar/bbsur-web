import React from 'react';

const BubbleMessageIcon: React.FC<React.SVGAttributes<HTMLOrSVGElement>> = (
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
        d='M15.835 2.5a2.5 2.5 0 012.5 2.5v8.333a2.5 2.5 0 01-2.5 2.5h-5.602l-3.97 2.382a.834.834 0 01-1.261-.715v-1.667h-.834a2.5 2.5 0 01-2.5-2.5V5a2.5 2.5 0 012.5-2.5h11.667z'
      ></path>
    </svg>
  );
};

export default BubbleMessageIcon;
