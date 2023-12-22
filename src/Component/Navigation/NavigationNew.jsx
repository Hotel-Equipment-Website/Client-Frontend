import React from 'react'
import './NavigationNew.scss'
import logo from '../../image/logo.png'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <div className='navigation-container'>
      <nav>
        <input type="checkbox" id='check' className='check' />
        <label for='check'>
          {/* <i className='fas fa-bars' id='btn'></i>
          <i className='fas fa-times' id='cancel'></i> */}
          <FaBars className='btn' />
          <FaTimes className='cancel' />
        </label>
        <div className='name'>
          <div className='logo'><a href="/"><img src={logo} alt="logo" /></a></div>
          <h1><a href="/" style={{ color: 'white', textDecoration: 'none' }}>Hotel</a></h1>
        </div>
        <ul>
          <li><a href="/">HOME</a></li>
          <li><a href="/#catagory">CATEGORY</a></li>
          <li><a href="/About">ABOUT US</a></li>
          {/* <li><a href="#Package">Package</a></li> */}
          <li><a href="ContactUs">CONTACT US</a></li>
        </ul>
      </nav>
    </div>
  )
}