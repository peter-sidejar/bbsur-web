import React from 'react';

const UserIcon: React.FC<React.SVGAttributes<HTMLOrSVGElement>> = (props) => {
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
        d='M10 1.667a3.75 3.75 0 100 7.5 3.75 3.75 0 000-7.5zM10.001 10c-3.193 0-5.637 1.914-6.63 4.597a2.052 2.052 0 00.362 2.06c.44.524 1.118.843 1.849.843h8.838c.731 0 1.41-.319 1.85-.843.45-.537.644-1.293.36-2.06C15.639 11.914 13.196 10 10.002 10z'
      ></path>
    </svg>
  );
};

export default UserIcon;
