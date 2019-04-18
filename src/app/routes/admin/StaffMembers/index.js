import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import StaffMemberItem from "../../../components/admin/staffmembers/StaffMemberItem";
import {
  searchKeyChanged,
  loadStaffMembers,
  searchUserRoleChanged,
  staffMemberSelected
} from "../../../../actions/admin/StaffMembers";
import Banner from "../../../components/Banner";
import { withRouter } from "react-router-dom";

class StaffMembersPage extends React.Component {
  handleSearchKey(e) {
    this.props.actions.searchKeyChanged(e.target.value);
  }

  handleSearchUserRole(e) {
    this.props.actions.searchUserRoleChanged(e.target.value);
  }

  componentDidMount() {
    this.props.actions.loadStaffMembers();
  }

  selectStaffMember(staffMemberId) {
    this.props.actions.staffMemberSelected(staffMemberId);
    this.props.history.push(`/app/admin/staff-members/${staffMemberId}/edit`);
  }

  render() {
    return (
      <div className="app-wrapper">
        <div className="row">
          <div className="col-md-6">
            <Link to="/app/admin/staff-members/new">
              <Button
                size="small"
                variant="contained"
                className="jr-btn bg-blue text-white project-btn"
              >
                New Staff Member
              </Button>
            </Link>
          </div>
          <div className="col-md-3">
            <TextField
              id="select-user-role"
              select
              label="Select User Role"
              value={this.props.searchUserRole}
              onChange={e => this.handleSearchUserRole(e)}
              SelectProps={{}}
              margin="normal"
              fullWidth
            >
              <MenuItem key={-1} value="default">
                All User Roles
              </MenuItem>
              <MenuItem value="APC">Asso: Project Coordinator</MenuItem>
              <MenuItem value="PC">Project Coordinator</MenuItem>
              ))}
            </TextField>
          </div>
          <div className="col-md-3">
            <TextField
              id="pc-search"
              label="Search Staff Member by name"
              value={this.props.searchKey}
              onChange={e => this.handleSearchKey(e)}
              margin="normal"
              fullWidth
            />
          </div>
        </div>

        <div className="row project-wrapper">
          {this.props.staffMembers.length === 0 && (
            <Banner msg="No Staff Members Found !!" />
          )}
          {this.props.staffMembers.map(staffMember => (
            <StaffMemberItem
              key={`staff-member-${staffMember.id}`}
              staffMember={staffMember}
              selectStaffMember={this.selectStaffMember.bind(this)}
            />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { searchKey, staffMembers, searchUserRole } = state.staffMembers;
  return {
    searchKey,
    searchUserRole,
    staffMembers: staffMembers.filter(staffMember =>
      searchUserRole === "default"
        ? staffMember.name.includes(searchKey)
        : staffMember.name.includes(searchKey) &&
          staffMember.userRole === searchUserRole
    )
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(
      {
        searchKeyChanged,
        loadStaffMembers,
        searchUserRoleChanged,
        staffMemberSelected
      },
      dispatch
    )
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(StaffMembersPage)
);
