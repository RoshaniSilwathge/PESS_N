import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import AnnouncementItem from "../../../components/pc/announcements/AnnouncementItem";
import {
  searchKeyChanged,
  projectSearchKeyChanged,
  alertSelected,
  loadAlerts
} from "../../../../actions/Alerts";
import { loadActiveProjects } from "../../../../actions/Projects";
import Banner from "../../../components/Banner";
import { withRouter } from "react-router-dom";

class AnnouncementsPage extends React.Component {
  handleSearchKey(e) {
    this.props.actions.searchKeyChanged(e.target.value);
  }

  handleProjectSearchKey(e) {
    this.props.actions.projectSearchKeyChanged(e.target.value);
  }

  componentDidMount() {
    this.props.actions.loadAlerts();
    this.props.actions.loadActiveProjects();
  }

  selectAlert(alertId) {
    this.props.actions.alertSelected(alertId);
    this.props.history.push(`/app/project-coordinator/announcements/${alertId}/edit`);
  }

  render() {
    return (
      <div className="app-wrapper">
        <div className="row">
          <div className="col-md-6">
          <Link to="/app/project-coordinator/announcements/new">
              <Button
                size="small"
                variant="contained"
                className="jr-btn bg-blue text-white project-btn"
              >
                New Announcement
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
              id="alert-search"
              label="Search by Title"
              value={this.props.searchKey}
              onChange={e => this.handleSearchKey(e)}
              margin="normal"
              fullWidth
            />
          </div>
        </div>
        <div className="row project-wrapper">
          {this.props.alerts.length === 0 && (
            <Banner msg="No Announcement Found !!" />
          )}
          {this.props.alerts.map(alert => (
            <AnnouncementItem
              key={`alert-${alert.id}`}
              alert={alert}
              selectAlert={this.selectAlert.bind(this)}
            />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { searchKey, alerts, searchKeyProject } = state.alerts;
  return {
    searchKey,
    projects : state.projects.activeProjects,
    searchKeyProject,
    alerts: alerts.filter(alert =>
      searchKeyProject === "default"
        ? alert.title.includes(searchKey)
        : alert.title.includes(searchKey) &&
        alert.projectId === searchKeyProject
    )
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(
      {
        searchKeyChanged,
        loadActiveProjects,
        projectSearchKeyChanged,
        alertSelected,
        loadAlerts
      },
      dispatch
    )
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(AnnouncementsPage)
);
