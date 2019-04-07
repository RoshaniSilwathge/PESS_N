import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { Clear } from "@material-ui/icons";
import CardBox from "components/CardBox";
import ProjectForm from "../../../components/admin/projects/ProjectForm";

class NewProjectPage extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSearchKey(e) {}

  render() {
    return (
      <div className="app-wrapper">
        <div className="row project-wrapper">
          <CardBox styleName="col-lg-12">
            <div className="row">
              <div className="col-md-9"><h3 className="mt-0">New Project</h3></div>
              <div className="col-md-3 project-back-btn-wrapper">
                <Link to="/app/admin/projects">
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
                <ProjectForm mode="CREATE"/>
              </div>
            </div>
          </CardBox>
        </div>
      </div>
    );
  }
}

export default NewProjectPage;
