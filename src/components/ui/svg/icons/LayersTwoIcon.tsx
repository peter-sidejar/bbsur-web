import React from 'react';

const LayersTwoIcon: React.FC<React.SVGAttributes<HTMLOrSVGElement>> = (
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
        fill={'currentColor'}
        d='M3.475 10.833l-.346.17c-1.248.608-1.248 2.386 0 2.995l6.64 3.24c.462.224 1 .224 1.462 0l6.64-3.24c1.249-.609 1.249-2.387 0-2.996l-.345-.169-6.295 3.071c-.461.225-1 .225-1.461 0l-6.295-3.07z'
      ></path>
      <path
        fill={'currentColor'}
        d='M11.231 2.763c-.461-.225-1-.225-1.461 0l-6.641 3.24c-1.248.608-1.248 2.386 0 2.995l6.64 3.24c.462.224 1 .224 1.462 0l6.64-3.24c1.249-.609 1.249-2.387 0-2.996l-6.64-3.24z'
      ></path>
    </svg>
  );
};

export default LayersTwoIcon;
