import React from "react";
import Button from "@material-ui/core/Button";
import {bindActionCreators} from 'redux';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import RFTextField from '../../fields/RFTextField';
import {required} from '../../../../util/Validations';

class ProjectForm extends React.Component {

  onSubmit(values) {
    console.log(values)
  }

  render() {
    const {handleSubmit, submitting} = this.props;
    return (
      <form className="row" noValidate autoComplete="off" onSubmit={handleSubmit(this.onSubmit)}>
        <div className="col-md-4 col-12">
        <Field component={RFTextField} label="Name" name="name" validate={[required]}/>
        </div>
        <div className="col-md-4 col-12">
        <Button type="submit" disabled={submitting} size="small" variant="contained" className="jr-btn bg-blue text-white project-btn">{this.props.mode === "CREATE"? "Create" : "Update"}</Button>
        </div>
      </form>
    );
  }
}

const projectForm = reduxForm({
  form: 'admin-new-project-form'
})(ProjectForm);

const mapStateToProps = (state) => {
  return {
    initialValues: {
      name: state.projects.selectedProject ? state.projects.selectedProject.name : ''
    }
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
      actions: bindActionCreators({
          
      }, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(projectForm);
