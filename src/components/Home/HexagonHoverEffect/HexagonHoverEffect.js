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
      const rowIndex = i;
      let hexagons = [];
      for (let i = 0; i < this.state.hexagonsCount; i++) {
        hexagons.push(
          <div
            id={`row-${rowIndex}-hex-${i}`}
            className="hexagon-home"
            key={i}
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

  render() {
    return <div id="hexagon-hover-effect">{this._displayHexagons()}</div>;
  }
}

export default HexagonBg;
