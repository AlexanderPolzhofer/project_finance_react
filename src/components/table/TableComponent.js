import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';

import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import { useEffect } from 'react';



function createData(name, code, dividenShare, exchange, isin) {
    return { name, code, dividenShare, exchange, isin };
}

const rows = [
    createData('SAP', 159, 6.0, 24)

];


export default function BasicTable() {

    useEffect(() => {
        const fetchDataTest = async () => {
            const url = "https://api.leeway.tech/api/v1/public/fundamentals/ADS.XETRA?apitoken=37zxr4r5zrfyuhr143n4hq";

            try {
                const response = await fetch(url);
                const valueAdidas = await response.json();
                console.log(valueAdidas);

            } catch (err) {
                console.log("Error: " + err)
            }
        }
        fetchDataTest();
    }, []);


    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
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
                    {rows.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.name}</TableCell>
                            <TableCell align="right">{row.code}</TableCell>
                            <TableCell align="right">{row.dividenShare}</TableCell>
                            <TableCell align="right">{row.exchange}</TableCell>
                            <TableCell align="right">{row.isin}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}
