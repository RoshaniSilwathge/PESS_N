import React from "react";
import Button from "@material-ui/core/Button";
import { bindActionCreators } from "redux";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import RFTextField from "../../fields/RFTextField";
import RTSelectField from "../../fields/RTSelectField";
import { required, selectRequired } from "../../../../util/Validations";
import { loadActiveProjects } from "../../../../actions/Projects";
import { saveAlert, updateAlert } from "../../../../actions/Alerts";

class AnnouncementForm extends React.Component {
  onSubmit(values) {
    if (this.props.mode === "CREATE") this.props.actions.saveAlert(values);
    else this.props.actions.updateAlert(this.props.alertId, values);
  }

  componentDidMount() {
    this.props.actions.loadActiveProjects();
  }

  render() {
    const { handleSubmit, submitting } = this.props;
    return (
      <form
        className="row"
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit(this.onSubmit.bind(this))}
      >
        <div className="col-md-4 col-12">
          <Field
            component={RFTextField}
            label="Title"
            name="title"
            validate={[required]}
          />
        </div>
        <div className="col-md-4 col-12">
          <Field
            component={RFTextField}
            label="Message"
            name="message"
            validate={[required]}
          />
        </div>
        <div className="col-md-4">
          <Field
            component={RTSelectField}
            label="Project"
            name="projectId"
            options={this.props.projects}
            validate={[selectRequired]}
          />
        </div>
        <div className="col-md-4 col-12">
          <Button
            type="submit"
            disabled={submitting}
            size="small"
            variant="contained"
            className="jr-btn bg-blue text-white project-btn"
          >
            {this.props.mode === "CREATE" ? "Create" : "Update"}
          </Button>
        </div>
      </form>
    );
  }
}

const announcementForm = reduxForm({
  form: "pc-new-announcement-form"
})(AnnouncementForm);

const mapStateToProps = state => {
  return {
    projects: [
      { label: "Select a Project", value: "default" },
      ...state.projects.activeProjects.map(project => {
        return { label: project.name, value: project.id };
      })
    ],
    alertId: state.alerts.selectedAlert ? state.alerts.selectedAlert.id : "",
    initialValues: {
      title: state.alerts.selectedAlert ? state.alerts.selectedAlert.title : "",
      message: state.alerts.selectedAlert
        ? state.alerts.selectedAlert.message
        : "",
      alertType: state.alerts.selectedAlert
        ? state.alerts.selectedAlert.alertType
        : "ANNOUNCEMENTS",
      projectId: state.alerts.selectedAlert
        ? state.alerts.selectedAlert.projectId
        : "default"
    }
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(
      {
        saveAlert,
        updateAlert,
        loadActiveProjects
      },
      dispatch
    )
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(announcementForm);
