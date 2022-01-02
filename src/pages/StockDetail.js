import React from 'react';

import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function StockDetail() {

    const navigate = useNavigate();
    const { state } = useLocation();
    const apiKey = '37zxr4r5zrfyuhr143n4hq';

    const [stockDetail, setStockDetail] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        const fetchingData = async () => {

            const url = `https://api.leeway.tech/api/v1/public/fundamentals/${state.symbol}.XETRA?apitoken=${apiKey}`;

            try {
                const response = await fetch(url);
                const data = await response.json();

                console.log(data)
                setStockDetail(data)
                setIsLoading(false)

            } catch (error) {
                console.log(error.stack)
            }
        }

        fetchingData();
    }, [state.symbol]);
    console.log(stockDetail.General.Description);

    return (
        <div>
            <button onClick={() => navigate('/daxValues')}>BACK</button>

            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: 'column' }}>

                <h1>{state.name}</h1>

                <div>
                    {isLoading ? '...loading' : stockDetail.General.Description}
                </div>
            </div>
        </div>
    );
}
