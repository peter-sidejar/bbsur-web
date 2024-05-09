import React from 'react';

const PeopleAddedIcon: React.FC<React.SVGAttributes<HTMLOrSVGElement>> = (
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
        d='M10.5 1.667a3.75 3.75 0 100 7.5 3.75 3.75 0 000-7.5zM11 13.917a2.49 2.49 0 00-.5 1.49v.016a2.496 2.496 0 001 1.994l.111.083H5.165c-.946 0-1.827-.845-1.585-1.92a7.688 7.688 0 01.29-.983c.392-1.06 1.01-2 1.812-2.749C6.908 10.702 8.564 10 10.5 10c1.71 0 3.202.548 4.372 1.466l-.971 1.618a2.501 2.501 0 00-2.9.833z'
      ></path>
      <path
        fill={'currentColor'}
        d='M17.881 12.929a.833.833 0 00-1.429-.858l-2.025 3.375-.927-.696a.833.833 0 10-1 1.333l1.667 1.25a.833.833 0 001.214-.238l2.5-4.166z'
      ></path>
    </svg>
  );
};

export default PeopleAddedIcon;
