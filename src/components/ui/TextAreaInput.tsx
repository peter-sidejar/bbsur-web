import React, { forwardRef } from 'react';
import clsx from 'classnames';
import WarningIcon from './svg/icons/WarningIcon';

export interface TextAreaInputProps
  extends React.DetailedHTMLProps<
      React.TextareaHTMLAttributes<HTMLTextAreaElement>,
      HTMLTextAreaElement
    >,
    React.AriaAttributes {
  label?: string;
  hasError?: boolean;
  helperText?: string;
  optional?: boolean;
}

const TextAreaInput: React.ForwardRefRenderFunction<
  HTMLTextAreaElement,
  TextAreaInputProps
> = (props, ref) => {
  const { label, className, hasError, helperText, id, optional, ...rest } =
    props;

  return (
    <div>
      <div className='flex flex-col gap-2'>
        {label && (
          <label htmlFor={id} className='semibold-3 text-neutral-12'>
            {label}
            {optional && (
              <span className='text-neutral-11 ml-0.5'>{`(Optional)`}</span>
            )}
          </label>
        )}
        <textarea
          ref={ref}
          className={clsx(
            'relative placeholder:text-[14px] placeholder:leading-5  hover:bg-panel-3 bg-panel-1 form-input h-[92px] rounded-[10px] flex items-center p-3 gap-2 text-[14px] leading-5 border border-neutral-alpha-6 placeholder-neutral-alpha-11 focus:input-focus-default  text-neutral-alpha-12',
            hasError ? '!input-focus-danger focus:!input-focus-danger' : '',
            className
          )}
          id={id}
          {...rest}
        />
        {helperText && (
          <div className='flex items-start gap-1'>
            {hasError && <WarningIcon className='w-4 h-4 text-danger-9' />}
            <span
              className={clsx(
                'block regular-2',
                hasError ? 'text-danger-11' : 'text-neutral-11'
              )}
            >
              {helperText}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default forwardRef(TextAreaInput);
