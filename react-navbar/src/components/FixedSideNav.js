import React, { Component } from "react";
// import 'materialize-css'
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class FixedSideNav extends Component {
  componentDidMount() {
    var elems = document.querySelectorAll(".sidenav");
    M.Sidenav.init(elems, {});
  }
  render() {
    return (
      <div>
        <nav className="blue darken-4">
          <div className="container">
            <div className="nav-wrapper">
              <a href="#" data-target="slide-out" className="sidenav-trigger">
                <i className="material-icons">menu</i>
              </a>
              <a href="#home" className="brand-logo">
                Logo
              </a>
              <ul id="nav-mobile" className="right hide-on-small-and-down">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <ul id="slide-out" className="sidenav sidenav-fixed">
          <h4 className="purple-text text-darken-4 center">Logo</h4>
          <li>
            <div className="divider" />
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon icon="coffee" /> Home
            </a>
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon icon={["fab", "facebook"]} /> About
            </a>
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon icon={["fab", "instagram"]} /> Contact
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default FixedSideNav;
