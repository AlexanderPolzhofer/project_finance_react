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
            const url = "http://localhost:8080/stock/value/SAP.XETRA";

            try {
                const response = await fetch();
                const valueSAP = await response.json();
                setValue(valueSAP);
                setIsLoading(false);
            } catch (err) {
                console.log("Error: " + err.stack)
            }
        }
        setTimeout(() => {
            fetchDataTest()
        }, 3000);

    }, []);


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
                                key={`${value.name}`}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {`${value.name}`}
                                </TableCell>
                                <TableCell align="right">{`${value.code}`}</TableCell>
                                <TableCell align="right">{`${value.dividendShare}`}</TableCell>
                                <TableCell align="right">{`${value.exchange}`}</TableCell>
                                <TableCell align="right">{`${value.isin}`}</TableCell>
                            </TableRow>

                        </TableBody>
                    </Table>
            }
        </div>
    );
}
