import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router'
import Settings from './Settings';
import Auth from './Auth';
import Projects from './admin/Projects';
import PC from './admin/PC';
import APC from './admin/APC';
import Student from './admin/Student';
import {reducer as form} from 'redux-form';


export default (history) => combineReducers({
  router: connectRouter(history),
  settings: Settings,
  auth: Auth,
  projects: Projects,
  pcs: PC,
  apcs: APC,
  students: Student,
  form
});
