import React from 'react';

const EyeSparkleIcon: React.FC<React.SVGAttributes<HTMLOrSVGElement>> = (
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
        d='M19.13 8.82c-2.138-3.593-5.337-5.487-8.63-5.487-3.293 0-6.492 1.894-8.63 5.486a2.309 2.309 0 000 2.362c2.138 3.592 5.337 5.486 8.63 5.486 3.293 0 6.492-1.894 8.63-5.486a2.309 2.309 0 000-2.362zm-9.003-1.408l-.676 1.353a.417.417 0 01-.186.186l-1.353.676a.417.417 0 000 .746l1.353.676c.08.04.146.106.186.186l.676 1.353a.417.417 0 00.746 0l.676-1.353a.417.417 0 01.186-.186l1.353-.676a.417.417 0 000-.746l-1.353-.676a.417.417 0 01-.186-.186l-.676-1.353a.417.417 0 00-.746 0z'
        clipRule='evenodd'
      ></path>
    </svg>
  );
};

export default EyeSparkleIcon;
