import React from "react";
import Button from "@material-ui/core/Button";
import { Build } from "@material-ui/icons";

class StudentItem extends React.Component {
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
          <h3 className="mt-0">{this.props.student.fullName}</h3>
          <h4 className="mt-0">{this.props.student.email}</h4>
          <h4 className="mt-0">{this.props.student.telephone}</h4>
          <h4 className="mt-0">{this.props.student.regNo}</h4>
          <h4 className="mt-0">{this.props.student.indexNo}</h4>
          <h4 className="mt-0">{this.props.student.projectName}</h4>
          <p className="card-text" />
          <div className="comment-footer project-item-actions">
          <Button
                size="small"
                variant="contained"
                className="jr-btn bg-purple text-white project-item-action-btn"
                onClick={() => this.props.selectStudent(this.props.student.id)}
              >
                <Build />
              </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default StudentItem;
