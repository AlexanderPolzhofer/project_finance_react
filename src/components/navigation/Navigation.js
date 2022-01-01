import React from "react";
import style from "./Navigation.module.css";
import HomeIcon from '@mui/icons-material/Home';

import { useNavigate } from "react-router-dom";

const Navigation = () => {

    let homeNavigate = useNavigate();

    const homeIconHandleClick = () => {
        homeNavigate('/');
    }

    return (
        <div className={style.container}>
            <HomeIcon onClick={() => homeIconHandleClick()} className={style.homeIcon} />
        </div>
    );
}

export default Navigation;