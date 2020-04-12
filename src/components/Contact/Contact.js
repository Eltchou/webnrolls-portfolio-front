import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";

import ContactForm from "./ContactForm/ContactForm";
import { H2 } from "../Shared/Title/Title";

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // customers: [],
    };
  }

  render() {
    return (
      <section id="contact">
        <div className="section-inner">
          <H2 content={"Contact"} />

          <CSSTransition
            in={true}
            appear
            timeout={500}
            classNames="slide-in-right"
          >
            <p>
              Vous avez une <strong>idée de projet</strong>? Travailler avec moi
              vous intéresse?
              <br />
              Je suis disponible pour des <strong>projets freelance</strong>.
              <br />
              N'hésitez pas à me laisser un message, je serai ravi de vous
              répondre.
            </p>
          </CSSTransition>

          <CSSTransition
            in={true}
            appear
            timeout={500}
            classNames="bounce-in-fwd"
          >
            <ContactForm />
          </CSSTransition>
        </div>
      </section>
    );
  }
}

export default Contact;
