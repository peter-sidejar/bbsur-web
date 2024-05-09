import React from 'react';

const PeopleCircleIcon: React.FC<React.SVGAttributes<HTMLOrSVGElement>> = (
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
        d='M10.5 18.333a8.333 8.333 0 100-16.666 8.333 8.333 0 000 16.666zm2.5-10a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm-2.5 8.334a6.647 6.647 0 01-4.762-2.001C6.848 13.337 8.504 12.5 10.5 12.5c1.996 0 3.652.837 4.762 2.166a6.647 6.647 0 01-4.762 2z'
        clipRule='evenodd'
      ></path>
    </svg>
  );
};

export default PeopleCircleIcon;
