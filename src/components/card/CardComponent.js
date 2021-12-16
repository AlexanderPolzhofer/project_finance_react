import React from 'react';
import style from "./CardComponent.module.css";
import { useNavigate } from 'react-router-dom';

const Cardcomponent = ({ title, imageUrl, id }) => {

    let navigate = useNavigate();

    const handleClick = () => {
        if (id === 1) {
            navigate('/dax40')
        }
    }

    return (
        <div className={style.container} onClick={() => handleClick()}>
            <p>{title}
            </p>
            <img src={imageUrl} alt="flag" style={{ width: "89px", height: "89px" }}></img>
        </div>
    );
}

export default Cardcomponent;
