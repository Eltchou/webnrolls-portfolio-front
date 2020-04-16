import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";

// img
import bgHome from "../../assets/img/bg-home-1.jpg";
import webnrollsBig from "../../assets/img/webnrolls-big.png";
import webnrollsSmall from "../../assets/img/webnrolls-small.png";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // hasError: false
    };
  }

  render() {
    return (
      <section id="home">
        <div className="img-wrapper">
          <CSSTransition in={true} appear timeout={500} classNames="un-zoom">
            <img
              src={bgHome}
              alt="bg-home"
              className="bg-home"
              style={{
                animationDelay: `100ms`,
                animationDuration: `2000ms`,
              }}
            />
          </CSSTransition>
        </div>

        <div className="content">
          <picture>
            <source srcSet={webnrollsBig} media="(min-width: 768px)" />
            <CSSTransition
              in={true}
              appear
              timeout={500}
              classNames="slide-in-elliptic-top-fwd"
            >
              <img
                className="logo"
                src={webnrollsSmall}
                alt="webnrollsBig"
                style={{
                  animationDelay: `500ms`,
                  animationDuration: `1000ms`,
                }}
              />
            </CSSTransition>
          </picture>

          <CSSTransition
            in={true}
            appear
            timeout={500}
            classNames="slide-in-elliptic-top-fwd"
          >
            <h1
              className="h1"
              style={{
                animationDelay: `1000ms`,
                animationDuration: `1000ms`,
              }}
            >
              Bonjour,
              <br className="is-mobile" /> je suis <span>Adrien Vidal</span>.{" "}
              <br />
              Développeur front-end
            </h1>
          </CSSTransition>
        </div>
      </section>
    );
  }
}

export default Home;
