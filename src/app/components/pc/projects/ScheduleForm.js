import React from "react";
import Button from "@material-ui/core/Button";
import { bindActionCreators } from "redux";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import RFTextField from "../../fields/RFTextField";
import RFDateTimeField from "../../fields/RFDateTimeField";
import { required } from "../../../../util/Validations";
import {
  saveProjectSubmissions,
  loadProjectSubmissions,
  updateProjectSubmissions
} from "../../../../actions/Projects";
import moment from "moment";

const getSubmission = (submissions, type) => {
  let submission = submissions.find(
    submission => submission.projectSubmissionType === type
  );
  if (submission) return submission;
  return { description: "", startsAt: new Date(), endsAt: new Date() };
};
class ScheduleForm extends React.Component {
  onSubmit(values) {
    let {
      apstartsAt,
      apendsAt,
      spstartsAt,
      spendsAt,
      clstartsAt,
      clendsAt,
      pr1startsAt,
      pr1endsAt,
      pr2startsAt,
      pr2endsAt,
      pr3startsAt,
      pr3endsAt,
      pr4startsAt,
      pr4endsAt,
      pr5startsAt,
      pr5endsAt,
      pr6startsAt,
      pr6endsAt,
      pr7startsAt,
      pr7endsAt,
      pr8startsAt,
      pr8endsAt,
      pr9startsAt,
      pr9endsAt,
      pr10startsAt,
      pr10endsAt,
      intstartsAt,
      intendsAt,
      vivstartsAt,
      vivendsAt
    } = values;
    apstartsAt = moment(apstartsAt).format("YYYY-MM-DDTHH:mm:ss");
    values["apstartsAt"] = apstartsAt;
    apendsAt = moment(apendsAt).format("YYYY-MM-DDTHH:mm:ss");
    values["apendsAt"] = apendsAt;
    spstartsAt = moment(spstartsAt).format("YYYY-MM-DDTHH:mm:ss");
    values["spstartsAt"] = spstartsAt;
    spendsAt = moment(spendsAt).format("YYYY-MM-DDTHH:mm:ss");
    values["spendsAt"] = spendsAt;
    clstartsAt = moment(clstartsAt).format("YYYY-MM-DDTHH:mm:ss");
    values["clstartsAt"] = clstartsAt;
    clendsAt = moment(clendsAt).format("YYYY-MM-DDTHH:mm:ss");
    values["clendsAt"] = clendsAt;
    pr1startsAt = moment(pr1startsAt).format("YYYY-MM-DDTHH:mm:ss");
    values["pr1startsAt"] = pr1startsAt;
    pr1endsAt = moment(pr1endsAt).format("YYYY-MM-DDTHH:mm:ss");
    values["pr1endsAt"] = pr1endsAt;
    pr2startsAt = moment(pr2startsAt).format("YYYY-MM-DDTHH:mm:ss");
    values["pr2startsAt"] = pr2startsAt;
    pr2endsAt = moment(pr2endsAt).format("YYYY-MM-DDTHH:mm:ss");
    values["pr2endsAt"] = pr2endsAt;
    pr3startsAt = moment(pr3startsAt).format("YYYY-MM-DDTHH:mm:ss");
    values["pr3startsAt"] = pr3startsAt;
    pr3endsAt = moment(pr3endsAt).format("YYYY-MM-DDTHH:mm:ss");
    values["pr3endsAt"] = pr3endsAt;
    pr4startsAt = moment(pr4startsAt).format("YYYY-MM-DDTHH:mm:ss");
    values["pr4startsAt"] = pr4startsAt;
    pr4endsAt = moment(pr4endsAt).format("YYYY-MM-DDTHH:mm:ss");
    values["pr4endsAt"] = pr4endsAt;
    pr5startsAt = moment(pr5startsAt).format("YYYY-MM-DDTHH:mm:ss");
    values["pr5startsAt"] = pr5startsAt;
    pr5endsAt = moment(pr5endsAt).format("YYYY-MM-DDTHH:mm:ss");
    values["pr5endsAt"] = pr5endsAt;
    pr6startsAt = moment(pr6startsAt).format("YYYY-MM-DDTHH:mm:ss");
    values["pr6startsAt"] = pr6startsAt;
    pr6endsAt = moment(pr6endsAt).format("YYYY-MM-DDTHH:mm:ss");
    values["pr6endsAt"] = pr6endsAt;
    pr7startsAt = moment(pr7startsAt).format("YYYY-MM-DDTHH:mm:ss");
    values["pr7startsAt"] = pr7startsAt;
    pr7endsAt = moment(pr7endsAt).format("YYYY-MM-DDTHH:mm:ss");
    values["pr7endsAt"] = pr7endsAt;
    pr8startsAt = moment(pr8startsAt).format("YYYY-MM-DDTHH:mm:ss");
    values["pr8startsAt"] = pr8startsAt;
    pr8endsAt = moment(pr8endsAt).format("YYYY-MM-DDTHH:mm:ss");
    values["pr8endsAt"] = pr8endsAt;
    pr9startsAt = moment(pr9startsAt).format("YYYY-MM-DDTHH:mm:ss");
    values["pr9startsAt"] = pr9startsAt;
    pr9endsAt = moment(pr9endsAt).format("YYYY-MM-DDTHH:mm:ss");
    values["pr9endsAt"] = pr9endsAt;
    pr10startsAt = moment(pr10startsAt).format("YYYY-MM-DDTHH:mm:ss");
    values["pr10startsAt"] = pr10startsAt;
    pr10endsAt = moment(pr10endsAt).format("YYYY-MM-DDTHH:mm:ss");
    values["pr10endsAt"] = pr10endsAt;
    intstartsAt = moment(intstartsAt).format("YYYY-MM-DDTHH:mm:ss");
    values["intstartsAt"] = intstartsAt;
    intendsAt = moment(intendsAt).format("YYYY-MM-DDTHH:mm:ss");
    values["intendsAt"] = intendsAt;
    vivstartsAt = moment(vivstartsAt).format("YYYY-MM-DDTHH:mm:ss");
    values["vivstartsAt"] = vivstartsAt;
    vivendsAt = moment(vivendsAt).format("YYYY-MM-DDTHH:mm:ss");
    values["vivendsAt"] = vivendsAt;

    values["projectId"] = this.props.projectId;

    if (this.props.submissions)
      this.props.actions.saveProjectSubmissions(values);
    else
      this.props.actions.updateProjectSubmissions(values);
  }

  componentDidMount() {
    //if(this.props.projectId !== "")
    //  this.props.actions.loadProjectSubmissions(this.props.projectId);
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
        <div className="col-md-12 schedule-input-item">
          <div className="col-md-12">
            <h4>Add Project</h4>
          </div>
          <div className="col-md-12 col-12">
            <Field
              component={RFTextField}
              label="Description"
              name="apdescription"
              validate={[required]}
            />
          </div>
          <div className="col-md-4 col-12">
            <Field
              component={RFDateTimeField}
              label="Starts At"
              name="apstartsAt"
              validate={[required]}
            />
          </div>
          <div className="col-md-4 col-12">
            <Field
              component={RFDateTimeField}
              label="Ends At"
              name="apendsAt"
              validate={[required]}
            />
          </div>
        </div>

        <div className="col-md-12 schedule-input-item">
          <div className="col-md-12">
            <h4>Add Supervisor</h4>
          </div>
          <div className="col-md-12 col-12">
            <Field
              component={RFTextField}
              label="Description"
              name="spdescription"
              validate={[required]}
            />
          </div>
          <div className="col-md-4 col-12">
            <Field
              component={RFDateTimeField}
              label="Starts At"
              name="spstartsAt"
              validate={[required]}
            />
          </div>
          <div className="col-md-4 col-12">
            <Field
              component={RFDateTimeField}
              label="Ends At"
              name="spendsAt"
              validate={[required]}
            />
          </div>
        </div>

        <div className="col-md-12 schedule-input-item">
          <div className="col-md-12">
            <h4>Add Client</h4>
          </div>
          <div className="col-md-12 col-12">
            <Field
              component={RFTextField}
              label="Description"
              name="cldescription"
              validate={[required]}
            />
          </div>
          <div className="col-md-4 col-12">
            <Field
              component={RFDateTimeField}
              label="Starts At"
              name="clstartsAt"
              validate={[required]}
            />
          </div>
          <div className="col-md-4 col-12">
            <Field
              component={RFDateTimeField}
              label="Ends At"
              name="clendsAt"
              validate={[required]}
            />
          </div>
        </div>

        <div className="col-md-12 schedule-input-item">
          <div className="col-md-12">
            <h4>Progress Report 01</h4>
          </div>
          <div className="col-md-12 col-12">
            <Field
              component={RFTextField}
              label="Description"
              name="pr1description"
              validate={[required]}
            />
          </div>
          <div className="col-md-4 col-12">
            <Field
              component={RFDateTimeField}
              label="Starts At"
              name="pr1startsAt"
              validate={[required]}
            />
          </div>
          <div className="col-md-4 col-12">
            <Field
              component={RFDateTimeField}
              label="Ends At"
              name="pr1endsAt"
              validate={[required]}
            />
          </div>
        </div>

        <div className="col-md-12 schedule-input-item">
          <div className="col-md-12">
            <h4>Progress Report 02</h4>
          </div>
          <div className="col-md-12 col-12">
            <Field
              component={RFTextField}
              label="Description"
              name="pr2description"
              validate={[required]}
            />
          </div>
          <div className="col-md-4 col-12">
            <Field
              component={RFDateTimeField}
              label="Starts At"
              name="pr2startsAt"
              validate={[required]}
            />
          </div>
          <div className="col-md-4 col-12">
            <Field
              component={RFDateTimeField}
              label="Ends At"
              name="pr2endsAt"
              validate={[required]}
            />
          </div>
        </div>

        <div className="col-md-12 schedule-input-item">
          <div className="col-md-12">
            <h4>Progress Report 03</h4>
          </div>
          <div className="col-md-12 col-12">
            <Field
              component={RFTextField}
              label="Description"
              name="pr3description"
              validate={[required]}
            />
          </div>
          <div className="col-md-4 col-12">
            <Field
              component={RFDateTimeField}
              label="Starts At"
              name="pr3startsAt"
              validate={[required]}
            />
          </div>
          <div className="col-md-4 col-12">
            <Field
              component={RFDateTimeField}
              label="Ends At"
              name="pr3endsAt"
              validate={[required]}
            />
          </div>
        </div>

        <div className="col-md-12 schedule-input-item">
          <div className="col-md-12">
            <h4>Progress Report 04</h4>
          </div>
          <div className="col-md-12 col-12">
            <Field
              component={RFTextField}
              label="Description"
              name="pr4description"
              validate={[required]}
            />
          </div>
          <div className="col-md-4 col-12">
            <Field
              component={RFDateTimeField}
              label="Starts At"
              name="pr4startsAt"
              validate={[required]}
            />
          </div>
          <div className="col-md-4 col-12">
            <Field
              component={RFDateTimeField}
              label="Ends At"
              name="pr4endsAt"
              validate={[required]}
            />
          </div>
        </div>

        <div className="col-md-12 schedule-input-item">
          <div className="col-md-12">
            <h4>Progress Report 05</h4>
          </div>
          <div className="col-md-12 col-12">
            <Field
              component={RFTextField}
              label="Description"
              name="pr5description"
              validate={[required]}
            />
          </div>
          <div className="col-md-4 col-12">
            <Field
              component={RFDateTimeField}
              label="Starts At"
              name="pr5startsAt"
              validate={[required]}
            />
          </div>
          <div className="col-md-4 col-12">
            <Field
              component={RFDateTimeField}
              label="Ends At"
              name="pr5endsAt"
              validate={[required]}
            />
          </div>
        </div>

        <div className="col-md-12 schedule-input-item">
          <div className="col-md-12">
            <h4>Progress Report 06</h4>
          </div>
          <div className="col-md-12 col-12">
            <Field
              component={RFTextField}
              label="Description"
              name="pr6description"
              validate={[required]}
            />
          </div>
          <div className="col-md-4 col-12">
            <Field
              component={RFDateTimeField}
              label="Starts At"
              name="pr6startsAt"
              validate={[required]}
            />
          </div>
          <div className="col-md-4 col-12">
            <Field
              component={RFDateTimeField}
              label="Ends At"
              name="pr6endsAt"
              validate={[required]}
            />
          </div>
        </div>

        <div className="col-md-12 schedule-input-item">
          <div className="col-md-12">
            <h4>Progress Report 07</h4>
          </div>
          <div className="col-md-12 col-12">
            <Field
              component={RFTextField}
              label="Description"
              name="pr7description"
              validate={[required]}
            />
          </div>
          <div className="col-md-4 col-12">
            <Field
              component={RFDateTimeField}
              label="Starts At"
              name="pr7startsAt"
              validate={[required]}
            />
          </div>
          <div className="col-md-4 col-12">
            <Field
              component={RFDateTimeField}
              label="Ends At"
              name="pr7endsAt"
              validate={[required]}
            />
          </div>
        </div>

        <div className="col-md-12 schedule-input-item">
          <div className="col-md-12">
            <h4>Progress Report 08</h4>
          </div>
          <div className="col-md-12 col-12">
            <Field
              component={RFTextField}
              label="Description"
              name="pr8description"
              validate={[required]}
            />
          </div>
          <div className="col-md-4 col-12">
            <Field
              component={RFDateTimeField}
              label="Starts At"
              name="pr8startsAt"
              validate={[required]}
            />
          </div>
          <div className="col-md-4 col-12">
            <Field
              component={RFDateTimeField}
              label="Ends At"
              name="pr8endsAt"
              validate={[required]}
            />
          </div>
        </div>

        <div className="col-md-12 schedule-input-item">
          <div className="col-md-12">
            <h4>Progress Report 09</h4>
          </div>
          <div className="col-md-12 col-12">
            <Field
              component={RFTextField}
              label="Description"
              name="pr9description"
              validate={[required]}
            />
          </div>
          <div className="col-md-4 col-12">
            <Field
              component={RFDateTimeField}
              label="Starts At"
              name="pr9startsAt"
              validate={[required]}
            />
          </div>
          <div className="col-md-4 col-12">
            <Field
              component={RFDateTimeField}
              label="Ends At"
              name="pr9endsAt"
              validate={[required]}
            />
          </div>
        </div>

        <div className="col-md-12 schedule-input-item">
          <div className="col-md-12">
            <h4>Progress Report 10</h4>
          </div>
          <div className="col-md-12 col-12">
            <Field
              component={RFTextField}
              label="Description"
              name="pr10description"
              validate={[required]}
            />
          </div>
          <div className="col-md-4 col-12">
            <Field
              component={RFDateTimeField}
              label="Starts At"
              name="pr10startsAt"
              validate={[required]}
            />
          </div>
          <div className="col-md-4 col-12">
            <Field
              component={RFDateTimeField}
              label="Ends At"
              name="pr10endsAt"
              validate={[required]}
            />
          </div>
        </div>

        <div className="col-md-12 schedule-input-item">
          <div className="col-md-12">
            <h4>Intereem</h4>
          </div>
          <div className="col-md-12 col-12">
            <Field
              component={RFTextField}
              label="Description"
              name="intdescription"
              validate={[required]}
            />
          </div>
          <div className="col-md-4 col-12">
            <Field
              component={RFDateTimeField}
              label="Starts At"
              name="intstartsAt"
              validate={[required]}
            />
          </div>
          <div className="col-md-4 col-12">
            <Field
              component={RFDateTimeField}
              label="Ends At"
              name="intendsAt"
              validate={[required]}
            />
          </div>
        </div>

        <div className="col-md-12 schedule-input-item">
          <div className="col-md-12">
            <h4>Viva</h4>
          </div>
          <div className="col-md-12 col-12">
            <Field
              component={RFTextField}
              label="Description"
              name="vivdescription"
              validate={[required]}
            />
          </div>
          <div className="col-md-4 col-12">
            <Field
              component={RFDateTimeField}
              label="Starts At"
              name="vivstartsAt"
              validate={[required]}
            />
          </div>
          <div className="col-md-4 col-12">
            <Field
              component={RFDateTimeField}
              label="Ends At"
              name="vivendsAt"
              validate={[required]}
            />
          </div>
        </div>

        <div className="col-md-4 col-12">
          <Button
            type="submit"
            disabled={submitting}
            size="small"
            variant="contained"
            className="jr-btn bg-blue text-white project-btn"
          >
            {this.props.submissions ? "Create" : "Update"}
          </Button>
        </div>
      </form>
    );
  }
}

const scheduleForm = reduxForm({
  form: "admin-new-project-form"
})(ScheduleForm);

const mapStateToProps = state => {
  const ap = getSubmission(state.projects.projectSubmissions, "ADD_PROJECT");
  const sp = getSubmission(state.projects.projectSubmissions, "ADD_SUPERVISOR");
  const cl = getSubmission(state.projects.projectSubmissions, "ADD_CLIENT");
  const pr1 = getSubmission(state.projects.projectSubmissions, "PROGRESS_REPORT_1");
  const pr2 = getSubmission(state.projects.projectSubmissions, "PROGRESS_REPORT_2");
  const pr3 = getSubmission(state.projects.projectSubmissions, "PROGRESS_REPORT_3");
  const pr4 = getSubmission(state.projects.projectSubmissions, "PROGRESS_REPORT_4");
  const pr5 = getSubmission(state.projects.projectSubmissions, "PROGRESS_REPORT_5");
  const pr6 = getSubmission(state.projects.projectSubmissions, "PROGRESS_REPORT_6");
  const pr7 = getSubmission(state.projects.projectSubmissions, "PROGRESS_REPORT_7");
  const pr8 = getSubmission(state.projects.projectSubmissions, "PROGRESS_REPORT_8");
  const pr9 = getSubmission(state.projects.projectSubmissions, "PROGRESS_REPORT_9");
  const pr10 = getSubmission(state.projects.projectSubmissions, "PROGRESS_REPORT_10");
  const int = getSubmission(state.projects.projectSubmissions, "INTEREEM");
  const viv = getSubmission(state.projects.projectSubmissions, "VIVA");

  return {
    projectId: state.projects.selectedProject
      ? state.projects.selectedProject.id
      : "",
    submissions: state.projects.projectSubmissions.length === 0,
    initialValues: {
      apdescription: ap.description,
      apstartsAt: ap.startsAt,
      apendsAt: ap.endsAt,
      spdescription: sp.description,
      spstartsAt: sp.startsAt,
      spendsAt: sp.endsAt,
      cldescription: cl.description,
      clstartsAt: cl.startsAt,
      clendsAt: cl.endsAt,
      pr1description: pr1.description,
      pr1startsAt: pr1.startsAt,
      pr1endsAt: pr1.endsAt,
      pr2description: pr2.description,
      pr2startsAt: pr2.startsAt,
      pr2endsAt: pr2.endsAt,
      pr3description: pr3.description,
      pr3startsAt: pr3.startsAt,
      pr3endsAt: pr3.endsAt,
      pr4description: pr4.description,
      pr4startsAt: pr4.startsAt,
      pr4endsAt: pr4.endsAt,
      pr5description: pr5.description,
      pr5startsAt: pr5.startsAt,
      pr5endsAt: pr5.endsAt,
      pr6description: pr6.description,
      pr6startsAt: pr6.startsAt,
      pr6endsAt: pr6.endsAt,
      pr7description: pr7.description,
      pr7startsAt: pr7.startsAt,
      pr7endsAt: pr7.endsAt,
      pr8description: pr8.description,
      pr8startsAt: pr8.startsAt,
      pr8endsAt: pr8.endsAt,
      pr9description: pr9.description,
      pr9startsAt: pr9.startsAt,
      pr9endsAt: pr9.endsAt,
      pr10description: pr10.description,
      pr10startsAt: pr10.startsAt,
      pr10endsAt: pr10.endsAt,
      intdescription: int.description,
      intstartsAt: int.startsAt,
      intendsAt: int.endsAt,
      vivdescription: viv.description,
      vivstartsAt: viv.startsAt,
      vivendsAt: viv.endsAt
    }
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(
      {
        saveProjectSubmissions,
        loadProjectSubmissions,
        updateProjectSubmissions
      },
      dispatch
    )
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(scheduleForm);
