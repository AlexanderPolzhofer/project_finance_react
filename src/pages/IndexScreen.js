import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function IndexScreen() {

    const [values, setValues] = useState([]);
    const {state}  = useLocation();
    const { id, name } = state;
    console.log(id + "- " + name);


    let nav = useNavigate();
    const handleOnListItemClick = (value) => {
        nav('/indexDetails', { state: value });
    }

    useEffect(() => {
        setValues([{ "name": "SAPSE", "code": "SAP", "isin": "1234" }, { "name": "ADISE", "code": "ADIDAS", "isin": "4567" }])
        // const fetchDataTest = async () => {
        //     const url = "http://localhost:8080/indices/DAX/values";

        //     try {
        //         const response = await fetch(url);
        //         const valueSAP = await response.json();
        //         setValue(valueSAP);
        //         setIsLoading(false);
        //     } catch (err) {
        //         console.log("Error: " + err.stack)
        //     }
        // }

        //     fetchDataTest();

    }, []);

    const getTableRows = () => {
        let rows = [];
        values.forEach(value => {

            rows.push(<TableRow
                key={value.isin}
                sx={{ '&:last-child td, &:last-child th': { border: 0 }, ":hover": { cursor: "pointer" } }}
                onClick={() => handleOnListItemClick(value)} >
                <TableCell component="th" scope="row">
                    {`${value.name}`}
                </TableCell>
                <TableCell align="right">{`${value.code}`}</TableCell>
                <TableCell align="right">{`${value.isin}`}</TableCell>
                <TableCell align="right">{`${value.title}`}</TableCell>
                <TableCell align="right">{`${value.isin}`}</TableCell>
            </TableRow>)
        });
        return rows;
    }

    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            {

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
                        {getTableRows()}

                    </TableBody>
                </Table>
            }
        </div>
    );
}
