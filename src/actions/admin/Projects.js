import {
  ADMIN_PROJECT_SEARCH_KEY_CHNAGED,
  ADMIN_PROJECT_SELECTED,
  ADMIN_LOAD_PROJECTS,
  ADMIN_PROJECTS_LOADED,
  ADMIN_SAVE_PROJECT,
  ADMIN_SAVE_PROJECT_SUCCESS,
  ADMIN_UPDATE_PROJECT,
  ADMIN_UPDATE_PROJECT_SUCCESS
} from "../../constants/ActionTypes";

export const searchKeyChanged = searchKey => {
  return {
    type: ADMIN_PROJECT_SEARCH_KEY_CHNAGED,
    payload: searchKey
  };
};

export const projectSelected = projectId => {
  return {
    type: ADMIN_PROJECT_SELECTED,
    payload: projectId
  };
};

export const loadProjects = () => {
  return {
    type: ADMIN_LOAD_PROJECTS
  };
};

export const projectsLoaded = projects => {
  return {
    type: ADMIN_PROJECTS_LOADED,
    payload: projects
  };
};


export const saveProject = project => {
  return {
    type: ADMIN_SAVE_PROJECT,
    payload: project
  };
};

export const saveProjectSuccess = project => {
  return {
    type: ADMIN_SAVE_PROJECT_SUCCESS,
    payload: project
  };
};


export const updateProject = (id,project) => {
  return {
    type: ADMIN_UPDATE_PROJECT,
    payload: {id,project}
  };
};

export const updateProjectSuccess = project => {
  return {
    type: ADMIN_UPDATE_PROJECT_SUCCESS,
    payload: project
  };
};
