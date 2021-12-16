import React from "react";
import style from "./Navigation.module.css";
import HomeIcon from '@mui/icons-material/Home';
import { TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Navigation = () => {

    let homeNavigate = useNavigate();

    const homeIconHandleClick = () => {
        homeNavigate('/');
    }

    return (
        <div className={style.container}>
            <HomeIcon onClick={() => homeIconHandleClick()} className={style.homeIcon} />
            <TextField InputProps={{
                style: {
                    color: "white"
                }
            }} id="standard-basic" label="WKN/ISIN/NAME" variant="standard" />
        </div>
    );
}

export default Navigation;