import React from 'react'
import './HomeSection.scss'
import { useNavigate } from 'react-router-dom';
import Fade from 'react-reveal/Fade'

export default function HomeSection() {

    const navigate = useNavigate();

    const handleInquireClick = () => {
        // Navigate to the ContactUs page when the Inquire button is clicked
        navigate('/contact-us');
    };

    return (
        <div className='homesection-container'>
            <div className='dark-background'>
                {/* <div className="nameOfTheSite">
                    <Fade bottom duration={2000}>
                        <h1>NTN Hotel Supply Network</h1>
                    </Fade>
                    <Fade bottom duration={2000}>
                        <h2>Nextgen Tourism Necessities Hotel Supply Network</h2>
                    </Fade>
                </div>
                <Fade bottom duration={2000}>
                    <div className='text-header'>
                        <p>World's Best Quality Products</p>
                    </div>
                </Fade>
                <Fade bottom duration={2000}>
                    <div className='inquire'>
                        <button onClick={handleInquireClick}>Inquire</button>
                    </div>
                </Fade> */}

                <Fade bottom duration={2000}>
                    <div className="nameOfTheSite">
                        <h1>NTN Hotel Supply Network</h1>
                        <h2>Nextgen Tourism Necessities Hotel Supply Network</h2>
                    </div>
                        <div className='text-header'>
                        <p>World's Best Quality Products</p>
                        </div>
                    <div className='inquire'>
                        <button onClick={handleInquireClick}>Inquire</button>
                    </div>
                </Fade>
            </div>
        </div >
    )
}
