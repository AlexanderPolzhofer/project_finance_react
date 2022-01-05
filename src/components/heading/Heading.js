import React from "react";
import style from "./Heading.module.css";

const Heading = (props) => {
    const { title } = props;

    return (<div className={style.heading}>
        <p>{title}</p>
    </div>);

}

export default Heading;