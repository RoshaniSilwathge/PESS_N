import React from "react";
import Button from "@material-ui/core/Button";
import {bindActionCreators} from 'redux';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import RFTextField from '../../fields/RFTextField';
import RTSelectField from '../../fields/RTSelectField';
import {required,selectRequired,email,telephone} from '../../../../util/Validations';
import {loadActiveProjects} from '../../../../actions/Projects';
import {saveStudent,updateStudent} from '../../../../actions/Student';

class StudentForm extends React.Component {

  onSubmit(values) {
     if(this.props.mode === "CREATE")
      this.props.actions.saveStudent(values);
     else
      this.props.actions.updateStudent(this.props.studentId, values);
  }

  componentDidMount(){
      this.props.actions.loadActiveProjects();
  }

  render() {
    const {handleSubmit, submitting} = this.props;
    return (
      <form className="row" noValidate autoComplete="off" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <div className="col-md-4 col-12">
        <Field component={RFTextField} label="Initials" name="initials" validate={[required]}/>
        </div>
        <div className="col-md-4 col-12">
        <Field component={RFTextField} label="Surname" name="surname" validate={[required]}/>
        </div>
        <div className="col-md-4 col-12">
        <Field component={RFTextField} label="Full Name" name="fullName" validate={[required]}/>
        </div>
        <div className="col-md-4 col-12">
        <Field component={RFTextField} label="Email" name="email" validate={[required,email]}/>
        </div>
        <div className="col-md-4 col-12">
        <Field component={RFTextField} label="Telephone" name="telephone" validate={[required,telephone]}/>
        </div>
        <div className="col-md-4 col-12">
        <Field component={RFTextField} label="NIC" name="nic" validate={[required]}/>
        </div>
        {
        this.props.mode === "CREATE" && <div className="col-md-4 col-12">
        <Field component={RFTextField} label="Index No" name="indexNo" validate={[required]}/>
        </div>
        }
        <div className="col-md-4 col-12">
        <Field component={RFTextField} label="Reg No" name="regNo" validate={[required]}/>
        </div>
        <div className="col-md-4">
        <Field component={RTSelectField} label="Project" name="projectId" options={this.props.projects} validate={[selectRequired]}/>
        </div>
        <div className="col-md-4 col-12">
        <Button type="submit" disabled={submitting} size="small" variant="contained" className="jr-btn bg-blue text-white project-btn">{this.props.mode === "CREATE"? "Create" : "Update"}</Button>
        </div>
      </form>
    );
  }
}

const studentForm = reduxForm({
  form: 'admin-new-student-form'
})(StudentForm);

const mapStateToProps = (state) => {
  return {
    projects: [{label:'Select a Project',value:'default'},...state.projects.activeProjects.map(project=> {return {label:project.name, value: project.id}})],
    studentId: state.students.selectedStudent ? state.students.selectedStudent.id : '',
    initialValues: {
        initials: state.students.selectedStudent ? state.students.selectedStudent.initials : '',
        surname: state.students.selectedStudent ? state.students.selectedStudent.surname : '',
        fullName: state.students.selectedStudent ? state.students.selectedStudent.fullName : '',
        email: state.students.selectedStudent ? state.students.selectedStudent.email : '',
        telephone: state.students.selectedStudent ? state.students.selectedStudent.telephone : '',
        nic: state.students.selectedStudent ? state.students.selectedStudent.nic : '',
        indexNo: state.students.selectedStudent ? state.students.selectedStudent.indexNo : '',
        regNo: state.students.selectedStudent ? state.students.selectedStudent.regNo : '',
        projectId: state.students.selectedStudent ? state.students.selectedStudent.projectId : 'default'
    }
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
      actions: bindActionCreators({
        saveStudent,
        updateStudent,
        loadActiveProjects
      }, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(studentForm);
