import React, { Component } from "react";

export class HexagonBg extends Component {
  constructor(props) {
    super(props);

    this.state = {
      windowWidth: 0,
      windowHeight: 0,
      gridHexagons: [],
    };
  }

  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  updateDimensions = () => {
    this.state.windowWidth = window.innerWidth
    this.state.windowHeight = window.innerHeight
    this._displayHexagons()
  };

  _displayHexagons() {
    // get rows and hex count
    var containerHex = document.getElementById("hexagon-hover-effect");
    let rowsCount = 0;
    let hexagonsCount = 0;
    const hexHeight = 110;
    const hexWidth = 100;
    var w = containerHex.offsetWidth;
    var h = containerHex.offsetHeight;

    rowsCount = Math.round(this.state.windowHeight / hexHeight) + 5;
    hexagonsCount = Math.round(this.state.windowWidth / hexWidth) + 5;

    // creates rows and hex
    let rows = [];

    for (let i = 0; i < rowsCount; i++) {
      let hexagons = [];
      for (let i = 0; i < hexagonsCount; i++) {
        hexagons.push(
          <div
            className="hexagon1"
            key={i}
            onClick={(e) => this._removeExagon(e)}
          >
            <div className="inner"></div>
          </div>
        );
      }

      rows.push(
        <div className="row" key={i}>
          {hexagons}
        </div>
      );
    }

    this.setState({
      gridHexagons: rows,
    });
  }

  _removeExagon(e) {
    const { initGame, isGameOn, pageIsLoad } = this.props;
    const element = e.currentTarget;

    if (pageIsLoad) {
      // initgame
      !isGameOn && initGame(true);

      const elemClasses = element.classList;
      elemClasses.add("remove-hex");

      /* setTimeout(function () {
        elemClasses.replace("remove-hex", "add-hex");

        setTimeout(function () {
          elemClasses.remove("add-hex");
        }, 1000);
      }, 10000); */
    }
  }

  render() {
    return <div id="hexagon-hover-effect">{this.state.gridHexagons}</div>;
  }
}

export default HexagonBg;
