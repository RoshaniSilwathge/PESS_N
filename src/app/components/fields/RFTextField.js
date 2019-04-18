import React from "react";
import TextField from "@material-ui/core/TextField";

const RFTextField = ({ input, label, meta: { touched, error } }) => {
  return (
    <TextField
      error={touched && (error && error.length !== 0)}
      label={label}
      name
      {...input}
      margin="normal"
      fullWidth
      helperText={touched && (error && error.length !== 0) ? error : ''} 
    />
  );
};

export default RFTextField;
