import {
  PROJECT_SEARCH_KEY_CHNAGED,
  PROJECT_SELECTED,
  LOAD_PROJECTS,
  PROJECTS_LOADED,
  SAVE_PROJECT,
  SAVE_PROJECT_SUCCESS,
  UPDATE_PROJECT,
  UPDATE_PROJECT_SUCCESS,
  LOAD_ACTIVE_PROJECTS,
  ACTIVE_PROJECTS_LOADED,
  SAVE_PROJECT_SUBMISSIONS,
  SAVE_PROJECT_SUBMISSIONS_SUCCESS,
  UPDATE_PROJECT_SUBMISSIONS,
  UPDATE_PROJECT_SUBMISSIONS_SUCCESS,
  ACTIVE_PROJECT_SELECTED,
  LOAD_PROJECT_SUBMISSIONS,
  PROJECT_SUBMISSIONS_LOADED
} from "constants/ActionTypes";

export const searchKeyChanged = searchKey => {
  return {
    type: PROJECT_SEARCH_KEY_CHNAGED,
    payload: searchKey
  };
};

export const projectSelected = projectId => {
  return {
    type: PROJECT_SELECTED,
    payload: projectId
  };
};

export const activeProjectSelected = projectId => {
  return {
    type: ACTIVE_PROJECT_SELECTED,
    payload: projectId
  };
};

export const loadProjects = () => {
  return {
    type: LOAD_PROJECTS
  };
};

export const projectsLoaded = projects => {
  return {
    type: PROJECTS_LOADED,
    payload: projects
  };
};
export const loadProjectSubmissions = projectId => {
  return {
    type: LOAD_PROJECT_SUBMISSIONS,
    payload: projectId
  };
};

export const projectSubmissionsLoaded = projectSubmissions => {
  return {
    type: PROJECT_SUBMISSIONS_LOADED,
    payload: projectSubmissions
  };
};

export const loadActiveProjects = () => {
  return {
    type: LOAD_ACTIVE_PROJECTS
  };
};

export const activeProjectsLoaded = projects => {
  return {
    type: ACTIVE_PROJECTS_LOADED,
    payload: projects
  };
};

export const saveProject = project => {
  return {
    type: SAVE_PROJECT,
    payload: project
  };
};

export const saveProjectSuccess = project => {
  return {
    type: SAVE_PROJECT_SUCCESS,
    payload: project
  };
};

export const updateProject = (id, project) => {
  return {
    type: UPDATE_PROJECT,
    payload: { id, project }
  };
};

export const updateProjectSuccess = project => {
  return {
    type: UPDATE_PROJECT_SUCCESS,
    payload: project
  };
};

export const saveProjectSubmissions = projectSubmissions => {
  return {
    type: SAVE_PROJECT_SUBMISSIONS,
    payload: projectSubmissions
  };
};

export const saveProjectSubmissionsSuccess = projectSubmissions => {
  return {
    type: SAVE_PROJECT_SUBMISSIONS_SUCCESS,
    payload: projectSubmissions
  };
};

export const updateProjectSubmissions = (projectSubmissions) => {
  return {
    type: UPDATE_PROJECT_SUBMISSIONS,
    payload: projectSubmissions
  };
};

export const updateProjectSubmissionsSuccess = projectSubmissions => {
  return {
    type: UPDATE_PROJECT_SUBMISSIONS_SUCCESS,
    payload: projectSubmissions
  };
};
