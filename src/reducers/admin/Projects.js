import {
  PROJECT_SEARCH_KEY_CHNAGED,
  PROJECT_SELECTED,
  PROJECTS_LOADED,
  SAVE_PROJECT_SUCCESS,
  UPDATE_PROJECT_SUCCESS,
  ACTIVE_PROJECTS_LOADED,
  SAVE_PROJECT_SUBMISSIONS_SUCCESS,
  UPDATE_PROJECT_SUBMISSIONS_SUCCESS,
  ACTIVE_PROJECT_SELECTED,
  PROJECT_SUBMISSIONS_LOADED
} from "../../constants/ActionTypes";

const INIT_STATE = {
  searchKey: "",
  projects: [
    
  ],
  selectedProject: null,
  activeProjects:[],
  projectSubmissions:[]
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case PROJECT_SEARCH_KEY_CHNAGED: {
      return {
        ...state,
        searchKey: action.payload
      };
    }
    case PROJECT_SELECTED: {
      return {
        ...state,
        selectedProject: state.projects.find(
          project => project.id == action.payload
        )
      };
    }
    case ACTIVE_PROJECT_SELECTED: {
      return {
        ...state,
        selectedProject: state.activeProjects.find(
          project => project.id == action.payload
        )
      };
    }
    case PROJECTS_LOADED: {
      return {
        ...state,
        projects: action.payload
      };
    }
    case ACTIVE_PROJECTS_LOADED: {
      return {
        ...state,
        activeProjects: action.payload
      };
    }
    case SAVE_PROJECT_SUCCESS: {
      return {
        ...state,
        projects: [action.payload, ...state.projects]
      };
    }
    case UPDATE_PROJECT_SUCCESS: {
      const filteredProjects = state.projects.filter(project=>project.id !== action.payload.id);
      return {
        ...state,
        projects: [action.payload, ...filteredProjects],
        selectedProject: action.payload
      };
    }
    case PROJECT_SUBMISSIONS_LOADED: {
      return {
        ...state,
        projectSubmissions: [...action.payload]
      };
    }
    case SAVE_PROJECT_SUBMISSIONS_SUCCESS: {
      return {
        ...state,
        projectSubmissions: [...action.payload]
      };
    }
    case UPDATE_PROJECT_SUBMISSIONS_SUCCESS: {
      return {
        ...state,
        projectSubmissions: [...action.payload]
      };
    }
    default:
      return state;
  }
};
