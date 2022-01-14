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


    const [isTechnicalDataLoading, setIstTechnicalDataLoading] = useState(true);

    const [xValues, setXValues] = useState([]);
    const [yValues, setYValues] = useState([]);


    useEffect(() => {
        const fetchingData = async () => {

            const apiKeyAlphaVantage = 'RFPSJQBOAQINO7QV';

            //const url = `http://localhost:8080/stock/value/${state.symbol}.XETRA`;
            const alphaVantageUrl = `https://www.alphavantage.co/query?function=MAMA&symbol=${state.symbol}&interval=daily&series_type=close&fastlimit=0.02&apikey=${apiKeyAlphaVantage}`;

            /*try {
                const response = await fetch(url);
                const data = await response.json();
                setStockDetail(data);
                setIsLoading(false);
            } catch (error) {
                console.log('ERROR: ' + error);
            }*/

            try {
                const res = await fetch(alphaVantageUrl);
                const technicalDataFromApi = await res.json();

                console.log(technicalDataFromApi)

                for (let key in technicalDataFromApi['Technical Analysis: MAMA']) {
                    setXValues(xValues => [...xValues, key]);
                    setYValues(yValues => [...yValues, technicalDataFromApi['Technical Analysis: MAMA'][key].MAMA])
                }
                setIstTechnicalDataLoading(false);

            } catch (err) {
                console.log('ERROR alpha vantage api: ' + err);
            }
        }
        fetchingData();
    }, [state.symbol]);



    return (
        <div >
            <Custombutton className='button' to='/daxValues' text='&#10094;' />
            <div className='container'>
                <u><h1>{state.name}</h1></u>

                <div className='content'>
                    {isLoading ? '...loading' : <Description description={stockDetail.description} />}
                </div>

                <div>
                    xValues: {xValues}
                </div>
                <div>
                    yValues:{yValues}
                </div>
            </div>
        </div>

    );
}
