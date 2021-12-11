import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import { useEffect, useState } from 'react';


export default function BasicTable() {

    const [value, setValue] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchDataTest = async () => {
            const url = "https://api.leeway.tech/api/v1/public/fundamentals/ADS.XETRA?apitoken=37zxr4r5zrfyuhr143n4hq";

            try {
                const response = await fetch(url);
                const valueAdidas = await response.json();
                setValue(valueAdidas);
                setIsLoading(false);
            } catch (err) {
                console.log("Error: " + err.stack)
            }
        }
        fetchDataTest();
    }, []);


    const getValue = () => {
        const isin = value.General.ISIN;
        const name = value.General.Name;
        const code = value.General.Code;
        const exchange = value.General.Exchange;
        const dividendShare = value.General.CurrencySymbol;


        console.log(isin + name + code + exchange + dividendShare);
    }

    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            {
                isLoading ? " loading ... " :
                    <Table sx={{ minWidth: 650, maxWidth: 1200 }} aria-label="simple table">

                        <TableHead>
                            <TableRow>
                                <TableCell>Dax Value</TableCell>

                                <TableCell align="right">Code</TableCell>
                                <TableCell align="right">DIVIDEND per share</TableCell>
                                <TableCell align="right">EXCHANGE</TableCell>
                                <TableCell align="right">ISIN</TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody>

                            <TableRow
                                key={`${value.General.Name}`}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {`${value.General.Name}`}
                                </TableCell>
                                <TableCell align="right">{`${value.General.Code}`}</TableCell>
                                <TableCell align="right">{`${value.General.CurrencySymbol}`}</TableCell>
                                <TableCell align="right">{`${value.General.Exchange}`}</TableCell>
                                <TableCell align="right">{`${value.General.ISIN}`}</TableCell>
                            </TableRow>

                        </TableBody>
                    </Table>
            }


            <button onClick={() => getValue()}>LOG VALUE ON CONSOLE</button>
        </div>
    );
}
