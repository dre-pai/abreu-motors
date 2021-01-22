import React from 'react';
import { Row, Image } from 'react-bootstrap';
import './Home.css';

class Home extends React.Component {
  render() {
    return (
      <div>
        <Row id="hero-container">
          <Image id="hero" src="images/herocar.jpg" />
        </Row>
        <Row id="orders">
          <a href="/inventory" id="orders-now" className="orders-text">
            Collection
          </a>
        </Row>
      </div>
    );
  }
}

export default Home;
