import React, { useState, useEffect } from 'react'
import './ItemDescription.scss'
import item01 from '../../image/a1.jpg'
import { AiFillCloseCircle, AiOutlineWhatsApp } from 'react-icons/ai'
import Button from '@mui/material/Button';
import instance from '../../utility/AxiosInstance';

import { sampleItemData } from '../SubcatagoryPage/data'

export default function ItemDescription(props) {

    const [itemData, setItemData] = useState(null);

    function hide() {
        props.setDisplayedCardDetails(false);
    }

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await instance.get(`/item/${props.itemID}`);
    //             setItemData(response.data);
    //             // console.log(itemData);
    //         } catch (error) {
    //             console.error('Error fetching item data:', error);
    //         }
    //     };

    //     fetchData();
    // }, [props.itemID]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await instance.get(`/item/${props.itemID}`);
                if (response.data !== "No data found") {
                    setItemData(response.data);
                } else {
                    console.log("No data found");
                    const fallbackData = sampleItemData.find(item => item.item_id === props.itemID);
                    setItemData(fallbackData);
                }
            } catch (error) {
                console.error('Error fetching item data:', error);
                const fallbackData = sampleItemData.find(item => item.item_id === props.itemID);
                setItemData(fallbackData);
            }
        };

        fetchData();
    }, [props.itemID]);


    return (
        <div className='description-contaier'>
            {itemData && (
                <div className="card-container">
                    <div className="maindetail">
                        <div className="left-img">
                            {/* <img src={`http://localhost:3001/image/${itemData.image}`} alt="item" /> */}
                            <img src={`/item/${itemData.image}`} alt="item" />
                        </div>
                        <div className="right-descriptino">
                            <div className="main-detailTag">
                                {/* <div className="catagoryName"><p>Catagory Name :  {props.category_name}</p></div> */}
                                <div className="itemName"><p>Item Name :  {itemData.item_name}</p></div>
                                <div className="brand"><p>Brand :  {itemData.brand}</p></div>
                                <div className="description"><p>Description : {itemData.description}</p></div>
                                <div className="modelNmuber"><p>Price : {itemData.price}</p></div>
                                {/* <div className="contactNymber"><p>Contact Number : </p></div> */}
                                <div className="inquire-section">
                                    <Button variant="outlined" className='inqure-btn' style={{ marginLeft: '10px' }}>Inquire</Button>
                                    <AiOutlineWhatsApp className='whatsapp' style={{ fontSize: '28px', paddingLeft: '15px' }} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="closebtn-fram">
                        <AiFillCloseCircle className='close-btn' style={{ fontSize: '28px', color: 'red' }} onClick={hide} />
                    </div>
                </div>
            )}
        </div>
    )
}
