import React, { Component } from "react";
import { socialData } from "../../../API/socialData";

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
    this.setState({
      socialData: socialData,
    });
  }

  _displaySocialItems() {
    const socialItems = this.state.socialData.map((data, i) => {
      return (
        <div className="social-item" key={i}>
          <a href={data.link} target="_blank" rel="noopener noreferrer">
            <i className={"fab " + data.icon}></i>
          </a>
        </div>
      );
    });

    return socialItems;
  }

  render() {
    return <div className="social">{this._displaySocialItems()}</div>;
  }
}

export default Social;
