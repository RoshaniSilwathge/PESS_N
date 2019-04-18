import {
  ADMIN_STUDENT_SEARCH_KEY_CHNAGED,
  ADMIN_LOAD_STUDENTS,
  ADMIN_STUDENTS_LOADED,
  ADMIN_SAVE_STUDENT,
  ADMIN_SAVE_STUDENT_SUCCESS,
  ADMIN_UPDATE_STUDENT,
  ADMIN_UPDATE_STUDENT_SUCCESS,
  ADMIN_STUDENT_PROJECT_SEARCH_KEY_CHNAGED,
  ADMIN_STUDENT_SELECTED
} from "../../constants/ActionTypes";

export const searchKeyChanged = searchKey => {
  return {
    type: ADMIN_STUDENT_SEARCH_KEY_CHNAGED,
    payload: searchKey
  };
};

export const projectSearchKeyChanged = searchKey => {
  return {
    type: ADMIN_STUDENT_PROJECT_SEARCH_KEY_CHNAGED,
    payload: searchKey
  };
};

export const studentSelected = studentId => {
  return {
    type: ADMIN_STUDENT_SELECTED,
    payload: studentId
  };
};

export const loadStudents = () => {
  return {
    type: ADMIN_LOAD_STUDENTS
  };
};

export const studentsLoaded = students => {
  return {
    type: ADMIN_STUDENTS_LOADED,
    payload: students
  };
};

export const saveStudent = student => {
  return {
    type: ADMIN_SAVE_STUDENT,
    payload: student
  };
};

export const saveStudentSuccess = student => {
  return {
    type: ADMIN_SAVE_STUDENT_SUCCESS,
    payload: student
  };
};

export const updateStudent = (id, student) => {
  return {
    type: ADMIN_UPDATE_STUDENT,
    payload: { id, student }
  };
};

export const updateStudentSuccess = student => {
  return {
    type: ADMIN_UPDATE_STUDENT_SUCCESS,
    payload: student
  };
};
