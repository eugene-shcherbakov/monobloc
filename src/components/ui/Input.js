import React from 'react';

import {
  TextField,
} from '@mui/material';


function Input({value, onChange, placeholder, required, ...rest}){

  return (
    <TextField 
      value={value} 
      onChange={onChange} 
      required={required}

      sx={{
        '& .MuiInputBase-input': {
          padding: '4px 14px'
        },
        ...rest.sx
      }}

      {...rest}

    />
  );

}

export default Input;