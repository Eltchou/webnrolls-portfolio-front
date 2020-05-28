import React, { Component } from "react";

export class HexagonBg extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rowsCount: 12,
      hexagonsCount: 16,
    };
  }

  componentDidMount() {
    // this._displayHexagonsOld(this.state.rowsCount, this.state.hexagonsCount);
  }

  _displayHexagonsOld(rowCount, hexagonCount) {
    let wrapper = document.getElementById("hexagon-hover-effect");

    // generate rows
    for (let index = 0; index < rowCount; index++) {
      const rowIndex = index;
      var row = document.createElement("div");
      row.setAttribute("class", "row");

      wrapper.append(row);

      // generate hexagons
      for (let index = 0; index < hexagonCount; index++) {
        var hexagon = document.createElement("div");
        hexagon.setAttribute("id", `row-${rowIndex}-hex-${index}`);
        hexagon.setAttribute("class", "hexagon-home");

        row.append(hexagon);
      }
    }
  }

  _displayHexagons() {
    let rows = [];
    for (let i = 0; i < this.state.rowsCount; i++) {
      let hexagons = [];
      for (let i = 0; i < this.state.hexagonsCount; i++) {
        hexagons.push(
          <div
            className="hexagon-home"
            key={i}
            onClick={(e) => this._removeExagon(e)}
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

  _removeExagon(e) {
    const element = e.currentTarget;

    element.classList.add("scale-down-enter-active");
  }

  render() {
    return <div id="hexagon-hover-effect">{this._displayHexagons()}</div>;
  }
}

export default HexagonBg;
