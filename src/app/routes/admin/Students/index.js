import React from "react";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import StudentItem from "../../../components/admin/students/StudentItem";
import {
  searchKeyChanged,
  loadStudents,
  projectSearchKeyChanged,
  studentSelected
} from "../../../../actions/Student";
import { loadProjects } from "../../../../actions/Projects";
import Banner from "../../../components/Banner";
import { withRouter } from "react-router-dom";

class StudentsPage extends React.Component {
  handleSearchKey(e) {
    this.props.actions.searchKeyChanged(e.target.value);
  }

  handleProjectSearchKey(e) {
    this.props.actions.projectSearchKeyChanged(e.target.value);
  }

  componentDidMount() {
    this.props.actions.loadStudents();
    this.props.actions.loadProjects();
  }

  selectStudent(studentId) {
    this.props.actions.studentSelected(studentId);
    this.props.history.push(`/app/admin/students/${studentId}/edit`);
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
              value={this.props.searchKeyProject}
              onChange={e => this.handleProjectSearchKey(e)}
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
              label="Search Student by Index No"
              value={this.props.searchKey}
              onChange={e => this.handleSearchKey(e)}
              margin="normal"
              fullWidth
            />
          </div>
        </div>
        <div className="row project-wrapper">
          {this.props.students.length === 0 && (
            <Banner msg="No Students Found !!" />
          )}
          {this.props.students.map(student => (
            <StudentItem
              key={`student-${student.id}`}
              student={student}
              selectStudent={this.selectStudent.bind(this)}
            />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { searchKey, students, searchKeyProject } = state.students;
  const { projects } = state.projects;
  return {
    searchKey,
    projects,
    searchKeyProject,
    students: students.filter(student =>
      searchKeyProject === "default"
        ? student.indexNo.includes(searchKey)
        : student.indexNo.includes(searchKey) &&
          student.projectId === searchKeyProject
    )
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(
      {
        searchKeyChanged,
        loadStudents,
        loadProjects,
        projectSearchKeyChanged,
        studentSelected
      },
      dispatch
    )
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(StudentsPage)
);
