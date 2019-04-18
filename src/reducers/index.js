import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router'
import Settings from './Settings';
import Auth from './Auth';
import Notification from './Notification';
import Projects from './admin/Projects';
import StaffMembers from './admin/StaffMembers';
import Student from './admin/Student';
import {reducer as form} from 'redux-form';


export default (history) => combineReducers({
  router: connectRouter(history),
  settings: Settings,
  auth: Auth,
  projects: Projects,
  staffMembers: StaffMembers,
  students: Student,
  notifications: Notification,
  form
});
