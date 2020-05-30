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
    for (let i = 0; i < this.state.rowsCount; i++) {
      let hexagons = [];
      for (let i = 0; i < this.state.hexagonsCount; i++) {
        hexagons.push(
          <div
            className="hexagon1"
            key={i}
            onClick={(e) => this._activeExagon(e)}
          />
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
    // remove hexagon
    element.classList.add("remove-hex");

    // add hexagon
    setTimeout(() => {
      element.classList.replace("remove-hex", "add-hex");

      const animationEndName = getAnimationEndEventName(element);
      element.addEventListener(animationEndName, callback);

      function callback(){
        element.classList.remove("add-hex");
        element.removeEventListener(animationEndName, callback);
      }

    }, 3000);
  }

  render() {
    return <div id="hexagon-hover-effect">{this._displayHexagons()}</div>;
  }
}

export default HexagonBg;
