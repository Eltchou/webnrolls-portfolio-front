import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";

// img
import bgHome from "../../assets/img/bg-home.jpg";
import webnrollsBig from "../../assets/img/webnrolls-big.png";
import webnrollsSmall from "../../assets/img/webnrolls-small.png";

// utils
import {
  addClassNameAnimationAndRemoveItById,
  addClassNameTransitionById,
} from "../../utils/animations";

// Component
// import HexagonHoverEffect from "./HexagonHoverEffect/HexagonHoverEffect";
import HexagonHoverEffect2 from "./HexagonHoverEffect/HexagonHoverEffect2";

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

    // logo
    addClassNameAnimationAndRemoveItById(
      "logo",
      "slide-in-elliptic-top-fwd-appear-active",
      {
        animationDelay: `500ms`,
        animationDuration: `1000ms`,
      }
    );

    // logo-title
    addClassNameAnimationAndRemoveItById(
      "logo-title",
      "slide-in-elliptic-top-fwd-appear-active",
      {
        animationDelay: `1000ms`,
        animationDuration: `1000ms`,
      },
      () => {
        this.setState({
          pageIsLoad: true,
        });
      }
    );
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

        <HexagonHoverEffect2
          initGame={this._initGame}
          isGameOn={this.state.isGameOn}
          pageIsLoad={this.state.pageIsLoad}
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
