import React, { Component } from 'react';
import { Container, Row, Col, Button, Nav} from 'react-bootstrap';
import CarouselBox from './Carousel';

import pic1 from '../assets/kitchen/1.jpg';
import pic2 from '../assets/kitchen/2.jpg';

const designItems = [
  { id: 1, title: 'test1', text: 'test text 1', url: pic1 },
  { id: 2, title: 'test1', text: 'test text 1', url: pic2 },
];
const kitchenItems = [
  { id: 1, title: 'test2', text: 'test text 2', url: pic1 },
  { id: 2, title: 'test2', text: 'test text 2', url: pic2 },
];

export default class About extends Component {
  render() {
    return (
      <>
        <section id="about" className="text-center pt-5 pb-5">
          <Container>
            <h2 className="mb-5 font-weight-bold">О нас</h2>
            <div className="row align-items-center justify-content-center mb-4">
              <div className="col-md-8">
                <p className="grey-text">
                  Рады Вас видеть, наша компания разрабатывает дизайн интерьеры и так
                  же мы возим кухни, ванные комнаты, прихожие фабрики{' '}
                  <span className="red-text">nobilia</span> по эксклюзивным
                  ценам уже 6 лет напрямую с фабрики без посредников
                </p>
                <hr className="hr-dark" />
              </div>
            </div>
            <Row>
              <Col
                xs="12"
                lg="6"
                className="d-flex justify-content-center align-items-center flex-column"
              >
                <h2>Дизайн</h2>
                <p>
                  Создадим для Вас эксклюзивный дизайн интерьер Вашей квартиры или загородного дома со всей сопутствующей документацией и 3D визуализацией. Посмотреть примеры наших работ можно на нашем сайте
                </p>
                <Nav.Link as={Button} variant="secondary" href="design">
                  Подробнее
                </Nav.Link>
              </Col>
              <Col xs="12" lg="6">
                <CarouselBox items={designItems} />
              </Col>
            </Row>
            <Row className="mt-5">
              <Col xs="12" lg="6">
                <CarouselBox items={kitchenItems} />
              </Col>
              <Col
                xs="12"
                lg="6"
                className="d-flex justify-content-center align-items-center flex-column"
              >
                <h2>Кухни</h2>
                <p>
                  Нарисуем, привезем, соберем качественую немецкую кухню из Германии быстрее, красивее и дешевле чем у конкурентов! Посмотреть примеры наших работ можно на нашем сайте
                </p>
                <Nav.Link as={Button} variant="secondary" href="kitchen">
                  Подробнее
                </Nav.Link>
              </Col>
            </Row>
          </Container>
        </section>
      </>
    );
  }
}
