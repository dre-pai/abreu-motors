import React from 'react';
import { Button, Form, Row, Col } from 'react-bootstrap';
import './ContactForm.css';
const axios = require('axios');

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formErrors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  submitComplete = () => {
    document.getElementById('submit').innerText = 'Submit';
    document.getElementById('submit').disabled = false;
  };

  submitSuccessful = () => {
    document.getElementById('reservationForm').reset();
    this.props.updatePageStatus();
  };

  updateFormState = response => {
    let errorFields = {};

    if (response.data.errors != null) {
      for (let i = 0; i < response.data.errors.length; i++) {
        let field = response.data.errors[i].param;
        errorFields[field] = 'error';
      }
    }

    this.setState({
      formErrors: errorFields
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    document.getElementById('submit').disabled = true;
    document.getElementById('submit').innerText = 'Loading...';

    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let comments = document.getElementById('comments').value;

    axios
      .post('/api/send', {
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        email,
        phone,
        comments
      })
      .then(response => {
        this.updateFormState(response);

        this.submitComplete();

        if (Object.getOwnPropertyNames(this.state.formErrors).length === 0) {
          this.submitSuccessful();
        }

        console.log(response);
      })
      .catch(errors => {
        console.log(errors);
        this.submitComplete();
      });
  };

  render() {
    return (
      <Form id="reservationForm" onSubmit={this.handleSubmit}>
        <Row>
          <Col>
            <Form.Group controlId="firstName">
              <Form.Label>
                First Name<span className="req">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                className={this.state.formErrors.firstName}
                required
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="lastName">
              <Form.Label>
                Last Name<span className="req">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                className={this.state.formErrors.lastName}
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group controlId="email">
          <Form.Label>
            Email<span className="req">*</span>
          </Form.Label>
          <Form.Control
            type="email"
            placeholder="name@example.com"
            className={this.state.formErrors.email}
            required
          />
        </Form.Group>
        <Form.Group controlId="phone">
          <Form.Label>Phone</Form.Label>
          <Form.Control />
        </Form.Group>
        <Form.Group controlId="comments">
          <Form.Label>Comments</Form.Label>
          <Form.Control as="textarea" rows="3" />
        </Form.Group>
        <Button id="submit" type="submit" variant="light">
          Submit
        </Button>
      </Form>
    );
  }
}

export default ContactForm;
