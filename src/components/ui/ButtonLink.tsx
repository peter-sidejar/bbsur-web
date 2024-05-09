import React from 'react';
import clsx from 'classnames';

export interface ButtonLinkProps
  extends React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLDivElement
    >,
    React.AriaAttributes {
  //   StartIcon?: React.FC<IconProps>;
  EndIcon?: React.FC<React.SVGAttributes<HTMLOrSVGElement>>;
  size: 1 | 2 | 3 | 4 | 5;
  highContrast?: boolean;
  noUnderline?: boolean;
}

const sizeClasses: Record<number, string> = {
  2: 'semibold-3 ',
  3: 'semibold-4',
  4: 'semibold-5',
};

const contrastClasses: Record<'high' | 'low', string> = {
  high: 'text-neutral-alpha-12 hover:text-neutral-alpha-11 border-neutral-alpha-12 hover:border-neutral-alpha-7',
  low: 'hover:text-neutral-alpha-12 text-neutral-alpha-11 hover:border-neutral-alpha-12 border-neutral-alpha-7',
};
const ButtonLink: React.FC<ButtonLinkProps> = (props) => {
  const { className, highContrast, size, noUnderline, children } = props;
  const contrast = highContrast ? 'high' : 'low';
  return (
    <div
      className={clsx(
        noUnderline ? 'block' : 'inline-block border-b',
        contrastClasses[contrast],
        sizeClasses[size],
        className
      )}
    >
      {children}
    </div>
  );
};

export default ButtonLink;
