import { 
  Select, 
} from '@mui/material';

function CustomSelect({
  children,
  value,
  onChange,
  required,

  // TODO: check what this is for
  labelId,
  id
}){

  return (
    <Select
      value={value}
      onChange={onChange}
      required={required}
      labelId={labelId}
      id={id}
      sx={{
        '& .MuiInputBase-input': {
          padding: '4px 14px'
        }
      }}
    >
      {children}
    </Select>
  )

}

export default CustomSelect;