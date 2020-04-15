import React, { Component } from "react";
import { Modal, TransitionablePortal } from "semantic-ui-react";

// react-responsive-carousel
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import { ButtonClose } from "../../../../utils/buttons/buttons";

class ModalModalExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalOpen: false,
    };
  }

  handleOpen = () => this.setState({ modalOpen: true });
  handleClose = () => this.setState({ modalOpen: false });

  render() {
    const content = this.props.content;

    return (
      <>
        <button className="button" onClick={this.handleOpen}>
          Voir plus
        </button>
        <TransitionablePortal
          open={this.state.modalOpen}
          onOpen={() => document.body.classList.add("modal-fade-in")}
          transition={{ animation: "fade up", duration: 500 }}
        >
          <Modal
            className="projet-modal"
            centered={false}
            open={true}
            onClose={() => {
              document.body.classList.remove("modal-fade-in");
              this.handleClose();
            }}
          >
            <div className="modal-content">
              {/* project-gallery */}
              <Carousel
                className="project-gallery"
                showThumbs={false}
                showStatus={false}
                dynamicHeight={true}
              >
                {content.gallery.map((image, key) => (
                  <img src={image} alt="image" key={key} />
                ))}
              </Carousel>
              {/* project-content */}
              <div className="project-content">
                <h4 className="h4">{content.title}</h4>
                <p className="highlight">{content.highlight}</p>
                <div className="separate" />
                <p>{content.desc}</p>
                {content.desc2 && <p>{content.desc2}</p>}

                <div className="project-action">
                  {content.url && (
                    <a href={content.url} target="_blank" className="button">
                      Voir
                    </a>
                  )}

                  <ButtonClose onClick={this.handleClose} />
                </div>
              </div>
            </div>
          </Modal>
        </TransitionablePortal>
      </>
    );
  }
}

export default ModalModalExample;
