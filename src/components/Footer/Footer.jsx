import React from 'react';
import { Instagram } from 'react-feather';
import { Image } from 'react-bootstrap';
import './Footer.css';

export default class Footer extends React.Component {
  render() {
    return (
      <footer className="text-center">
        <div class="footer-icons">
          <a href="https://www.instagram.com/abreumotors" target="_blank"><Instagram size={40}/></a>
          <a  href="https://www.woodsidecredit.com/" target="_blank"><Image id="woodside" src="images/logos/woodside-icon.png" /></a>
        </div>
        Copyright &copy; {new Date().getFullYear()} Abreu Motors
      </footer>
    );
  }
}
