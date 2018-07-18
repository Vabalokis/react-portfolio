import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import "./Navbar.css";
import { Grid, Row, Col } from "react-bootstrap";

class Navbar extends Component {
  componentDidMount() {
    this.buttonActiveRefresh(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.buttonActiveRefresh(nextProps);
  }

  buttonActiveRefresh = prp => {
    let buttons = document.getElementsByClassName("navButton");
    for (let i = 0; i < buttons.length; i++) {
      if (buttons[i].getAttribute("href") === prp.location.pathname) {
        buttons[i].className = "navButton nav_active";
      } else {
        buttons[i].className = "navButton";
      }
    }
  };

  render() {
    return (
      <Grid className="cont">
        <Row id="myDIV">
          <div className="Navbar">
            <Col sm={12} md={4}>
              <Link className="navButton" to={`${process.env.PUBLIC_URL}/info`}>
                ABOUT
              </Link>
            </Col>
            <Col sm={12} md={4}>
              <Link className="navButton" to={`${process.env.PUBLIC_URL}/projects`}>
                PROJECTS
              </Link>
            </Col>
            <Col sm={12} md={4}>
              <Link className="navButton" to={`${process.env.PUBLIC_URL}/contact`}>
                CONTACT
              </Link>
            </Col>
          </div>
        </Row>
      </Grid>
    );
  }
}

export default withRouter(Navbar);
