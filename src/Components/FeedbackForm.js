import React, { Component } from 'react';
import {
  Form,
  Row,
  Col,
  Button,
  ToggleButtonGroup,
  ToggleButton,
} from 'react-bootstrap';
import emailjs from 'emailjs-com';

export default class FeedbackForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        name: '',
        tel: '',
        email: '',
        city: '',
        text: '',
		  subject: '',
      },
      buttonState: false,
		formValid: true,
		
    };
  }
  sendEmail = (e) => {
    e.preventDefault();

    const { form, buttonState } = this.state;
    emailjs
      .send('mailru', 'shiftdesign', form, 'user_RQjfOggWX5YqY4x9g1XWR_OFF')
      .then(
        (result) => {
          this.setState({ buttonState: !buttonState });
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  handleChangeRadio = (value) => {
	const { form } = this.state;
	this.setState({form: {...form, subject: value}})
	this.formValided()
}

  handleChange = ({ target }) => {
	 
    const { form} = this.state;
    const value = target.value;
    this.setState({ form: { ...form, [target.name]: value } });
	 this.formValided()
	 
  };

  formValided = () => {
	  const {form, formValid} = this.state
	  if (form.name.length > 1 && form.tel.length > 1 && form.subject.length > 1) {
		  this.setState({formValid: !formValid})
		  console.log(formValid)
	  }
  }
  

  render() {
    const { form, formValid } = this.state;
    return (
      <div className="mx-auto mt-1">
        <Form onSubmit={this.sendEmail} name="myForm">
          <Form.Group as={Row}>
            <ToggleButtonGroup
              className="w-100 px-3"
              name="subject"
              type="radio"
				  value={form.subject}
				  onChange={this.handleChangeRadio}
            >
              <ToggleButton
                value='Кухня'
                variant="secondary"
                className="w-100"
              >
                Кухни
              </ToggleButton>
              <ToggleButton
                value='Дизайн'
                variant="secondary"
                className="w-100"
              >
                Дизайн
              </ToggleButton>
            </ToggleButtonGroup>
          </Form.Group>
          <Form.Group as={Row}>
            <Col sm={12} md={6}>
              <Form.Group as={Row}>
                <Form.Label htmlFor="nameId" column sm={3}>
                  Имя
                </Form.Label>
                <Col sm={9}>
                  <Form.Control
                    className="opacity-80"
                    type="text"
                    placeholder="Имя"
                    name="name"
                    onChange={this.handleChange}
                    value={form.name}
                    id="nameId"
						  required
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row}>
                <Form.Label htmlFor="telId" column sm={3}>
                  Телефон
                </Form.Label>
                <Col sm={9}>
                  <Form.Control
                    className="opacity-80"
                    type="tel"
                    placeholder="+7(999)99-99-999"
                    name="tel"
                    onChange={this.handleChange}
                    value={form.tel}
                    id="telId"
						  required
                  />
                </Col>
              </Form.Group>
            </Col>
            <Col sm={12} md={6}>
              <Form.Group as={Row}>
                <Form.Label htmlFor="emailId" column sm={2}>
                  Email
                </Form.Label>
                <Col sm={10}>
                  <Form.Control
                    className="opacity-80"
                    type="email"
                    placeholder="Email"
                    name="email"
                    onChange={this.handleChange}
                    value={form.email}
                    id="emailId"
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row}>
                <Form.Label htmlFor="cityId" column sm={2}>
                  Город
                </Form.Label>
                <Col sm={10}>
                  <Form.Control
                    className="opacity-80"
                    type="text"
                    placeholder="Город"
                    name="city"
                    onChange={this.handleChange}
                    value={form.city}
                    id="cityId"
                  />
                </Col>
              </Form.Group>
            </Col>
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="textId">Сообщение</Form.Label>
            <Form.Control
              className="opacity-80"
              as="textarea"
              rows={6}
              name="text"
              onChange={this.handleChange}
              value={form.text}
              id="textId"
            />
          </Form.Group>
          <div className="d-flex justify-content-end">
            <Button disabled={formValid} variant="secondary" type="submit">
              Отправить
            </Button>
          </div>
        </Form>
      </div>
    );
  }
}
