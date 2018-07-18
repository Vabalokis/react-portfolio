import React, { Component } from "react";
import * as firebase from "firebase";
import { FormGroup, Grid, Row, Col } from "react-bootstrap";
import "./Contact_Form.css";

const config = {
  apiKey: "AIzaSyDJoA_cSenrd1MUzyj7ql3elGOAZ5AcYCo",
  authDomain: "contact-31b11.firebaseapp.com",
  databaseURL: "https://contact-31b11.firebaseio.com",
  projectId: "contact-31b11",
  storageBucket: "contact-31b11.appspot.com",
  messagingSenderId: "115149996641"
};

firebase.initializeApp(config);

export default class Contact_Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
      validation_message: ""
    };
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  validateEmail = email => {
    let regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
  };

  handleFormValidation = () => {
    if (
      this.state.name === "" ||
      this.state.email === "" ||
      this.state.message === ""
    ) {
      this.setState({ validation_message: "Not all text fields are filled" });
      return false;
    } else if (!this.validateEmail(this.state.email)) {
      this.setState({ validation_message: "Invalid email adress" });
      return false;
    } else {
      this.setState({ validation_message: "Message sent sucessfully!" });
      return true;
    }
  };

  handleSubmit = event => {
    const rootref = firebase.database().ref("contacts");
    event.preventDefault();
    if (this.handleFormValidation()) {
      rootref.push({
        name: this.state.name,
        email: this.state.email,
        message: this.state.message
      });
      this.clearFormFields();
    }
  };

  clearFormFields = () => {
    this.setState({
      name: "",
      email: "",
      message: ""
    });
    document.getElementById("form_name").value = "";
    document.getElementById("form_email").value = "";
    document.getElementById("form_message").value = "";
  }

  render() {
    return (
      <div className="Contact_Form">
        <form id="contactForm" onSubmit={this.handleSubmit}>
          <Grid fluid>
            <Row>
              <Col md={6}>
                <FormGroup>
                  <label htmlFor="form_name">Name : </label>
                  <input
                    id="form_name"
                    className="form-control"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleChange}
                    type="text"
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <label htmlFor="form_email">Email :</label>
                  <input
                    id="form_email"
                    className="form-control"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                    type="text"
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <FormGroup>
                  <label htmlFor="form_message">Message :</label>
                  <textarea
                    id="form_message"
                    className="form-control"
                    name="message"
                    value={this.state.message}
                    onChange={this.handleChange}
                  />
                </FormGroup>
                <input className="form-control" type="submit" value="Submit" />
                <p className="validation_status">
                  {this.state.validation_message}
                </p>
              </Col>
            </Row>
          </Grid>
        </form>
      </div>
    );
  }
}
