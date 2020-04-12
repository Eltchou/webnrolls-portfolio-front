import React from "react";
import { CSSTransition } from "react-transition-group";

export function H2(props) {
  return (
    <h2 className="h2">
      <CSSTransition in={true} appear timeout={500} classNames="slide-in-left">
        <span style={{ animationDelay: `0ms`, animationDuration: `500ms` }}>
          {props.content}
        </span>
      </CSSTransition>
      <CSSTransition in={true} appear timeout={500} classNames="slide-in-left">
        <div
          className="h2-bar"
          style={{ animationDelay: `200ms`, animationDuration: `500ms` }}
        ></div>
      </CSSTransition>
    </h2>
  );
}
