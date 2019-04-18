import {
  ADMIN_STAFF_MEMBERS_SEARCH_KEY_CHNAGED,
  ADMIN_STAFF_MEMBERS_LOADED,
  ADMIN_STAFF_MEMBERS_SEARCH_USER_ROLE_CHNAGED,
  ADMIN_SAVE_STAFF_MEMBER_SUCCESS,
  ADMIN_STAFF_MEMBER_SELECTED,
  ADMIN_UPDATE_STAFF_MEMBER_SUCCESS
} from "../../constants/ActionTypes";

const INIT_STATE = {
  searchKey: "",
  searchUserRole: "default",
  selectedStaffMember: null,
  staffMembers: []
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case ADMIN_STAFF_MEMBERS_SEARCH_KEY_CHNAGED: {
      return {
        ...state,
        searchKey: action.payload
      };
    }
    case ADMIN_STAFF_MEMBER_SELECTED: {
      return {
        ...state,
        selectedStaffMember: state.staffMembers.find(
          staffMember => staffMember.id == action.payload
        )
      };
    }
    case ADMIN_STAFF_MEMBERS_SEARCH_USER_ROLE_CHNAGED: {
      return {
        ...state,
        searchUserRole: action.payload
      };
    }
    case ADMIN_STAFF_MEMBERS_LOADED: {
      return {
        ...state,
        staffMembers: action.payload
      };
    }
    case ADMIN_SAVE_STAFF_MEMBER_SUCCESS: {
      return {
        ...state,
        staffMembers: [action.payload,...state.staffMembers]
      };
    }
    case ADMIN_UPDATE_STAFF_MEMBER_SUCCESS: {
      const filteredStaffMembers = state.staffMembers.filter(staffMember=>staffMember.id !== action.payload.id);
      return {
        ...state,
        staffMembers: [action.payload, ...filteredStaffMembers],
        selectedStaffMember: action.payload
      };
    }
    default:
      return state;
  }
};
