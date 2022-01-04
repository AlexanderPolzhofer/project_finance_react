import React from "react";
import style from "./Navigation.module.css";

import HomeIcon from '@mui/icons-material/Home';
import ChatIcon from '@mui/icons-material/Chat';
import FilterList from '@mui/icons-material/FilterList';


import { useNavigate } from "react-router-dom";
import CustomizedInput from "../customized-input/CustomizedInput.component";

const Navigation = () => {

    let homeNavigate = useNavigate();
    let navigateToNotes = useNavigate();

    const homeIconHandleClick = () => {
        homeNavigate('/');
    }

    const notesIconClick = () => {
        navigateToNotes('/notes');
    }

    const filterListHandleClick = () => {
        alert('clicked on WATCHLIST');
    }

    return (
        <div className={style.container}>
            <div>
                <HomeIcon onClick={() => homeIconHandleClick()} className={style.icon} />
            </div>
            <div>
                <CustomizedInput />
            </div>
            <div>
                <ChatIcon onClick={() => notesIconClick()} className={style.icon} />
                <FilterList onClick={() => filterListHandleClick()} className={style.icon} />
            </div>

        </div>
    );
}

export default Navigation;