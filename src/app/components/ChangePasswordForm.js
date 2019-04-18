import React from "react";
import Button from "@material-ui/core/Button";
import {bindActionCreators} from 'redux';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import RFPasswordTextField from './fields/RFPasswordField';
import {required} from '../../util/Validations';
import {changePassword} from '../../actions/Auth';
import {decodeAccessToken} from '../../security';

class ChangePasswordForm extends React.Component {

  onSubmit(values) {
    const {id} = decodeAccessToken();
    this.props.actions.changePassword({...values,credentialId: id});
  }

  render() {
    const {handleSubmit, submitting} = this.props;
    return (
      <form className="row" noValidate autoComplete="off" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <div className="col-md-4 col-12">
        <Field component={RFPasswordTextField} label="Current password" name="currentPassword" validate={[required]}/>
        </div>
        <div className="col-md-4 col-12">
        <Field component={RFPasswordTextField} label="New Password" name="newPassword" validate={[required]}/>
        </div>
        <div className="col-md-4 col-12">
        <Button type="submit" disabled={submitting} size="small" variant="contained" className="jr-btn bg-blue text-white project-btn">Change</Button>
        </div>
      </form>
    );
  }
}

const changePasswordForm = reduxForm({
  form: 'change-password-form'
})(ChangePasswordForm);

const mapStateToProps = (state) => {
  return {
    initialValues: {
      currentPassword: '',
      newPassword: ''
    }
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
      actions: bindActionCreators({
        changePassword
      }, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(changePasswordForm);
