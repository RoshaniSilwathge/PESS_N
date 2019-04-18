import React from "react";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";

const RFSelectField = ({ input, label,options, meta: { touched, error } }) => {
  return (
    <TextField
      select
      error={touched && (error && error.length !== 0)}
      label={label}
      name
      {...input}
      margin="normal"
      fullWidth
      helperText={touched && (error && error.length !== 0) ? error : ''} 
    >
      {options.map(option => (
        <MenuItem value={option.value}>{option.label}</MenuItem>
      ))}
    </TextField>
  );
};

export default RFSelectField;
