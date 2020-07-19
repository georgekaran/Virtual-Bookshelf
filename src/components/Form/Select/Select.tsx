import React from 'react';
import { Controller, UseFormMethods } from 'react-hook-form';
import { FormControl, InputLabel, Select as SelectMUI, FormHelperText, MenuItem } from '@material-ui/core';
import isEmpty from 'lodash/isEmpty';

import { Option } from '../../../protocols';

interface SelectProps {
  options: Option[];
  label: string;
  name: string;
  form: UseFormMethods;
  defaultValue?: any
  [T: string]: any;
}

const Select: React.FC<SelectProps> = ({ label, name, options, form, defaultValue, ...props }) => {
  const { control, errors } = form;

  return (
    <FormControl className="Select">
      <InputLabel shrink id={`${name}-label`}>
        {label}
      </InputLabel>
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        render={controllerProps => (
          <SelectMUI
            labelId={`${name}-label`}
            disableUnderline
            aria-describedby={`${name}-helper`}
            {...props}
            {...controllerProps}
          >
            {options.map((option: Option, idx) => (
              <MenuItem key={idx} value={option.value}>{option.label}</MenuItem>
            ))}
          </SelectMUI>
        )}
      />
      {!isEmpty(errors[name]) && (
        <FormHelperText error id={`${name}-helper`}>{errors[name].message}</FormHelperText>
      )}
    </FormControl>
  );
};

export default Select;
