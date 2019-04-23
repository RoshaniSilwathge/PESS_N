import {
  STUDENT_SEARCH_KEY_CHNAGED,
  LOAD_STUDENTS,
  STUDENTS_LOADED,
  SAVE_STUDENT,
  SAVE_STUDENT_SUCCESS,
  UPDATE_STUDENT,
  UPDATE_STUDENT_SUCCESS,
  STUDENT_PROJECT_SEARCH_KEY_CHNAGED,
  STUDENT_SELECTED,
  LOAD_ACTIVE_STUDENTS,
  ACTIVE_STUDENTS_LOADED
} from "constants/ActionTypes";

export const searchKeyChanged = searchKey => {
  return {
    type: STUDENT_SEARCH_KEY_CHNAGED,
    payload: searchKey
  };
};

export const projectSearchKeyChanged = searchKey => {
  return {
    type: STUDENT_PROJECT_SEARCH_KEY_CHNAGED,
    payload: searchKey
  };
};

export const studentSelected = studentId => {
  return {
    type: STUDENT_SELECTED,
    payload: studentId
  };
};

export const loadStudents = () => {
  return {
    type: LOAD_STUDENTS
  };
};

export const studentsLoaded = students => {
  return {
    type: STUDENTS_LOADED,
    payload: students
  };
};

export const loadActiveStudents = () => {
  return {
    type: LOAD_ACTIVE_STUDENTS
  };
};

export const activeStudentsLoaded = students => {
  return {
    type: ACTIVE_STUDENTS_LOADED,
    payload: students
  };
};

export const saveStudent = student => {
  return {
    type: SAVE_STUDENT,
    payload: student
  };
};

export const saveStudentSuccess = student => {
  return {
    type: SAVE_STUDENT_SUCCESS,
    payload: student
  };
};

export const updateStudent = (id, student) => {
  return {
    type: UPDATE_STUDENT,
    payload: { id, student }
  };
};

export const updateStudentSuccess = student => {
  return {
    type: UPDATE_STUDENT_SUCCESS,
    payload: student
  };
};
