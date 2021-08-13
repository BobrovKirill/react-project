import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';

export default class ContactsInfo extends Component {
  render() {
    return (
      <div
        className="opacity-80 bg-white  mx-auto my-3 px-2"
        style={{ borderRadius: '25px' }}
      >
        <h3 fron="white" className="text-center mt-3">
          Или если Вам удобнее Вы можете написать/позвонить нам сами
        </h3>
        <Row className="text-center fw-bold">
          <Col sm={6}>
            <h5>Директор/Дизайнер</h5>
            <p className="mb-1">Анастасия</p>
            <p className="mb-1">Телефон: +7 944 44 22 111</p>
            <p>Email: boss@mail.ru</p>
          </Col>
          <Col sm={6}>
            <h5>Дизайнер</h5>
            <p className="mb-1">Мария</p>
            <p className="mb-1">Телефон: +7 944 33 55 123</p>
            <p>Email: kokoko@mail.ru</p>
          </Col>
        </Row>
      </div>
    );
  }
}
