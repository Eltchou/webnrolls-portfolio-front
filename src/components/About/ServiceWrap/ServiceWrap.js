import React, { PureComponent } from "react";
import { CSSTransition } from "react-transition-group";

import ServiceWrapHexagone from "./ServiceWrapHexagone/ServiceWrapHexagone";

class ServiceWrap extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  render() {
    const content = this.props.content;

    return (
      <div className="service-wrap" style={this.props.style}>
        <CSSTransition
          in={true}
          appear
          timeout={500}
          classNames="flip-in-ver-right"
        >
          <ServiceWrapHexagone icon={this.props.icon} style={{ animationDelay: `${this.props.animationDelay}ms`, animationDuration: `500ms` }}/>
        </CSSTransition>

        <CSSTransition
          in={true}
          appear
          timeout={500}
          classNames="fadeIn"
        >
          <div className="content" style={{ animationDelay: `${this.props.animationDelay}ms`, animationDuration: `500ms` }}>
            <h3 className="h3">{content.title}</h3>
            <p>{content.desc}</p>
          </div>
        </CSSTransition>
      </div>
    );
  }
}

export default ServiceWrap;
