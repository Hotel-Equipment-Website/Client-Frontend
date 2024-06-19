import React from 'react'
import './Footer.scss'
import { IoIosCall } from 'react-icons/io'
import { AiOutlineWhatsApp, AiOutlineMail } from 'react-icons/ai'

export default function Footer() {
  return (
    <div className='footer-container'>
      <div className="site-name"><h2>NTN Hotel Supply Network</h2></div>
      <div className="contact-detail">
        <div>Mobile Number : 0123456789</div>
        <div className='divid-mark' style={{ paddingLeft: '25px' }}>|</div>
        <div className='numbers'>WhatsApp Number : 0123456789</div>
        <div className='divid-mark' style={{ paddingLeft: '25px' }}>|</div>
        <div className='numbers'>Email : nptnilan@gmail.com</div>
      </div>
      <div className="social-meadia">
        <a href=""><IoIosCall style={{ color: 'white' }} /></a>
        <a href=""><AiOutlineWhatsApp style={{ color: 'green' }} /></a>
        <a href=""><AiOutlineMail style={{ color: 'red' }} /></a>
      </div>
      <div className="copyright">© Copyright Tharindu Nilan</div>
    </div>
  )
}
