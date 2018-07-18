import React from "react";
import Info from "./Info/Info";
import Contact from "./Contact/Contact";
import Projects from "./Projects/Projects";
import Navbar from "../Components/Navbar/Navbar";

import { Route, Switch, Redirect, BrowserRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "./Page.css";

const page = props => {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Navbar />
        <div className="Page">
          <Route
            render={({ location }) => (
              <React.Fragment>
                <Route exact path={`${process.env.PUBLIC_URL}/`} render={() => <Redirect to={`${process.env.PUBLIC_URL}/info`} />} />
                <TransitionGroup>
                  <CSSTransition
                    key={location.key}
                    classNames="fade"
                    timeout={{ enter: 300, exit: 0 }}
                  >
                    <Switch location={location}>
                      <Route path={`${process.env.PUBLIC_URL}/info`}  exact component={Info} />
                      <Route path={`${process.env.PUBLIC_URL}/projects`} exact component={Projects} />
                      <Route path={`${process.env.PUBLIC_URL}/contact`} exact component={Contact} />
                      
                      <Route render={() => <div>Page Not Found</div>} />
                    </Switch>
                  </CSSTransition>
                </TransitionGroup>
              </React.Fragment>
            )}
          />
        </div>
      </React.Fragment>
    </BrowserRouter>
  );
};

export default page;
