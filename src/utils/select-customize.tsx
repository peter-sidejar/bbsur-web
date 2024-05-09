import { CSSProperties } from 'react';

import {
  ControlProps,
  DropdownIndicatorProps,
  OptionProps,
} from 'react-select';
import ChevronUpIcon from '@/components/ui/svg/icons/ChevronUpIcon';
import ChevronDownIcon from '@/components/ui/svg/icons/ChevronDownIcon';

export function getSelectThemeColors() {
  const lightThemeColors = {
    'neutral-alpha-12': '#000509e3',
    'neutral-alpha-11': '#0007139f',
    'panel-1': '#ffffff',
    'panel-3': '#f9f9fb',
    'neutral-alpha-6': '#01012e22',
    'neutral-12': 'rgb(31, 35, 39)',
    'neutral-alpha-4': '#02023414',
    'neutral-alpha-3': '#00003b0d',
    'neutral-alpha-5': '#0000301b',
    'danger-9': 'rgb(229, 72, 77)',
    'danger-alpha-4': '#ff00001a',
  };

  const darkThemeColors = {
    'neutral-alpha-12': '#fcfcfcf0',
    'neutral-alpha-11': '#fcfcfcb2',
    'panel-1': '#000000',
    'panel-3': '#0f0f0f',
    'neutral-alpha-6': '#f2f2f22b',
    'neutral-12': 'rgb(238, 238, 238)',
    'neutral-alpha-4': '#ffffff1c',
    'neutral-alpha-3': '#e5e5e51a',
    'neutral-alpha-5': '#ffffff21',
    'danger-9': 'rgb(229, 72, 77)',
    'danger-alpha-4': '#f8596d4a',
  };

  return lightThemeColors;
}

export default function getSelectStyles(hasError = false): any {
  const colors = getSelectThemeColors();

  return {
    singleValue: (baseStyles: CSSProperties) => ({
      ...baseStyles,
      color: colors['neutral-alpha-12'],
      fontSize: '14px',
      lineHeight: '20px',
      fontWeight: 400,
    }),
    valueContainer: (baseStyles: CSSProperties) => ({
      ...baseStyles,
      padding: '0px',
    }),
    placeholder: (baseStyles: CSSProperties, state: any) => ({
      ...baseStyles,
      fontSize: '14px',
      lineHeight: '20px',
      padding: '0px',
      color: state.isFocused
        ? colors['neutral-alpha-12']
        : colors['neutral-alpha-11'],
      fontWeight: state.isFocused ? 500 : 400,
    }),
    control: (baseStyles: CSSProperties, state: ControlProps<{}>) => ({
      ...baseStyles,
      height: '48px',
      borderRadius: '10px',
      background: colors['panel-1'],
      '&:hover': {
        background: state.isFocused ? colors['panel-1'] : colors['panel-3'],
      },
      padding: '0 12px',
      borderColor: hasError
        ? colors['danger-9']
        : state.isFocused
        ? colors['neutral-12']
        : colors['neutral-alpha-6'],
      boxShadow: hasError
        ? `0px 0px 0px 2px ${colors['danger-alpha-4']}`
        : state.isFocused
        ? `0px 0px 0px 2px ${colors['neutral-alpha-4']}`
        : 'none',
    }),
    option: (base: CSSProperties, state: OptionProps<{}>) => ({
      ...base,
      marginTop: '4px',
      display: 'flex',
      alignItems: 'center',
      height: '32px',
      fontSize: '14px',
      lineHeight: '20px',
      fontWeight: 500,
      borderRadius: '6px',
      color: colors['neutral-12'],
      background: state.isSelected ? colors['neutral-alpha-3'] : 'none',
      '&:hover': {
        background: colors['neutral-alpha-3'],
      },
    }),
    menu: (baseStyles: CSSProperties) => ({
      ...baseStyles,
      background: colors['panel-1'],
      padding: '8px',
      paddingTop: '4px',
      marginTop: '8px',
      border: `1px solid ${colors['neutral-alpha-5']}`,
      borderRadius: '16px',
      boxShadow:
        '0px 10px 10px 0px rgba(0, 0, 0, 0.04), 0px 20px 25px -5px rgba(0, 0, 0, 0.10)',
    }),
  };
}

export function getSelectComponents(hovered = false) {
  const colors = getSelectThemeColors();
  return {
    IndicatorSeparator: () => null,
    DropdownIndicator: (data: DropdownIndicatorProps) => {
      return (
        <div
          className={
            'flex items-center justify-center w-6 h-6 rounded-[4px] text-neutral-12'
          }
          style={{
            borderRadius: '4px',
            background:
              data.isFocused || hovered ? colors['neutral-alpha-3'] : 'none',
            color: colors['neutral-12'],
          }}
        >
          {data.isFocused ? <ChevronUpIcon /> : <ChevronDownIcon />}
        </div>
      );
    },
  };
}
