import React, { Component } from "react";

// react fontAwesome
import {
  faHome,
  faUser,
  faLaptopCode,
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { NavLink  } from "react-router-dom";

class Nav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // hasError: false
    };
  }

  render() {
    return (
      <nav>
        <div className="nav-item">
          <NavLink exact={true} to="/">
            <FontAwesomeIcon icon={faHome} />
          </NavLink>
        </div>
        <div className="nav-item">
          <NavLink to="/about">
            <FontAwesomeIcon icon={faUser} />
          </NavLink>
        </div>
        <div className="nav-item">
          <NavLink to="/portfolio">
            <FontAwesomeIcon icon={faLaptopCode} />
          </NavLink>
        </div>
        <div className="nav-item">
          <NavLink to="/contact">
            <FontAwesomeIcon icon={faEnvelope} />
          </NavLink>
        </div>
      </nav>
    );
  }
}

export default Nav;
