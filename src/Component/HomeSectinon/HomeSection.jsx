import React from 'react'
import './HomeSection.scss'
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';

export default function HomeSection() {

    const navigate = useNavigate();

    const handleInquireClick = () => {
        // Navigate to the ContactUs page when the Inquire button is clicked
        navigate('/contact-us');
    };

    return (
        <div className='homesection-container'>
            <div className='dark-background'>
                <div className="nameOfTheSite">
                    <h1 style={{ color: 'red' }}>Hotel Name</h1>
                </div>
                <div className='text-header'>
                    <p>World's Best</p>
                    <p>Quality Products</p>
                </div>
                <div className='inquire'>
                    <button onClick={handleInquireClick}>Inquire</button>
                </div>
                {/* <Button style={{ marginLeft: "60px", marginTop: "20px" }} variant="contained" disableElevation onClick={handleInquireClick}>
                    Inquire
                </Button> */}
            </div>
        </div >
    )
}
