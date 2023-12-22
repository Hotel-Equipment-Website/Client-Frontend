import React from 'react'
import { useState, useRef } from 'react'
import './ContactUs.scss'
import { IoIosCall } from 'react-icons/io'
import { AiOutlineWhatsApp } from 'react-icons/ai'
import { AiOutlineMail } from 'react-icons/ai'
import emailjs from '@emailjs/browser';

const Result = () => {
  return (
    <p style={{ color: "blue", paddingLeft: '50px' }}>Your massage has been succsessfully sent. I will contact you soon.</p>
  )
}

export default function ContactUs() {

  const [result, showResult] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_guhubad', 'template_bcyxgvo', form.current, '6xpgg2w6Z_4Ux7VNq')
    // emailjs.sendForm('service_5f48hst', 'template_fqhjwjo', form.current, '_pv4IQu8twoU6-Nrx')
    // .then((result) => {
    //   console.log(result.text);
    // }, (error) => {
    //   console.log(error.text);
    // });

    e.target.reset();
    showResult(true);
  };

  setTimeout(() => {
    showResult(false);
  }, 5000)

  return (
    <div className='contactUs-container' id='#catagory'>
      <div className="contactUs-top">
        <h1>Contact Us</h1>
      </div>
      <hr />
      <div className="contactUs-bottom">
        <div className="image-section" >
          <div className="left"></div>
          <div className="detail">
            <div className="head">Contact Us</div>
            <div className="body-detail"><p>Call us to book your order.</p></div>
            <div className="conatct-detail">
              <h4><IoIosCall style={{ paddingRight: '10px' }} />Mobile Number:</h4>
              <p style={{ color: 'red' }}>0712345698</p>
              <h4><AiOutlineWhatsApp style={{ paddingRight: '10px' }} />WhatsApp Number:</h4>
              <p style={{ color: 'red' }}>0712345698</p>
              <h4><AiOutlineMail style={{ paddingRight: '10px' }} />Email:</h4>
              <p style={{ color: 'red' }}>abc@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

      <div className="form-name"><h1>Get In Touch</h1></div>

      <div className="form-section">
        <form action="" ref={form} onSubmit={sendEmail}>

          <div className="contact-form-row">
            <div className="input-wrapper">
              <label for="name">Name</label>
              <input type="text" name="name" required />
              <div className="inputline"></div>
            </div>
            <div className="input-wrapper">
              <label for="email">Email Address</label>
              <input type="text" name="email" required />
              <div className="inputline"></div>
            </div>
          </div>

          <div className="contact-form-row">
            <div className="input-wrapper">
              <label for="name">Subject</label>
              <input type="text" name="subject" />
              <div className="inputline"></div>
            </div>
            <div className="input-wrapper">
              <label for="email">WhatsApp Number</label>
              <input type="text" name="whatsAppNumber" required />
              <div className="inputline"></div>
            </div>
          </div>

          <div className="input-wrapper">
            <label for="name" className='massagelabel'>Type Your Massage</label>
            {/* <textarea id="txtid" name="message" rows="4" cols="50" maxlength="200" required>

            </textarea> */}
            <input type="text" name="message" required className='massage' />
          </div>

          <div>{result ? <Result /> : null}</div>
          <div class="submit-wrapper">
            <input type="submit" value="Send Message" class="contact-submit" />
          </div>

        </form>
      </div>
    </div>
  )
}