import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ProjectItem from '../../../components/pc/projects/ProjectItem';
import TextField from '@material-ui/core/TextField';
import {searchKeyChanged, activeProjectSelected, loadActiveProjects,loadProjectSubmissions} from '../../../../actions/Projects';
import { withRouter } from 'react-router-dom';
import Banner from '../../../components/Banner';

class ProjectsPage extends React.Component {

  handleSearchKey(e){
    this.props.actions.searchKeyChanged(e.target.value);
  }

  componentDidMount(){
    this.props.actions.loadActiveProjects();
  }

  selectProject(projectId){
    this.props.actions.activeProjectSelected(projectId);
    this.props.actions.loadProjectSubmissions(projectId);
    setTimeout(()=>{
      this.props.history.push(`/app/project-coordinator/projects/${projectId}/schedule`);
    },2000);
  }

  render() {
    return (
      <div className="app-wrapper">
        <div className="row">
          <div className="col-md-9">
          </div>
          <div className="col-md-3">
            <TextField
              id="project-search"
              label="Search Project by Name"
              value={this.props.searchKey}
              onChange={(e) => this.handleSearchKey(e)}
              margin="normal"
              fullWidth
            />
          </div>
        </div>
        <div className="row project-wrapper">
        {this.props.projects.length === 0 && (
            <Banner msg="No Projects Found !!"/>
          )}
        {
          this.props.projects.map(project => <ProjectItem key={`project-${project.id}`} project={project} selectProject={this.selectProject.bind(this)}/>)
        }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const {searchKey, activeProjects} = state.projects;
  return {searchKey, projects: activeProjects.filter(project=>project.name.includes(searchKey))}
};

const mapDispatchToProps = (dispatch) => {
  return {
      actions: bindActionCreators({
        searchKeyChanged,
        activeProjectSelected,
        loadActiveProjects,
        loadProjectSubmissions
      }, dispatch)
  };
};

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(ProjectsPage));