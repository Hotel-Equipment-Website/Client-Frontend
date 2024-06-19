import React, { useState, useEffect } from 'react';
import './Catagory.scss'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import loby from '../../image/cover.png'
import logo from '../../image/kitchen.jpg'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { styled, alpha } from '@mui/material/styles';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';
import instance from '../../utility/AxiosInstance';
import {sampleCategoryData} from './data';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.black, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.black, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '25ch',
            '&:focus': {
                width: '35ch',
            },
        },
    },
}));


export default function Catagory() {

    // const settings = {
    //     dots: true,
    //     infinite: false,
    //     speed: 500,
    //     slidesToShow: 4,
    //     slidesToScroll: 4,
    //     arrows: false,
    //     initialSlide: 0,
    //     responsive: [
    //         {
    //             breakpoint: 1024,
    //             settings: {
    //                 slidesToShow: 3,
    //                 slidesToScroll: 2,
    //                 infinite: false,
    //                 dots: true,
    //                 rows: 2,
    //             },
    //         },
    //         {
    //             breakpoint: 800,
    //             settings: {
    //                 slidesToShow: 2,
    //                 slidesToScroll: 2,
    //                 initialSlide: 1,
    //                 rows: 1,
    //             },
    //         },
    //         {
    //             breakpoint: 600,
    //             settings: {
    //                 slidesToShow: 2,
    //                 slidesToScroll: 2,
    //                 initialSlide: 1,
    //                 rows: 1,
    //             },
    //         },
    //         {
    //             breakpoint: 480,
    //             settings: {
    //                 slidesToShow: 2,
    //                 slidesToScroll: 2,
    //                 initialSlide: 2,
    //                 rows: 1, // Update to 1 for horizontal layout
    //                 // vertical: true,
    //                 // verticalSwiping: true,
    //                 // swipeToSlide: true,
    //             },
    //         },
    //     ],
    // };

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: false,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    infinite: false,
                    dots: true,
                    rows: 2,
                },
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 1,
                    rows: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 1,
                    rows: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    rows: 1,
                },
            },
        ],
    };

    const [categoryData, setCategoryData] = useState([]);

    // useEffect(() => {
    //     instance.get("/categories")
    //         .then(res => {
    //             if (res.data !== "No data found") {
    //                 setCategoryData(res.data)
    //                 // console.log(categoryData)
    //             }
    //             else console.log("No data found");
    //         }).catch(err => console.log(err))
    // }, [])

    useEffect(() => {
        instance.get("/categories")
            .then(res => {
                if (res.data !== "No data found") {
                    setCategoryData(res.data);
                } else {
                    console.log("No data found");
                }
            })
            .catch(err => {
                console.log(err);
                setCategoryData(sampleCategoryData);
            });
    }, []);

    return (
        <div className='catagory-container' id="catagory">
            <div>
                <Slider {...settings}>
                    {
                        categoryData && categoryData.map((item, key) => (
                            <Link to={`/Subcatagory/${item.category_id}/${item.category_name}`} key={key} className='catagory-card-link' >
                                <Card sx={{
                                    maxWidth: 250,
                                    marginBottom: '15px',
                                    '&:hover': {
                                        transition: 'all .2s ease-in-out',
                                        transform: 'scale(1.02)',
                                        boxShadow: '6px 6px 9px rgba(0, 0, 0, 0.2)'
                                    }
                                }} className='catagory-card'>
                                    <CardMedia
                                        component="img"
                                        height="180"
                                        // image={`http://localhost:3001/image/${item.image}`}
                                        image={`./category/${item.image}`}
                                        alt="Your Image Alt Text"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {item.category_name}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Link>
                        ))
                    }
                </Slider>
            </div>
        </div>
    )
}
