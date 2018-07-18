import React, { Component } from "react";
import Footer from "./Components/Footer/Footer";
import "./App.css";

import Page from "./Containers/Page";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Page />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
