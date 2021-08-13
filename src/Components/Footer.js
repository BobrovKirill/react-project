import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

export default class Footer extends Component {
  render() {
    return (
      <div className="page-footer font-small bg-dark lighten-2">
        <Container>
          <Row>
            <Col md={12}>
              <div className="mb-3 flex-center">
                <a href="/#" className="waves-effect waves-ligth">
                  <i className="fab fa-facebook-f fa-lg mr-md-4 fa-lg"></i>
                </a>
                <a href="/#" className="waves-effect waves-ligth">
                  <i className="fab fa-youtube fa-lg mr-md-4 fa-lg"></i>
                </a>
                <a href="/#" className="waves-effect waves-ligth">
                  <i className="fab fa-instagram fa-lg fa-lg"></i>
                </a>
              </div>
            </Col>
          </Row>
          <div className="text-center text-white pb-3">
            © 2020 by Shift Design :
            <a href="https://google.com/">www.ShiftDesign.ru</a>
          </div>
        </Container>
      </div>
    );
  }
}
