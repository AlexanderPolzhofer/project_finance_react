import React from 'react';

import Description from '../../components/description/description.component';

import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Custombutton from '../../components/custom-button/CustomButton.component';

import './StockDetail.styles.css';

export default function StockDetail() {

    const { state } = useLocation();
    /*const apiKey = '37zxr4r5zrfyuhr143n4hq';*/

    const [stockDetail, setStockDetail] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        const fetchingData = async () => {
            /*const url = `https://api.leeway.tech/api/v1/public/fundamentals/${state.symbol}.XETRA?apitoken=${apiKey}`;*/
            const url = `http://localhost:8080/stock/value/${state.symbol}.XETRA`;

            try {
                const response = await fetch(url);
                const data = await response.json();
                setStockDetail(data)
                setIsLoading(false)
            } catch (error) {
                console.log('ERROR: ' + error)
            }
        }
        fetchingData();
    }, [state.symbol]);


    return (
        <div className='container'>

            <Custombutton className='button' to='/daxValues' text='&#10094;' />
            <u><h1>{state.name}</h1></u>

            <div className='content'> {isLoading ? '...loading' : <Description description={stockDetail.description} />}
            </div>
        </div>
    );
}
