import React, { Component } from "react";
import mixitup from "mixitup";
import { CSSTransition } from "react-transition-group";

import ProjetWrap from "./ProjetWrap/ProjetWrap";
import { H2 } from "../Shared/Title/Title";

// utils
import { importAll } from "../../utils/importFiles";

// img
import projetImg from "../../assets/img/projet.jpg";

class Portfolio extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataPortfolio: [],
      galleryCats: [],
    };
  }

  componentWillMount() {
    this.getDataPortfolio();
  }

  componentDidMount() {
    this.initMixItUp();
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
    const galleryCats = ["sites", "landings", "backoffices"];

    const dataPortfolio = [
      {
        title: "Webnrolls Portfolio",
        cats: ["sites"],
        tags: ["ReactJs", "ExpressJs"],
        gallery: importAll(
          require.context(
            "../../assets/img/webnrolls",
            false,
            /\.(png|jpe?g|svg|gif)$/
          )
        ),
        highlight: "Mon portfolio",
        desc: "Développement en reactJs et formulaire de contact en ExpressJS",
        url: "",
      },
      {
        title: "Lifting Yves Rocher",
        cats: ["landings"],
        tags: ["javascript", "html", "css"],
        gallery: importAll(
          require.context(
            "../../assets/img/lifting-yves-rocher",
            false,
            /\.(png|jpe?g|svg|gif)$/
          )
        ),
        highlight: "Landing page Lifting Yves Rocher",
        desc: "Développement sur SAP Hybris",
        url:
          "https://www.yves-rocher.be/lifting-vegetal",
      },
      {
        title: "Parfum Yves Rocher",
        cats: ["landings"],
        tags: ["javascript", "html", "css"],
        gallery: importAll(
          require.context(
            "../../assets/img/parfum-yves-rocher",
            false,
            /\.(png|jpe?g|svg|gif)$/
          )
        ),
        highlight: "Landing page parfum Yves Rocher",
        desc: "Développement sur SAP Hybris",
        url:
          "https://www.yves-rocher.fr/conseils-beaute-et-videos/choisir-un-parfum-femme",
      },
      {
        title: "Fond de teint Yves Rocher",
        cats: ["landings"],
        tags: ["javascript", "html", "css"],
        gallery: importAll(
          require.context(
            "../../assets/img/fond-de-teint-yves-rocher",
            false,
            /\.(png|jpe?g|svg|gif)$/
          )
        ),
        highlight: "Landing page fond de teint Yves Rocher",
        desc: "Développement sur SAP Hybris",
        url:
          "https://www.yves-rocher.fr/conseils-beaute-et-videos/diagnostic-fond-de-teint",
      },
      {
        title: "Giftfinder Yves Rocher",
        cats: ["landings"],
        tags: ["javascript", "html", "css"],
        gallery: importAll(
          require.context(
            "../../assets/img/giftfinder-yves-rocher",
            false,
            /\.(png|jpe?g|svg|gif)$/
          )
        ),
        highlight: "Landing page GiftFinder Yves Rocher",
        desc: "Développement sur SAP Hybris / API Target2Sell",
        url:
          "https://www.yves-rocher.ru/idei-podarkov",
      },
      {
        title: "Kaireos",
        cats: ["sites"],
        tags: ["reactjs", "React-semantic-ui"],
        gallery: importAll(
          require.context(
            "../../assets/img/kaireos",
            false,
            /\.(png|jpe?g|svg|gif)$/
          )
        ),
        highlight: "Outil d'épargne salariale (Démo technique / POC)",
        desc:
          "Démo technique, POC d'une application web qui permet d'accompagner les employés de grandes entreprises dans la gestion de leur épargne salariale",
        desc2: "Thème personnalisé en mobile first React-semantic-ui / ReactJs",
        url:
          "http://webnrolls.com/autre/clients/kaireos/#/my-savings",
      },
      {
        title: "Neuradom Medico",
        cats: ["backoffices"],
        tags: ["reactJs", "html", "css", "webdesign"],
        gallery: importAll(
          require.context(
            "../../assets/img/neuradom-medico",
            false,
            /\.(png|jpe?g|svg|gif)$/
          )
        ),
        highlight: "Backoffice pour les médecins",
        desc:
          "Neuradom conçoit et développe un programme de réhabilitation destiné aux personnes présentant une perte d’autonomie liée à des troubles cognitivo-moteurs (Ex: AVC, Alzheimer)",
        desc2:
          "UX/UI - dev ReactJs. Création d'une timeline en dragNdrop pour créer des programmes d'exercices individuels",
        url: "",
      },
      {
        title: "Legrand",
        cats: ["sites"],
        tags: ["javascript", "html", "css"],
        gallery: importAll(
          require.context(
            "../../assets/img/legrand",
            false,
            /\.(png|jpe?g|svg|gif)$/
          )
        ),
        highlight: "Site Ecommerce Legrand avec Publicis",
        desc: "Intégration maquettes responsives",
        url: "https://www.legrand.fr/",
      },
      {
        title: "Wibilong Wisell",
        cats: ["sites"],
        tags: ["javascript", "html", "css"],
        gallery: importAll(
          require.context(
            "../../assets/img/wisell",
            false,
            /\.(png|jpe?g|svg|gif)$/
          )
        ),
        highlight:
          "Forum d'entraide pour grandes marques E-commerce (ex. Darty, Pixmania)",
        desc: "Intégration responsive",
        url: "",
      },
      {
        title: "Wibilong backoffice",
        cats: ["backoffices"],
        tags: ["javascript", "html", "css", "webdesign"],
        gallery: importAll(
          require.context(
            "../../assets/img/wibilong-back",
            false,
            /\.(png|jpe?g|svg|gif)$/
          )
        ),
        highlight: "Backoffice pour les clients de Wibilong",
        desc:
          "Wibilong fourni des outils d'aide à la décision d'achat pour les grands sites de e-commerce (ex. Darty, Pixmania)",
        url: "",
      },
      {
        title: "ByAgency",
        cats: ["sites"],
        tags: ["javascript", "html", "css"],
        gallery: importAll(
          require.context(
            "../../assets/img/bydesign",
            false,
            /\.(png|jpe?g|svg|gif)$/
          )
        ),
        highlight: "Site Vitrine de ByAgency",
        desc: "Intégration et débug de fonctionnalités",
        url: "https://www.byagency.com/",
      }
    ];

    this.setState({ dataPortfolio, galleryCats });
  }

  render() {
    return (
      <section id="portfolio">
        <div className="section-inner">
          <H2 content={"Portfolio"} />

          <CSSTransition in={true} appear timeout={500} classNames="fadeIn">
            <div
              className="mix-nav-wrapper"
              style={{
                animationDuration: `500ms`,
              }}
            >
              <div data-filter="all">All</div>
              {this.state.galleryCats.map((galleryTag) => (
                <div data-filter={"." + galleryTag}>{galleryTag}</div>
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
                      tags: data.tags.map((tag) => <span>{tag}</span>),
                      gallery: data.gallery.map((img) => img),
                      highlight: data.highlight,
                      desc: data.desc,
                      desc2: data.desc2,
                      url: data.url,
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
