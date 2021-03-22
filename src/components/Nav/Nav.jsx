import React from 'react';
import { Navbar, Nav, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom';
import './Nav.css';

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isExpanded: false,
    };

    this.checkState = this.checkState.bind(this);
    this.backdateRedirect = this.backdateRedirect.bind(this);
    this.hideNav = this.hideNav.bind(this);
    this.showNav = this.showNav.bind(this);
  }

  checkState() {
    this.state.isExpanded ? this.hideNav() : this.showNav();
  }

  hideNav() {
    if (this.state.isExpanded) {
      this.setState({
        isExpanded: false,
      });
    }
  };

  showNav() {
    this.setState({
      isExpanded: true,
    });
  }

  backdateRedirect() {
    window.open('https://911backdate.com/', '_blank');
    this.hideNav();
  }

  render() {
    return (
      <div>
        <Navbar
          expanded={this.state.isExpanded}
          expand="lg"
          bg="dark"
          variant="dark"
          onToggle={this.checkState}
          className="container-md"
        >
          <Navbar.Brand as={NavLink} to="/" onClick={this.hideNav}>
            <Image src="/images/logos/abreu-logo-v2.png" fluid />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link
                as={NavLink}
                to="/"
                onClick={this.hideNav}
                activeClassName="active"
                exact
              >
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to="/inventory" onClick={this.hideNav}>
                The Cars
              </Nav.Link>
              <Nav.Link as={NavLink} to="/sold" onClick={this.hideNav}>
                Sold
              </Nav.Link>
              <Nav.Link as={NavLink} to="/detailing" onClick={this.hideNav}>
                Automotive & Design
              </Nav.Link>
              <Nav.Link as={NavLink} to="/about" onClick={this.hideNav}>
                About
              </Nav.Link>
              <Nav.Link as={NavLink} to="/contact" onClick={this.hideNav}>
                Contact
              </Nav.Link>
              <Nav.Link onClick={this.backdateRedirect}>
                911 Backdate <FontAwesomeIcon className="link-icon" icon={faExternalLinkAlt} />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
