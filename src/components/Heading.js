import React from "react";
import style from "./Heading.module.css";

class Heading extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (<div className={style.heading}>
            <p>Aktienanalyse Indizes</p>
        </div>);
    }
}

export default Heading;