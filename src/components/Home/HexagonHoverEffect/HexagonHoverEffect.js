import React, { Component } from "react";

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
            onClick={(e) => this._removeExagon(e)}
          >
            {/* <div className="hex-front">
              <p>front</p>
            </div>
            <div className="hex-back">
              <p>back</p>
            </div> */}
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

  _removeExagon(e) {
    const element = e.currentTarget;

    element.classList.toggle("active");
  }

  render() {
    return <div id="hexagon-hover-effect">{this._displayHexagons()}</div>;
  }
}

export default HexagonBg;
