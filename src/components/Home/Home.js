import React, { Component } from "react";
import anime from "animejs/lib/anime.es.js";

// img
import bgHome from "../../assets/img/projet.jpg";
import webnrollsBig from "../../assets/img/webnrolls-big.png";
import webnrollsSmall from "../../assets/img/webnrolls-small.png";

// Component
import HexagonHoverEffect3 from "./HexagonHoverEffect/HexagonHoverEffect3";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isGameOn: false,
      pageIsLoad: false,
    };
  }

  componentDidMount() {
    this._animationPageLoad();
  }

  _animationPageLoad() {
    const logo = document.querySelector(".logo");
    const logoTitle = document.querySelector("#logo-title");
    logo.style.opacity = 0;
    logoTitle.style.opacity = 0;

    let tl = anime.timeline();
    // sidebar anim
    tl.add({
      targets: logo,
      keyframes: [
        { translateX: -60, opacity: 0 },
        { translateX: 0, opacity: 1 },
      ],
      duration: 500,
      easing: "linear",
      delay: 2000,
      complete: function (anim) {
        logo.removeAttribute("style");
      },
    });

    tl.add({
      targets: logoTitle,
      keyframes: [
        { translateX: -60, opacity: 0 },
        { translateX: 0, opacity: 1 },
      ],
      duration: 500,
      easing: "linear",
      complete: function (anim) {
        logoTitle.removeAttribute("style");
      },
    });
  }

  _initGame = (isGameOn) => {
    this.setState({
      isGameOn: isGameOn,
    });
  };

  render() {
    return (
      <section id="home">
        <div className="bg-home-wrapper">
          <img src={bgHome} alt="bg-home" className="bg-home" />
        </div>

        <HexagonHoverEffect3
          /* initGame={this._initGame}
          isGameOn={this.state.isGameOn}
          pageIsLoad={this.state.pageIsLoad} */
        />

        <div
          className={"content" + (this.state.isGameOn ? " hide-for-game" : "")}
        >
          <picture>
            <source srcSet={webnrollsBig} media="(min-width: 768px)" />
            <img
              id="logo"
              className={"logo"}
              src={webnrollsSmall}
              alt="webnrollsBig"
            />
          </picture>

          <h1 id="logo-title" className="h1">
            Bonjour,
            <br className="is-mobile" /> je suis <span>Adrien Vidal</span>.
            <br />
            Développeur front-end
          </h1>
        </div>
      </section>
    );
  }
}

export default Home;
