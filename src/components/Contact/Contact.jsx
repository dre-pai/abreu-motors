import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import ContactForm from '../ContactForm/ContactForm';
import ThankYou from '../ThankYou/ThankYou';
import './Contact.css';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formSubmitted: false,
    };

    this.updatePageStatus = this.updatePageStatus.bind(this);
  }

  updatePageStatus() {
    this.setState({
      formSubmitted: true,
    });
  }

  render() {
    return (
      <div id="reservationPage">
        <Row className="grayRow">
          <Col>
            <div id="formContainer">
              <div id="formHeading">Contact Us</div>
              {this.state.formSubmitted ? (
                <ThankYou />
              ) : (
                <ContactForm updatePageStatus={this.updatePageStatus} />
              )}
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
