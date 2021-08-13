import React, { Component } from 'react';
import { Row, Col, Container, Nav, Tab } from 'react-bootstrap';

export default class About extends Component {
  render() {
    return (
		 <div className="main-content pt-5">
      <Container className="main-content pt-2">
        <Tab.Container id="tabs" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column mt-2">
                <Nav.Item variant="dark">
                  <Nav.Link  eventKey="first">Доставка</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Сборка</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Оплата</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fourth">Модельный ряд</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fifth">Ценообразование</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content className="text-center">
                <Tab.Pane eventKey="first">
                  <img
                    width="100%"
                    height="400px"
                    src="https://pmg.ru/assets/images/internet-delivery.jpg"
                    alt="img"
                  />
                  <p>
                    blalblallblalblalbl blalblalb ablalbvlsalblal balblalblalbl
                    ablalblalblal balbalblalvb blalblalb ablalbvlsalblal
                    balblalblalbl ablalblalblal balbalblalvb
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <img
                    width="100%"
                    height="400px"
                    src="https://bytrem.ru/wp-content/uploads/2018/03/Sborka-kuhni.png"
                    alt="img"
                  />
                  <p>
                    blalblallblalblalbl blalblalb ablalbvlsalblal balblalblalbl
                    ablalblalblal balbalblalvb blalblalb ablalbvlsalblal
                    balblalblalbl ablalblalblal balbalblalvb
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <img
                    width="100%"
                    height="400px"
                    src="https://www.raiffeisen.ru/common/new/images/cards/applepay.jpg"
                    alt="img"
                  />
                  <p>
                    blalblallblalblalbl blalblalb ablalbvlsalblal balblalblalbl
                    ablalblalblal balbalblalvb blalblalb ablalbvlsalblal
                    balblalblalbl ablalblalblal balbalblalvb
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                  <img
                    width="100%"
                    height="400px"
                    src="https://nobilia-dnepr.com.ua/wp-content/uploads/2020/01/01_moderne_kuechen_2020.jpg"
                    alt="img"
                  />
                  <p>
                    blalblallblalblalbl blalblalb ablalbvlsalblal balblalblalbl
                    ablalblalblal balbalblalvb blalblalb ablalbvlsalblal
                    balblalblalbl ablalblalblal balbalblalvb
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="fifth">
                  <img
                    width="100%"
                    height="400px"
                    src="https://nobilia-dnepr.com.ua/wp-content/uploads/2020/01/01_moderne_kuechen_2020.jpg"
                    alt="img"
                  />
                  <p>
                    blalblallblalblalbl blalblalb ablalbvlsalblal balblalblalbl
                    ablalblalblal balbalblalvb blalblalb ablalbvlsalblal
                    balblalblalbl ablalblalblal balbalblalvb
                  </p>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
		</div>
    );
  }
}
