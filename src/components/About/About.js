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

// react fontAwesome
import {
  faTachometerAlt,
  faDesktop,
  faLightbulb,
  faRocket,
} from "@fortawesome/free-solid-svg-icons";

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
    const servicesData = [
      {
        icon: faTachometerAlt,
        content: {
          title: "Rapide",
          desc: "Rapidité de chargement et d'interaction",
        },
      },
      {
        icon: faDesktop,
        content: {
          title: "Responsive",
          desc: "Mes pages fonctionnent sur tous les appareils",
        },
      },
      {
        icon: faLightbulb,
        content: {
          title: "Intuitif",
          desc: "Facile à utiliser, UX/UI intuitif",
        },
      },
      {
        icon: faRocket,
        content: {
          title: "Dynamique",
          desc: "Les pages n'ont pas à être statique. J'aime leur donner vie",
        },
      },
    ];
    this.setState({ servicesData: servicesData });
  }

  initSkillsData() {
    const skillsData = [
      {
        title: "HTML",
        percent: 90,
      },
      {
        title: "CSS/SASS/LESS",
        percent: 90,
      },
      {
        title: "JS/Jquery",
        percent: 80,
      },
      {
        title: "ReactJS",
        percent: 70,
      },
      {
        title: "Webpack",
        percent: 65,
      },
      {
        title: "NoSQL",
        percent: 80,
      },
      {
        title: "Wordpress",
        percent: 85,
      },
      {
        title: "Photoshop",
        percent: 60,
      },
      {
        title: "XD",
        percent: 70,
      },
      {
        title: "Illustrator",
        percent: 50,
      },
    ];
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
                      Je suis Développeur Front-End Freelance à Paris, France.
                      J'ai une passion pour les effets UI, les animations et
                      créer des expériences intuitives et dynamiques
                      <br />
                      <NavLink to="/contact">
                        <strong>Travaillons ensemble</strong> !
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
