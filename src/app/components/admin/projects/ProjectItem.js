import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { Lock, Build } from "@material-ui/icons";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

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
            <Button
              size="small"
              variant="contained"
              className="jr-btn bg-deep-purple text-white"
              onClick={() => this.setState({ open: true })}
            >
              <Lock />
            </Button>
          </div>
        </div>
        <Dialog open={this.state.open} onClose={this.handleRequestClose}>
          <DialogTitle>
            {"Are you sure you want to disable this project?"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              If you Disable this Project, all the Student accounts enrolled
              will be diable.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleRequestClose} color="secondary">
              Disagree
            </Button>
            <Button onClick={this.handleRequestClose} color="primary">
              Agree
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default ProjectItem;
