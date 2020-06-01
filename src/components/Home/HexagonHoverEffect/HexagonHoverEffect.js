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
        color: "#00BCD4",
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
        icon: "fab fa-js",
      },
      {
        color: "#F44336",
        icon: "fas fa-envelope",
      },
    ];
    for (let i = 0; i < this.state.rowsCount; i++) {
      let hexagons = [];
      for (let i = 0; i < this.state.hexagonsCount; i++) {
        const indexIcon = Math.floor(Math.random() * icons.length);
        const myColor = icons[indexIcon].color;
        const myIcon = icons[indexIcon].icon;

        hexagons.push(
          <div
            className="hexagon1"
            key={i}
            onClick={(e) =>
              this._activeExagon(e, indexIcon == 0 ? true : false)
            }
            // style={{ border: indexIcon == 0 ? "2px solid red" : "" }}
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

  _activeExagon(e, isBomb) {
    const { initGame, isGameOn, pageIsLoad } = this.props;

    if (pageIsLoad) {
      // initgame
      !isGameOn && initGame();

      // active hexagon
      const element = e.currentTarget;
      const elementClasses = element.classList;
      for (let elemClass in elementClasses) {
        if (elementClasses[elemClass] == "inactive") {
          elementClasses.replace("inactive", "active");
        } else {
          elementClasses.add("active");
        }
      }

      // destroy
      if (isBomb) {
        console.log("destroy");

        const animationEndName = getAnimationEndEventName(element);
        element.addEventListener(animationEndName, inactiveAllElements);
        function inactiveAllElements() {
          const hexagonsElems = document.getElementsByClassName("hexagon1");
          let elemCounter = 0;
          for (let elem in hexagonsElems) {
            const elemClasses = hexagonsElems[elem].classList;

            for (let elemClass in elemClasses) {
              if (elemClasses[elemClass] == "active") {
                elemClasses.replace("active", "inactive");

                hexagonsElems[elem].style["animation-delay"] =
                  50 * elemCounter + "ms";

                setTimeout(() => {
                  hexagonsElems[elem].removeAttribute("style");
                }, 1000);

                elemCounter++;
              }
            }
          }

          element.removeEventListener(animationEndName, inactiveAllElements);
        }
      }
    }
  }

  render() {
    return <div id="hexagon-hover-effect">{this._displayHexagons()}</div>;
  }
}

export default HexagonBg;
