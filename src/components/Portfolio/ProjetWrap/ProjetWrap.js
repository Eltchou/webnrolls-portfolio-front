import React, { Component } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

// component
import ProjetModal from "./ProjetModal/ProjetModal";

class ProjetWrap extends Component {
  constructor(props) {
    super(props);

    this.state = {
      animWrap: false,
    };
  }

  componentDidMount() {
    this.animWrap();
  }

  animWrap() {
    setTimeout(() => {
      this.setState({ animWrap: true });
    }, 0);
  }

  render() {
    const { thumb, content } = this.props;

    return (
      <div
        className={"projet-wrap " + (this.state.animWrap ? "anim-wrap" : "")}
        style={this.props.style}
      >
        <LazyLoadImage
          className="project-thumb"
          alt={"thumb"}
          effect="blur"
          src={thumb}
        />

        {/* project-overlay */}
        <div className="project-overlay">
          <div className="content">
            <h3 className="h3">{content.title}</h3>
            <p className="tags-wrapper">{content.tags}</p>

            <ProjetModal content={content} />
          </div>
        </div>
      </div>
    );
  }
}

export default ProjetWrap;
