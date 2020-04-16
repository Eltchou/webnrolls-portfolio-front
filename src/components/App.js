import React, { Component } from "react";
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
    this.updateDevice = this.updateDevice.bind(this);
  }

  componentDidMount() {
    this.updateDevice();
    window.addEventListener("resize", this.updateDevice);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDevice);
  }

  updateDevice() {
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

  render() {
    const { location } = this.props;

    return (
      <div className="container">
        <Sidebar />
        <TransitionGroup className="main">
          <CSSTransition key={location.key} timeout={500} classNames="page-animation">
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
