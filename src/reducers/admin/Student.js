import {
  ADMIN_STUDENT_SEARCH_KEY_CHNAGED,
  ADMIN_STUDENTS_LOADED,
  ADMIN_SAVE_STUDENT_SUCCESS,
  ADMIN_UPDATE_STUDENT_SUCCESS,
  ADMIN_STUDENT_PROJECT_SEARCH_KEY_CHNAGED,
  ADMIN_STUDENT_SELECTED
} from "../../constants/ActionTypes";

const INIT_STATE = {
  searchKey: "",
  students: [],
  selectedStudent: null,
  searchKeyProject: "default"
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case ADMIN_STUDENT_SEARCH_KEY_CHNAGED: {
      return {
        ...state,
        searchKey: action.payload
      };
    }
    case ADMIN_STUDENT_SELECTED: {
      return {
        ...state,
        selectedStudent: state.students.find(
          student => student.id == action.payload
        )
      };
    }
    case ADMIN_STUDENT_PROJECT_SEARCH_KEY_CHNAGED: {
      return {
        ...state,
        searchKeyProject: action.payload
      };
    }
    case ADMIN_STUDENTS_LOADED: {
      return {
        ...state,
        students: action.payload
      };
    }
    case ADMIN_SAVE_STUDENT_SUCCESS: {
      return {
        ...state,
        students: [action.payload, ...state.students]
      };
    }
    case ADMIN_UPDATE_STUDENT_SUCCESS: {
      const filteredStudents = state.students.filter(
        student => student.id !== action.payload.id
      );
      return {
        ...state,
        students: [action.payload, ...filteredStudents],
        selectedStudent: action.payload
      };
    }
    default:
      return state;
  }
};
