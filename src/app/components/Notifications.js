import React from "react";
import { connect } from "react-redux";
import {bindActionCreators} from 'redux';
import {
  NotificationContainer,
  NotificationManager
} from "react-notifications";
import {
  hidelobalSuccessMsg,
  hidelobalErrorMsg
} from "../../actions/Notifications";

class Notifications extends React.Component {
  componentDidUpdate() {
    if (this.props.showSuccess) {
      setTimeout(() => {
        this.props.actions.hidelobalSuccessMsg();
      }, 100);
    }

    if (this.props.showError) {
        setTimeout(() => {
          this.props.actions.hidelobalErrorMsg();
        }, 100);
      }
  }

  render() {
    return (
      <div>
        {this.props.showSuccess && NotificationManager.success(this.props.successMsg)}
        {this.props.showError && NotificationManager.error(this.props.errorMsg)}
        <NotificationContainer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { showSuccess, successMsg, showError, errorMsg } = state.notifications;
  return { showSuccess, successMsg, showError, errorMsg };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({
            hidelobalSuccessMsg,
            hidelobalErrorMsg
        }, dispatch)
    };
  };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Notifications);
