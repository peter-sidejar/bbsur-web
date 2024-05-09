import React from 'react';

const GroupUsersIcon: React.FC<React.SVGAttributes<HTMLOrSVGElement>> = (
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
        fill={'currentColor'}
        d='M2.917 5.833a3.333 3.333 0 116.666 0 3.333 3.333 0 01-6.667 0zM10.416 5.833a3.333 3.333 0 116.667 0 3.333 3.333 0 01-6.666 0zM6.25 10c2.392 0 4.661 1.65 5.506 4.678.441 1.583-.909 2.822-2.295 2.822H3.038c-1.386 0-2.736-1.24-2.295-2.822C1.588 11.65 3.857 10 6.25 10zM13.362 14.23c-.407-1.457-1.106-2.69-2.004-3.645A5.189 5.189 0 0113.75 10c2.392 0 4.662 1.65 5.506 4.678.442 1.583-.908 2.822-2.294 2.822h-4.187c.64-.87.933-2.03.587-3.27z'
      ></path>
    </svg>
  );
};

export default GroupUsersIcon;
