import React, { useState, forwardRef } from 'react';
import clsx from 'classnames';
import WarningIcon from './svg/icons/WarningIcon';
import ReactSelect from 'react-select';
import getSelectStyles, { getSelectComponents } from '@/utils/select-customize';

export type OptionType = { value: string; label: string };
export interface SelectInputProps
  extends React.DetailedHTMLProps<
      React.SelectHTMLAttributes<HTMLSelectElement>,
      HTMLSelectElement
    >,
    React.AriaAttributes {
  label?: string;
  hasError?: boolean;
  helperText?: string;
  optional?: boolean;
  placeholder?: string;
  options: OptionType[];
  value: any;
  onChange?: (option: any) => void;
}

const SelectInput: React.ForwardRefRenderFunction<any, SelectInputProps> = (
  props,
  ref
) => {
  const {
    label,
    className,
    hasError,
    helperText,
    id,
    optional,
    placeholder,
    options,
    disabled,
    ...rest
  } = props;

  const [hovered, setHovered] = useState(false);

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
        <div
          onMouseOver={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <ReactSelect
            ref={ref as any}
            className={clsx('group', className)}
            styles={getSelectStyles(hasError)}
            placeholder={placeholder}
            components={getSelectComponents(hovered)}
            instanceId={id}
            options={options}
            isDisabled={disabled}
            {...(rest as any)}
          />
        </div>

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

export default forwardRef(SelectInput);
