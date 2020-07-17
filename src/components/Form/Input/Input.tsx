import React from 'react';
import { FormControl, InputLabel, Input as InputMUI, FormHelperText } from '@material-ui/core';

interface InputProps {
  label: string
  name: string
}

const Input: React.FC<InputProps> = ({ label, name, ...props }) => {
  return (
    <FormControl className="Input">
      <InputLabel shrink 
                  htmlFor={name}>
        {label}
      </InputLabel>
      <InputMUI id={name} 
                name={name} 
                disableUnderline  
                aria-describedby={`${name}-helper`}
                {...props} />
      <FormHelperText id={`${name}-helper`}>TODO</FormHelperText>
    </FormControl>
  );
}

export default Input;