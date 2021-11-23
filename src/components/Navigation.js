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
        return (<div style={{backgroundColor:"rgb(94, 94, 94)", color: "white", padding: "8px"}}>
            <div className={style.container}>
                <HomeIcon onClick={() => this.handleClick()} />
                <TextField className={style.multilineColor} id="standard-basic" label="WKN/ISIN/NAME" variant="standard" />
            </div>

            <div style={{ alignItems: "center" , fontSize: "larger", fontsWidth: "bold"}}>Aktienanalyse</div>

        </div>);
    }
}

export default Navigation;