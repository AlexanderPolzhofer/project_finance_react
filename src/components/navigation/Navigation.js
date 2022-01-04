import React from "react";
import style from "./Navigation.module.css";

import HomeIcon from '@mui/icons-material/Home';
import ChatIcon from '@mui/icons-material/Chat';
import FilterList from '@mui/icons-material/FilterList';


import { useNavigate } from "react-router-dom";
import CustomizedInput from "../customized-input/CustomizedInput.component";

const Navigation = () => {

    let homeNavigate = useNavigate();

    const homeIconHandleClick = () => {
        homeNavigate('/');
    }

    const chatIconHandleClick = () => {
        alert('clicked on NOTES');
    }

    const filterListHandleClick = () => {
        alert('clicked on WATCHLIST');
    }

    return (
        <div className={style.container}>
            <HomeIcon onClick={() => homeIconHandleClick()} className={style.icon} />
            <ChatIcon onClick={() => chatIconHandleClick()} className={style.icon} />
            <FilterList onClick={() => filterListHandleClick()} className={style.icon} />
            <CustomizedInput />
        </div>
    );
}

export default Navigation;