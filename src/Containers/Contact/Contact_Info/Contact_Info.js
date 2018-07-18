import React from "react";
import "./Contact_Info.css";
import { Grid, Row, Col } from "react-bootstrap";

const contact_info = props => {
  return (
    <React.Fragment>
      <Grid fluid className="Contact_Info">
        <Row>
          <Col md={12}>
            <p className="smalltext">Telephone</p>
            <a data-rel="external" href="tel:+37060395541">+370 60395541</a>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <p className="smalltext">Email</p>
            <a data-rel="external" href="mailto:deividas.rail@gmail.com">deividas.rail@gmail.com</a>
          </Col>
        </Row>
      </Grid>
    </React.Fragment>
  );
};

export default contact_info;


