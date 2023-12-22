import React from 'react'
import './WhatWeDo.scss'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Fade from 'react-reveal/Fade'

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);


export default function WhatWeDo() {
    return (
        <div className='whatWeDo-container'>
            <Fade bottom duration={2000}>
                <div className='whatWeDo-fram' >
                    <div className='top'>
                        <h1>What We Do</h1>
                    </div>

                    <div className='center-detail'>
                        <p>Welcome to <b style={{ color: 'red' }}>Name of the website</b>, your trusted partner in sourcing and distributing high-quality hotel equipment from China to Sri Lanka.</p>
                    </div>

                    <div className='bottom'>

                        {/* <div className="card-fram">
                <div className="card-header">
                    <div className="nameOfTheCard">
                        <p>Online Ordering</p>
                    </div>
                </div>
                <div className="card-body">
                    <p>
                        Customers can usually place orders online through the website, selecting the quantity and specifications of the products they want.
                    </p>
                </div>
            </div> */}

                        {/* <div className="card-fram">
                    <div className="card-header">
                        <div className="nameOfTheCard">
                            <p>Order Tracking</p>
                        </div>
                    </div>
                    <div className="card-body">
                        <p>
                            Customers may have the ability to track the status of their orders, including estimated delivery times and shipment details.
                        </p>
                    </div>
                </div> */}

                        {/* <div className="card-fram">
                    <div className="card-header">
                        <div className="nameOfTheCard">
                            <p>Product Catalog</p>
                        </div>
                    </div>
                    <div className="card-body">
                        <p>
                            These websites often provide a comprehensive catalog of hotel equipment and supplies, making it easy for customers to browse and select the items they need.
                        </p>
                    </div>
                </div> */}

                        {/* <Card sx={{ minWidth: 100, borderRadius: '20px', border: 'solid #006FB4 2px' }}>
                    <CardContent className='CardContent'>
                        <Typography className='head' variant="h5" component="div">
                            Online Ordering
                        </Typography>
                        <Typography className='body' variant="body2">
                            Customers can usually place orders online through the website, selecting the quantity and specifications of the products they want.
                        </Typography>
                    </CardContent>
                </Card>

                <Card sx={{ minWidth: 275, borderRadius: '20px', border: 'solid #006FB4 2px' }} >
                    <CardContent className='CardContent'>
                        <Typography className='head' variant="h5" component="div">
                            Order Tracking
                        </Typography>
                        <Typography className='body' variant="body2">
                            Customers may have the ability to track the status of their orders, including estimated delivery times and shipment details.
                        </Typography>
                    </CardContent>
                </Card>

                <Card sx={{ minWidth: 275, borderRadius: '20px', border: 'solid #006FB4 2px' }} >
                    <CardContent className='CardContent'>
                        <Typography className='head' variant="h5" component="div">
                            Product Catalog
                        </Typography>
                        <Typography className='body' variant="body2">
                            These websites often provide a comprehensive catalog of hotel equipment and supplies, making it easy for customers to browse and select the items they need.
                        </Typography>
                    </CardContent>
                </Card> */}

                        <Card sx={{ maxWidth: 1200, width: 400, borderRadius: 6, minHeight: 200, display: 'flex', alignItems: 'center', justifyContent: 'center' }} className='card-fram'>
                            <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                <Typography variant="h5" component="div">
                                    Online Ordering
                                </Typography>
                                <Typography variant="body2" sx={{ textAlign: 'justify' }}>
                                    Customers can usually place orders online through the website, selecting the quantity and specifications of the products they want.
                                </Typography>
                            </CardContent>
                        </Card>
                        <Card sx={{ maxWidth: 1200, width: 400, borderRadius: 6, minHeight: 200, display: 'flex', alignItems: 'center', justifyContent: 'center' }} className='card-fram'>
                            <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                <Typography variant="h5" component="div">
                                    Order Tracking
                                </Typography>
                                <Typography variant="body2" sx={{ textAlign: 'justify' }}>
                                    Customers may have the ability to track the status of their orders, including estimated delivery times and shipment details.
                                </Typography>
                            </CardContent>
                        </Card>
                        <Card sx={{ maxWidth: 1200, width: 400, borderRadius: 6, minHeight: 200, display: 'flex', alignItems: 'center', justifyContent: 'center' }} className='card-fram'>
                            <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                <Typography variant="h5" component="div">
                                    Product Catalog
                                </Typography>
                                <Typography variant="body2" sx={{ textAlign: 'justify' }}>
                                    These websites often provide a comprehensive catalog of hotel equipment and supplies, making it easy for customers to browse and select the items they need.
                                </Typography>
                            </CardContent>
                        </Card>

                    </div>
                </div>
            </Fade>
        </div>
    )
}
