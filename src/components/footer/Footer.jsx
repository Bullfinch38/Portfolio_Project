import React from 'react';
import './footer.css';
import {GrInstagram} from 'react-icons/gr'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Konstantin Snigirev</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contacts">Contacts</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://instagram.com" target='_blank'><GrInstagram /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Konstantin Snigirev Portfolio Page. All rights reserved.</small>
      </div>

    </footer>
  )
}

export default Footer