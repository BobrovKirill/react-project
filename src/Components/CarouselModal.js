import React, { Component } from 'react';
import cn from 'classnames';
import Carousel from './Carousel';
import { Container } from 'react-bootstrap';

export default class CarouselModal extends Component {
  static defaultProps = {
    isOpen: false,
  };

  render() {
    const { isOpen, model, items, toggle } = this.props;

    const classes = cn({
      modal: true,
      fade: isOpen,
      show: isOpen,
    });

    const style = {
      display: isOpen ? 'block' : 'none',
    };
    return (
      <div className={classes} style={style} role="dialog">
        <Container>
          <div className="modal-content">
            <div className="modal-header text-center">
              <div className="modal-title text-capitalize">{model}</div>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={toggle}
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <Carousel items={items} />
          </div>
        </Container>
      </div>
    );
  }
}

