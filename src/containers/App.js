import React, { Component } from "react";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import MomentUtils from "@date-io/moment";
import { MuiPickersUtilsProvider } from "material-ui-pickers";
import { Redirect, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { IntlProvider } from "react-intl";
import "assets/vendors/style";
import defaultTheme from "./themes/defaultTheme";
import AppLocale from "../lngProvider";

import MainApp from "app/index";
import SignIn from "./SignIn";
import { setInitUrl } from "../actions/Auth";
import RTL from "util/RTL";
import asyncComponent from "util/asyncComponent";
import { decodeAccessToken } from "../security";
import Notifications from  '../app/components/Notifications';

const RestrictedRoute = ({ component: Component, accessToken, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      accessToken ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/signin",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

class App extends Component {
  componentWillMount() {
    window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;
    if (this.props.initURL === "") {
      this.props.setInitUrl(this.props.history.location.pathname);
    }
  }

  render() {
    const {
      match,
      location,
      locale,
      accessToken,
      initURL,
      isDirectionRTL
    } = this.props;
    const userRole = accessToken ? decodeAccessToken().userRole : '';
    if (location.pathname === "/") {
      if (accessToken === null) {
        return <Redirect to={"/signin"} />;
      } else if (initURL === "" || initURL === "/" || initURL === "/signin") {
        if (userRole === "ADMINISTRATOR")
          return <Redirect to={"/app/admin/projects"} />;
        else if (userRole === "PC")
          return <Redirect to={"/app/project-coordinator/projects"} />;
        else if (userRole === "APC")
          return <Redirect to={"/app/assistant-project-coordinator/projects"} />;
        else if (userRole === "STUDENT")
          return <Redirect to={"/app/student/my-project"} />;
        else
          return <Redirect to={"/"} />;
      } else {
        return <Redirect to={initURL} />;
      }
    }
    const applyTheme = createMuiTheme(defaultTheme);

    if (isDirectionRTL) {
      applyTheme.direction = "rtl";
      document.body.classList.add("rtl");
    } else {
      document.body.classList.remove("rtl");
      applyTheme.direction = "ltr";
    }

    const currentAppLocale = AppLocale[locale.locale];
    return (
      <MuiThemeProvider theme={applyTheme}>
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <IntlProvider
            locale={currentAppLocale.locale}
            messages={currentAppLocale.messages}
          >
            <RTL>
              <div className="app-main">
                <Switch>
                  <RestrictedRoute
                    path={`${match.url}app`}
                    accessToken={accessToken}
                    component={MainApp}
                  />
                  <Route path="/signin" component={SignIn} />
                  <Route
                    component={asyncComponent(() =>
                      import("components/Error404")
                    )}
                  />
                </Switch>
                <Notifications/>
              </div>
            </RTL>
          </IntlProvider>
        </MuiPickersUtilsProvider>
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = ({ settings, auth }) => {
  const { sideNavColor, locale, isDirectionRTL } = settings;
  const { accessToken, initURL } = auth;
  return { sideNavColor, locale, isDirectionRTL, accessToken, initURL };
};

export default connect(
  mapStateToProps,
  { setInitUrl }
)(App);
