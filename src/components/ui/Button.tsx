import React from 'react';
import clsx from 'classnames';

export interface ButtonProps
  extends React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    React.AriaAttributes {
  //   StartIcon?: React.FC<IconProps>;
  EndIcon?: React.FC<React.SVGAttributes<HTMLOrSVGElement>>;
  variant: 'solid' | 'alternative' | 'soft' | 'outlined';
  size: 1 | 2 | 3 | 4 | 5;
}

const sizeClasses: Record<number, string> = {
  2: 'size-2-btn',
  3: 'size-3-btn',
  4: 'size-4-btn',
  5: 'size-5-btn',
};

const iconSizeClasses: Record<number, string> = {
  2: 'w-5 h-auto',
  3: 'w-6 h-auto',
  4: 'w-6 h-auto',
  5: 'w-6 h-auto',
};

const variantClasses: Record<string, string> = {
  solid: 'solid-btn',
  alternative: 'alternative-btn',
  outlined: 'outline-btn',
};

const Button: React.FC<ButtonProps> = (props) => {
  const {
    size = 3,
    variant = 'solid',
    className,
    children,
    EndIcon,
    ...rest
  } = props;
  return (
    <button
      className={clsx(
        'transition-colors duration-200 ',
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
      {...rest}
    >
      {children}
      {EndIcon && (
        <span>
          <EndIcon className={iconSizeClasses[size]} />
        </span>
      )}
    </button>
  );
};

export default Button;
