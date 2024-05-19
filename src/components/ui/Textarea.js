import { 
  TextField, 
} from '@mui/material';


function Textarea({
  value, 
  onChange, 
  placeholder, 
  required, 
  rows=2,
  maxRows=4,
  ...rest
}){

  return (
    <TextField 
      placeholder={placeholder}
      value={value} 
      onChange={onChange} 
      required={required}
      multiline
      rows={rows}
      maxRows={maxRows}
      {...rest}
    />
  );

}

export default Textarea;