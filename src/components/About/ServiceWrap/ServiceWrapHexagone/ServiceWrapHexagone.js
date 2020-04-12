import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ServiceWrapHexagone = props => (
  <div className="hex-wrap" style={props.style}>
    <div className="hexagon"><FontAwesomeIcon icon={props.icon} /></div>
  </div>
);

export default ServiceWrapHexagone;
