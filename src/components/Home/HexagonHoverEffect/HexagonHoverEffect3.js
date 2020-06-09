import React, { Component } from "react";
import anime from "animejs/lib/anime.es.js";

export class HexagonBg extends Component {
  constructor(props) {
    super(props);

    this.state = {
      windowWidth: 0,
      windowHeight: 0,
      hexagonsCount: 0,
      rowsCount: 0,
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
    this.state.windowWidth = window.innerWidth;
    this.state.windowHeight = window.innerHeight;
    this._displayHexagons();
  };

  _displayHexagons() {
    // get rows and hex count
    var containerHex = document.getElementById("hexagon-hover-effect");
    const hexHeight = 110;
    const hexWidth = 100;
    var w = containerHex.offsetWidth;
    var h = containerHex.offsetHeight;

    this.state.rowsCount = Math.round(this.state.windowHeight / hexHeight) + 5;
    this.state.hexagonsCount =
      Math.round(this.state.windowWidth / hexWidth) + 5;

    // creates rows and hex
    let rows = [];

    for (let i = 0; i < this.state.rowsCount; i++) {
      let hexagons = [];
      for (let i = 0; i < this.state.hexagonsCount; i++) {
        hexagons.push(
          <div className="hexagon1" key={i}>
            <div className="inner">
              <div className="inner-bg"></div>
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

    this.setState(
      {
        gridHexagons: rows,
      },
      () => {
        this._initHex(true);
      }
    );
  }

  _initHex(firstTime, randomIndex) {
    const hexagons = document.querySelectorAll(".hexagon1");
    hexagons.forEach((hex) => {
      hex.style.opacity = 0;
    });

    let tl = anime.timeline();

    tl.add(
      {
        targets: hexagons,
        opacity: 1,
        easing: "easeOutExpo",
        delay: anime.stagger(100, {
          grid: [this.state.hexagonsCount, this.state.rowsCount],
          from: randomIndex ? randomIndex : 0,
        }),
        complete: (anim) => {
          this._removeHex(firstTime);
        },
      },
      1500
    );
  }

  _removeHex(firstTime) {
    const hexagons = document.querySelectorAll(".hexagon1");

    const that = this;

    hexagons.forEach((hex, index) => {
      firstTime && hex.addEventListener("click", removeAnim);

      function removeAnim() {
        hex.style.zIndex = 100;

        hexagons.forEach((hex, index) => {
          hex.style.pointerEvents = "none";
        });

        const hexInner = hex.querySelector(".inner");

        if (navigator.userAgent.toLowerCase().indexOf("firefox") !== -1) {
          console.log("firefox");
          // fix .inner for firefox
          anime({
            targets: hexInner,
            background: "#4CAF50",
            duration: 0,
            delay: 0,
          });
        }

        let tl = anime.timeline({
          duration: 750,
        });

        tl.add({
          targets: hex,
          keyframes: [
            {
              scale: 1,
              duration: 0,
              easing: "cubicBezier(0.455, 0.03, 0.515, 0.955)",
            },
            {
              scale: 1.3,
              duration: 600,
              easing: "cubicBezier(0.455, 0.03, 0.515, 0.955)",
            },
            {
              scale: 1.3,
              duration: 300,
              rotate: "180deg",
              easing: "cubicBezier(0.455, 0.03, 0.515, 0.955)",
            },
            { scale: 1, duration: 500, delay: 1000, easing: "easeOutElastic" },
          ],
          // delay: 50
        });

        tl.add(
          {
            targets: ".hexagon1 .inner",
            keyframes: [
              { background: "#4CAF50", duration: 50, easing: "linear" },
              {
                background: "#fff",
                duration: 50,
                delay: 500,
                easing: "linear",
              },
              {
                background: "#111",
                duration: 50,
                delay: 500,
                easing: "linear",
              },
            ],
            delay: anime.stagger(200, {
              grid: [that.state.hexagonsCount, that.state.rowsCount],
              from: index,
            }),
            //}, 1650);
          },
          "-=700"
        );

        tl.add(
          {
            targets: ".hexagon1",
            keyframes: [
              {
                scale: 1,
                duration: 50,
                easing: "cubicBezier(0.455, 0.03, 0.515, 0.955)",
              },
              {
                scale: 0,
                duration: 600,
                easing: "cubicBezier(0.455, 0.03, 0.515, 0.955)",
              },
            ],
            delay: anime.stagger(200, {
              grid: [that.state.hexagonsCount, that.state.rowsCount],
              from: index,
            }),
            complete: function (anim) {
              hexagons.forEach((hex2) => {
                // hex2.removeEventListener("click", removeAnim);
                hex2.removeAttribute("style");
                hex2.querySelector(".inner").removeAttribute("style");
              });

              const randomIndex = Math.round(
                Math.random() *
                  (that.state.hexagonsCount * that.state.rowsCount)
              );
              console.log("randomIndex", randomIndex);

              that._initHex(false, randomIndex);
            },
          },
          "-= 1000"
        );
      }
    });
  }

  render() {
    return <div id="hexagon-hover-effect">{this.state.gridHexagons}</div>;
  }
}

export default HexagonBg;
