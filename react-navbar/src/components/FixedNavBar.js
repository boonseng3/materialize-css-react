import React, { Component } from "react"
// import 'materialize-css'
import 'materialize-css/dist/css/materialize.min.css'
import M from "materialize-css/dist/js/materialize.min.js";

class SimpleSideNav extends Component {
    componentDidMount() {
        var elems = document.querySelectorAll('.sidenav');
        M.Sidenav.init(elems, {});
    }
    render() {

        return (
            <div>
                <div className="navbar-fixed">
                    <nav className="teal darken-4">
                        <div className="container">
                            <a href="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
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
                    </nav>
                </div>
                {/* // Side Navigation items, put after the fixed navbar */}
                <ul id="slide-out" className="sidenav">
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
        )

    }
}

export default SimpleSideNav;