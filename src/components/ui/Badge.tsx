import React from 'react';
import clsx from 'classnames';

export interface BadgeProps
  extends React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLDivElement
    >,
    React.AriaAttributes {
  color: 'neutral' | 'warning';
  size: 1 | 2 | 3 | 4 | 5;
}

const sizeClasses: Record<number, string> = {
  2: 'size-2-badge',
};

const colorClasses: Record<string, string> = {
  neutral: 'neutral-badge',
  warning: 'warning-badge',
};

const Badge: React.FC<BadgeProps> = (props) => {
  const { size, color, className, children, ...rest } = props;
  return (
    <div
      className={clsx(sizeClasses[size], colorClasses[color], className)}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Badge;
