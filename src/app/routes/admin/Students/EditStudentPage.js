import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { Clear } from "@material-ui/icons";
import CardBox from "components/CardBox";
import StudentForm from "../../../components/admin/students/StudentForm";

class EditStudentPage extends React.Component {

  render() {
    return (
      <div className="app-wrapper">
        <div className="row project-wrapper">
          <CardBox styleName="col-lg-12">
            <div className="row">
            <div className="col-md-9"><h3 className="mt-0">Edit Student</h3></div>
              <div className="col-md-3 project-back-btn-wrapper">
                <Link to="/app/admin/students">
                  <Button
                    size="small"
                    variant="contained"
                    className="jr-btn bg-green text-white"
                  >
                    <Clear />
                  </Button>
                </Link>
              </div>
              <div className="col-md-12">
                <StudentForm mode="UPDATE"/>
              </div>
            </div>
          </CardBox>
        </div>
      </div>
    );
  }
}

export default EditStudentPage;
