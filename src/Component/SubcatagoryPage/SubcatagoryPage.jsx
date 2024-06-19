// import React, { useState, useEffect } from 'react';
// import './SubcatagoryPage.scss'
// import { useParams } from 'react-router-dom';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import loby from '../../image/cover.png'
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import SearchIcon from '@mui/icons-material/Search';
// import InputBase from '@mui/material/InputBase';
// import { styled, alpha } from '@mui/material/styles';
// import Detail from '../ItemDescription/ItemDescription';
// import instance from '../../utility/AxiosInstance';
// import _ from 'lodash';
// import {sampleItemData} from './data'

// import plates from '../../image/cover/Plates.png';
// import mugs from '../../image/cover/Mugs.png';
// import glasses from '../../image/cover/Glasses.png';
// import spoons_Forks from '../../image/cover/Spoons_Forks.png';

// const categoryCoverImages = {
//     plates: plates,
//     mugs: mugs,
//     glasses: glasses,
//     spoons_Forks: spoons_Forks
// };


// const Search = styled('div')(({ theme }) => ({
//     position: 'relative',
//     borderRadius: theme.shape.borderRadius,
//     backgroundColor: alpha(theme.palette.common.black, 0.15),
//     '&:hover': {
//         backgroundColor: alpha(theme.palette.common.black, 0.25),
//     },
//     marginLeft: 0,
//     width: '100%',
//     [theme.breakpoints.up('sm')]: {
//         marginLeft: theme.spacing(1),
//         width: 'auto',
//     },
// }));

// const SearchIconWrapper = styled('div')(({ theme }) => ({
//     padding: theme.spacing(0, 2),
//     height: '100%',
//     position: 'absolute',
//     pointerEvents: 'none',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
// }));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//     color: 'inherit',
//     '& .MuiInputBase-input': {
//         padding: theme.spacing(1, 1, 1, 0),
//         // vertical padding + font size from searchIcon
//         paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//         transition: theme.transitions.create('width'),
//         width: '100%',
//         [theme.breakpoints.up('sm')]: {
//             width: '25ch',
//             '&:focus': {
//                 width: '35ch',
//             },
//         },
//     },
// }));

// export default function SubcatagoryPage() {

//     const [displayedCards, setDisplayedCards] = useState(8);

//     // const [searchQuery, setSearchQuery] = useState('');

//     // const [filteredData, setFilteredData] = useState();

//     const [searchQuery, setSearchQuery] = useState('');

//     const [displayDetailCard, setDisplayedCardDetails] = useState(false);

//     const [itemData, setItemData] = useState([]);

//     const { category_id, category_name } = useParams();

//     const [itemID, setItemID] = useState(-999)

//     const showDetail = async (id) => {
//         setDisplayedCardDetails(true);
//         setItemID(id);
//     }

//     const filteredItems = itemData.filter((item) =>
//         item.item_name.toLowerCase().includes(searchQuery.toLowerCase())
//     );

//     // useEffect(() => {
//     //     setDisplayedCards(8);
//     // }, [searchQuery]);

//     // useEffect(() => {
//     //     instance.get(`/category/${category_id}/items`)
//     //         .then(res => {
//     //             if (res.data !== "No data found") {
//     //                 setItemData(res.data)
//     //                 // console.log(itemData)
//     //             }
//     //             else console.log("No data found");
//     //         }).catch(err => console.log(err))
//     //     window.scrollTo(0, 0);
//     // }, [])

//     useEffect(() => {
//         const fetchItems = async () => {
//             try {
//                 const res = await instance.get(`/category/${category_id}/items`);
//                 if (res.data !== "No data found") {
//                     setItemData(res.data);
//                 } else {
//                     console.log("No data found");
//                     const fallbackData = sampleItemData.filter(item => item.category_id === parseInt(category_id));
//                     setItemData(fallbackData);
//                 }
//             } catch (err) {
//                 console.log(err);
//                 const fallbackData = sampleItemData.filter(item => item.category_id === parseInt(category_id));
//                 setItemData(fallbackData);
//             }
//         };

//         fetchItems();
//         window.scrollTo(0, 0);
//     }, [category_id]);

//     const coverImage = categoryCoverImages[category_name.toLowerCase()] || plates;

//     return (
//         <div className='subcatagoryPage-conatiner subcategory-auto-scroll'>

//             {displayDetailCard && itemID !== -999 ? <Detail setDisplayedCardDetails={setDisplayedCardDetails} itemID={itemID} setItemID={setItemID} /> : null}
//             <div className="cover"><img src={coverImage} alt="lobby" /></div>
//             <div className="name">
//                 <h1>{category_name}</h1>
//             </div>
//             <hr />
//             <div className="search">
//                 <Search>
//                     <SearchIconWrapper>
//                         <SearchIcon />
//                     </SearchIconWrapper>
//                     <StyledInputBase
//                         placeholder="Search…"
//                         inputProps={{ 'aria-label': 'search' }}
//                         value={searchQuery}
//                         onChange={(e) => setSearchQuery(e.target.value)}
//                     />
//                 </Search>
//             </div>
//             <div className="catagory-section" >
//                 {
//                     itemData && filteredItems.map((item, key) => (
//                         // <div className='card' >
//                         <Card sx={{
//                             maxWidth: 600,
//                             width: 280,
//                             marginBottom: '15px',
//                             // '&:hover': {
//                             //     transition: 'all .2s ease-in-out',
//                             //     transform: 'scale(1.02)',
//                             //     boxShadow: '6px 6px 9px rgba(0, 0, 0, 0.2)',
//                             //     cursor: 'pointer'
//                             // }
//                         // }} key={key} className='card-fram' onClick={() => showDetail(item.item_id)}>
//                         }} key={key} className='card-fram'>
//                             <CardMedia
//                                 className='image-class'
//                                 component="img"
//                                 height="160"
//                                 // image={`http://localhost:3001/image/${item.image}`}
//                                 image={`/item/${item.image}`}
//                                 alt="Your Image Alt Text"
//                             />
//                             <CardContent>
//                                 <Typography gutterBottom variant="h5" component="div">
//                                     {item.item_name}
//                                 </Typography>
//                                 <Typography variant="body2" color="text.secondary">
//                                     <p>Item code: {item.item_id}</p>
//                                 </Typography>
//                             </CardContent>
//                             {/* <CardActions>
//                                 <Button size="small">Inquire</Button>
//                             </CardActions> */}
//                         </Card>
//                         // </div>
//                     ))
//                 }
//             </div>

//             {/* <Stack spacing={2} style={{ paddingTop: '10px', paddingBottom: '30px' }}>
//                 <Pagination
//                     count={10} // Number of pages
//                     variant="outlined"
//                     shape="rounded"
//                     onChange={handlePageChange} // Handle page change event
//                 />
//             </Stack> */}
//             {displayedCards < filteredItems.length && (
//                 <Button onClick={() => setDisplayedCards(displayedCards + 8)}>See More</Button>
//             )}

//         </div>
//     )
// }


import React, { useState, useEffect } from 'react';
import './SubcatagoryPage.scss'
import { useParams } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import loby from '../../image/cover.png'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { styled, alpha } from '@mui/material/styles';
import Detail from '../ItemDescription/ItemDescription';
import instance from '../../utility/AxiosInstance';
import _ from 'lodash';
import {sampleItemData} from './data'

import plates from '../../image/cover/Plates.png';
import mugs from '../../image/cover/Mugs.png';
import glasses from '../../image/cover/Glasses.png';
import spoons_Forks from '../../image/cover/Spoons_Forks.png';

const categoryCoverImages = {
    plates: plates,
    mugs: mugs,
    glasses: glasses,
    spoons_Forks: spoons_Forks
};

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

export default function SubcatagoryPage() {

    const [displayedCards, setDisplayedCards] = useState(8);
    const [searchQuery, setSearchQuery] = useState('');
    const [displayDetailCard, setDisplayedCardDetails] = useState(false);
    const [itemData, setItemData] = useState([]);
    const { category_id, category_name } = useParams();
    const [itemID, setItemID] = useState(-999);

    const showDetail = async (id) => {
        setDisplayedCardDetails(true);
        setItemID(id);
    };

    const filteredItems = itemData.filter((item) =>
        item.item_name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const res = await instance.get(`/category/${category_id}/items`);
                if (res.data !== "No data found") {
                    setItemData(res.data);
                } else {
                    console.log("No data found");
                    const fallbackData = sampleItemData.filter(item => item.category_id === parseInt(category_id));
                    setItemData(fallbackData);
                }
            } catch (err) {
                console.log(err);
                const fallbackData = sampleItemData.filter(item => item.category_id === parseInt(category_id));
                setItemData(fallbackData);
            }
        };

        fetchItems();
        window.scrollTo(0, 0);
    }, [category_id]);

    const coverImage = categoryCoverImages[category_name.toLowerCase()] || plates;

    return (
        <div className='subcatagoryPage-conatiner subcategory-auto-scroll'>
            {displayDetailCard && itemID !== -999 ? <Detail setDisplayedCardDetails={setDisplayedCardDetails} itemID={itemID} setItemID={setItemID} /> : null}
            <div className="cover"><img src={coverImage} alt="lobby" /></div>
            <div className="name">
                <h1>{category_name}</h1>
            </div>
            <hr />
            <div className="search">
                <Search>
                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Search…"
                        inputProps={{ 'aria-label': 'search' }}
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </Search>
            </div>
            <div className="catagory-section">
                {
                    itemData && filteredItems.slice(0, displayedCards).map((item, key) => (
                        <Card sx={{
                            maxWidth: 600,
                            width: 280,
                            marginBottom: '15px',
                        // }} key={key} className='card-fram' onClick={() => showDetail(item.item_id)}>
                        }} key={key} className='card-fram' >
                            <CardMedia
                                className='image-class'
                                component="img"
                                height="160"
                                image={`/item/${item.image}`}
                                alt="Your Image Alt Text"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="div">
                                    {item.item_name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {item.description}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    <p>Item code: {item.item_id}</p>
                                </Typography>
                            </CardContent>
                        </Card>
                    ))
                }
            </div>
            {displayedCards < filteredItems.length && (
                <Button onClick={() => setDisplayedCards(displayedCards + 8)}>See More</Button>
            )}
        </div>
    )
}
