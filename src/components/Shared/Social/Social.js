import React, { Component } from "react";

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
          <a href="https://github.com/Webnrolls" target="_blank">
            <i class="fab fa-github"></i>
          </a>
        </div>
        <div className="social-item">
          <a href="https://www.linkedin.com/in/adrien-vidal-308b4864/" target="_blank">
            <i class="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    );
  }
}

export default Social;
