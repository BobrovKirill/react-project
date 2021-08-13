import React, { Component } from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import cn from 'classnames';
import Footer from '../Components/Footer';

import Home from '../Pages/Home';
import About from '../Pages/About';
import Design from '../Pages/Design';
import Kitchen from '../Pages/Kitchen';
import Contact from '../Pages/Contact';

export default class Header extends Component {
  constructor(props) {
    super(props);
    const locationPath = document.location.pathname
    this.state = { headerScroll: false, headerBg: false, docUrl: locationPath };
  }

  listenScrollEvent = (e) => {
    const windowHeight = document.documentElement.clientHeight;
    if (window.scrollY > windowHeight - 50) {
      this.setState({ headerScroll: true });
    } else {
      this.setState({ headerScroll: false });
    }
  };

  componentDidMount() {
    const { docUrl } = this.state
    window.addEventListener('scroll', this.listenScrollEvent);
    if (docUrl !== '/') {
      this.setState({ headerBg: true });
    }
  }

  render() {
    const { headerScroll, headerBg } = this.state;
    const { items } = this.props;

    const headerClass = cn({
      'bg-dark': headerBg || headerScroll,
      'opacity-80': headerBg || headerScroll,
      'transition-color': true,
      'shadow-sm': true,
    });

    return (
      <>
        <Navbar
          className={headerClass}
          expand="lg"
          variant="dark"
          fixed="top"
          collapseOnSelect
        >
          <Container>
            <Navbar.Brand className="font-weight-bold " href="/">
              Shift Design
            </Navbar.Brand>

            <Navbar.Toggle
              type="button"
              data-toggle="collapse"
              data-target="#basicExampleNav"
              aria-controls="basicExampleNav"
              aria-expanded="false"
              aria-label="Toggle Navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </Navbar.Toggle>

            <Navbar.Collapse className="flex-grow-0" id="basicExampleNav">
              <Nav className="mr-auto smooth-croll">
                {items.map((item) => (
                  <Nav.Link
                    href={item.link}
                    className="text-white font-weight-bold link-header"
                    key={item.id}
                  >
                    {item.name}
                  </Nav.Link>
                ))}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/design" component={Design} />
            <Route path="/kitchen" component={Kitchen} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </Router>

        <Footer />
      </>
    );
  }
}
