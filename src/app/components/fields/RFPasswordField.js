import React from "react";
import TextField from "@material-ui/core/TextField";

const RFPasswordField = ({ input, label, meta: { touched, error } }) => {
  return (
    <TextField
      error={touched && (error && error.length !== 0)}
      type="password"
      label={label}
      name
      {...input}
      margin="normal"
      fullWidth
    />
  );
};

export default RFPasswordField;
