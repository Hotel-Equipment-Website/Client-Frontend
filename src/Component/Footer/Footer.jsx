import React from 'react'
import './Footer.scss'
import { IoIosCall } from 'react-icons/io'
import { AiOutlineWhatsApp, AiOutlineMail } from 'react-icons/ai'

export default function Footer() {
  return (
    <div className='footer-container'>
      <div className="site-name"><h1>Website name</h1></div>
      <div className="contact-detail">
        <div>Mobile Number : <b style={{ color: 'red', paddingLeft: '5px' }}>0123456789</b></div>
        <div className='divid-mark' style={{ paddingLeft: '25px' }}>|</div>
        <div className='numbers'>WhatsApp Number : <b style={{ color: 'red', paddingLeft: '5px' }}>0123456789</b></div>
        <div className='divid-mark' style={{ paddingLeft: '25px' }}>|</div>
        <div className='numbers'>Email : <b style={{ color: 'red', paddingLeft: '5px' }}>0123456789</b></div>
      </div>
      <div className="social-meadia">
        <a href=""><IoIosCall style={{ color: 'white' }} /></a>
        <a href=""><AiOutlineWhatsApp style={{ color: 'green' }} /></a>
        <a href=""><AiOutlineMail style={{ color: 'red' }} /></a>
      </div>
      <div className="copyright">© Copyright Metro Express</div>
    </div>
  )
}
