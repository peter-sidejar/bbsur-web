import React from 'react';

const CalendarCheckIcon: React.FC<React.SVGAttributes<HTMLOrSVGElement>> = (
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
        d='M6.667 1.667c.46 0 .833.373.833.833v.833h5V2.5a.833.833 0 111.667 0v.833H15a2.5 2.5 0 012.5 2.5V15a2.5 2.5 0 01-2.5 2.5H5A2.5 2.5 0 012.5 15V5.833a2.5 2.5 0 012.5-2.5h.833V2.5c0-.46.373-.833.834-.833zm6.006 6.702a.833.833 0 010 1.179l-2.917 2.916a.833.833 0 01-1.179 0l-1.25-1.25a.833.833 0 111.179-1.178l.66.66 2.328-2.327a.833.833 0 011.179 0z'
        clipRule='evenodd'
      ></path>
    </svg>
  );
};

export default CalendarCheckIcon;
