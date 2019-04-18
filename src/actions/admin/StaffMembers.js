import {
  ADMIN_STAFF_MEMBERS_SEARCH_KEY_CHNAGED,
  ADMIN_STAFF_MEMBERS_SEARCH_USER_ROLE_CHNAGED,
  ADMIN_LOAD_STAFF_MEMBERS,
  ADMIN_STAFF_MEMBERS_LOADED,
  ADMIN_SAVE_STAFF_MEMBER,
  ADMIN_SAVE_STAFF_MEMBER_SUCCESS,
  ADMIN_STAFF_MEMBER_SELECTED,
  ADMIN_UPDATE_STAFF_MEMBER,
  ADMIN_UPDATE_STAFF_MEMBER_SUCCESS
} from "../../constants/ActionTypes";

export const searchKeyChanged = searchKey => {
  return {
    type: ADMIN_STAFF_MEMBERS_SEARCH_KEY_CHNAGED,
    payload: searchKey
  };
};

export const searchUserRoleChanged = searchUserRole => {
  return {
    type: ADMIN_STAFF_MEMBERS_SEARCH_USER_ROLE_CHNAGED,
    payload: searchUserRole
  };
};

export const staffMemberSelected = staffMemberId => {
  return {
    type: ADMIN_STAFF_MEMBER_SELECTED,
    payload: staffMemberId
  };
};

export const loadStaffMembers = () => {
  return {
    type: ADMIN_LOAD_STAFF_MEMBERS
  };
};

export const staffMembersLoaded = staffMembers => {
  return {
    type: ADMIN_STAFF_MEMBERS_LOADED,
    payload: staffMembers
  };
};

export const saveStaffMember = staffMember => {
  return {
    type: ADMIN_SAVE_STAFF_MEMBER,
    payload: staffMember
  };
};

export const saveStaffMemberSuccess = staffMember => {
  return {
    type: ADMIN_SAVE_STAFF_MEMBER_SUCCESS,
    payload: staffMember
  };
};

export const updateStaffMember = (id,staffMember) => {
  return {
    type: ADMIN_UPDATE_STAFF_MEMBER,
    payload: {id,staffMember}
  };
};

export const updateStaffMemberSuccess = staffMember => {
  return {
    type: ADMIN_UPDATE_STAFF_MEMBER_SUCCESS,
    payload: staffMember
  };
};
