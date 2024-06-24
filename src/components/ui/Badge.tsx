import React from 'react';
import clsx from 'classnames';

export type BadgeColorType =
  | 'neutral'
  | 'warning'
  | 'primary'
  | 'accent'
  | 'danger';

export interface BadgeProps
  extends React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLDivElement
    >,
    React.AriaAttributes {
  color: BadgeColorType;
  size: 1 | 2 | 3 | 4 | 5;
}

const sizeClasses: Record<number, string> = {
  1: 'size-1-badge',
  2: 'size-2-badge',
};

const colorClasses: Record<string, string> = {
  neutral: 'neutral-badge',
  warning: 'warning-badge',
  primary: 'primary-badge',
  accent: 'accent-badge',
  danger: 'danger-badge',
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
