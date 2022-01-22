import React from 'react';

import Description from '../../components/description/description.component';

import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Custombutton from '../../components/custom-button/CustomButton.component';

import './StockDetail.styles.css';
import LineChart from '../../components/line-chart/LineChart.component';

export default function StockDetail() {

    const { state } = useLocation();
    /*const apiKey = '37zxr4r5zrfyuhr143n4hq';*/

    const [stockDetail, setStockDetail] = useState([]);

    const [isLoading, setIsLoading] = useState(true);

    const [isTechnicalDataLoading, setIstTechnicalDataLoading] = useState(true);

    const [technicalData, setTechnicalData] = useState([]);


    useEffect(() => {

        const apiKeyAlphaVantage = 'RFPSJQBOAQINO7QV';

        const url = `http://localhost:8080/stock/value/${state.symbol}.XETRA`;
        const alphaVantageUrl = `https://www.alphavantage.co/query?function=MAMA&symbol=${state.symbol}&interval=daily&series_type=close&fastlimit=0.02&apikey=${apiKeyAlphaVantage}`;

        fetch(url)
            .then(response => response.json())
            .then(data => {

                setStockDetail(data);
                setIsLoading(false);
            });

        fetch(alphaVantageUrl)
            .then(response => response.json())
            .then(technicalDataFromApi => {

                let dataArr = [];
                let data = technicalDataFromApi["Technical Analysis: MAMA"];

                Object.entries(data).map(item => {
                    dataArr.push(item);
                });

                setTechnicalData(dataArr);
                setIstTechnicalDataLoading(false);
            });
    }, [state.symbol]);

    const labels = technicalData.map(data => data[0]);

    const data = {
        labels,
        datasets: [
            {
                label: 'FAMA',
                data: technicalData.map((element) => element[1].FAMA),
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: 'MAMA',
                data: technicalData.map((element) => element[1].MAMA),
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Data from API',
            },
        },
    };

    return (
        <div >
            <Custombutton className='button' to='/daxValues' text='&#10094;' />
            <div className='container'>
                <u><h1>{state.name}</h1></u>

                <div className='content'>
                    {isLoading ?
                        '...loading' :
                        <Description description={stockDetail.description}
                        />}
                </div>

                <div>
                    {isTechnicalDataLoading ?
                        '... data is loading' :
                        <LineChart data={data} options={options}
                        />}
                </div>
            </div>
        </div>

    );
}
