import {
  STAFF_MEMBERS_SEARCH_KEY_CHNAGED,
  STAFF_MEMBERS_SEARCH_USER_ROLE_CHNAGED,
  LOAD_STAFF_MEMBERS,
  STAFF_MEMBERS_LOADED,
  SAVE_STAFF_MEMBER,
  SAVE_STAFF_MEMBER_SUCCESS,
  STAFF_MEMBER_SELECTED,
  UPDATE_STAFF_MEMBER,
  UPDATE_STAFF_MEMBER_SUCCESS
} from "constants/ActionTypes";

export const searchKeyChanged = searchKey => {
  return {
    type: STAFF_MEMBERS_SEARCH_KEY_CHNAGED,
    payload: searchKey
  };
};

export const searchUserRoleChanged = searchUserRole => {
  return {
    type: STAFF_MEMBERS_SEARCH_USER_ROLE_CHNAGED,
    payload: searchUserRole
  };
};

export const staffMemberSelected = staffMemberId => {
  return {
    type: STAFF_MEMBER_SELECTED,
    payload: staffMemberId
  };
};

export const loadStaffMembers = () => {
  return {
    type: LOAD_STAFF_MEMBERS
  };
};

export const staffMembersLoaded = staffMembers => {
  return {
    type: STAFF_MEMBERS_LOADED,
    payload: staffMembers
  };
};

export const saveStaffMember = staffMember => {
  return {
    type: SAVE_STAFF_MEMBER,
    payload: staffMember
  };
};

export const saveStaffMemberSuccess = staffMember => {
  return {
    type: SAVE_STAFF_MEMBER_SUCCESS,
    payload: staffMember
  };
};

export const updateStaffMember = (id,staffMember) => {
  return {
    type: UPDATE_STAFF_MEMBER,
    payload: {id,staffMember}
  };
};

export const updateStaffMemberSuccess = staffMember => {
  return {
    type: UPDATE_STAFF_MEMBER_SUCCESS,
    payload: staffMember
  };
};
