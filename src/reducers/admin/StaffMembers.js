import {
  STAFF_MEMBERS_SEARCH_KEY_CHNAGED,
  STAFF_MEMBERS_LOADED,
  STAFF_MEMBERS_SEARCH_USER_ROLE_CHNAGED,
  SAVE_STAFF_MEMBER_SUCCESS,
  STAFF_MEMBER_SELECTED,
  UPDATE_STAFF_MEMBER_SUCCESS
} from "../../constants/ActionTypes";

const INIT_STATE = {
  searchKey: "",
  searchUserRole: "default",
  selectedStaffMember: null,
  staffMembers: []
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case STAFF_MEMBERS_SEARCH_KEY_CHNAGED: {
      return {
        ...state,
        searchKey: action.payload
      };
    }
    case STAFF_MEMBER_SELECTED: {
      return {
        ...state,
        selectedStaffMember: state.staffMembers.find(
          staffMember => staffMember.id == action.payload
        )
      };
    }
    case STAFF_MEMBERS_SEARCH_USER_ROLE_CHNAGED: {
      return {
        ...state,
        searchUserRole: action.payload
      };
    }
    case STAFF_MEMBERS_LOADED: {
      return {
        ...state,
        staffMembers: action.payload
      };
    }
    case SAVE_STAFF_MEMBER_SUCCESS: {
      return {
        ...state,
        staffMembers: [action.payload,...state.staffMembers]
      };
    }
    case UPDATE_STAFF_MEMBER_SUCCESS: {
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
