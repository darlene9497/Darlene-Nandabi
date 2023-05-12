import React from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';

export default function Contact() {
    const form = useRef();
    const [done, setDone] = useState(false)
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_ib9falw', 'template_dxrlpgh', form.current, 'HBxdC2GjZ1hhZAQbv')
        .then((result) => {
            console.log(result.text);
            setDone(true);
            // form.reset();
        }, (error) => {
            console.log(error.text);
        });
    };

  return (
    <div className="contact-form">
        <div className="w-left">
            <div className="awesome">
                <span>Get in touch</span>
                <span>Contact me</span>
                <div className='blur s-blur1'
                style={{background: '#fcaad3dd'}}>
                </div>
            </div>
        </div>
        <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="user_name" className="user"  placeholder="Name"/>
          <input type="email" name="user_email" className="user" placeholder="Email"/>
          <textarea name="message" className="user" placeholder="Message"/>
          <input type="submit" value="Send" className="button"/>
          <span>{done && "Thanks for Contacting me"}</span>
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
        </div>
    </div>
  )
}
