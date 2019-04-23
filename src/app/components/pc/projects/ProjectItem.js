import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { Build } from "@material-ui/icons";

class ProjectItem extends React.Component {
  state = {
    open: false
  };

  handleRequestClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div className="media media-list project-item-wrapper">
        <div className="media-body">
          <h3 className="mt-0">{this.props.project.name}</h3>
          <h4 className="mt-0">Starts At : </h4>
          <h4 className="mt-0">{this.props.project.startsAt.replace('T', ' / ')}</h4>
          <h4 className="mt-0">Ends At : </h4>
          <h4 className="mt-0">{this.props.project.endsAt.replace('T', ' / ')}</h4>
          <p className="card-text" />
          <div className="comment-footer project-item-actions">
            <Button
                size="small"
                variant="contained"
                className="jr-btn bg-purple text-white project-item-action-btn"
                onClick={() => this.props.selectProject(this.props.project.id)}
              >
                <Build />
              </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectItem;
