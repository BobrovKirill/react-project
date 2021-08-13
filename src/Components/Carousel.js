import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';

export default class CarouselBox extends Component {
  render() {
    const { items } = this.props;
    return (
      <Carousel>
        {items.map((item) => (
          <Carousel.Item key={item.id}>
            <img
              className="d-block"
              src={item.url}
              height="100%"
              width="100%"
              alt="img"
            />
            <Carousel.Caption>
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    );
  }
}
