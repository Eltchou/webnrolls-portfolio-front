import React from "react";
import {
  faTimes
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ButtonClose = (props) => (
  <button className="button-close" onClick={props.onClick}>
    <FontAwesomeIcon icon={faTimes} />
  </button>
);