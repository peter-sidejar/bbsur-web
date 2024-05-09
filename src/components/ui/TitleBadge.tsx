import React from 'react';
import clsx from 'classnames';

export interface TitleBadgeProps
  extends React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLDivElement
    >,
    React.AriaAttributes {
  Icon: React.FC<React.SVGAttributes<HTMLOrSVGElement>>;
  title: string;
}

const TitleBadge: React.FC<TitleBadgeProps> = (props) => {
  const { className, title, Icon, ...rest } = props;
  return (
    <div
      className={clsx(
        'h-8 flex items-center gap-1 medium-3 text-neutral-alpha-12 px-3',
        className
      )}
      {...rest}
    >
      <Icon className='w-[18px]' />
      <span className='block'>{title}</span>
    </div>
  );
};

export default TitleBadge;
