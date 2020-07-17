import React from 'react';
import { Controller, UseFormMethods } from 'react-hook-form';
import { FormControl, InputLabel, Input as InputMUI, FormHelperText } from '@material-ui/core';
import isEmpty from 'lodash/isEmpty'

interface InputProps {
  label: string;
  name: string;
  form: UseFormMethods;
}

const Input: React.FC<InputProps> = ({ label, name, form, ...props }) => {
  const { control, errors } = form;

  return (
    <FormControl className="Input">
      <InputLabel shrink htmlFor={name}>
        {label}
      </InputLabel>
      <Controller
        name={name}
        control={control}
        as={<InputMUI id={name} 
                      disableUnderline 
                      aria-describedby={`${name}-helper`} 
                      {...props} />}
      />
      {!isEmpty(errors[name]) && (
        <FormHelperText error id={`${name}-helper`}>{errors[name].message}</FormHelperText>
      )}
    </FormControl>
  );
};

export default Input;
