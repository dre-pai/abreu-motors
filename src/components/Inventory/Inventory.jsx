import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { Col, Row, Image } from 'react-bootstrap';
import './Inventory.css';

class Inventory extends React.Component {


  render() {
    window.addEventListener('message', function (event) {
      const iframe = document.getElementById('inventory');
      const inventoryContainer = document.getElementById('inventory-container');
      const loading = document.getElementById('loading');

      if (event.data.viz === "Dis" && event.data.height !== null && iframe) {
        iframe.height = event.data.height;
        loading.style.display = 'none';
        if (event.data.height > 250) inventoryContainer.style.visibility = 'visible';
      }
    }, false);

    return (
      <div id="inventory-page">
        <Row>
          <Col>
            <Image src="./images/911-green.jpg" fluid>
            </Image>
          </Col>
        </Row>
        <div id="loading"><FontAwesomeIcon className="link-icon fa-spin" icon={faSpinner} />Loading...</div>
        <div id="inventory-container" style={{ visibility: 'hidden' }}>
          <iframe title="Inventory" id="inventory" scrolling="no" seamless="seamless" src="https://clients.automanager.com/020310/view-inventory?Framed=1" width="100%" ></iframe>
        </div>
      </div>
    );
  }
}

export default Inventory;
