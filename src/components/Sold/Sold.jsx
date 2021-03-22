import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { Col, Row, Image } from 'react-bootstrap';
import './Sold.css';

export default class Sold extends React.Component {
  render() {
    window.addEventListener('message', function (event) {
      const iframe = document.getElementById('sold');
      const soldContainer = document.getElementById('sold-container');
      const loading = document.getElementById('loading');

      if (event.data.viz === "Dis" && event.data.height !== null && iframe) {
        iframe.height = event.data.height;
        loading.style.display = 'none';
        if (event.data.height > 250) soldContainer.style.visibility = 'visible';
      }
    }, false);

    return (
      <div id="sold-page">
        <div id="loading"><FontAwesomeIcon className="link-icon fa-spin" icon={faSpinner} />Loading...</div>
        <div id="sold-container" style={{ visibility: 'hidden' }}>
          <iframe title="Recently Sold Inventory" id="sold" scrolling="no" seamless="seamless" src="https://clients.automanager.com/020310/recently-sold?framed=1" width="100%" ></iframe>
        </div>
      </div>
    );
  }
}