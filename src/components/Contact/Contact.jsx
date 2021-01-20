import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import ContactForm from '../ContactForm/ContactForm';
import './Contact.css';

class Contact extends React.Component {
  render() {
    return (
      <div id="reservationPage">
        <Row>
          <Col>
            <div id="formContainer">
              <div id="formHeading">Contact Us</div>
                <ContactForm />
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <Image src="images/res-2.jpg" fluid />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Contact;
