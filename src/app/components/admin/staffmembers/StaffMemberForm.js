import React from "react";
import Button from "@material-ui/core/Button";
import { bindActionCreators } from "redux";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import RFTextField from "../../fields/RFTextField";
import RTSelectField from "../../fields/RTSelectField";
import {
  required,
  selectRequired,
  email,
  telephone
} from "../../../../util/Validations";
import {
  saveStaffMember,
  updateStaffMember
} from "../../../../actions/admin/StaffMembers";

const USER_ROLES = [
  {
    label: "Select a user Role",
    value: "default"
  },
  {
    label: "Asso: Project Coordinator",
    value: "APC"
  },
  {
    label: "Project Coordinator",
    value: "PC"
  }
];

class StaffMemberForm extends React.Component {
  onSubmit(values) {
    if (this.props.mode === "CREATE")
      this.props.actions.saveStaffMember(values);
    else 
      this.props.actions.updateStaffMember(this.props.staffMemberId, values);
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
        <div className="col-md-4">
          <Field
            component={RFTextField}
            label="Name"
            name="name"
            validate={[required]}
          />
        </div>
        {this.props.mode === "CREATE" && (
          <div className="col-md-4">
            <Field
              component={RFTextField}
              label="Email"
              name="email"
              validate={[required, email]}
            />
          </div>
        )}
        <div className="col-md-4">
          <Field
            component={RFTextField}
            label="Telephone"
            name="telephone"
            validate={[required, telephone]}
          />
        </div>
        {this.props.mode === "CREATE" && <div className="col-md-4">
          <Field
            component={RTSelectField}
            label="User Role"
            name="userRole"
            options={USER_ROLES}
            validate={[selectRequired]}
          />
        </div>
        }
        <div className="col-md-4">
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

const staffMemberForm = reduxForm({
  form: "staff-member-form"
})(StaffMemberForm);

const mapStateToProps = state => {
  return {
    staffMemberId: state.staffMembers.selectedStaffMember
      ? state.staffMembers.selectedStaffMember.id
      : "",
    initialValues: {
      name: state.staffMembers.selectedStaffMember
        ? state.staffMembers.selectedStaffMember.name
        : "",
      email: state.staffMembers.selectedStaffMember
        ? state.staffMembers.selectedStaffMember.email
        : "",
      telephone: state.staffMembers.selectedStaffMember
        ? state.staffMembers.selectedStaffMember.telephone
        : "",
      userRole: state.staffMembers.selectedStaffMember
        ? state.staffMembers.selectedStaffMember.userRole
        : "default"
    }
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(
      {
        saveStaffMember,
        updateStaffMember
      },
      dispatch
    )
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(staffMemberForm);
