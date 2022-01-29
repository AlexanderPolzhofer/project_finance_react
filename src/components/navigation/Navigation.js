import React from "react";
import style from "./Navigation.module.css";

import HomeIcon from '@mui/icons-material/Home';
import ChatIcon from '@mui/icons-material/Chat';
import FilterList from '@mui/icons-material/FilterList';


import { useNavigate } from "react-router-dom";

const Navigation = () => {

    let homeNavigate = useNavigate();
    let navigateToNotes = useNavigate();
    let navigateToList = useNavigate();

    const homeIconHandleClick = () => {
        homeNavigate('/project_finance_react');
    }

    const notesIconClick = () => {
        navigateToNotes('/notes');
    }

    const filterListHandleClick = () => {
        navigateToList('/daxValues');
    }

    return (
        <div className={style.container}>
            <div className={style.left}>
                <HomeIcon onClick={() => homeIconHandleClick()} className={style.icon} />
            </div>
            <div className={style.right}>
                <ChatIcon onClick={() => notesIconClick()} className={style.icon} />
                <FilterList onClick={() => filterListHandleClick()} className={style.icon} />
            </div>
        </div>
    );
}

export default Navigation;