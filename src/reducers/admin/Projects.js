import {
  ADMIN_PROJECT_SEARCH_KEY_CHNAGED,
  ADMIN_PROJECT_SELECTED,
  ADMIN_PROJECTS_LOADED,
  ADMIN_SAVE_PROJECT_SUCCESS,
  ADMIN_UPDATE_PROJECT_SUCCESS
} from "../../constants/ActionTypes";

const INIT_STATE = {
  searchKey: "",
  projects: [
    
  ],
  selectedProject: null
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case ADMIN_PROJECT_SEARCH_KEY_CHNAGED: {
      return {
        ...state,
        searchKey: action.payload
      };
    }
    case ADMIN_PROJECT_SELECTED: {
      return {
        ...state,
        selectedProject: state.projects.find(
          project => project.id == action.payload
        )
      };
    }
    case ADMIN_PROJECTS_LOADED: {
      return {
        ...state,
        projects: action.payload
      };
    }
    case ADMIN_SAVE_PROJECT_SUCCESS: {
      return {
        ...state,
        projects: [action.payload, ...state.projects]
      };
    }
    case ADMIN_UPDATE_PROJECT_SUCCESS: {
      const filteredProjects = state.projects.filter(project=>project.id !== action.payload.id);
      return {
        ...state,
        projects: [action.payload, ...filteredProjects],
        selectedProject: action.payload
      };
    }
    default:
      return state;
  }
};
