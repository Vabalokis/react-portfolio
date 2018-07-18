import React from "react";
import { Grid, Row, Col } from "react-bootstrap";
import "./Info.css";

const info = props => {
  return (
    <Grid className="Info">
      <Row>
        <Col md={6} sm={12} className="col-mr-2pr">
          <h1>Deividas Raila</h1>
          <p>Junior web developer searching for opportunities.</p>
          <ul>
            <li>Keeping up to date with new technologies</li>
            <li>Striving for a clean code</li>
            <li>Eager to learn</li>
          </ul>
          <p>
            I have knowledge of angular, react, php, javascript, css
            post-processors, package managers, version control systems.
          </p>
          <p>
            Contact me if you are employer searching for a web developer or just
            in need of a cheap website.
          </p>
        </Col>
        <Col md={5} sm={12} className="linkContainer">
          <a className="downloadLink" href="">
            Download resume in .pdf &emsp;
            <i className="fa fa-download fa-3x" />
          </a>
          <a className="downloadLink" href="">
            Download resume in .doc &emsp;
            <i className="fa fa-download fa-3x" />
          </a>
          <a className="downloadLink" href="">
            Download resume in .docx &emsp;
            <i className="fa fa-download fa-3x" />
          </a>
        </Col>
      </Row>
    </Grid>
  );
};

export default info;
