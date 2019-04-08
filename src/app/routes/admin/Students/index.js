import React from "react";
import {Link} from 'react-router-dom';
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import StudentItem from '../../../components/admin/students/StudentItem';
import {searchKeyChanged} from '../../../../actions/admin/Student';

class StudentsPage extends React.Component {

  handleSearchKey(e){
    this.props.actions.searchKeyChanged(e.target.value);
  }

  render() {
    return (
      <div className="app-wrapper">
        <div className="row">
          <div className="col-md-6">
            <Link to="/app/admin/students/new">
              <Button
                size="small"
                variant="contained"
                className="jr-btn bg-blue text-white project-btn"
              >
                New Student
              </Button>
            </Link>
          </div>
          <div className="col-md-3">
            <TextField
              id="select-project"
              select
              label="Select Project"
              value="default"
              /*vonChange={this.handleChange('currency')}*/
              SelectProps={{}}
              margin="normal"
              fullWidth
            >
              <MenuItem key={-1} value="default">
                  All Projects
              </MenuItem>
              {this.props.projects.map(project => (
                <MenuItem key={project.id} value={project.id}>
                  {project.name}
                </MenuItem>
              ))}
            </TextField>
          </div>
          <div className="col-md-3">
            <TextField
              id="student-search"
              label="Search Student"
              value={this.props.searchKey}
              onChange={e => this.handleSearchKey(e)}
              margin="normal"
              fullWidth
            />
          </div>
        </div>
        <div className="row project-wrapper">
        {
          this.props.students.map(student => <StudentItem key={`student-${student.id}`} student={student}/>)
        }
        </div>

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const {searchKey, students} = state.students;
  const {projects} = state.projects;
  return {searchKey, projects,students: students.filter(student=>student.name.includes(searchKey))}
};

const mapDispatchToProps = (dispatch) => {
  return {
      actions: bindActionCreators({
        searchKeyChanged
      }, dispatch)
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(StudentsPage);
