import React from "react";
import Button from "@material-ui/core/Button";
import { Build } from "@material-ui/icons";

class AnnouncementItem extends React.Component {
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
          <h3 className="mt-0">{this.props.alert.title}</h3>
          <h4 className="mt-0">{this.props.alert.projectName}</h4>
          <p className="card-text" />
          <div className="comment-footer project-item-actions">
            <Button
              size="small"
              variant="contained"
              className="jr-btn bg-purple text-white project-item-action-btn"
              onClick={() => this.props.selectAlert(this.props.alert.id)}
            >
              <Build />
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default AnnouncementItem;
