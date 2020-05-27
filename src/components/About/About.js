import React, { Component } from "react";

import { Grid } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

// components
import ServiceWrap from "./ServiceWrap/ServiceWrap";
import SkillWrap from "./SkillWrap/SkillWrap";
import { H2 } from "../Shared/Title/Title";

// img
import profilImg from "../../assets/img/profil.jpg";

// API
import { servicesData, skillsData } from "../../API/aboutData";

class About extends Component {
  constructor(props) {
    super(props);

    this.state = {
      servicesData: [],
      skillsData: [],
    };
  }

  componentDidMount() {
    this.initServicesData();
    this.initSkillsData();
  }

  initServicesData() {
    this.setState({ servicesData: servicesData });
  }

  initSkillsData() {
    this.setState({ skillsData: skillsData });
  }

  servicesWrap() {
    const animationDelay = 200;
    let servicesWrap = this.state.servicesData.map((service, i) => {
      return (
        <ServiceWrap
          icon={service.icon}
          content={service.content}
          animationDelay={i * animationDelay}
          key={i}
        />
      );
    });
    return servicesWrap;
  }

  skillsWrap() {
    const animationDelay = 100;
    let skillWrap = this.state.skillsData.map((skill, i) => {
      return (
        <SkillWrap
          title={skill.title}
          percent={skill.percent}
          animationDelay={i * animationDelay}
          key={i}
        />
      );
    });
    return skillWrap;
  }

  render() {
    return (
      <section id="about">
        <div className="section-inner">
          <H2 content={"A propos de moi"} />

          <div className="services-wrapper">{this.servicesWrap()}</div>

          <Grid className="wrapper" stackable columns={2}>
            <Grid.Column>
              <CSSTransition
                in={true}
                appear
                timeout={500}
                classNames="slide-in-left"
              >
                <div
                  className="profil-wrap"
                  style={{
                    animationDelay: `500ms`,
                    animationDuration: `500ms`,
                  }}
                >
                  <div className="img-wrapper">
                    <img src={profilImg} alt="profilImg" />
                  </div>

                  <div className="content">
                    <h3 className="h3">Qui suis-je ?</h3>
                    <p>
                      Développeur Front-End Freelance à Paris, France.
                      <br />
                      <NavLink to="/contact">
                        <strong>Travaillons ensemble</strong>
                      </NavLink>
                    </p>
                  </div>
                </div>
              </CSSTransition>
            </Grid.Column>
            <Grid.Column>
              <CSSTransition
                in={true}
                appear
                timeout={500}
                classNames="slide-in-right"
              >
                <div
                  className="skills-wrapper"
                  style={{
                    animationDelay: `500ms`,
                    animationDuration: `500ms`,
                  }}
                >
                  {this.skillsWrap()}
                </div>
              </CSSTransition>
            </Grid.Column>
          </Grid>
        </div>
      </section>
    );
  }
}

export default About;
