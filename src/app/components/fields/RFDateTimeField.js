import React from "react";
import {DateTimePicker} from 'material-ui-pickers';

const RFDateTimeField = ({ input, label, meta: { touched, error } }) => {
  return (
    <div key="datetime_default" className="picker">
        <DateTimePicker
          fullWidth
          error={touched && (error && error.length !== 0)}
          label={label}
          name
          showTabs={false}
          {...input}
          margin="normal"
          leftArrowIcon={<i className="zmdi zmdi-arrow-back"/>}
          rightArrowIcon={<i className="zmdi zmdi-arrow-forward"/>}
          helperText={touched && (error && error.length !== 0) ? error : ''} 
        />
      </div>
  );
};

export default RFDateTimeField;
