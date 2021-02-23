import React from 'react';
import { Col, Row, Image } from 'react-bootstrap';
import './Detailing.css'

class Detailing extends React.Component {
  render() {
    return (
      <div>
        <Row>
          <Col>
            <Image fluid src="./images/g6.jpg"></Image>
          </Col>
        </Row>
        <Row>
          <Col>
            <Image fluid src="./images/g1.jpg"></Image>
          </Col>
          <Col>
            <Image fluid src="./images/g2.jpg"></Image>
          </Col>
        </Row>
      </div>

    );
  }
}

export default Detailing;
