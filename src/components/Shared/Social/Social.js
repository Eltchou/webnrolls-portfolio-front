import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";

class Social extends Component {
  constructor(props) {
    super(props);

    this.state = {
      socialData: [],
    };
  }

  componentDidMount() {
    this._getDataSocial();
  }

  _getDataSocial() {
    const social = [
      {
        icon: "fa-github",
        link: "https://github.com/Webnrolls",
      },
      {
        icon: "fa-linkedin",
        link: "https://www.linkedin.com/in/adrien-vidal-308b4864/",
      },
    ];

    this.setState({
      socialData: social,
    });
  }

  _displaySocialItems() {
    const animationDelay = 300;
    const socialItems = this.state.socialData.map((data, i) => {
      return (
        <CSSTransition
          in={true}
          appear
          timeout={500}
          classNames="bounce-in-fwd"
          key={i}
        >
          <div
            className="social-item"
            style={{
              animationDelay: `${i * animationDelay}ms`,
              animationDuration: `500ms`,
            }}
          >
            <a href={data.link} target="_blank">
              <i class={"fab " + data.icon}></i>
            </a>
          </div>
        </CSSTransition>
      );
    });

    return socialItems;
  }

  render() {
    return <div className="social">{this._displaySocialItems()}</div>;
  }
}

export default Social;
