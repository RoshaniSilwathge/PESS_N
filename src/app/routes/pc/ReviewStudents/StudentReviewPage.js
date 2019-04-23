import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { Clear } from "@material-ui/icons";
import CardBox from "components/CardBox";

class StudentReviewPage extends React.Component {
  render() {
    return (
      <div className="app-wrapper">
        <div className="row project-wrapper">
          <CardBox styleName="col-lg-12">
            <div className="row">
              <div className="col-md-9">
                <h3 className="mt-0">Review Student</h3>
              </div>
              <div className="col-md-3 project-back-btn-wrapper">
                <Link to="/app/project-coordinator/students">
                  <Button
                    size="small"
                    variant="contained"
                    className="jr-btn bg-green text-white"
                  >
                    <Clear />
                  </Button>
                </Link>
              </div>
              <div className="col-md-12" />
            </div>
          </CardBox>
          <CardBox styleName="col-lg-12">
            <div className="row">
              <div className="col-md-12">
                <h3 className="mt-0">Submission 01 - Add Project</h3>
              </div>
              <div className="col-md-12"></div>
            </div>
          </CardBox>
          <CardBox styleName="col-lg-12">
            <div className="row">
              <div className="col-md-12">
                <h3 className="mt-0">Submission 02 - Add Supervisor</h3>
              </div>
              <div className="col-md-12"></div>
            </div>
          </CardBox>
          <CardBox styleName="col-lg-12">
            <div className="row">
              <div className="col-md-12">
                <h3 className="mt-0">Submission 03 - Add Client</h3>
              </div>
              <div className="col-md-12"></div>
            </div>
          </CardBox>
          <CardBox styleName="col-lg-12">
            <div className="row">
              <div className="col-md-12">
                <h3 className="mt-0">Submission 01 - Progress Report 01</h3>
              </div>
              <div className="col-md-12"></div>
            </div>
          </CardBox>
          <CardBox styleName="col-lg-12">
            <div className="row">
              <div className="col-md-12">
                <h3 className="mt-0">Submission 01 - Progress Report 02</h3>
              </div>
              <div className="col-md-12"></div>
            </div>
          </CardBox>
          <CardBox styleName="col-lg-12">
            <div className="row">
              <div className="col-md-12">
                <h3 className="mt-0">Submission 01 - Progress Report 03</h3>
              </div>
              <div className="col-md-12"></div>
            </div>
          </CardBox>
          <CardBox styleName="col-lg-12">
            <div className="row">
              <div className="col-md-12">
                <h3 className="mt-0">Submission 01 - Progress Report 04</h3>
              </div>
              <div className="col-md-12"></div>
            </div>
          </CardBox>
          <CardBox styleName="col-lg-12">
            <div className="row">
              <div className="col-md-12">
                <h3 className="mt-0">Submission 01 - Progress Report 05</h3>
              </div>
              <div className="col-md-12"></div>
            </div>
          </CardBox>
          <CardBox styleName="col-lg-12">
            <div className="row">
              <div className="col-md-12">
                <h3 className="mt-0">Submission 01 - Progress Report 06</h3>
              </div>
              <div className="col-md-12"></div>
            </div>
          </CardBox>
          <CardBox styleName="col-lg-12">
            <div className="row">
              <div className="col-md-12">
                <h3 className="mt-0">Submission 01 - Progress Report 07</h3>
              </div>
              <div className="col-md-12"></div>
            </div>
          </CardBox>
          <CardBox styleName="col-lg-12">
            <div className="row">
              <div className="col-md-12">
                <h3 className="mt-0">Submission 01 - Progress Report 08</h3>
              </div>
              <div className="col-md-12"></div>
            </div>
          </CardBox>
          <CardBox styleName="col-lg-12">
            <div className="row">
              <div className="col-md-12">
                <h3 className="mt-0">Submission 01 - Progress Report 09</h3>
              </div>
              <div className="col-md-12"></div>
            </div>
          </CardBox>
          <CardBox styleName="col-lg-12">
            <div className="row">
              <div className="col-md-12">
                <h3 className="mt-0">Submission 01 - Progress Report 10</h3>
              </div>
              <div className="col-md-12"></div>
            </div>
          </CardBox>
          <CardBox styleName="col-lg-12">
            <div className="row">
              <div className="col-md-12">
                <h3 className="mt-0">Submission 01 - Intereem</h3>
              </div>
              <div className="col-md-12"></div>
            </div>
          </CardBox>
          <CardBox styleName="col-lg-12">
            <div className="row">
              <div className="col-md-12">
                <h3 className="mt-0">Submission 01 - Viva</h3>
              </div>
              <div className="col-md-12"></div>
            </div>
          </CardBox>
        </div>
      </div>
    );
  }
}

export default StudentReviewPage;
