import React, { Component } from "react";
import Map from "../../Components/GoogleMap/GoogleMap";
import Contact_Form from "./Contact_Form/Contact_Form";
import "./Contact.css";
import { Col, Row, Grid } from "react-bootstrap";
import Contact_Info from "./Contact_Info/Contact_Info";

export default class Contact extends Component {
  render() {
    return (
      <Grid className="Contact">
        <Map isMarkerShown />
        <Row className="Contact_lower">
          <Col md={5}>
            <Contact_Info />
          </Col>
          <Col md={7}>
            <Contact_Form />
          </Col>
        </Row>
      </Grid>
    );
  }
}
