import React, { Component } from "react";
import { Message, Form } from "semantic-ui-react";
import emailjs from "emailjs-com";

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
      isName: false,
      isEmail: false,
      isMessage: false,
      errors: false,
      success: false,
    };
  }

  onNameChange(event) {
    this.setState({
      name: event.target.value,
      isName: event.target.value.length > 0,
    });
  }

  onEmailChange(event) {
    const validEmailRegex = RegExp(
      /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    );

    this.setState({
      email: event.target.value,
      isEmail: validEmailRegex.test(event.target.value),
    });
  }

  onMessageChange(event) {
    this.setState({
      message: event.target.value,
      isMessage: event.target.value.length > 0,
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    if (!(this.state.isName && this.state.isMessage && this.state.isEmail)) {
      this.setState({ errors: true });
    } else {
      this.setState({ errors: false });

      const templateParams = {
        from_name: this.state.name,
        reply_to: this.state.email,
        to_name: "Webnrolls",
        message_html: this.state.message,
      };

      emailjs
        .send(
          "webnrolls_gmail",
          "template_Q83JGmMR_clone",
          templateParams,
          "user_jw7utkz2Xs31q7pWnUN01"
        )
        .then(
          (result) => {
            console.log(result.text);
            this.setState({ success: true });
            setTimeout(() => {
              this.setState({ success: false });
            }, 5000);
            this.resetForm();
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  }

  resetForm() {
    this.setState({
      name: "",
      email: "",
      message: "",
      isName: false,
      isEmail: false,
      isMessage: false,
    });
  }

  render() {
    return (
      <Form
        id="contact-form"
        onSubmit={this.handleSubmit.bind(this)}
        method="POST"
        error={this.state.errors}
        success={this.state.success}
      >
        <Message error content="Tous les champs doivent être remplis" />
        <Message success content="Votre message a été envoyé" />
        <Form.Field>
          <Form.Input
            fluid
            placeholder="Nom"
            value={this.state.name}
            onChange={this.onNameChange.bind(this)}
            error={this.state.errors && !this.state.isName ? true : false}
          />
        </Form.Field>
        <Form.Field>
          <Form.Input
            placeholder="Email"
            value={this.state.email}
            onChange={this.onEmailChange.bind(this)}
            error={this.state.errors && !this.state.isEmail ? true : false}
          />
        </Form.Field>
        <Form.Field>
          <Form.TextArea
            placeholder="Message"
            value={this.state.message}
            onChange={this.onMessageChange.bind(this)}
            error={this.state.errors && !this.state.isMessage ? true : false}
          />
        </Form.Field>

        <div className="submit-wrapper">
          <button type="submit" className="button-inverted">
            Envoyer
          </button>
        </div>
      </Form>
    );
  }
}

export default ContactForm;
