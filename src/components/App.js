import React, { Component } from "react";
import anime from "animejs/lib/anime.es.js";
// style
import "../assets/styles/index.scss";

import { Switch, Route } from "react-router-dom";

import { CSSTransition, TransitionGroup } from "react-transition-group";

import Sidebar from "./Sidebar/Sidebar";
import Home from "./Home/Home";
import About from "./About/About";
import Portfolio from "./Portfolio/Portfolio";
import Contact from "./Contact/Contact";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { device: "mobile" };
    this._updateDevice = this._updateDevice.bind(this);
  }

  componentDidMount() {
    this._updateDevice();
    window.addEventListener("resize", this._updateDevice);

    this._animationPageLoad();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this._updateDevice);
  }

  _updateDevice() {
    const deviceWidth = window.innerWidth;
    let device = "";

    if (deviceWidth <= 425) {
      device = "mobile";
    } else if (deviceWidth > 425 && deviceWidth <= 600) {
      device = "phablet";
    } else if (deviceWidth > 600 && deviceWidth <= 768) {
      device = "tablet";
    } else if (deviceWidth > 768 && deviceWidth <= 1024) {
      device = "laptop";
    } else if (deviceWidth > 1024 && deviceWidth <= 1440) {
      device = "desktop";
    }

    this.setState({ device: device });
  }

  _animationPageLoad() {
    console.log("_animationPageLoad");

    const sidebar = document.querySelector(".sidebar");
    sidebar.style.transform = "translateX(-60px)";
    sidebar.style.opacity = 0;    
    anime({
      targets: sidebar,
      keyframes: [{ translateX: -60, opacity: 0 }, { translateX: 0, opacity: 1 }],
      duration: 500,
      easing: "linear",
      delay: 1000,
      complete: function(anim) {
        sidebar.removeAttribute("style");
      }
    });
    
    const main = document.querySelector(".main");
    main.style.transform = "translateX(60px)";
    main.style.opacity = 0;
    anime({
      targets: main,
      keyframes: [{ translateX: 60, opacity: 0 }, { translateX: 0, opacity: 1 }],
      duration: 500,
      easing: "linear",
      delay: 1000,
      complete: function(anim) {
        main.removeAttribute("style");
      }
    });
  }

  render() {
    const { location } = this.props;

    return (
      <div className="container">
        <Sidebar />
        <TransitionGroup className="main">
          <CSSTransition
            key={location.key}
            timeout={500}
            classNames="page-animation"
          >
            <Switch location={location}>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/portfolio" component={Portfolio} />
              <Route exact path="/contact" component={Contact} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </div>
    );
  }
}

export default App;
