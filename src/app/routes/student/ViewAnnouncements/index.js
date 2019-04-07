import React from 'react';
import ContainerHeader from 'components/ContainerHeader/index';
import IntlMessages from 'util/IntlMessages';

class ViewAnnouncementsPage extends React.Component {

  render() {
    return (
      <div className="app-wrapper">
        <ContainerHeader match={this.props.match} title={<IntlMessages id="pages.viewAnnouncements"/>}/>
        <div className="d-flex justify-content-center">
        </div>

      </div>
    );
  }
}

export default ViewAnnouncementsPage;