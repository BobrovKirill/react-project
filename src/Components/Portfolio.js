import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CarouselModal from './CarouselModal';

export default class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = { modal: false, model: '', items: [] };
  }

  toggle = () => {
    const { modal } = this.state;
    this.setState({
      modal: !modal,
    });
  };

  picClick = (dates) => (e) => {
    e.preventDefault();
    const alt = e.target.alt;
    const { modal } = this.state;
    const newItems = dates.filter((date) => date.model === alt);
    this.setState({
      modal: !modal,
      items: newItems[0].items,
      model: alt,
    });
  };
  render() {
    const { modal, model, items } = this.state;
    const { dates } = this.props;
    return (
      <Container className="pt-3">
        <Row>
          {dates.map((date) => (
            <Col className="mb-1" sm={12} md={6} key={date.id}>
              <a href="/#" onClick={this.picClick(dates)}>
                <img
                  width="100%"
                  height="100%"
                  src={date.items[0].url}
                  alt={date.model}
                />
              </a>
            </Col>
          ))}
        </Row>
        <CarouselModal
          isOpen={modal}
          model={model}
          items={items}
          toggle={this.toggle}
        ></CarouselModal>
      </Container>
    );
  }
}
