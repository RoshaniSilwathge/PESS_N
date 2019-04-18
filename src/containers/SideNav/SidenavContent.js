import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";

import IntlMessages from "util/IntlMessages";
import CustomScrollbars from "util/CustomScrollbars";
import { decodeAccessToken } from "../../security";

class SidenavContent extends Component {
  componentDidMount() {
    const { history } = this.props;
    const that = this;
    const pathname = `${history.location.pathname}`; // get current path

    const menuLi = document.getElementsByClassName("menu");
    for (let i = 0; i < menuLi.length; i++) {
      menuLi[i].onclick = function(event) {
        for (let j = 0; j < menuLi.length; j++) {
          const parentLi = that.closest(this, "li");
          if (
            menuLi[j] !== this &&
            (parentLi === null || !parentLi.classList.contains("open"))
          ) {
            menuLi[j].classList.remove("open");
          }
        }
        this.classList.toggle("open");
      };
    }

    const activeLi = document.querySelector('a[href="' + pathname + '"]'); // select current a element
    try {
      const activeNav = this.closest(activeLi, "ul"); // select closest ul
      if (activeNav.classList.contains("sub-menu")) {
        this.closest(activeNav, "li").classList.add("open");
      } else {
        this.closest(activeLi, "li").classList.add("open");
      }
    } catch (error) {}
  }

  componentWillReceiveProps(nextProps) {
    const { history } = nextProps;
    const pathname = `${history.location.pathname}`; // get current path

    const activeLi = document.querySelector('a[href="' + pathname + '"]'); // select current a element
    try {
      const activeNav = this.closest(activeLi, "ul"); // select closest ul
      if (activeNav.classList.contains("sub-menu")) {
        this.closest(activeNav, "li").classList.add("open");
      } else {
        this.closest(activeLi, "li").classList.add("open");
      }
    } catch (error) {}
  }

  closest(el, selector) {
    try {
      let matchesFn;
      // find vendor prefix
      [
        "matches",
        "webkitMatchesSelector",
        "mozMatchesSelector",
        "msMatchesSelector",
        "oMatchesSelector"
      ].some(function(fn) {
        if (typeof document.body[fn] == "function") {
          matchesFn = fn;
          return true;
        }
        return false;
      });

      let parent;

      // traverse parents
      while (el) {
        parent = el.parentElement;
        if (parent && parent[matchesFn](selector)) {
          return parent;
        }
        el = parent;
      }
    } catch (e) {}

    return null;
  }

  render() {
    const userRole = decodeAccessToken().userRole;
    return (
      <CustomScrollbars className=" scrollbar">
        {userRole === "ADMINISTRATOR" && (
          <ul className="nav-menu">
            <li className="nav-header">
              <IntlMessages id="sidebar.admin" />
            </li>
            <li className="menu no-arrow">
              <NavLink to="/app/admin/projects">
                <i className="zmdi zmdi-view-dashboard zmdi-hc-fw" />
                <span className="nav-text">
                  <IntlMessages id="pages.admin.projects" />{" "}
                </span>
              </NavLink>
            </li>
            <li className="menu no-arrow">
              <NavLink to="/app/admin/students">
                <i className="zmdi zmdi-view-dashboard zmdi-hc-fw" />
                <span className="nav-text">
                  <IntlMessages id="pages.admin.students" />{" "}
                </span>
              </NavLink>
            </li>
            <li className="menu no-arrow">
              <NavLink to="/app/admin/staff-members">
                <i className="zmdi zmdi-view-dashboard zmdi-hc-fw" />
                <span className="nav-text">
                  <IntlMessages id="pages.admin.projectCoordinators" />{" "}
                </span>
              </NavLink>
            </li>
            <li className="menu no-arrow">
              <NavLink to="/app/admin/settings">
                <i className="zmdi zmdi-view-dashboard zmdi-hc-fw" />
                <span className="nav-text">
                  <IntlMessages id="pages.admin.settings" />{" "}
                </span>
              </NavLink>
            </li>
          </ul>
        )}

        {userRole === "PC" && (
          <ul className="nav-menu">
            <li className="nav-header">
              <IntlMessages id="sidebar.projectCoordinator" />
            </li>
            <li className="menu no-arrow">
              <NavLink to="/app/project-coordinator/projects">
                <i className="zmdi zmdi-view-dashboard zmdi-hc-fw" />
                <span className="nav-text">
                  <IntlMessages id="pages.projectCoordinator.projects" />{" "}
                </span>
              </NavLink>
            </li>
            <li className="menu no-arrow">
              <NavLink to="/app/project-coordinator/students">
                <i className="zmdi zmdi-view-dashboard zmdi-hc-fw" />
                <span className="nav-text">
                  <IntlMessages id="pages.projectCoordinator.students" />{" "}
                </span>
              </NavLink>
            </li>
            <li className="menu no-arrow">
              <NavLink to="/app/project-coordinator/announcements">
                <i className="zmdi zmdi-view-dashboard zmdi-hc-fw" />
                <span className="nav-text">
                  <IntlMessages id="pages.projectCoordinator.announcements" />{" "}
                </span>
              </NavLink>
            </li>
            <li className="menu no-arrow">
              <NavLink to="/app/project-coordinator/settings">
                <i className="zmdi zmdi-view-dashboard zmdi-hc-fw" />
                <span className="nav-text">
                  <IntlMessages id="pages.projectCoordinator.settings" />{" "}
                </span>
              </NavLink>
            </li>
          </ul>
        )}

        {userRole === "APC" && (
          <ul className="nav-menu">
            <li className="nav-header">
              <IntlMessages id="sidebar.assistantProjectCoordinator" />
            </li>
            <li className="menu no-arrow">
              <NavLink to="/app/assistant-project-coordinator/projects">
                <i className="zmdi zmdi-view-dashboard zmdi-hc-fw" />
                <span className="nav-text">
                  <IntlMessages id="pages.assistantProjectCoordinator.projects" />{" "}
                </span>
              </NavLink>
            </li>
            <li className="menu no-arrow">
              <NavLink to="/app/assistant-project-coordinator/students">
                <i className="zmdi zmdi-view-dashboard zmdi-hc-fw" />
                <span className="nav-text">
                  <IntlMessages id="pages.assistantProjectCoordinator.students" />{" "}
                </span>
              </NavLink>
            </li>
            <li className="menu no-arrow">
              <NavLink to="/app/assistant-project-coordinator/settings">
                <i className="zmdi zmdi-view-dashboard zmdi-hc-fw" />
                <span className="nav-text">
                  <IntlMessages id="pages.assistantProjectCoordinator.settings" />{" "}
                </span>
              </NavLink>
            </li>
          </ul>
        )}

        {userRole === "STUDENT" && (
          <ul className="nav-menu">
            <li className="nav-header">
              <IntlMessages id="sidebar.student" />
            </li>
            <li className="menu no-arrow">
              <NavLink to="/app/student/my-project">
                <i className="zmdi zmdi-view-dashboard zmdi-hc-fw" />
                <span className="nav-text">
                  <IntlMessages id="pages.student.project" />{" "}
                </span>
              </NavLink>
            </li>
            <li className="menu no-arrow">
              <NavLink to="/app/student/announcements">
                <i className="zmdi zmdi-view-dashboard zmdi-hc-fw" />
                <span className="nav-text">
                  <IntlMessages id="pages.student.announcements" />{" "}
                </span>
              </NavLink>
            </li>
            <li className="menu no-arrow">
              <NavLink to="/app/student/settings">
                <i className="zmdi zmdi-view-dashboard zmdi-hc-fw" />
                <span className="nav-text">
                  <IntlMessages id="pages.student.settings" />{" "}
                </span>
              </NavLink>
            </li>
          </ul>
        )}
      </CustomScrollbars>
    );
  }
}

export default withRouter(SidenavContent);
