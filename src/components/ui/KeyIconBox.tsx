import React from 'react';

type KeyIconBoxProps = {
  Icon: React.FC<React.SVGAttributes<HTMLOrSVGElement>>;
};
const KeyIconBox: React.FC<KeyIconBoxProps> = (props) => {
  const { Icon } = props;
  return (
    <div className='w-8 h-8 rounded-full bg-neutral-alpha-3 flex items-center justify-center'>
      <div>
        <Icon className='w-5 h-5' />
      </div>
    </div>
  );
};

export default KeyIconBox;
