import {
  STUDENT_SEARCH_KEY_CHNAGED,
  STUDENTS_LOADED,
  SAVE_STUDENT_SUCCESS,
  UPDATE_STUDENT_SUCCESS,
  STUDENT_PROJECT_SEARCH_KEY_CHNAGED,
  STUDENT_SELECTED,
  ACTIVE_STUDENTS_LOADED
} from "../../constants/ActionTypes";

const INIT_STATE = {
  searchKey: "",
  students: [],
  selectedStudent: null,
  searchKeyProject: "default",
  activeStudents:[]
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case STUDENT_SEARCH_KEY_CHNAGED: {
      return {
        ...state,
        searchKey: action.payload
      };
    }
    case STUDENT_SELECTED: {
      return {
        ...state,
        selectedStudent: state.students.find(
          student => student.id == action.payload
        )
      };
    }
    case STUDENT_PROJECT_SEARCH_KEY_CHNAGED: {
      return {
        ...state,
        searchKeyProject: action.payload
      };
    }
    case STUDENTS_LOADED: {
      return {
        ...state,
        students: action.payload
      };
    }
    case ACTIVE_STUDENTS_LOADED: {
      return {
        ...state,
        activeStudents: action.payload
      };
    }
    case SAVE_STUDENT_SUCCESS: {
      return {
        ...state,
        students: [action.payload, ...state.students]
      };
    }
    case UPDATE_STUDENT_SUCCESS: {
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
