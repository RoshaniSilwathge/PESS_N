import React from "react";
import Button from "@material-ui/core/Button";
import {bindActionCreators} from 'redux';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import RFTextField from '../../fields/RFTextField';
import RFDateTimeField from '../../fields/RFDateTimeField';
import {required} from '../../../../util/Validations';
import {saveProject,updateProject} from '../../../../actions/Projects';
import moment from 'moment';

class ProjectForm extends React.Component {

  onSubmit(values) {
     let {name,startsAt,endsAt} = values;
     startsAt = moment(startsAt).format('YYYY-MM-DDTHH:mm:ss');
     endsAt=new moment(endsAt).format('YYYY-MM-DDTHH:mm:ss');
     if(this.props.mode === "CREATE")
      this.props.actions.saveProject({name, startsAt,endsAt});
     else
      this.props.actions.updateProject(this.props.projectId, {name, startsAt,endsAt});
  }

  render() {
    const {handleSubmit, submitting} = this.props;
    return (
      <form className="row" noValidate autoComplete="off" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <div className="col-md-4 col-12">
        <Field component={RFTextField} label="Name" name="name" validate={[required]}/>
        </div>
        <div className="col-md-4 col-12">
        <Field component={RFDateTimeField} label="Starts At" name="startsAt" validate={[required]}/>
        </div>
        <div className="col-md-4 col-12">
        <Field component={RFDateTimeField} label="Ends At" name="endsAt" validate={[required]}/>
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
    projectId: state.projects.selectedProject ? state.projects.selectedProject.id : '',
    initialValues: {
      name: state.projects.selectedProject ? state.projects.selectedProject.name : '',
      startsAt: state.projects.selectedProject ? state.projects.selectedProject.startsAt : new Date(),
      endsAt: state.projects.selectedProject ? state.projects.selectedProject.endsAt : new Date()
    }
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
      actions: bindActionCreators({
        saveProject,
        updateProject
      }, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(projectForm);
