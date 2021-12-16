import React from 'react';
import style from "./CardComponent.module.css";


const Cardcomponent = ({ title, imageUrl }) => {
    return (
        <div className={style.container}>
            <p>{title}
            </p>
            <img src={imageUrl} alt="flag" style={{ width: "89px", height: "89px" }}></img>
        </div>
    );
}

export default Cardcomponent;
