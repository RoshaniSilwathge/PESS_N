import React from 'react';
import ContainerHeader from 'components/ContainerHeader/index';
import IntlMessages from 'util/IntlMessages';

class ReviewStudentsPage extends React.Component {

  render() {
    return (
      <div className="app-wrapper">
        <ContainerHeader match={this.props.match} title={<IntlMessages id="pages.reviewStudents"/>}/>
        <div className="d-flex justify-content-center">
        </div>

      </div>
    );
  }
}

export default ReviewStudentsPage;