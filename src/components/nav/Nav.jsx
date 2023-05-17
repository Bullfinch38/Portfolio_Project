import React, { useEffect } from 'react';
import './nav.css';
import {AiOutlineHome} from 'react-icons/ai';
import {AiOutlineUser} from 'react-icons/ai';
import {BiBookReader} from 'react-icons/bi';
import {MdMiscellaneousServices} from 'react-icons/md';
import {MdWorkOutline} from 'react-icons/md';
import {BiCommentCheck} from 'react-icons/bi';
import {BiMessageAltEdit} from 'react-icons/bi';
import {useState} from 'react';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  const [clickedNav, setClickedNav] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY;
      const currentPosition = scrollPosition + window.innerHeight / 2;
        
        if (clickedNav) {
          setActiveNav(clickedNav);
          setClickedNav('');
        } else {
          const activeSection = Array.from(sections).find((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            return currentPosition >=sectionTop && currentPosition < sectionTop +sectionHeight;
          });

        if (activeSection) {
          setActiveNav(`#${activeSection.id}`);
        } else if (currentPosition >= document.documentElement.scrollHeight - window.innerHeight) {
          setActiveNav('#contacts');
        } else {
          setActiveNav(scrollPosition === 0 ? '#' : '');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [clickedNav]);

  return (
    <nav>
      <a href="#" onClick={() => setClickedNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
      <a href="#about" onClick={() => setClickedNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
      <a href="#experience" onClick={() => setClickedNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBookReader/></a>
      <a href="#services" onClick={() => setClickedNav('#services')} className={activeNav === '#services' ? 'active' : ''}><MdMiscellaneousServices/></a>
      <a href="#portfolio" onClick={() => setClickedNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><MdWorkOutline /></a>
      <a href="#testimonials" onClick={() => setClickedNav('#testimonials')} className={activeNav === '#testimonials' ? 'active' : ''}><BiCommentCheck/></a>
      <a href="#contacts" onClick={() => setClickedNav('#contacts')} className={activeNav === '#contacts' ? 'active' : ''}><BiMessageAltEdit/></a>
    </nav>
  )
};


export default Nav