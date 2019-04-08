import React from 'react';
import CardBox from "components/CardBox";
import ChangePasswordForm from '../../components/ChangePasswordForm';
class SettingsPage extends React.Component {

  render() {
    return (
      <div className="app-wrapper">
        <div className="row project-wrapper">
          <CardBox styleName="col-lg-12">
            <div className="row">
              <div className="col-md-9">
                <h3 className="mt-0">Change password</h3>
              </div>
              <div className="col-md-12">
                <ChangePasswordForm/>
              </div>
            </div>
          </CardBox>
        </div>
      </div>
    );
  }
}

export default SettingsPage;