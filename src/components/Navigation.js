import React from "react";
import style from "./Navigation.module.css";
import HomeIcon from '@mui/icons-material/Home';
import { TextField } from "@mui/material";



class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    handleClick = () => {
        alert("clicked home icon");
    }

    render() {
        return (
            <div className={style.container}>
                <HomeIcon onClick={() => this.handleClick()} className={style.homeIcon}/>
                <TextField InputProps={{
                    style: {
                        color: "white"
                    }
                }} id="standard-basic" label="WKN/ISIN/NAME" variant="standard" />
            </div>

        );
    }
}

export default Navigation;