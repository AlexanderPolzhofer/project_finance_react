import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DAX_DATA from '../../assets/dax-data';

export default function IndexScreen() {

    const [values, setValues] = useState([]);

    let nav = useNavigate();
    const handleOnListItemClick = (value) => {
        nav('/indexDetails', { state: value });
    }

    useEffect(() => {
        setValues(DAX_DATA)
    }, [values]);

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
                <TableCell align="right">{`${value.exchange}`}</TableCell>
                <TableCell align="right">{`${value.isin}`}</TableCell>
            </TableRow>)
        });
        return rows;
    }

    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", margin: '21px' }}>
            {
                <Table sx={{ minWidth: 650, maxWidth: 1200 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell style={{ fontWeight: 'bold' }}>Dax Value</TableCell>
                            <TableCell align="right" style={{ fontWeight: 'bold' }}>EXCHANGE</TableCell>
                            <TableCell align="right" style={{ fontWeight: 'bold', }}>ISIN</TableCell>
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
