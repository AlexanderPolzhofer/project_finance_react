import React from "react";
import style from "./Navigation.module.css";

import HomeIcon from '@mui/icons-material/Home';
import ChatIcon from '@mui/icons-material/Chat';

import { useNavigate } from "react-router-dom";

const Navigation = () => {

    let homeNavigate = useNavigate();

    const homeIconHandleClick = () => {
        homeNavigate('/');
    }

    const chatIconHandleClick = () => {
        alert('clicked');
    }

    return (
        <div className={style.container}>
            <HomeIcon onClick={() => homeIconHandleClick()} className={style.icon} />
            <ChatIcon onClick={() => chatIconHandleClick()} className={style.icon} />
        </div>
    );
}

export default Navigation;