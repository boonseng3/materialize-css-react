import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import SimpleSideNav from "./components/SimpleSideNav";
import FixedSideNav from "./components/FixedSideNav";
import FixedNavBar from "./components/FixedNavBar";
import TransparentNavbar from "./components/TransparentNavbar";
import { Link, Switch, Route } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons";
library.add(fab, faCheckSquare, faCoffee);

class App extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            {" "}
            <Link to="/simpleSideNav">Simple Nav bar</Link>
          </li>
          <li>
            {" "}
            <Link to="/fixedSideNav">Fixed Side Nav</Link>
          </li>
          <li>
            {" "}
            <Link to="/fixedNavbar">Fixed Nav bar</Link>
          </li>
          <li>
            {" "}
            <Link to="/transparentNavbar">Transparent Nav bar</Link>
          </li>
          <li />
        </ul>

        <Switch>
          <Route exact path="/fixedNavbar" component={FixedNavBar} />
          <Route exact path="/simpleSideNav" component={SimpleSideNav} />
          <Route exact path="/fixedSideNav" component={FixedSideNav} />
          <Route
            exact
            path="/transparentNavbar"
            component={TransparentNavbar}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
