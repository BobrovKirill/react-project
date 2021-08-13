import React, { Component } from 'react';
import {Container} from 'react-bootstrap';
import ContactsInfo from '../Components/ContactsInfo';
import FeedbackForm from '../Components/FeedbackForm';

export default class Contact extends Component {
  render() {
    return (
      <div className="feedbackImg pt-5 main-content">
        <Container className="h-100">
          <h2 className="text-center pt-3">
            Оставте свои данные и мы с вами свяжемся
          </h2>
          <div className="d-flex flex-nowrap flex-column justify-content-between h-90">
            <FeedbackForm />
            <ContactsInfo />
          </div>
        </Container>
      </div>
    );
  }
}
