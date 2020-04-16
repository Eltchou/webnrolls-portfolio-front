import React, { Component } from "react";

// react fontAwesome
import {
  faHome,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Social extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // hasError: false
    };
  }

  render() {
    return (
      <div className="social">
        <div className="social-item">
          <a href="">
            <FontAwesomeIcon icon={faHome} />
          </a>
        </div>
        <div className="social-item">
          <a href="">
            <FontAwesomeIcon icon={faHome} />
          </a>
        </div>
      </div>
    );
  }
}

export default Social;
