import React from "react";
import { Alert } from "reactstrap";
import CardBox from "components/CardBox";

const Banner = ({ msg }) => {
  return (
    <CardBox styleName="col-md-12">
        <div className="row">
          <Alert className="bg-primary shadow-lg text-white" style={{margin:'0 auto'}} color="primary">
            {msg}
          </Alert>
        </div>
      </CardBox>
  );
};

export default Banner;
