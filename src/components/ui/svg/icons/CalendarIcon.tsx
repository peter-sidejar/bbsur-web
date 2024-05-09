import React from 'react';

const CalendarIcon: React.FC<React.SVGAttributes<HTMLOrSVGElement>> = (
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
        d='M7.5 2.5a.833.833 0 00-1.667 0v.833H5a2.5 2.5 0 00-2.5 2.5V15A2.5 2.5 0 005 17.5h3.394A6.666 6.666 0 0117.5 8.394v-2.56a2.5 2.5 0 00-2.5-2.5h-.833V2.5a.833.833 0 00-1.667 0v.833h-5V2.5z'
      ></path>
      <path
        fill='currentColor'
        d='M14.167 11.667c.46 0 .833.373.833.833v1.321l1.006 1.007a.833.833 0 11-1.179 1.178l-1.25-1.25a.834.834 0 01-.244-.59V12.5c0-.46.373-.833.834-.833z'
      ></path>
      <path
        fill='currentColor'
        fillRule='evenodd'
        d='M9.167 14.167a5 5 0 1110 0 5 5 0 01-10 0zm5-3.334a3.333 3.333 0 100 6.667 3.333 3.333 0 000-6.667z'
        clipRule='evenodd'
      ></path>
    </svg>
  );
};

export default CalendarIcon;
