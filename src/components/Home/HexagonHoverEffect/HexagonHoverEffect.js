import React, { Component } from "react";

// utils
import { getAnimationEndEventName } from "../../../utils/eventListener";

export class HexagonBg extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rowsCount: 12,
      hexagonsCount: 16,
    };
  }

  _displayHexagons() {
    let rows = [];
    const icons = [
      {
        color: "red",
        icon: "fas fa-bomb",
      },
      {
        color: "#F44336",
        icon: "fab fa-codepen",
      },
      {
        color: "#E91E63",
        icon: "fab fa-github",
      },
      {
        color: "#00BCD4", //rgba(0, 188, 212, 1)
        icon: "fab fa-linkedin",
      },
      {
        color: "#9C27B0",
        icon: "fas fa-home",
      },
      {
        color: "#FF5722",
        icon: "fas fa-user",
      },
      {
        color: "#F44336",
        icon: "fas fa-home",
      },
      {
        color: "#F44336",
        icon: "fas fa-envelope",
      },
    ];
    for (let i = 0; i < this.state.rowsCount; i++) {
      let hexagons = [];
      for (let i = 0; i < this.state.hexagonsCount; i++) {
        const index = Math.floor(Math.random() * icons.length);
        const myColor = icons[index].color;
        const myIcon = icons[index].icon;

        // fas fa-bomb

        hexagons.push(
          <div
            className="hexagon1"
            key={i}
            onClick={(e) => this._activeExagon(e)}
          >
            <div className="hex-front"></div>
            <div className="hex-back" style={{ background: myColor }}>
              <i className={myIcon}></i>
            </div>
          </div>
        );
      }

      rows.push(
        <div className="row" key={i}>
          {hexagons}
        </div>
      );
    }
    return rows;
  }

  _activeExagon(e) {
    const element = e.currentTarget;
    element.classList.add("active");

    // add hexagon
    /* setTimeout(() => {
      element.classList.replace("remove-hex", "add-hex");

      const animationEndName = getAnimationEndEventName(element);
      element.addEventListener(animationEndName, callback);

      function callback(){
        element.classList.remove("add-hex");
        element.removeEventListener(animationEndName, callback);
      }

    }, 3000); */
  }

  render() {
    return <div id="hexagon-hover-effect">{this._displayHexagons()}</div>;
  }
}

export default HexagonBg;
