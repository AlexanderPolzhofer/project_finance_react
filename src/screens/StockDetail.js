import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function StockDetail() {

    const [vwapData, setVwapData] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {

        const getDataVwap = async () => {
            const url = 'https://www.alphavantage.co/query?function=VWAP&symbol=IBM&interval=15min&apikey=demo';

            const response = await fetch(url);
            const dataVwap = await response.json();

            setVwapData(dataVwap);
            setIsLoading(false);
            console.log(dataVwap)
        };

        getDataVwap();
    }, []);


    const { state } = useLocation();
    console.log(state.name);

    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <h1>INfos</h1>

            {state.title}, {state.isin},


        </div>
    );
}
