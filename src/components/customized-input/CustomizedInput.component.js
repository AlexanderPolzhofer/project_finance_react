import React from 'react';

import { TextField } from "@mui/material";

import './CustomizedInput.styles.css';

const CustomizedInput = () => {

    return (
        <div>
            <TextField sx={{ color: 'white' }} id="outlined-search" label="Search field" type="search" />

        </div>
    );
}

export default CustomizedInput;
