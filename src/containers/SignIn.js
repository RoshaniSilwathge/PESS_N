import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {
  NotificationContainer,
  NotificationManager
} from "react-notifications";
import IntlMessages from "util/IntlMessages";
import CircularProgress from "@material-ui/core/CircularProgress";
import { hideMessage, showAuthLoader, userSignIn } from "actions/Auth";

class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "PESSADMIN",
      password: "zaq1xsw2@"
    };
  }

  componentDidUpdate() {
    if (this.props.showMessage) {
      setTimeout(() => {
        this.props.hideMessage();
      }, 100);
    } else {
      if (this.props.accessToken !== null) {
        this.props.history.push("/");
      }
    }
  }

  render() {
    const { username, password } = this.state;
    const { showMessage, loader, alertMessage } = this.props;
    return (
      <div className="app-login-container d-flex justify-content-center align-items-center animated slideInUpTiny animation-duration-3">
        <div className="app-login-main-content">
          <div className="app-logo-content d-flex align-items-center justify-content-center">
            <Link className="logo-lg" to="/" title="bit">
              <img
                src={require("assets/images/bit.png")}
                alt="jambo"
                title="bit"
              />
            </Link>
          </div>

          <div className="app-login-content">
            <div className="app-login-header mb-4" />

            <div className="app-login-form">
              <form>
                <fieldset>
                  <TextField
                    label={<IntlMessages id="appModule.email" />}
                    fullWidth
                    onChange={event =>
                      this.setState({ username: event.target.value })
                    }
                    defaultValue={username}
                    margin="normal"
                    className="mt-1 my-sm-3"
                  />
                  <TextField
                    type="password"
                    label={<IntlMessages id="appModule.password" />}
                    fullWidth
                    onChange={event =>
                      this.setState({ password: event.target.value })
                    }
                    defaultValue={password}
                    margin="normal"
                    className="mt-1 my-sm-3"
                  />

                  <div className="mb-3 d-flex align-items-center justify-content-between">
                    <div>
                      <Button
                        onClick={() => {
                          this.props.showAuthLoader();
                          this.props.userSignIn({ username, password });
                        }}
                        variant="contained"
                        color="primary"
                      >
                        <IntlMessages id="appModule.signIn" />
                      </Button>
                    </div>
                  </div>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
        {loader && (
          <div className="loader-view">
            <CircularProgress />
          </div>
        )}
        {showMessage && NotificationManager.error(alertMessage)}
        <NotificationContainer />
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  const { loader, alertMessage, showMessage, accessToken } = auth;
  return { loader, alertMessage, showMessage, accessToken };
};

export default connect(
  mapStateToProps,
  {
    userSignIn,
    hideMessage,
    showAuthLoader
  }
)(SignIn);
