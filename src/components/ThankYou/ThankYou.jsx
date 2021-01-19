import React from 'react';
import { Alert } from 'react-bootstrap';

class ThankYou extends React.Component {
  render() {
    return (
      <Alert variant="success">
        <Alert.Heading>Thank you for your submission</Alert.Heading>
        <p>A representative will be in contact with you shortly.</p>
      </Alert>
    );
  }
}

export default ThankYou;
