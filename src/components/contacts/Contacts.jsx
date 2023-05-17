import React from 'react';
import './contacts.css';
import {MdOutlineEmail} from 'react-icons/md';
import {FaTelegram} from 'react-icons/fa';
import {ImWhatsapp} from 'react-icons/im';
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contacts = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_8tb3x6g', 'template_djdslvm', form.current, 'HYFDvKJKeCPssIicj')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    e.target.reset();
  };

  return (
    <section id='contacts'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">

          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>konstantinsnigirev92@gmail.com</h5>
            <a href="mailto:konstantinsnigirev92@gmail.com" target='_blank'>Send a message</a>
          </article>

          <article className='contact__option'>
            <FaTelegram className='contact__option-icon'/>
            <h4>Telegram</h4>
            <h5>@Bullfinch38</h5>
            <a href="https://t.me/Bullfinch38" target='_blank'>Send a message</a>
          </article>

          <article className='contact__option'>
            <ImWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+123456789</h5>
            <a href="https://wa.me/+79999902521" target='_blank'>Send a message</a>
          </article>

        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contacts