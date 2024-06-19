import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import necessary components
import ContactUs from './Component/ContactUs/ContactUs';
import Navigation2 from './Component/Navigation/NavigationNew';
import Home from './Component/Home/Home';
import Catagory from './Component/Catagory/Catagory';
import About from './Component/About/About';
import Footer from './Component/Footer/Footer';
import SubcatagoryPage from './Component/SubcatagoryPage/SubcatagoryPage';
import ItemDescription from './Component/ItemDescription/ItemDescription';

function App() {
  return (
    <Router>
      <Navigation2 />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Subcatagory/:category_id/:category_name" element={<SubcatagoryPage />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/catagory" element={<Catagory />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail" element={<ItemDescription />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
