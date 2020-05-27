import React, { Component } from "react";
import mixitup from "mixitup";
import { CSSTransition } from "react-transition-group";

import ProjetWrap from "./ProjetWrap/ProjetWrap";
import { H2 } from "../Shared/Title/Title";

// API
import { galleryCats, dataPortfolio } from "../../API/portfolioData";

class Portfolio extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataPortfolio: [],
      galleryCats: [],
    };
  }

  componentDidMount() {
    this.getDataPortfolio();
  }

  initMixItUp() {
    var mixer = mixitup(".mixitup-wrapper", {
      animation: {
        duration: 500,
        nudge: true,
        reverseOut: false,
        effects: "fade scale(0.01)",
      },
    });
  }

  getDataPortfolio() {
    this.setState({ dataPortfolio, galleryCats }, () => {
      this.initMixItUp();
    });
  }

  render() {
    return (
      <section id="portfolio">
        <div className="section-inner">
          <H2 content={"Derniers projets"} />

          <CSSTransition in={true} appear timeout={500} classNames="fadeIn">
            <div
              className="mix-nav-wrapper"
              style={{
                animationDuration: `500ms`,
              }}
            >
              <div data-filter="all">Tout</div>
              {this.state.galleryCats.map((galleryTag, i) => (
                <div data-filter={"." + galleryTag} key={i}>
                  {galleryTag}
                </div>
              ))}
            </div>
          </CSSTransition>

          <div className="mixitup-wrapper">
            {/* push project in compo projetWrap */}
            {this.state.dataPortfolio.map((data, index) => {
              return (
                <div
                  className={
                    "mix " + data.cats.map((cat) => cat + " ").join("")
                  }
                  data-order={index}
                  key={index}
                >
                  <ProjetWrap
                    thumb={data.gallery[0]}
                    content={{
                      title: data.title,
                      tags: data.tags.map((tag, i) => (
                        <span key={i}>{tag}</span>
                      )),
                      gallery: data.gallery.map((img) => img),
                      highlight: data.highlight,
                      desc: data.desc,
                      desc2: data.desc2,
                      url: data.url,
                      repo: data.repo,
                    }}
                    style={{
                      transitionDelay: `${200 * index}ms`,
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
