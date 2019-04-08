import React from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import Header from 'components/Header/index';
import Sidebar from 'containers/SideNav/index';
import Footer from 'components/Footer';
import {
  ABOVE_THE_HEADER,
  BELOW_THE_HEADER,
  COLLAPSED_DRAWER,
  FIXED_DRAWER,
  HORIZONTAL_NAVIGATION,
} from 'constants/ActionTypes';
import {isIOS, isMobile} from 'react-device-detect';
import asyncComponent from '../util/asyncComponent';
import TopNav from 'components/TopNav';
import '../styles/custom.scss';

class App extends React.Component {

  render() {
    const {match, drawerType, navigationStyle, horizontalNavPosition} = this.props;
    const drawerStyle = drawerType.includes(FIXED_DRAWER) ? 'fixed-drawer' : drawerType.includes(COLLAPSED_DRAWER) ? 'collapsible-drawer' : 'mini-drawer';

    //set default height and overflow for iOS mobile Safari 10+ support.
    if (isIOS && isMobile) {
      document.body.classList.add('ios-mobile-view-height')
    }
    else if (document.body.classList.contains('ios-mobile-view-height')) {
      document.body.classList.remove('ios-mobile-view-height')
    }

    return (
      <div className={`app-container ${drawerStyle}`}>

        <Sidebar/>
        <div className="app-main-container">
          <div
            className={`app-header ${navigationStyle === HORIZONTAL_NAVIGATION ? 'app-header-horizontal' : ''}`}>
            {(navigationStyle === HORIZONTAL_NAVIGATION && horizontalNavPosition === ABOVE_THE_HEADER) &&
            <TopNav styleName="app-top-header"/>}
            <Header/>
            {(navigationStyle === HORIZONTAL_NAVIGATION && horizontalNavPosition === BELOW_THE_HEADER) &&
            <TopNav/>}
          </div>

          <main className="app-main-content-wrapper">
            <div className="app-main-content">
              <Switch>
                  <Route path={`${match.url}/admin/projects/new`}
                         component={asyncComponent(() => import('./routes/admin/Projects/NewProjectPage'))}/>
                  <Route path={`${match.url}/admin/projects/:id/edit`}
                         component={asyncComponent(() => import('./routes/admin/Projects/EditProjectPage'))}/>
                  <Route path={`${match.url}/admin/projects`}
                         component={asyncComponent(() => import('./routes/admin/Projects'))}/>

                  <Route path={`${match.url}/admin/students/new`}
                         component={asyncComponent(() => import('./routes/admin/Projects/NewProjectPage'))}/>
                  <Route path={`${match.url}/admin/students`}
                         component={asyncComponent(() => import('./routes/admin/Students'))}/>

                  <Route path={`${match.url}/admin/project-coordinators`}
                         component={asyncComponent(() => import('./routes/admin/PC'))}/>
                  <Route path={`${match.url}/admin/assistant-project-coordinators`}
                         component={asyncComponent(() => import('./routes/admin/APC'))}/>
                  <Route path={`${match.url}/admin/settings`}
                         component={asyncComponent(() => import('./routes/settings'))}/>
                  
                  <Route path={`${match.url}/project-coordinator/projects`}
                         component={asyncComponent(() => import('./routes/pc/Projects'))}/>
                  <Route path={`${match.url}/project-coordinator/students`}
                         component={asyncComponent(() => import('./routes/pc/ReviewStudents'))}/>
                  <Route path={`${match.url}/project-coordinator/announcements`}
                         component={asyncComponent(() => import('./routes/pc/Announcements'))}/>
                  <Route path={`${match.url}/project-coordinator/settings`}
                         component={asyncComponent(() => import('./routes/settings'))}/>
                  
                  <Route path={`${match.url}/assistant-project-coordinator/projects`}
                         component={asyncComponent(() => import('./routes/apc/Projects'))}/>
                  <Route path={`${match.url}/assistant-project-coordinator/students`}
                         component={asyncComponent(() => import('./routes/apc/ReviewStudents'))}/>
                  <Route path={`${match.url}/assistant-project-coordinator/settings`}
                         component={asyncComponent(() => import('./routes/settings'))}/>
                  
                  <Route path={`${match.url}/student/my-project`}
                         component={asyncComponent(() => import('./routes/student/MyProject'))}/>
                  <Route path={`${match.url}/student/announcements`}
                         component={asyncComponent(() => import('./routes/student/ViewAnnouncements'))}/>
                  <Route path={`${match.url}/student/settings`}
                         component={asyncComponent(() => import('./routes/settings'))}/>
                  <Route component={asyncComponent(() => import('components/Error404'))}/>
              </Switch>
            </div>
            <Footer/>
          </main>
        </div>
      </div>
    );
  }
}


const mapStateToProps = ({settings}) => {
  const {drawerType, navigationStyle, horizontalNavPosition} = settings;
  return {drawerType, navigationStyle, horizontalNavPosition}
};
export default withRouter(connect(mapStateToProps)(App));