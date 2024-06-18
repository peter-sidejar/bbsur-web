import React from 'react';

const ShieldIcon: React.FC<React.SVGAttributes<HTMLOrSVGElement>> = (props) => {
  const { ...rest } = props;
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='none'
      viewBox='0 0 24 24'
      {...rest}
    >
      <path
        fill='currentColor'
        fillRule='evenodd'
        d='M12.4 3.767a1 1 0 00-.8 0l-6 2.625a1 1 0 00-.6.916V13a7 7 0 1014 0V7.308a1 1 0 00-.6-.916l-6-2.625zm-1.603-1.832a3 3 0 012.405 0l6 2.625A3 3 0 0121 7.308V13a9 9 0 11-18 0V7.308A3 3 0 014.798 4.56l6-2.625zm4.91 7.358a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-2-2a1 1 0 111.414-1.414L11 12.586l3.293-3.293a1 1 0 011.414 0z'
        clipRule='evenodd'
      ></path>
    </svg>
  );
};

export default ShieldIcon;
