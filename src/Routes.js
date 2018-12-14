import React, { Component } from "react";
import { Route, Router, Switch } from "react-router-dom";
import Home from "./components/Home/home";

import Navbar from "./components/Navbar/Navbar";
import Copyright from "./components/Copyright/Copyright";
import NotFound from "./components/404/404"
import history from "./History";

// React Google Analytics Initializing
//ReactGA.initialize('UA-130584601-1');


class Routers extends Component {

  componentDidMount() {
    /*
    ReactGA.pageview(window.location.pathname);
    history.listen((location => {
      ReactGA.pageview(window.location.pathname)
    }));
    */
  }
  render() {
    return (
      <Router history={history}>
        <div>

          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="*" component={NotFound} />
          </Switch>
          <Copyright />
        </div>

      </Router>
    );
  }
}

export default Routers;
