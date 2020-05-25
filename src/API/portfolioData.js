// utils
import { importAll } from "../utils/importFiles";

export const galleryCats = ["sites", "landings", "backoffices"];

export const dataPortfolio = [
  {
    title: "Webnrolls Portfolio",
    cats: ["sites"],
    tags: ["ReactJs", "ExpressJs"],
    gallery: importAll(
      require.context(
        "../assets/img/webnrolls",
        false,
        /\.(png|jpe?g|svg|gif)$/
      )
    ),
    highlight: "Mon portfolio",
    desc: "Design et développement en reactJs",
    url: "",
  },
  {
    title: "Lifting Yves Rocher",
    cats: ["landings"],
    tags: ["javascript", "html", "css"],
    gallery: importAll(
      require.context(
        "../assets/img/lifting-yves-rocher",
        false,
        /\.(png|jpe?g|svg|gif)$/
      )
    ),
    highlight: "Landing page Lifting Yves Rocher",
    desc: "Développement responsive sur SAP Hybris",
    url: "https://www.yves-rocher.be/lifting-vegetal",
  },
  {
    title: "Parfum Yves Rocher",
    cats: ["landings"],
    tags: ["javascript", "html", "css"],
    gallery: importAll(
      require.context(
        "../assets/img/parfum-yves-rocher",
        false,
        /\.(png|jpe?g|svg|gif)$/
      )
    ),
    highlight: "Landing page parfum Yves Rocher",
    desc: "Développement responsive sur SAP Hybris",
    url:
      "https://www.yves-rocher.fr/conseils-beaute-et-videos/choisir-un-parfum-femme",
  },
  {
    title: "Fond de teint Yves Rocher",
    cats: ["landings"],
    tags: ["javascript", "html", "css"],
    gallery: importAll(
      require.context(
        "../assets/img/fond-de-teint-yves-rocher",
        false,
        /\.(png|jpe?g|svg|gif)$/
      )
    ),
    highlight: "Landing page fond de teint Yves Rocher",
    desc: "Développement responsive sur SAP Hybris",
    url:
      "https://www.yves-rocher.fr/conseils-beaute-et-videos/diagnostic-fond-de-teint",
  },
  {
    title: "Giftfinder Yves Rocher",
    cats: ["landings"],
    tags: ["javascript", "html", "css"],
    gallery: importAll(
      require.context(
        "../assets/img/giftfinder-yves-rocher",
        false,
        /\.(png|jpe?g|svg|gif)$/
      )
    ),
    highlight: "Landing page GiftFinder Yves Rocher",
    desc: "Développement responsive sur SAP Hybris / API Target2Sell",
    url: "https://www.yves-rocher.ru/idei-podarkov",
  },
  {
    title: "Kaireos",
    cats: ["sites"],
    tags: ["reactjs", "React-semantic-ui"],
    gallery: importAll(
      require.context(
        "../assets/img/kaireos",
        false,
        /\.(png|jpe?g|svg|gif)$/
      )
    ),
    highlight: "Outil d'épargne salariale (Démo technique / POC)",
    desc:
      "Démo technique, POC d'une application web qui permet d'accompagner les employés de grandes entreprises dans la gestion de leur épargne salariale",
    desc2: "Thème personnalisé en mobile first React-semantic-ui / ReactJs",
    url: "http://webnrolls.com/autre/clients/kaireos/#/my-savings",
  },
  {
    title: "Neuradom Medico",
    cats: ["backoffices"],
    tags: ["reactJs", "html", "css", "webdesign"],
    gallery: importAll(
      require.context(
        "../assets/img/neuradom-medico",
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
        "../assets/img/legrand",
        false,
        /\.(png|jpe?g|svg|gif)$/
      )
    ),
    highlight: "Site Ecommerce Legrand avec Publicis",
    desc: "Développement responsive",
    url: "https://www.legrand.fr/",
  },
  {
    title: "Wibilong Wisell",
    cats: ["sites"],
    tags: ["javascript", "html", "css"],
    gallery: importAll(
      require.context(
        "../assets/img/wisell",
        false,
        /\.(png|jpe?g|svg|gif)$/
      )
    ),
    highlight:
      "Forum d'entraide pour grandes marques E-commerce (ex. Darty, Pixmania)",
    desc: "Développement responsive",
    url: "",
  },
  {
    title: "Wibilong backoffice",
    cats: ["backoffices"],
    tags: ["javascript", "html", "css", "webdesign"],
    gallery: importAll(
      require.context(
        "../assets/img/wibilong-back",
        false,
        /\.(png|jpe?g|svg|gif)$/
      )
    ),
    highlight: "Backoffice pour les clients de Wibilong",
    desc:
      "Wibilong fourni des outils d'aide à la décision d'achat pour les grands sites de e-commerce (ex. Darty, Pixmania)",
    desc2: "Développement Html-css-js",
    url: "",
  },
  {
    title: "ByAgency",
    cats: ["sites"],
    tags: ["javascript", "html", "css"],
    gallery: importAll(
      require.context(
        "../assets/img/bydesign",
        false,
        /\.(png|jpe?g|svg|gif)$/
      )
    ),
    highlight: "Site Vitrine de ByAgency",
    desc: "Débug de fonctionnalités",
    url: "https://www.byagency.com/",
  },
];
