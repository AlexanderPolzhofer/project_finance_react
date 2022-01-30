import React from 'react';

import Description from '../../components/description/description.component';

import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Custombutton from '../../components/custom-button/CustomButton.component';

import './StockDetail.styles.css';
import LineChart from '../../components/line-chart/LineChart.component';
import Loader from '../../components/loader/Loader';
import Topic from '../../components/topic/Topic';

export default function StockDetail() {

    const { state } = useLocation();

    const [stockDetail, setStockDetail] = useState([]);

    const [isLoading, setIsLoading] = useState(true);

    const [isTechnicalDataLoading, setIstTechnicalDataLoading] = useState(true);

    const [technicalData, setTechnicalData] = useState([]);

    useEffect(() => {
        const apiKeyAlphaVantage = 'RFPSJQBOAQINO7QV';
        const url = `http://23.88.104.14:8080/stock/value/${state.symbol}.XETRA`;
        const alphaVantageUrl = `https://www.alphavantage.co/query?function=MAMA&symbol=${state.symbol}&interval=daily&series_type=close&fastlimit=0.02&apikey=${apiKeyAlphaVantage}`;

        fetch(url)
            .then(response => {
                console.log('Response', response)
                if (!response.ok) {
                    return 'Fehler beim Laden der Daten.'
                }
                else {
                    return response.json()
                }
            })
            .then(data => {
                console.log("Data", data)
                setStockDetail(data);
                setIsLoading(false);
            })
            .catch(error =>
                console.log(error.message)
            );

        fetch(alphaVantageUrl)
            .then(response => {
                if (!response.ok) {
                    return 'Fehler beim Laden der Daten.'
                } else {
                    return response.json()
                }

            })
            .then(technicalDataFromApi => {

                let dataArr = [];
                let data = technicalDataFromApi["Technical Analysis: MAMA"];

                Object.entries(data).map(item => {
                    return dataArr.push(item);
                });
                setTechnicalData(dataArr);
                setIstTechnicalDataLoading(false);

            })
            .catch(er => {
                console.log(er.message)
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
                <Topic title={state.name} />
                <div className='content'>
                    {isLoading ?
                        <Loader /> :
                        <Description description={stockDetail.description}
                        />}
                </div>
                <div className='content'>
                    {isTechnicalDataLoading ?
                        <Loader /> :
                        <LineChart data={data} options={options}
                        />}
                </div>
            </div>
        </div>

    );
}
