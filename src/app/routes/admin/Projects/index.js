import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Button from '@material-ui/core/Button';
import ProjectItem from '../../../components/admin/projects/ProjectItem';
import TextField from '@material-ui/core/TextField';
import {searchKeyChanged, projectSelected} from '../../../../actions/admin/Projects';
import { withRouter } from 'react-router-dom';

class ProjectsPage extends React.Component {

  handleSearchKey(e){
    this.props.actions.searchKeyChanged(e.target.value);
  }

  selectProject(projectId){
    this.props.actions.projectSelected(projectId);
    this.props.history.push(`/app/admin/projects/${projectId}/edit`);
  }

  render() {
    return (
      <div className="app-wrapper">
        <div className="row">
          <div className="col-md-9">
            <Link to="/app/admin/projects/new">
              <Button size="small" variant="contained" className="jr-btn bg-blue text-white project-btn">New Project</Button>
            </Link>
          </div>
          <div className="col-md-3">
            <TextField
              id="project-search"
              label="Search Project"
              value={this.props.searchKey}
              onChange={(e) => this.handleSearchKey(e)}
              margin="normal"
              fullWidth
            />
          </div>
        </div>
        <div className="row project-wrapper">
        {
          this.props.projects.map(project => <ProjectItem key={`project-${project.id}`} project={project} selectProject={this.selectProject.bind(this)}/>)
        }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const {searchKey, projects} = state.projects;
  return {searchKey, projects: projects.filter(project=>project.name.includes(searchKey))}
};

const mapDispatchToProps = (dispatch) => {
  return {
      actions: bindActionCreators({
        searchKeyChanged,
        projectSelected
      }, dispatch)
  };
};

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(ProjectsPage));