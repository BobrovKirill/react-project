import React, { Component } from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import cn from 'classnames';
import FeedbackForm from './FeedbackForm';

export default class HomeFeedback extends Component {
  static defaultProps = {
    isOpen: false,
  };

  constructor(props) {
    super(props);
    this.state = { isOpen: false };
  }

  openModal = (e) => {
	  
    e.preventDefault();
	 const {isOpen} = this.state
    this.setState({ isOpen: !isOpen });
  };

  render() {
    const { isOpen } = this.state;

    const classes = cn({
      'modal-home': true,
      fade: isOpen,
      show: isOpen,
    });

    const style = {
      display: isOpen ? 'block' : 'none',
    };

    return (
      <section className="pt-5 pb-5 bg-secondary">
        <Container className="text-center">
          <h2 className="fs-1 text-white fw-bold">Заинтересовались?</h2>
          <h4 className="text-white">
            Мы свяжемся с вами, вы можете задать все интересующие вопросы и
            определиться по стоимости
          </h4>
          <Row className="mt-5">
            <Col xs="12" lg="6" className="d-flex justify-content-end">
              <Button
                size="lg"
                variant="outline-light"
                onClick={this.openModal}
              >
                Хочу Дизайн проект
              </Button>
            </Col>
            <Col xs="12" lg="6">
              <Button
                size="lg"
                variant="outline-light"
                className="d-flex justify-content-start fs-1"
					 onClick={this.openModal}
              >
                Хочу проект Кухни
              </Button>
            </Col>
          </Row>
        </Container>
        <div className={classes} style={style} role="dialog">
            <div className="modal-content border-none">
              <div className="modal-header text-center">
                <div className="modal-title">
                  Заполните форму и мы с вами свяжемся
                </div>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={this.openModal}
						action variant="danger"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <FeedbackForm />
            </div>
        </div>
      </section>
    );
  }
}
