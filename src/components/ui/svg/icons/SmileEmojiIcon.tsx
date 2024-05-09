import React from 'react';

const SmileEmojiIcon: React.FC<React.SVGAttributes<HTMLOrSVGElement>> = (
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
        d='M10.4 18.333a8.333 8.333 0 100-16.666 8.333 8.333 0 000 16.666zm-1.767-6.565a.833.833 0 00-1.179 1.178 4.167 4.167 0 005.893 0 .833.833 0 00-1.179-1.178 2.5 2.5 0 01-3.535 0zm.517-3.851c0 .69-.466 1.25-1.042 1.25-.575 0-1.041-.56-1.041-1.25s.466-1.25 1.041-1.25c.576 0 1.042.56 1.042 1.25zm3.542 1.25c.575 0 1.041-.56 1.041-1.25s-.466-1.25-1.041-1.25c-.576 0-1.042.56-1.042 1.25s.466 1.25 1.042 1.25z'
        clipRule='evenodd'
      ></path>
    </svg>
  );
};

export default SmileEmojiIcon;
